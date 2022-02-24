let output = "";
let isX = true
for (let index = 0; index < 6; index++) {
    if (index % 6 == 0) {
        console.log(output);
        output = ""
        if (isX == true) {
            isX = false
        } else {
            isX = true;
        }
    }
    if (isX == true) {
        output = output + "X";

    } else {
        output = output + "0";
    }
}