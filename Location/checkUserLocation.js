function checkUserLocation() {
    fetch('http://ip-api.com/json')
        .then(response => response.json())
        .then(data => {
            // Εμφάνιση των δεδομένων στο console log
            console.log("Χώρα: " + data.country);
            console.log("Κωδικός Χώρας: " + data.countryCode);
            console.log("Περιοχή: " + data.regionName);
            console.log("Πόλη: " + data.city);
            console.log("Ταχυδρομικός Κώδικας: " + data.zip);
            console.log("Γεωγραφικό Πλάτος: " + data.lat);
            console.log("Γεωγραφικό Μήκος: " + data.lon);
            console.log("Πάροχος Υπηρεσιών Διαδικτύου: " + data.isp);
            console.log("Οργανισμός: " + data.org);
            
            // Μπορείς να χρησιμοποιήσεις αυτά τα δεδομένα για άλλες ενέργειες
            // π.χ., εμφάνιση διαφορετικού περιεχομένου βάσει της χώρας του χρήστη
            if (data.countryCode === "GR") {
                console.log("Ο χρήστης βρίσκεται στην Ελλάδα.");
            } else {
                console.log("Ο χρήστης βρίσκεται εκτός Ελλάδας.");
            }
        })
        .catch(error => {
            console.error("Σφάλμα κατά την ανάκτηση της τοποθεσίας:", error);
        });
}

// Κλήση της λειτουργίας
checkUserLocation();
