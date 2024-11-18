let catNumber = (44);
let catNumberinrow = (6);
// operazioni
let catRows = (catNumber / catNumberinrow).toFixed(0)
let catExtra = (catNumber % catNumberinrow);
let catTocompleterow = (catNumberinrow - catExtra);
// risultati 
console.log("Ci sono " + catRows + " file di gatti e ne mancano "
            + catTocompleterow + " per una nuova fila, con un avanzo di " +
            catExtra);
