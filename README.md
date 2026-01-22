# Code Preview Hub 💻

Una web moderna y funcional para **descargar**, **previsualizar** y **testear** código en diferentes dispositivos móviles.

## 🎯 Características

### 📥 Sección Descargador
- ✨ **Detección automática** de lenguaje (HTML, CSS, JS, Python, Java, C#, etc.)
- 📥 **Descarga de archivos** con extensión automática
- 📋 **Botones útiles**: Pegar, Copiar, Limpiar
- 📤 **Carga de archivos** para editar código existente
- 👁️ **Vista previa** de código HTML con pantalla completa
- 📊 **Detalles de archivo** (nombre, tamaño, tipo)

### 📱 Sección Previsualización Móvil
- 🎨 **Múltiples dispositivos**: iPhone, Samsung, Google Pixel, iPad
- 📐 **Tamaños personalizados** para dispositivos específicos
- 🔗 **Editor separado** para HTML, CSS y JavaScript
- 📤 **Carga de archivos HTML** con análisis automático
- 🚀 **Renderizado en tiempo real** del código

## 🚀 Inicio Rápido

### Clonar el repositorio
```bash
git clone https://github.com/tu-usuario/code-preview-hub.git
cd code-preview-hub
```

### Ejecutar localmente
Simplemente abre `index.html` en tu navegador o usa un servidor local:

```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (con http-server)
npx http-server

# Con Live Server en VS Code
# (Instala la extensión "Live Server" y haz click en "Go Live")
```

Luego accede a `http://localhost:8000`

## 📦 Deploy en Vercel

### Opción 1: Desde la CLI
```bash
npm install -g vercel
vercel
```

### Opción 2: Desde GitHub
1. Sube tu repositorio a GitHub
2. Ve a [vercel.com](https://vercel.com)
3. Conecta tu repositorio
4. ¡Listo! Se despliega automáticamente

## 📁 Estructura del Proyecto

```
code-preview-hub/
├── index.html          # Página principal
├── styles.css          # Estilos
├── script.js           # Lógica
├── vercel.json         # Configuración Vercel
├── .gitignore          # Archivos ignorados
└── README.md           # Este archivo
```

## 🛠️ Tecnologías Utilizadas

- **HTML5** - Estructura
- **CSS3** - Estilos con gradientes, flexbox y grid
- **JavaScript Vanilla** - Lógica interactiva
- **Vercel** - Hosting y deploy

## 📝 Cómo Usar

### Descargador
1. Pega tu código en el editor
2. El lenguaje se detecta automáticamente
3. Modifica el nombre del archivo si quieres
4. Haz clic en "Descargar"

### Previsualización Móvil
1. Selecciona el dispositivo
2. Pega o carga tu código HTML/CSS/JS
3. Haz clic en "Renderizar"
4. ¡Mira la vista previa en tiempo real!

## 🎨 Personalización

Puedes personalizar:
- Los colores en las variables CSS (`:root` en `styles.css`)
- Los dispositivos disponibles en `script.js`
- Los patrones de detección de lenguaje

## 🐛 Troubleshooting

**La vista previa no aparece:**
- Verifica que hayas escrito HTML válido
- Comprueba la consola del navegador (F12) para errores

**El archivo no descarga:**
- Asegúrate de que el editor no esté vacío
- Prueba en otro navegador

## 📄 Licencia

MIT - Libre para usar y modificar

## 🤝 Contribuciones

¡Las contribuciones son bienvenidas! Simplemente:
1. Fork el proyecto
2. Crea una rama (`git checkout -b feature/amazing-feature`)
3. Commit tus cambios (`git commit -m 'Add amazing feature'`)
4. Push a la rama (`git push origin feature/amazing-feature`)
5. Abre un Pull Request

## 📮 Contacto

¿Preguntas o sugerencias? ¡Abre un issue en GitHub!

---

Hecho con ❤️ para developers
