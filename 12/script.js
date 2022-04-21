

function printmonth(amountOfdays) {
  var output = "";
  console.log("MO|DI|MI|DO|FR|SA|SO|");
  for (let days = 1; days <= amountOfdays; days++) {
    if (days < 10) {
      output = output + " " + days + "|";
    } else {
      output = output + days + "|";
    }

    if (days % 7 == 0) {
      console.log(output);
      output = "";
    }
   
  }
  console.log(output);
}

printmonth(28);
printmonth(31)
