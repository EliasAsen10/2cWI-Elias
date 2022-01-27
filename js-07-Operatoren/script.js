let random = Math.floor(Math.random() * 100);
console.log(random);
let mystery = Math.floor(Math.random() * 100);
console.log(mystery);

if (random < mystery && random < 50) {
    console.log("Zahl 1 ist kleiner als Zahl 2 und Mini")
} else if ((random < 30) || (mystery < 30)) {
    console.log("Eine der beiden ist kleiner als 30")
} else if ((random < 50) && (mystery != 50)) {
    console.log("Erste Zahl klein, zweite kein 50iger")
}


let Motorrad = 18
if (Motorrad >= 24) {
    console.log("Darf Motorad fahren durch das alter")
} else
    console.log("besitzt Führerschein ohne Probezeit")



let Kind = 10
if (Kind > 14) {
    console.log("Kind ist älter als 14")
} else { console.log("Elternteil dabei") }

let Berufserfahrung = 2
if (Berufserfahrung >= 2) {
    console.log("+2 Jahre Berufserfahrung")
} else { console.log("Coding Campus besucht") }

Erfahrung >= 5
if (Erfahrung >= 5) {
    console.log("5 Jahre Berufserfahrung")
} else { "Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis" }

//1. Der Fahrer darf das Motorrad fahren, wenn er 24 Jahre oder älter ist oder den Motorradführerschein besitzt aber nicht mehr in der Probezeit ist. 
//2. Das Kind darf den Kinofilm sehen, wenn es älter als 14 ist oder einen Elternteil mit dabei hat.
//3. Wenn ich den Kurs“ Softwarearchitekturen” besuchen möchte, muss ich den Coding Campus besucht haben oder bereits 2 Jahre Berufserfahrung vorweisen.
//4. Der Bewerber hat eine Chance auf eine Anstellung wenn er bereits über 5 Jahre Erfahrung vorweist oder einen Master Abschluss besitzt und auf jeden Fall eine einwandfreies Leumundszeugnis besitzt.