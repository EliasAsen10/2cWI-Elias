for (let count = 0; count < 11; count++) {
    console.log(count + "s")
}
let number = Math.floor(Math.random() * 100);

if (number <= 7) {
    console.log("Mini")
} else if (number >= 7 && number <= 90) {
    console.log("Medium")
} else if (number > 90) { console.log(Large) }