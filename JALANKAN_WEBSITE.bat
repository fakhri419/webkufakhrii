@echo off
echo Menyiapkan web server...
powershell -ExecutionPolicy Bypass -File "%~dp0start-server.ps1"
pause
