@echo off
REM Script para iniciar el servidor local en Windows

cls
echo.
echo ════════════════════════════════════════════════
echo    Code Preview Hub - Servidor Local
echo ════════════════════════════════════════════════
echo.

REM Detectar Python
where python >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Python detectado. Iniciando servidor...
    echo.
    echo Abre tu navegador en: http://localhost:8000
    echo.
    echo Presiona Ctrl+C para detener el servidor
    echo.
    python -m http.server 8000
    goto end
)

where python3 >nul 2>nul
if %ERRORLEVEL% EQU 0 (
    echo ✅ Python 3 detectado. Iniciando servidor...
    echo.
    echo Abre tu navegador en: http://localhost:8000
    echo.
    echo Presiona Ctrl+C para detener el servidor
    echo.
    python3 -m http.server 8000
    goto end
)

REM Si no hay Python, mostrar alternativas
echo ❌ Python no detectado.
echo.
echo Opciones:
echo.
echo 1. Instala Python desde: https://python.org
echo    (Asegúrate de marcar "Add Python to PATH")
echo.
echo 2. Usa Node.js:
echo    npm install -g http-server
echo    http-server
echo.
echo 3. Usa VS Code Live Server:
echo    - Instala la extensión "Live Server"
echo    - Click derecho en index.html
echo    - Selecciona "Open with Live Server"
echo.
echo 4. Abre el archivo directamente:
echo    - Arrastra index.html al navegador
echo    - O click derecho → Abrir con navegador
echo.

:end
pause
