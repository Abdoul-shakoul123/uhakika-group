# Deploy to GitHub Pages - run these in a terminal where Git is installed
# Or run this script: .\deploy-from-terminal.ps1

Set-Location $PSScriptRoot

Write-Host "=== Git status ===" -ForegroundColor Cyan
git status

Write-Host "`n=== Add all changes ===" -ForegroundColor Cyan
git add .

Write-Host "`n=== Commit (only if there are changes) ===" -ForegroundColor Cyan
git diff --staged --quiet
if ($LASTEXITCODE -ne 0) {
    git commit -m "deploy: trigger GitHub Pages workflow"
    Write-Host "`n=== Push to main (triggers Deploy to GitHub Pages) ===" -ForegroundColor Cyan
    git push origin main
    Write-Host "`nDone. Check: https://github.com/Abdoul-shakoul123/uhakika-group/actions" -ForegroundColor Green
} else {
    Write-Host "No changes to commit. To trigger workflow anyway, run: git commit --allow-empty -m 'trigger deploy'; git push origin main" -ForegroundColor Yellow
}
