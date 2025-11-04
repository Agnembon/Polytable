#!/usr/bin/env bash
set -e

if ! command -v python &> /dev/null; then
  echo "Error: Python is not installed or not in PATH." >&2
  exit 1
fi

if ! pip show files-to-prompt > /dev/null 2>&1; then
  echo "Installing files-to-prompt..."
  pip install files-to-prompt
fi

python -m files_to_prompt . > codebase.txt

echo "File generated: codebase.txt"
