document.addEventListener('DOMContentLoaded', () => {
    const track = document.querySelector('.carousel-track');
    const nextBtn = document.getElementById('nextBtn');
    const prevBtn = document.getElementById('prevBtn');
    const cards = document.querySelectorAll('.card');
    
    let currentSlide = 0;
    const gap = 20;

    function moveSlide(direction) {
        const cardsToShow = window.innerWidth > 768 ? 3 : 1;
        const maxSlide = cards.length - cardsToShow;

        currentSlide += direction;

        // Efeito Infinito (Rebote)
        if (currentSlide > maxSlide) {
            currentSlide = 0;
        } else if (currentSlide < 0) {
            currentSlide = maxSlide;
        }

        const cardWidth = cards[0].offsetWidth;
        const moveAmount = (cardWidth + gap) * currentSlide;
        track.style.transform = `translateX(-${moveAmount}px)`;
    }

    // Event Listeners (Garante que o clique funcione)
    nextBtn.addEventListener('click', () => moveSlide(1));
    prevBtn.addEventListener('click', () => moveSlide(-1));

    // Formulario WhatsApp
    const whatsappForm = document.getElementById('whatsappForm');
    whatsappForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const nome = document.getElementById('nome').value;
        const msg = document.getElementById('mensagem').value;
        const texto = `Olá! Sou *${nome}*.\n\n*Solicitação:* ${msg}`;
        window.open(`https://wa.me/5511948690593?text=${encodeURIComponent(texto)}`, '_blank');
    });
});