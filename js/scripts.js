// scripts.js

// Aquí puedes agregar cualquier funcionalidad de JavaScript necesaria
document.addEventListener('DOMContentLoaded', () => {
    console.log('Página cargada y lista para usar.');

    // Ejemplo de función: agregar un evento al formulario de contacto
    const form = document.querySelector('.contact form');
    
    form.addEventListener('submit', (event) => {
        event.preventDefault(); // Prevenir el envío del formulario

        // Validación básica de campos requeridos
        const name = form.querySelector('input[name="name"]').value;
        const email = form.querySelector('input[name="email"]').value;
        const message = form.querySelector('textarea[name="message"]').value;

        if (!name || !email || !message) {
            alert('Por favor, completa todos los campos antes de enviar.');
            return;
        }

        // Si todos los campos son válidos, mostrar un mensaje de agradecimiento
        alert('¡Gracias por contactarnos! Pronto te responderemos.');

        // Reiniciar el formulario
        form.reset(); 
    });
});
