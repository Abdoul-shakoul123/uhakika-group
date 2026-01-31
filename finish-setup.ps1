# Malizia: git config, commit, remote, push
# Run kwenye PowerShell (ambayo ina Git): .\finish-setup.ps1

Set-Location $PSScriptRoot

if (-not (Get-Command git -ErrorAction SilentlyContinue)) {
    Write-Host "Git haijapatikana. Fungua PowerShell MPYA (baada ya kusakinisha Git), kisha run: .\finish-setup.ps1" -ForegroundColor Yellow
    exit 1
}

# 1. Config ikiwa bado haijaseti
$email = git config --global user.email 2>$null
$name = git config --global user.name 2>$null
if (-not $email -or -not $name) {
    Write-Host "Weka jina na email ya Git (kwa commits):" -ForegroundColor Cyan
    if (-not $name) { $name = Read-Host "Jina (e.g. Uhakika Group)" }
    if (-not $email) { $email = Read-Host "Email (e.g. info@uhakika.group)" }
    git config --global user.name $name
    git config --global user.email $email
}

# 2. Init ikiwa haija-init
if (-not (Test-Path .git)) {
    git init
}

# 3. Add na commit
git add .
$status = git status --short
if ($status) {
    git commit -m "Initial commit - Uhakika Group site"
}

# 4. Remote na push
$remote = git remote get-url origin 2>$null
if (-not $remote) {
    Write-Host "`nRemote haijawekwa. Weka URL ya repo yako kwenye GitHub:" -ForegroundColor Cyan
    Write-Host "  Mfano: https://github.com/USERNAME/uhakika-group.git" -ForegroundColor Gray
    $url = Read-Host "URL ya repo"
    if ($url) {
        git remote add origin $url
    }
}
git branch -M main 2>$null
Write-Host "`nPushing to origin main..." -ForegroundColor Cyan
git push -u origin main

if ($LASTEXITCODE -eq 0) {
    Write-Host "`nDone. Nenda GitHub -> Settings -> Pages -> Source: GitHub Actions. Ikiwa 'Review pending', bofya Approve." -ForegroundColor Green
} else {
    Write-Host "`nPush failed. Angalia: URL sahihi? Repo iko GitHub? (git remote -v)" -ForegroundColor Yellow
}
