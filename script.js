// Per ora non c'è bisogno di molto JavaScript, ma questo file può essere utilizzato per funzioni future
console.log("Sito San Lazzaro Rugby Caricato");
document.addEventListener("DOMContentLoaded", function() {
    var dateElements = document.querySelectorAll(".date");
    var today = new Date();
    var formattedDate = today.toLocaleDateString('it-IT', {
        day: '2-digit',
        month: '2-digit',
        year: 'numeric'
    });

    dateElements.forEach(function(element) {
        element.textContent = formattedDate;
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            const answer = item.querySelector('.faq-answer');
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                // Close other answers
                document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
                answer.style.display = 'block';
            }
        });
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.header-toggle');
    const navMenu = document.querySelector('header nav ul');

    // Funzione per chiudere il menu se si clicca fuori
    function closeMenu(event) {
        if (!navMenu.contains(event.target) && !toggleButton.contains(event.target)) {
            navMenu.classList.remove('open');
            toggleButton.classList.remove('open'); // Rimuove la classe per tornare all'hamburger
            document.removeEventListener('click', closeMenu); // Rimuovi l'evento una volta chiuso
        }
    }

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function(event) {
            navMenu.classList.toggle('open');
            toggleButton.classList.toggle('open'); // Cambia tra hamburger e X

            // Se il menu è aperto, aggiungi il listener per chiudere cliccando fuori
            if (navMenu.classList.contains('open')) {
                document.addEventListener('click', closeMenu);
            } else {
                document.removeEventListener('click', closeMenu);
            }

            // Previeni la propagazione del click quando si preme sull'hamburger
            event.stopPropagation();
        });
    } else {
        console.log('Toggle button or navMenu not found'); // Debug
    }
});

