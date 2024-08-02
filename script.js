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
