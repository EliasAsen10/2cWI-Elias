let random = Math.random() * 1000;
let randomAsInteger = Math.round(random);
console.log(randomAsInteger)

if (randomAsInteger > 800) {
    console.log("größer als 800")
}
if (randomAsInteger > 500 && randomAsInteger < 800) {
    console.log("zw .500 und 800");
}
if (randomAsInteger > 200 && randomAsInteger < 500) {
    console.log("z w.200 und 500");
}


if (randomAsInteger > 0 && randomAsInteger < 200) { console.log("zw .0 und 200"); }