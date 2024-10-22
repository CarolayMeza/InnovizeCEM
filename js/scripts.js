// scripts.js

// Aquí puedes agregar cualquier funcionalidad de JavaScript necesaria
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada y lista para usar.');
    // Ejemplo de función: agregar un evento al formulario de contacto
    const form = document.querySelector('.contact form');
    form.addEventListener('submit', (event) => {
        event.preventDefault();
        alert('¡Gracias por contactarnos! Pronto te responderemos.');
        form.reset(); // Reiniciar el formulario
    });
});
