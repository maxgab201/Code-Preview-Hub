# 📖 Guía de Uso Completa

## 🎯 Sección 1: Descargador

### ¿Qué puedo hacer aquí?

#### 1. **Pegar y Descargar Código**
```
1. Click en "📋 Pegar" o pega código manualmente
2. El lenguaje se detecta automáticamente
3. Modifica el nombre del archivo si quieres
4. Click en "⬇️ Descargar"
5. ¡Tu archivo está en descargas!
```

**Lenguajes soportados:**
- HTML, CSS, JavaScript
- TypeScript, JSX, TSX
- Python, Java, C#, C, C++
- Ruby, Go, Rust
- SQL, XML, JSON
- Y más...

#### 2. **Copiar Código**
```
1. Escribe o pega tu código
2. Click en "📌 Copiar"
3. ¡El código está en el portapapeles!
```

#### 3. **Limpiar el Editor**
```
1. Click en "🗑️ Borrar"
2. Confirma que quieres borrar
3. El editor se vacía
```

#### 4. **Subir un Archivo Existente**
```
1. Click en "📤 Subir un archivo"
2. Selecciona un archivo de tu PC
3. Se carga automáticamente en el editor
4. Puedes modificarlo y descargarlo nuevamente
```

#### 5. **Vista Previa HTML**
```
1. Pega código HTML en el editor
2. Click en "👁️ Ver Vista Previa"
3. Se abre una ventana con la previsualización
4. Click en "⛶" para pantalla completa
5. Click en "✕" para cerrar
```

---

## 📱 Sección 2: Previsualización Móvil

### ¿Qué puedo hacer aquí?

#### 1. **Elegir Dispositivo**
Selecciona entre estos dispositivos preconfigurados:
- **iPhone**: 12, 13, 14 Pro, 15
- **Samsung**: Galaxy S23
- **Google**: Pixel 8
- **Tablet**: iPad Air
- **Custom**: Tamaño personalizado

#### 2. **Escribir Código**
```
- Haz click en la pestaña "HTML"
- Pega tu código HTML
- La estructura debe ser válida: <html>, <head>, <body>
```

#### 3. **Agregar Estilos (CSS)**
```
- Click en la pestaña "CSS"
- Pega tu código CSS aquí
- Se aplicará automáticamente al renderizar
```

#### 4. **Agregar Interactividad (JavaScript)**
```
- Click en la pestaña "JavaScript"
- Pega tu código JS
- Tendrá acceso al DOM
```

#### 5. **Renderizar**
```
1. Después de escribir HTML/CSS/JS
2. Click en "▶️ Renderizar"
3. ¡Ves tu proyecto en tiempo real!
```

#### 6. **Cargar Archivo HTML Completo**
```
1. Click en la pestaña "Subir Archivo"
2. Selecciona un archivo HTML
3. Se extraerá automáticamente HTML, CSS y JS
4. Se mostrarán en sus respectivas pestañas
5. Click en "Renderizar"
```

---

## ⌨️ Atajos de Teclado

| Atajo | Función |
|-------|---------|
| `Ctrl + D` | Descargar archivo |
| `Ctrl + Shift + C` | Copiar código |

---

## 🎨 Ejemplos Prácticos

### Ejemplo 1: Tarjeta de Perfil

**HTML:**
```html
<div class="card">
    <img src="avatar.jpg" alt="Avatar">
    <h2>Tu Nombre</h2>
    <p>Descripción breve</p>
    <button>Ver más</button>
</div>
```

**CSS:**
```css
.card {
    background: white;
    border-radius: 10px;
    padding: 20px;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
    max-width: 300px;
}

.card h2 {
    margin: 15px 0;
    color: #333;
}

.card button {
    background: #667eea;
    color: white;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    cursor: pointer;
}
```

### Ejemplo 2: Contador Interactivo

**HTML:**
```html
<div class="contador">
    <h1>Contador</h1>
    <p id="numero">0</p>
    <button onclick="incrementar()">Sumar</button>
    <button onclick="decrementar()">Restar</button>
</div>
```

**JavaScript:**
```javascript
let numero = 0;

function incrementar() {
    numero++;
    document.getElementById('numero').textContent = numero;
}

function decrementar() {
    numero--;
    document.getElementById('numero').textContent = numero;
}
```

### Ejemplo 3: Galería de Imágenes

**HTML:**
```html
<div class="galeria">
    <img class="imagen" src="img1.jpg" alt="Imagen 1">
    <img class="imagen" src="img2.jpg" alt="Imagen 2">
    <img class="imagen" src="img3.jpg" alt="Imagen 3">
</div>
```

**CSS:**
```css
.galeria {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 15px;
    padding: 20px;
}

.imagen {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s;
}

.imagen:hover {
    transform: scale(1.05);
}
```

---

## 🚨 Tips y Trucos

### 1. **Detectar el Lenguaje Automáticamente**
No necesitas especificar el tipo de archivo. La app detecta:
- `<html>` → HTML
- `function` → JavaScript
- `@media` → CSS
- Y mucho más...

### 2. **Tamaños Personalizados**
Si quieres probar en un dispositivo específico:
1. Selecciona "Custom" en el selector
2. Ingresa el ancho y alto en píxeles
3. ¡Tu diseño se adaptará!

### 3. **Reutilizar Código**
Todos tus códigos se guardan en el navegador (localStorage):
- Recarga la página
- Tu código sigue ahí
- ¡No pierdes nada!

### 4. **Compartir Código**
(Próximamente): URL compartible con tu código

### 5. **Descargar en ZIP**
(Próximamente): Descarga múltiples archivos juntos

---

## ❌ Limitaciones Conocidas

1. **No es un compilador**: No puedo ejecutar Python, Java, etc. en tiempo real
2. **Seguridad**: El código JS no tiene acceso a Internet (CORS)
3. **Almacenamiento**: localStorage tiene un límite (~5-10MB)
4. **Diseño responsivo**: Algunos dispositivos pueden verse diferentes

---

## 💡 Ideas para Mejorar tu Código

### Usa Semantic HTML
```html
<!-- ❌ Mal -->
<div onclick="enlace()">Click aquí</div>

<!-- ✅ Bien -->
<button onclick="enlace()">Click aquí</button>
```

### Separa HTML, CSS y JavaScript
```html
<!-- ❌ Evita esto -->
<div style="color: red; font-size: 20px;">Hola</div>

<!-- ✅ Mejor -->
<div class="titulo">Hola</div>
<style>
    .titulo {
        color: red;
        font-size: 20px;
    }
</style>
```

### Usa Clases en Lugar de IDs
```css
/* ❌ Menos flexible */
#boton { background: blue; }

/* ✅ Más reutilizable */
.boton { background: blue; }
```

---

## 🎓 Recursos Útiles

- [MDN Web Docs](https://developer.mozilla.org/) - Documentación completa
- [Can I Use](https://caniuse.com/) - Compatibilidad de navegadores
- [CSS Tricks](https://css-tricks.com/) - Tutoriales CSS
- [JavaScript.info](https://javascript.info/) - Tutorial JS completo

---

## 🐛 Reportar Problemas

Si encuentras un bug:
1. Abre la consola (F12)
2. Nota el error exacto
3. Abre un issue en GitHub con los detalles

---

**¡Que disfrutes creando con Code Preview Hub!** 🚀
