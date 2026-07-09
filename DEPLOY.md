# GitHub Pages 部署說明

這個專案是純靜態網站，可以直接放到 GitHub Pages。

## 最快手動上傳流程

1. 到 GitHub 建立新的 repository，例如 `neon-dominion`。
2. 選擇 `Public`，朋友才容易直接開網址遊玩。
3. 建立 repository 後，按 `uploading an existing file` 或 `Add file` -> `Upload files`。
4. 上傳下列檔案與資料夾：
   - `.nojekyll`
   - `index.html`
   - `guide.html`
   - `modifier.html`
   - `app.js`
   - `modifier.js`
   - `styles.css`
   - `pages.css`
   - `README.md`
   - `assets/`
5. Commit 後，到 repository 的 `Settings` -> `Pages`。
6. Source 選 `Deploy from a branch`。
7. Branch 選 `main`，資料夾選 `/root`。
8. 儲存後等 1 到 3 分鐘。

網址通常會是：

```text
https://你的帳號.github.io/neon-dominion/
```

## 注意

- 遊戲存檔使用瀏覽器 `localStorage`，每個玩家的存檔都存在自己的瀏覽器。
- 修改器會修改同一份本機瀏覽器存檔，不會影響其他玩家。
- 如果圖片沒有出現，通常是資料夾結構沒有保持 `assets/...`。

## 不用 git 的自動上傳腳本

如果這台電腦沒有安裝 `git` 或 GitHub CLI，可以使用：

```text
scripts\upload-to-github.ps1
```

使用前需要在 GitHub 建立一個 Personal Access Token，並在本機 PowerShell 設成環境變數。不要把 token 貼到聊天視窗。

建議 token 權限：

- Repository access：只選你要上傳的 repository，或選 public repositories。
- Contents：Read and write。
- Pages：Read and write。如果沒有 Pages 權限，腳本仍會上傳檔案，但 Pages 需要手動到 Settings 啟用。

PowerShell 範例：

```powershell
$env:GITHUB_TOKEN="你的 GitHub token"
.\scripts\upload-to-github.ps1 -RepoName "neon-dominion"
```

腳本會：

1. 讀取你的 GitHub 帳號。
2. 建立或使用 `neon-dominion` repository。
3. 上傳網站檔案與 `assets/` 圖片。
4. 嘗試啟用 GitHub Pages。
5. 顯示遊戲網址。
