
var output = "";
for (let index = 1; index < 15; index++) {
  if (index % 5==0) {
    console.log(output);
    console.log("");
    output="";}
else if(index % 7==0) {
        console.log(output);
        console.log("");
        output="";

  } else {
    output = output + "X";
  }
}
if(index % 7==0) {
    console.log(output);
    console.log("");
    output="";}

