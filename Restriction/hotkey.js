document.addEventListener('keydown', function(event) {
    // Αποτροπή συνδυασμών Ctrl + U, Ctrl + S, Ctrl + P και άλλων
    if ((event.ctrlKey && 
            (event.key === 'u' || event.key === 's' || event.key === 'p' || event.key === 'θ' || event.key === 'σ' || event.key === 'π')) || 
        (event.key === 'F12') || // Αποτροπή F12 (άνοιγμα DevTools)
        (event.key === 'F11') || // Αποτροπή F11 (πλήρης οθόνη)
        (event.key === 'F5') ||  // Αποτροπή F5 (ανανέωση σελίδας)
        (event.ctrlKey && event.key === 'r') ||  // Αποτροπή Ctrl + R (ανανέωση σελίδας)
        (event.ctrlKey && event.key === 'a') ||  // Αποτροπή Ctrl + A (επιλογή όλων)
        (event.ctrlKey && event.key === 'd') ||  // Αποτροπή Ctrl + D (προσθήκη σελιδοδείκτη)
        (event.ctrlKey && event.shiftKey && event.key === 'i') || // Αποτροπή Ctrl + Shift + I (άνοιγμα DevTools)
        (event.ctrlKey && event.shiftKey && event.key === 'j') || // Αποτροπή Ctrl + Shift + J (άνοιγμα DevTools)
        (event.ctrlKey && event.shiftKey && event.key === 'c')) { // Αποτροπή Ctrl + Shift + C (επιθεώρηση στοιχείου)
        
        event.preventDefault();
        alert('This keyboard shortcut is disabled on this page.');
    }
});
