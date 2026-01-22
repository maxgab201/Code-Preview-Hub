#!/bin/bash
# Script para iniciar el servidor local

echo "╔════════════════════════════════════════════╗"
echo "║   Code Preview Hub - Servidor Local        ║"
echo "╚════════════════════════════════════════════╝"
echo ""

# Detectar el sistema operativo
if [[ "$OSTYPE" == "msys" || "$OSTYPE" == "cygwin" || "$OSTYPE" == "win32" ]]; then
    # Windows
    echo "🔍 Detectado: Windows"
    echo ""
    echo "Opción 1: Python (recomendado)"
    echo "  python -m http.server 8000"
    echo ""
    echo "Opción 2: Node.js"
    echo "  npx http-server"
    echo ""
    echo "Opción 3: VS Code Live Server"
    echo "  Instala la extensión y presiona Go Live"
    echo ""
    
    # Intentar iniciar con Python
    if command -v python &> /dev/null; then
        echo "✅ Python detectado. Iniciando servidor..."
        python -m http.server 8000
    elif command -v python3 &> /dev/null; then
        echo "✅ Python 3 detectado. Iniciando servidor..."
        python3 -m http.server 8000
    else
        echo "⚠️  Python no detectado."
        echo "Por favor, instala Python o usa la Opción 2 o 3 arriba."
        echo "Descarga en: https://python.org"
    fi
elif [[ "$OSTYPE" == "linux-gnu"* ]]; then
    # Linux
    echo "🔍 Detectado: Linux"
    echo "✅ Iniciando servidor con Python..."
    python3 -m http.server 8000
elif [[ "$OSTYPE" == "darwin"* ]]; then
    # macOS
    echo "🔍 Detectado: macOS"
    echo "✅ Iniciando servidor con Python..."
    python3 -m http.server 8000
fi

echo ""
echo "═══════════════════════════════════════════════"
echo "El servidor está corriendo en:"
echo "http://localhost:8000"
echo ""
echo "Abre esa URL en tu navegador"
echo "═══════════════════════════════════════════════"
