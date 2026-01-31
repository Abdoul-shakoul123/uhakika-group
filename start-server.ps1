# Auto-start server and open Chrome
Write-Host "Starting Uhakika Group website..." -ForegroundColor Green

# Set execution policy for this session
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope Process -Force -ErrorAction SilentlyContinue

# Check if server is already running
$existing = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
if ($existing) {
    Write-Host "Server already running on port 3000" -ForegroundColor Yellow
    Start-Process "chrome.exe" "http://localhost:3000"
    exit
}

# Start server in background
Write-Host "Starting Next.js server..." -ForegroundColor Cyan
$currentDir = Get-Location
Start-Process powershell -ArgumentList "-NoProfile", "-WindowStyle", "Hidden", "-Command", "cd '$currentDir'; npm run dev" | Out-Null

# Wait for server to be ready
Write-Host "Waiting for server to start..." -ForegroundColor Cyan
$maxWait = 30
$waited = 0
$serverReady = $false

while ($waited -lt $maxWait) {
    Start-Sleep -Seconds 2
    $waited += 2
    $conn = Get-NetTCPConnection -LocalPort 3000 -ErrorAction SilentlyContinue
    if ($conn) {
        $serverReady = $true
        Write-Host "Server is ready!" -ForegroundColor Green
        break
    }
    Write-Host "." -NoNewline
}

if (-not $serverReady) {
    Write-Host ""
    Write-Host "Server taking longer than expected, but opening Chrome anyway..." -ForegroundColor Yellow
}

# Open Chrome
Start-Sleep -Seconds 1
Write-Host ""
Write-Host "Opening Chrome..." -ForegroundColor Cyan
Start-Process "chrome.exe" "http://localhost:3000"

Write-Host "Done! Website should be opening in Chrome now." -ForegroundColor Green
Write-Host "If the page doesn't load, wait a few seconds and refresh." -ForegroundColor Yellow
