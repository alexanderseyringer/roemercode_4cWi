// Aufgabe 1

for (let i = 0; i < 4; i++) {
    let rowNumber = "";
    for (let i2 = 0; i2 < 4; i2++) {
        if (i%2!=0) {
            rowNumber += "O";
        }

        else {
            rowNumber += "X";
        } 
    }
    console.log(rowNumber);
}

// Aufgabe 2
// Versuche in einer for - Schleife (1-100) alle geraden Zahlen zu addieren (zwei Lösungswege ⇒ Zähler dahingehend verändern das er nur gerade Zahlen zählt und mit Modulo arbeiten.)
let number = 0;
for (let i = 1; i < 101; i++) {
        if (i%2 == 0) {
            number += i;
            console.log(number);
        }
}