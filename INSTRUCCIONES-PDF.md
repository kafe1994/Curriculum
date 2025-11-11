# 📄 Instrucciones para Convertir a PDF

## 🎯 Objetivo
Convertir el currículum HTML a PDF manteniendo la calidad profesional y el formato adecuado.

## 🔧 Métodos Recomendados

### Método 1: Navegador Web (Recomendado)
1. **Abrir** `index.html` en Google Chrome o Mozilla Firefox
2. **Imprimir**: Presionar `Ctrl+P` (Windows) o `Cmd+P` (Mac)
3. **Configurar**:
   - **Destino**: Guardar como PDF
   - **Tamaño**: A4 (210 x 297 mm)
   - **Márgenes**: Mínimos o Personalizado (5mm)
   - **Escala**: 100%
   - **Opciones**: 
     - ☑️ Gráficos de fondo
     - ☑️ Colores y imágenes de fondo

### Método 2: wkhtmltopdf (Línea de Comandos)
```bash
# Instalar wkhtmltopdf (Ubuntu/Debian)
sudo apt-get install wkhtmltopdf

# Convertir a PDF
wkhtmltopdf --page-size A4 --margin-top 15mm --margin-bottom 15mm --margin-left 10mm --margin-right 10mm index.html curriculum-alejandro-liendo.pdf
```

### Método 3: Herramientas Online
1. **PDFShift** (https://pdfshift.net)
2. **HTML to PDF Converter** (https://www.ilovepdf.com/html-to-pdf)
3. **Smallpdf HTML to PDF**

### Método 4: Puppeteer (Para Desarrolladores)
```javascript
const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('file:///ruta/completa/a/index.html');
    await page.pdf({
        path: 'curriculum-alejandro-liendo.pdf',
        format: 'A4',
        margin: {
            top: '15mm',
            bottom: '15mm',
            left: '10mm',
            right: '10mm'
        },
        printBackground: true
    });
    await browser.close();
})();
```

## ✅ Lista de Verificación Pre-PDF

### Contenido Verificado
- [x] **Foto de perfil**: Incluida y optimizada
- [x] **Información de contacto**: Completa
- [x] **Experiencia laboral**: 4 posiciones detalladas
- [x] **Habilidades técnicas**: Organizadas por categorías
- [x] **Certificaciones**: Incluida la de programación
- [x] **QR Code**: Generado automáticamente para alejandroliendo.site
- [x] **Espacios en blanco**: Llenados con contenido relevante

### Formato Optimizado
- [x] **Diseño responsive**: Adaptable a diferentes pantallas
- [x] **Tipografías web-safe**: Arial, Helvetica
- [x] **Colores profesionales**: Azul (#3498db) y gris (#2c3e50)
- [x] **Estructura semántica**: HTML5 bien estructurado
- [x] **CSS optimizado**: Para impresión con `@media print`

## 🎨 Características del PDF

### Estructura de 2 Columnas
- **Columna Izquierda**: Perfil, educación, experiencia, logros
- **Columna Derecha**: Habilidades, certificaciones, idiomas, contacto

### Elementos Destacados
- **Header profesional** con foto circular
- **QR Code** que enlaza a alejandroliendo.site
- **Secciones bien diferenciadas** con colores corporativos
- **Espaciado optimizado** para lectura fácil

## 🔍 Calidad del PDF

### Verificar Antes de Enviar
1. **Todas las imágenes cargan correctamente**
2. **QR Code es visible y escaneable**
3. **Texto legible en impresión**
4. **Colores se ven bien en blanco y negro**
5. **No hay saltos de página molestos**

### Configuración Recomendada
- **Resolución**: 300 DPI
- **Formato**: A4 (210 x 297 mm)
- **Márgenes**: 15mm superior/inferior, 10mm laterales
- **Orientación**: Vertical (Portrait)

## 📱 QR Code Funcional

El QR Code generado automáticamente enlaza a:
**https://alejandroliendo.site**

### Probar el QR Code
1. **Escanear** con cualquier app de QR
2. **Verificar** que abre el sitio web
3. **Confirmar** que es accesible

## 🎯 Resultado Final

Un currículum PDF profesional de 2-3 páginas que incluye:

✅ **Información completa y actualizada**
✅ **Diseño moderno y profesional** 
✅ **QR Code funcional** 
✅ **Optimizado para ATS**
✅ **Fácil lectura en impresión**
✅ **Espacios bien distribuidos sin áreas vacías**

---

**¡Tu currículum está listo para impresionar a empleadores y recruiters!** 🚀