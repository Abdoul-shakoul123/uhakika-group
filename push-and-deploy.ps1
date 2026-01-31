# Push mradi kwenye GitHub - GitHub Actions itajenga na ku-deploy
# Run: .\push-and-deploy.ps1

Set-Location $PSScriptRoot

Write-Host "Checking git..." -ForegroundColor Cyan
$gitOk = $null -ne (Get-Command git -ErrorAction SilentlyContinue)
if (-not $gitOk) {
    Write-Host "Git haijapatikana. Install Git: https://git-scm.com/download/win" -ForegroundColor Yellow
    Write-Host "Au weka Git kwenye PATH, kisha run script hii tena." -ForegroundColor Yellow
    exit 1
}

# Status
git status
$branch = git branch --show-current
if (-not $branch) {
    Write-Host "`nRepo haija-init. Unataka ku-init na commit kwanza? (y/n): " -NoNewline
    $r = Read-Host
    if ($r -eq 'y') {
        git init
        git add .
        git commit -m "Initial commit - Uhakika Group site"
        Write-Host "`nSasa add remote na push. Example:" -ForegroundColor Cyan
        Write-Host "  git remote add origin https://github.com/USERNAME/REPO-NAME.git" -ForegroundColor White
        Write-Host "  git branch -M main" -ForegroundColor White
        Write-Host "  git push -u origin main" -ForegroundColor White
    }
    exit 0
}

# Push
Write-Host "`nPushing to origin/$branch..." -ForegroundColor Cyan
git add .
$changes = git status --short
if ($changes) {
    git commit -m "Update site"
}
git push origin $branch

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDone. Nenda GitHub repo -> Actions: workflow 'Deploy to GitHub Pages' inakwisha. Ikiwa una 'Review pending', bofya Approve." -ForegroundColor Green
} else {
    Write-Host "`nPush failed. Angalia: remote iko? (git remote -v)" -ForegroundColor Yellow
}
