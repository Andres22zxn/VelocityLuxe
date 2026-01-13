// Custom JavaScript para el template de Autos Deportivos

// Smooth scrolling para los enlaces de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Validación del formulario de contacto
document.addEventListener('DOMContentLoaded', function() {
    const form = document.querySelector('#contacto form');
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            const nombre = document.getElementById('nombre').value.trim();
            const email = document.getElementById('email').value.trim();
            const mensaje = document.getElementById('mensaje').value.trim();

            if (!nombre || !email || !mensaje) {
                alert('Por favor, completa todos los campos.');
                return;
            }

            if (!isValidEmail(email)) {
                alert('Por favor, ingresa un email válido.');
                return;
            }

            // Simular envío (en un sitio real, aquí iría AJAX)
            alert('¡Mensaje enviado con éxito! Gracias por contactarnos.');
            form.reset();
        });
    }
});

// Función para validar email
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Animación de entrada para las tarjetas de la galería
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
});

// Contador de visitas (simulado, en local storage)
document.addEventListener('DOMContentLoaded', function() {
    let visitas = localStorage.getItem('visitasAutos') || 0;
    visitas = parseInt(visitas) + 1;
    localStorage.setItem('visitasAutos', visitas);

    // Mostrar en consola (o podrías agregarlo al DOM)
    console.log(`Visitas al sitio: ${visitas}`);
});