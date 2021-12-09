banana = "banana"
apple = "apple"
bananaPricePerKilo = 2.14
applePricePerKilo = 3.43
oneapplekilo = 0.34
onebananakilo = 0.22
numberapples = 8



let numberbananaprokilo = 1 / onebananakilo
console.log("Anzahl Bananen pro Kilo " + numberbananaprokilo)

let numberappleprokilo = 1 / oneapplekilo
console.log("Anzahl Äpfel pro Kilo " + numberappleprokilo)

let priceprobanana = bananaPricePerKilo / numberbananaprokilo
let priceapple = applePricePerKilo / numberappleprokilo

console.log("Preis pro Banane= " + priceprobanana)
console.log("Preis pro Apfel= " + priceapple)


let eightapples = 8 * priceapple
console.log("Preis von 8 Äpfeln = " + eightapples)

let seventeenbanana = 17 * priceprobanana
console.log("Preis von 17 Bananen = " + seventeenbanana)


let priceonetonnsapple = applePricePerKilo * 1000
console.log("Preis 1 Tonne Äpfel ist " + priceonetonnsapple)

let priceonetonnsbanana = bananaPricePerKilo * 1000
console.log("Preis 1 Tonne Bananen ist " + priceonetonnsbanana)