param(
  [string]$RepoName = "neon-dominion",
  [string]$Description = "Near-future corporate war strategy browser game.",
  [switch]$Private
)

$ErrorActionPreference = "Stop"

if (-not $env:GITHUB_TOKEN) {
  throw "GITHUB_TOKEN is not set. Create a GitHub token and set it in PowerShell before running this script."
}

$Headers = @{
  Authorization = "Bearer $env:GITHUB_TOKEN"
  Accept = "application/vnd.github+json"
  "X-GitHub-Api-Version" = "2022-11-28"
}

function Invoke-GitHub {
  param(
    [string]$Method,
    [string]$Uri,
    [object]$Body = $null
  )

  $options = @{
    Method = $Method
    Uri = $Uri
    Headers = $Headers
  }

  if ($null -ne $Body) {
    $options.Body = ($Body | ConvertTo-Json -Depth 20)
    $options.ContentType = "application/json"
  }

  Invoke-RestMethod @options
}

function Test-GitHubPath {
  param([string]$RelativePath)
  return -not (
    $RelativePath -like ".git/*" -or
    $RelativePath -like ".agents/*" -or
    $RelativePath -like "release/*"
  )
}

function Encode-ContentPath {
  param([string]$RelativePath)
  $parts = ($RelativePath -split "/") | ForEach-Object { [uri]::EscapeDataString($_) }
  return [string]::Join("/", $parts)
}

function Get-RelativeUploadPath {
  param(
    [string]$Root,
    [string]$FullName
  )
  return $FullName.Substring($Root.Length).TrimStart("\", "/").Replace("\", "/")
}

function Get-ExistingSha {
  param(
    [string]$Owner,
    [string]$Repo,
    [string]$RelativePath
  )

  $encodedPath = Encode-ContentPath $RelativePath
  try {
    $existing = Invoke-GitHub -Method "GET" -Uri "https://api.github.com/repos/$Owner/$Repo/contents/$encodedPath`?ref=main"
    return $existing.sha
  } catch {
    return $null
  }
}

$user = Invoke-GitHub -Method "GET" -Uri "https://api.github.com/user"
$owner = $user.login

try {
  $repo = Invoke-GitHub -Method "GET" -Uri "https://api.github.com/repos/$owner/$RepoName"
  Write-Host "Using existing repository: $($repo.full_name)"
} catch {
  $repo = Invoke-GitHub -Method "POST" -Uri "https://api.github.com/user/repos" -Body @{
    name = $RepoName
    description = $Description
    private = [bool]$Private
    auto_init = $true
  }
  Write-Host "Created repository: $($repo.full_name)"
  Start-Sleep -Seconds 2
}

$root = (Resolve-Path ".").Path
$files = Get-ChildItem -Path $root -Recurse -File -Force |
  Where-Object {
    $relative = Get-RelativeUploadPath -Root $root -FullName $_.FullName
    Test-GitHubPath $relative
  }

foreach ($file in $files) {
  $relative = Get-RelativeUploadPath -Root $root -FullName $file.FullName
  $encodedPath = Encode-ContentPath $relative
  $bytes = [IO.File]::ReadAllBytes($file.FullName)
  $content = [Convert]::ToBase64String($bytes)
  $sha = Get-ExistingSha -Owner $owner -Repo $RepoName -RelativePath $relative

  $body = @{
    message = "Upload $relative"
    content = $content
    branch = "main"
  }
  if ($sha) {
    $body.sha = $sha
  }

  Invoke-GitHub -Method "PUT" -Uri "https://api.github.com/repos/$owner/$RepoName/contents/$encodedPath" -Body $body | Out-Null
  Write-Host "Uploaded $relative"
}

try {
  Invoke-GitHub -Method "GET" -Uri "https://api.github.com/repos/$owner/$RepoName/pages" | Out-Null
  Write-Host "GitHub Pages already exists."
} catch {
  try {
    Invoke-GitHub -Method "POST" -Uri "https://api.github.com/repos/$owner/$RepoName/pages" -Body @{
      source = @{
        branch = "main"
        path = "/"
      }
    } | Out-Null
    Write-Host "Enabled GitHub Pages."
  } catch {
    Write-Host "Uploaded files, but GitHub Pages could not be enabled automatically."
    Write-Host "Open repository Settings -> Pages and select Deploy from branch: main / root."
  }
}

Write-Host ""
Write-Host "Repository: https://github.com/$owner/$RepoName"
Write-Host "Game URL:   https://$owner.github.io/$RepoName/"
