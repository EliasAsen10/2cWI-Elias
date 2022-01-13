let random = Math.floor(Math.random() * 100);
console.log(random);
let mystery = Math.floor(Math.random() * 100);
console.log(mystery);

if (random < mystery && random < 50) { console.log("Zahl 1 ist kleiner als Zahl 2 und Mini") }

if ((random < 30) || (mystery < 30)) { console.log("Eine der beiden ist kleiner als 30") }

if ((random < 50) && (mystery != 50)) { console.log("Erste Zahl klein, zweite kein 50iger") }




// Wenn die erste Zahl kleiner ist als die zweite UND die erste Zahl kleiner ist als 50
// dann gib aus "Zahl 1 ist kleiner als Zahl 2 und Mini"

// Wenn die erste Zahl kleiner ist als 30 oder die zweite Zahl kleiner ist als 30
// dann gib aus "Eine der beiden ist kleiner als 30"

// Wenn die erste Zahl kleiner ist als 50 UND die zweite Zahl ungleich 50 ist
// dann gib aus "Erste Zahl klein, zweite kein 50iger"