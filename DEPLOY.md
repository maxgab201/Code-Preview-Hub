# Guía de Deploy

## 🚀 Deploy en Vercel (Recomendado)

### Paso 1: Preparar el repositorio
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/tu-usuario/code-preview-hub.git
git branch -M main
git push -u origin main
```

### Paso 2: Conectar con Vercel
1. Ve a [vercel.com](https://vercel.com)
2. Haz clic en "New Project"
3. Selecciona "Import Git Repository"
4. Pega la URL de tu repositorio
5. Haz clic en "Deploy"

**¡Listo!** Tu sitio estará en vivo en `https://nombre-del-proyecto.vercel.app`

## 🐙 Deploy en GitHub Pages

### Paso 1: Configurar el repositorio
1. Ve a los Settings de tu repositorio
2. En "Pages", selecciona:
   - Source: `main` (o `master`)
   - Folder: `/ (root)`
3. Guarda los cambios

**Tu sitio estará en:** `https://tu-usuario.github.io/code-preview-hub`

## 💻 Ejecutar Localmente

### Con Python 3
```bash
cd code-preview-hub
python -m http.server 8000
# Abre http://localhost:8000
```

### Con Node.js
```bash
npm install -g http-server
cd code-preview-hub
http-server
# Abre http://localhost:8080
```

### Con VS Code
1. Instala la extensión "Live Server"
2. Haz clic derecho en `index.html`
3. Selecciona "Open with Live Server"

## 📋 Checklist pre-deploy

- [ ] Cambiar URLs de GitHub en el README
- [ ] Cambiar URLs de Vercel en el README
- [ ] Revisar que todos los archivos estén en el repositorio
- [ ] Probar localmente
- [ ] Verificar que funcione en móviles

## 🔧 Variables de Entorno (si necesitas en el futuro)

Si necesitas variables de entorno en Vercel:
1. Ve al proyecto en Vercel
2. Settings → Environment Variables
3. Agrega tus variables

En tu código JavaScript:
```javascript
const apiUrl = process.env.API_URL || 'http://localhost:3000';
```

## 🆘 Solucionar Problemas

### "Not Found" al abrir la web en Vercel
- Verifica que `vercel.json` esté bien configurado
- Asegúrate que `index.html` esté en la raíz

### Los estilos no cargan
- Verifica las rutas relativas en el HTML
- Abre la consola (F12) para ver errores

### GitHub Pages no actualiza
- Espera 1-2 minutos después de hacer push
- Borra la caché del navegador (Ctrl+Shift+Supr)

## 📚 Recursos

- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://pages.github.com/)
- [HTML5 Spec](https://html.spec.whatwg.org/)
