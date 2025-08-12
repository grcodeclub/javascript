document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.showCardButton'); // Όλα τα κουμπιά με την κλάση `showCardButton`
    // Προσθέστε έναν χειριστή κλικ σε κάθε κουμπί
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            // Βρείτε το κοντινό `card-content` στοιχείο του κουμπιού
            const cardContent = button.nextElementSibling;
            const arrow = button.querySelector('.arrow'); // Βρείτε το βέλος μέσα στο κουμπί
            // Ελέγξτε την τρέχουσα τιμή του `max-height` στο `card-content`
            if (cardContent.style.maxHeight === '0px' || cardContent.style.maxHeight === '') {
                // Εμφανίστε το περιεχόμενο του `card-content` ορίζοντας το `max-height` στο ύψος του περιεχομένου
                cardContent.style.maxHeight = cardContent.scrollHeight + 'px';
                // Αλλάξτε το βέλος να δείχνει προς τα κάτω (▼)
                arrow.innerHTML = '&#9660;';
            } else {
                // Απόκρυψη του περιεχομένου του `card-content` ορίζοντας το `max-height` σε `0`
                cardContent.style.maxHeight = '0';
                // Αλλάξτε το βέλος να δείχνει προς τα δεξιά (►)
                arrow.innerHTML = '&#9654;';
            }
        });
    });
});
