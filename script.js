// Script para funcionalidades del currículum de Alejandro Liendo

// Función para generar QR Code
function generateQRCode() {
    const qrCodeContainer = document.getElementById('qrcode');
    const url = 'https://alejandroliendo.site';
    
    // Usar servicio externo para generar QR code
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?size=80x80&data=${encodeURIComponent(url)}`;
    
    const img = document.createElement('img');
    img.src = qrCodeURL;
    img.alt = 'QR Code - alejandroliendo.site';
    img.style.width = '80px';
    img.style.height = '80px';
    img.style.border = '1px solid #ddd';
    qrCodeContainer.appendChild(img);
}

// Función para optimizar la página para impresión
function optimizeForPrint() {
    // Asegurar que todas las imágenes estén cargadas antes de imprimir
    const images = document.querySelectorAll('img');
    let loadedImages = 0;
    
    function checkImagesLoaded() {
        loadedImages++;
        if (loadedImages === images.length) {
            // Todas las imágenes están cargadas
            console.log('Página lista para impresión');
        }
    }
    
    images.forEach(img => {
        if (img.complete) {
            checkImagesLoaded();
        } else {
            img.addEventListener('load', checkImagesLoaded);
            img.addEventListener('error', checkImagesLoaded);
        }
    });
}

// Función para mejorar la accesibilidad
function enhanceAccessibility() {
    // Añadir atributos ARIA donde sea necesario
    const sections = document.querySelectorAll('.section');
    sections.forEach((section, index) => {
        section.setAttribute('aria-label', `Sección ${index + 1}`);
    });
    
    // Mejorar contraste de colores para mejor accesibilidad
    const skillTags = document.querySelectorAll('.skill-tag');
    skillTags.forEach(tag => {
        tag.setAttribute('role', 'button');
        tag.setAttribute('tabindex', '0');
    });
}

// Función para validar la información del currículum
function validateCurriculum() {
    const requiredFields = [
        { selector: '.personal-info h1', message: 'Nombre no encontrado' },
        { selector: '.contact-info', message: 'Información de contacto no encontrada' },
        { selector: '.profile-img', message: 'Foto de perfil no encontrada' }
    ];
    
    const errors = [];
    requiredFields.forEach(field => {
        const element = document.querySelector(field.selector);
        if (!element) {
            errors.push(field.message);
        }
    });
    
    if (errors.length > 0) {
        console.warn('Errores encontrados en el currículum:', errors);
    } else {
        console.log('Currículum validado correctamente');
    }
}

// Función para generar un resumen de estadísticas
function generateStats() {
    const stats = {
        totalSections: document.querySelectorAll('.section').length,
        totalSkills: document.querySelectorAll('.skill-tag').length,
        totalExperience: document.querySelectorAll('.experience-item').length,
        totalEducation: document.querySelectorAll('.education-item').length,
        totalCertifications: document.querySelectorAll('.certification-item').length
    };
    
    console.log('Estadísticas del currículum:', stats);
    return stats;
}

// Event Listeners
document.addEventListener('DOMContentLoaded', function() {
    // Generar QR code
    generateQRCode();
    
    // Optimizar para impresión
    optimizeForPrint();
    
    // Mejorar accesibilidad
    enhanceAccessibility();
    
    // Validar currículum
    validateCurriculum();
    
    // Generar estadísticas
    generateStats();
    
    // Listener para antes de imprimir
    window.addEventListener('beforeprint', function() {
        console.log('Preparando página para impresión...');
        optimizeForPrint();
    });
    
    // Listener para después de imprimir
    window.addEventListener('afterprint', function() {
        console.log('Impresión completada');
    });
});

// Función para exportar datos del currículum (útil para otras aplicaciones)
function exportCurriculumData() {
    const curriculumData = {
        nombre: document.querySelector('.personal-info h1').textContent,
        titulo: document.querySelector('.personal-info h2').textContent,
        contacto: {
            email: document.querySelector('.contact-info div:nth-child(1)').textContent.replace('📧 ', ''),
            telefono: document.querySelector('.contact-info div:nth-child(2)').textContent.replace('📱 ', ''),
            ubicacion: document.querySelector('.contact-info div:nth-child(3)').textContent.replace('📍 ', ''),
            website: document.querySelector('.contact-info div:nth-child(4)').textContent.replace('🌐 ', '')
        },
        experiencia: Array.from(document.querySelectorAll('.experience-item')).map(item => ({
            puesto: item.querySelector('.job-title').textContent,
            empresa: item.querySelector('.company').textContent,
            periodo: item.querySelector('.date-range').textContent,
            descripcion: item.querySelector('.description').textContent
        })),
        habilidades: Array.from(document.querySelectorAll('.skill-tag')).map(tag => tag.textContent)
    };
    
    return curriculumData;
}

// Función para cambiar el tema (modo claro/oscuro - para futura implementación)
function toggleTheme() {
    document.body.classList.toggle('dark-theme');
    localStorage.setItem('theme', document.body.classList.contains('dark-theme') ? 'dark' : 'light');
}

// Cargar tema guardado
function loadSavedTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }
}

// Exponer funciones globalmente para uso externo
window.curriculumUtils = {
    generateQRCode,
    validateCurriculum,
    generateStats,
    exportCurriculumData,
    toggleTheme
};