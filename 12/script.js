function printmonth(a) {
  var output = "";
  for (let days = 0; days < 31; days++) {
    
    output = output + days;
    if (days%7==0) {
      console.log(output);
      output="";
    }
    week = ""
  }
}


printmonth(30);


