 // Erstelle eine Zufallszahl zwischen 5 und 10
 let min = 5;
 let max = 10;
 let randomUnrounded = (Math.random() * (max - min)) + min;
 let random = Math.floor(randomUnrounded); // Floor haut einfach die Kommas weg

// Wenn der Wert 10 ist gib aus Ten
// Wenn der Wert 9 ist gib aus Nine
// Wenn der Wert 8 ist gib aus Eight
// etc.

switch (random) {
    case 10:
        console.log("Ten");
        break;

    case 9:
        console.log("Nine");
        break;

    case 8:
        console.log("Eight");
        break;  

    case 7:
        console.log("Seven");
        break;    

    case 6:
        console.log("Six");
        break;

    case 5:
        console.log("Five");
        break;    
        
    default:
        break;
}