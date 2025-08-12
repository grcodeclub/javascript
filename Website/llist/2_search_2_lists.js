<!DOCTYPE html>
<html lang="el">
    <head>
        <meta charset="UTF-8">
        <title>Διπλή Αναζήτηση Λιστών</title>
        <style>
            .list, .list1 {margin-top: 20px;}
            .list li, .list1 li {
                padding: 5px;
                border: 1px solid #ccc;
                margin: 3px 0;
                list-style-type: none;
            }
        </style>
    </head>
    <body>
        <h1>Αναζήτηση στη Λίστα 1</h1>
        <input type="text" id="searchInputList" placeholder="Αναζήτηση στη λίστα 1...">
        <div class="list">
            <ul>
                <li>Γιώργος</li>
                <li>Μαρία</li>
                <li>Νίκος</li>
                <li>Ελένη</li>
                <li>Αντώνης</li>
            </ul>
        </div>
        <h1>Αναζήτηση στη Λίστα 2</h1>
        <input type="text" id="searchInput1" placeholder="Αναζήτηση στη λίστα 2...">
        <div class="list1">
            <ul>
                <li>Σοφία</li>
                <li>Δημήτρης</li>
                <li>Κατερίνα</li>
                <li>Κώστας</li>
                <li>Ιωάννα</li>
            </ul>
        </div>
        <script>
            // Γενική συνάρτηση για αναζήτηση σε λίστες
            function setupSearch(searchInputId, listClassName) {
                const searchInput = document.getElementById(searchInputId);
                const lists = document.querySelectorAll(`.${listClassName}`);
                searchInput.addEventListener("input", function() {
                    const searchValue = removeAccents(searchInput.value.toLowerCase());
                    lists.forEach(function(list) {
                        Array.from(list.getElementsByTagName("li")).forEach(function(item) {
                            const itemText = removeAccents(item.textContent.toLowerCase());
                            if (itemText.includes(searchValue)) {item.style.display = "block";} // Εμφάνιση στοιχείου
                            else {item.style.display = "none";} // Απόκρυψη στοιχείου
                        });
                    });
                });
            }
            // Συνάρτηση για την αφαίρεση τόνων
            function removeAccents(text) {
                return text.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
            }
            // Ενεργοποίηση της αναζήτησης για τις δύο λίστες
            setupSearch("searchInputList", "list");
            setupSearch("searchInput1", "list1");
        </script>
    </body>
</html>
