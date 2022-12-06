// Erstelle eine Variable banana mit dem Wert "Banane"
var banana = "Banane";

// Erstelle eine Variable apple mit dem Wert "Apple"
var apple = "Apple";

// Erstelle eine Variable bananaPricePerKilo mit dem Wert 2.14
var bananaPricePerKilo = 2.14;

// Erstelle eine Variable applePricePerKilo mit dem Wert 3.43
var applePricePerKilo = 3.43;

// Ein Apfel hat durchschnittlich ein Gewicht von 0.34 Kilo
var averageAppleWeight = 0.34;

// Eine Banane hat durchschnittlich ein Gewicht von 0.22 Kilo
var averageBananaWeight = 0.22;

// Gib folgendes aus: Anzahl Bananen/Äpfel pro Kilo, Preis pro Banane/Apfel
var bananaKilo = 1/averageBananaWeight;
console.log("Amount of bananas needed for 1kg: " + bananaKilo);

var bananaPrice = averageBananaWeight*bananaPricePerKilo;
console.log("One banana costs: " + bananaPrice + "€");

var appleKilo = 1/averageAppleWeight;
console.log("Amount of apples needed for 1kg: " + appleKilo);

var applePrice = averageAppleWeight*applePricePerKilo;
console.log("One apple costs: " + applePrice + "€");

// Preis von 8 Äpfeln
console.log("Eight apples cost: " + applePrice * 8);

// Preis von 17 Bananen
console.log("17 bananas cost: " + bananaPrice * 17);

// Preis von 1 Tonne Äpfel
console.log("One metric ton of apples cost: " + applePricePerKilo * 1000);

// Preis von 1 Tonne Bananen
console.log("One metric ton of bananas cost: " + bananaPricePerKilo * 1000);