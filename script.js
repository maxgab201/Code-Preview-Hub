// ==================== UTILIDADES ====================

// Detectar extensión del código
function detectLanguage(code) {
    if (!code) return 'txt';

    // Patrones para detectar lenguajes
    const patterns = {
        'html': /<!DOCTYPE|<html|<head|<body|<div|<span|<script|<style/i,
        'css': /@media|@keyframes|@import|\.[-\w]+\s*\{|#[-\w]+\s*\{|[-\w]+\s*:\s*[^;]+;/,
        'javascript': /^[^]*?(function|const|let|var|=>|import|export|class|async)/m,
        'typescript': /^[^]*(interface|type|enum|namespace|as|declare)/m,
        'json': /^\s*[\{\[]["']?[\w"':,\[\]\{\}]+/,
        'python': /^[^]*(def |import |from |class |if __name__|print\()/m,
        'java': /^[^]*(public|private|class |interface |import |package )/m,
        'csharp': /^[^]*(using |namespace |public|private|class )/m,
        'cpp': /^[^]*(#include|namespace|int main|void|std::)/,
        'c': /^[^]*(#include|int main|void|printf|scanf)/,
        'xml': /^<\?xml|^<[\w]+[\s>]/,
        'sql': /SELECT|INSERT|UPDATE|DELETE|FROM|WHERE|JOIN/i
    };

    for (const [lang, pattern] of Object.entries(patterns)) {
        if (pattern.test(code)) {
            return lang;
        }
    }

    return 'txt';
}

// Obtener extensión del archivo
function getFileExtension(language) {
    const extensions = {
        'html': '.html',
        'css': '.css',
        'javascript': '.js',
        'typescript': '.ts',
        'json': '.json',
        'python': '.py',
        'java': '.java',
        'csharp': '.cs',
        'cpp': '.cpp',
        'c': '.c',
        'xml': '.xml',
        'sql': '.sql',
        'txt': '.txt'
    };
    return extensions[language] || '.txt';
}

// Mostrar notificación
function showNotification(message, type = 'success') {
    const notification = document.createElement('div');
    notification.className = `notification ${type}`;
    notification.textContent = message;
    document.body.appendChild(notification);

    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// ==================== SECCIÓN 1: DESCARGADOR ====================

const codeEditor = document.getElementById('code-editor');
const extensionBadge = document.getElementById('extension-badge');
const filenameInput = document.getElementById('filename-input');
const pasteBtn = document.getElementById('paste-btn');
const copyBtn = document.getElementById('copy-btn');
const clearBtn = document.getElementById('clear-btn');
const downloadBtn = document.getElementById('download-btn');
const previewBtn = document.getElementById('preview-btn');
const fileUpload = document.getElementById('file-upload');
const fileDetails = document.getElementById('file-details');
const previewModal = document.getElementById('preview-modal');
const modalPreviewIframe = document.getElementById('modal-preview-iframe');
const fullscreenBtn = document.getElementById('fullscreen-btn');
const closeModalBtn = document.getElementById('close-modal-btn');

let currentLanguage = 'txt';

// Detectar lenguaje cuando el usuario escribe
codeEditor.addEventListener('input', () => {
    currentLanguage = detectLanguage(codeEditor.value);
    extensionBadge.textContent = currentLanguage.toUpperCase();
});

// Botón Pegar
pasteBtn.addEventListener('click', async () => {
    try {
        const text = await navigator.clipboard.readText();
        codeEditor.value = text;
        currentLanguage = detectLanguage(text);
        extensionBadge.textContent = currentLanguage.toUpperCase();
        showNotification('Código pegado correctamente');
    } catch (err) {
        showNotification('No se pudo acceder al portapapeles', 'error');
    }
});

// Botón Copiar
copyBtn.addEventListener('click', async () => {
    try {
        await navigator.clipboard.writeText(codeEditor.value);
        showNotification('Código copiado al portapapeles');
    } catch (err) {
        showNotification('No se pudo copiar', 'error');
    }
});

// Botón Borrar
clearBtn.addEventListener('click', () => {
    if (codeEditor.value.trim()) {
        if (confirm('¿Estás seguro de que querés borrar todo?')) {
            codeEditor.value = '';
            extensionBadge.textContent = 'TXT';
            currentLanguage = 'txt';
        }
    }
});

// Botón Descargar
downloadBtn.addEventListener('click', () => {
    if (!codeEditor.value.trim()) {
        showNotification('El editor está vacío', 'error');
        return;
    }

    const filename = filenameInput.value + getFileExtension(currentLanguage);
    const blob = new Blob([codeEditor.value], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);

    showNotification(`Archivo "${filename}" descargado`);
});

// Vista Previa (solo para HTML)
previewBtn.addEventListener('click', () => {
    if (currentLanguage !== 'html') {
        showNotification('La vista previa solo funciona con archivos HTML', 'error');
        return;
    }

    if (!codeEditor.value.trim()) {
        showNotification('El editor está vacío', 'error');
        return;
    }

    // Abrir modal
    previewModal.classList.add('active');
    modalPreviewIframe.srcdoc = codeEditor.value;
});

// Cerrar Modal
closeModalBtn.addEventListener('click', () => {
    previewModal.classList.remove('active');
});

// Pantalla Completa
fullscreenBtn.addEventListener('click', () => {
    if (modalPreviewIframe.requestFullscreen) {
        modalPreviewIframe.requestFullscreen();
    } else if (modalPreviewIframe.webkitRequestFullscreen) {
        modalPreviewIframe.webkitRequestFullscreen();
    }
});

// Cerrar modal al hacer clic fuera
previewModal.addEventListener('click', (e) => {
    if (e.target === previewModal) {
        previewModal.classList.remove('active');
    }
});

// Subir Archivo
fileUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const content = event.target.result;
        codeEditor.value = content;
        currentLanguage = detectLanguage(content);
        extensionBadge.textContent = currentLanguage.toUpperCase();

        // Mostrar detalles del archivo
        fileDetails.classList.add('show');
        fileDetails.innerHTML = `
            <h4>📁 Archivo Cargado</h4>
            <p><strong>Nombre:</strong> ${file.name}</p>
            <p><strong>Tipo:</strong> ${file.type || 'Desconocido'}</p>
            <p><strong>Tamaño:</strong> ${(file.size / 1024).toFixed(2)} KB</p>
            <p><strong>Lenguaje detectado:</strong> ${currentLanguage.toUpperCase()}</p>
            ${content.length > 500 ? `<p><strong>Primeras líneas:</strong></p><pre>${content.substring(0, 500)}...</pre>` : `<p><strong>Contenido:</strong></p><pre>${content}</pre>`}
        `;

        filenameInput.value = file.name.split('.')[0];
        showNotification(`Archivo "${file.name}" cargado correctamente`);
    };
    reader.readAsText(file);
});

// ==================== SECCIÓN 2: PREVISUALIZACIÓN MÓVIL ====================

const deviceSelect = document.getElementById('device-select');
const customControls = document.getElementById('custom-controls');
const customWidthInput = document.getElementById('custom-width');
const customHeightInput = document.getElementById('custom-height');
const htmlInput = document.getElementById('html-input');
const cssInput = document.getElementById('css-input');
const jsInput = document.getElementById('js-input');
const renderBtn = document.getElementById('render-btn');
const previewIframe = document.getElementById('preview-iframe');
const htmlFileUpload = document.getElementById('html-file-upload');
const codeTabButtons = document.querySelectorAll('.code-tab-btn');
const deviceFrame = document.querySelector('.device-frame');

// Configuración de dispositivos
const devices = {
    'iphone12': { width: 390, height: 844 },
    'iphone13': { width: 390, height: 844 },
    'iphone14': { width: 393, height: 852 },
    'iphone15': { width: 393, height: 852 },
    'samsung': { width: 360, height: 800 },
    'pixel': { width: 412, height: 915 },
    'ipad': { width: 820, height: 1180 },
};

// Cambiar dispositivo
deviceSelect.addEventListener('change', () => {
    if (deviceSelect.value === 'custom') {
        customControls.style.display = 'flex';
    } else {
        customControls.style.display = 'none';
        updateDeviceDimensions();
    }
});

// Actualizar dimensiones
function updateDeviceDimensions() {
    let width, height;

    if (deviceSelect.value === 'custom') {
        width = parseInt(customWidthInput.value);
        height = parseInt(customHeightInput.value);
    } else {
        const device = devices[deviceSelect.value];
        width = device.width;
        height = device.height;
    }

    deviceFrame.style.aspectRatio = `${width} / ${height}`;
}

customWidthInput.addEventListener('change', updateDeviceDimensions);
customHeightInput.addEventListener('change', updateDeviceDimensions);

// Cambiar pestañas de código
codeTabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.codeTab;

        // Desactivar todas las pestañas
        codeTabButtons.forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.code-tab-content').forEach(content => {
            content.classList.remove('active');
        });

        // Activar la seleccionada
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Renderizar preview
renderBtn.addEventListener('click', () => {
    const html = htmlInput.value;
    const css = cssInput.value;
    const js = jsInput.value;

    if (!html.trim()) {
        showNotification('Por favor agrega HTML', 'error');
        return;
    }

    // Combinar HTML, CSS y JS
    const fullHTML = `
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Preview</title>
            <style>${css}</style>
        </head>
        <body>
            ${html}
            <script>${js}</script>
        </body>
        </html>
    `;

    previewIframe.srcdoc = fullHTML;
    showNotification('Vista previa actualizada');
});

// Subir archivo HTML
htmlFileUpload.addEventListener('change', (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
        const content = event.target.result;

        // Intentar separar HTML, CSS y JS
        const htmlMatch = content.match(/<body[^>]*>([\s\S]*?)<\/body>/i);
        const cssMatch = content.match(/<style[^>]*>([\s\S]*?)<\/style>/gi);
        const jsMatch = content.match(/<script[^>]*>([\s\S]*?)<\/script>/gi);

        htmlInput.value = htmlMatch ? htmlMatch[1] : content;
        cssInput.value = cssMatch ? cssMatch.map(m => m.replace(/<\/?style[^>]*>/gi, '')).join('\n') : '';
        jsInput.value = jsMatch ? jsMatch.map(m => m.replace(/<\/?script[^>]*>/gi, '')).join('\n') : '';

        // Cambiar a pestaña HTML
        codeTabButtons[0].click();

        showNotification('Archivo HTML cargado');
    };
    reader.readAsText(file);
});

// Tablas de navegación principal
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const tabName = btn.dataset.tab;

        // Desactivar todos los tabs
        tabButtons.forEach(b => b.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));

        // Activar el seleccionado
        btn.classList.add('active');
        document.getElementById(tabName).classList.add('active');
    });
});

// Inicializar
window.addEventListener('load', () => {
    updateDeviceDimensions();
    extensionBadge.textContent = 'TXT';
});

// Atajos de teclado
document.addEventListener('keydown', (e) => {
    // Ctrl+D para descargar
    if (e.ctrlKey && e.key === 'd') {
        e.preventDefault();
        downloadBtn.click();
    }

    // Ctrl+Shift+C para copiar
    if (e.ctrlKey && e.shiftKey && e.key === 'C') {
        e.preventDefault();
        copyBtn.click();
    }
});
