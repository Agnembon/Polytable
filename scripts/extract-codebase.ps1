$ErrorActionPreference = "Stop"

if (-not (Get-Command python -ErrorAction SilentlyContinue)) {
    Write-Error "Python is not installed or not in PATH."
    exit 1
}

$installed = pip show files-to-prompt 2>$null

if (-not $installed) {
    Write-Output "Installing files-to-prompt..."
    pip install files-to-prompt
}

python -m files_to_prompt . > codebase.txt

Write-Output "File generated: codebase.txt"