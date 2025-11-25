// JavaScript para el CV de Alejandro Liendo

document.addEventListener('DOMContentLoaded', function() {
    console.log('CV de Alejandro Liendo cargado exitosamente');
    
    // Animación de carga
    const cvContainer = document.querySelector('.cv-container');
    if (cvContainer) {
        cvContainer.classList.add('fade-in');
    }
    
    // Manejo de enlaces
    const portfolioLinks = document.querySelectorAll('a[href*="alejandroliendo.site"]');
    portfolioLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            console.log('Navegando al portafolio:', this.href);
        });
    });
    
    // Manejo de impresión
    const printButton = document.querySelector('.print-cv');
    if (printButton) {
        printButton.addEventListener('click', function() {
            window.print();
        });
    }
});

// Función para detectar si se está imprimiendo
window.addEventListener('beforeprint', function() {
    console.log('Preparando documento para impresión...');
});

window.addEventListener('afterprint', function() {
    console.log('Impresión completada');
});