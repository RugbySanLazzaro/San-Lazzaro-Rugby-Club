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

    if (toggleButton && navMenu) {
        toggleButton.addEventListener('click', function() {
            console.log('Toggle button clicked'); // Debug
            navMenu.classList.toggle('open');
            console.log('Menu classes:', navMenu.className); // Debug
        });
    } else {
        console.log('Toggle button or navMenu not found'); // Debug
    }
});

