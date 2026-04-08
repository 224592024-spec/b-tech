document.addEventListener('DOMContentLoaded', () => {
    const whatsappForm = document.getElementById('whatsappForm');

    if (whatsappForm) {
        whatsappForm.addEventListener('submit', (e) => {
            e.preventDefault();

            // COLOQUE O WHATSAPP DA B TECH AQUI:
            const numeroEmpresa = "5511999999999"; 

            const nome = document.getElementById('nome').value;
            const msg = document.getElementById('mensagem').value;

            const texto = `Olá! Sou ${nome} e vi o site da B Tech. Gostaria de um orçamento para:\n\n${msg}`;
            const url = `https://wa.me/${numeroEmpresa}?text=${encodeURIComponent(texto)}`;
            
            window.open(url, '_blank');
        });
    }
});