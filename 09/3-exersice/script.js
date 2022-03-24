
let a = "";
let b = true;
let  distance = "";
let output = "";
let isX = true;



for (let index = 1; index < 10; index++) {
  if (index< 3) {
    distance += "X";
  } 
  else if (index==3){
    distance += " ";
  }
  else if (index<5){
    distance+= "X";
  }
  else if (index<6){
    distance+= " ";
  }
  else if (index<8){
    distance+= "X";
  }
  else if (index<9){
    distance+= " ";
  }
  else if (index<10){
    distance+= "X";
  }
}

console.log(distance);
    
  
let a2 = "";
let b2= true;
let paragraph2 = ""
for (let index = 1; index < 10; index++) {

   if (index==3){
    paragraph2 += " ";
  }
  else if (index<5){
    paragraph2+= " ";
  }
  else if (index<6){
    paragraph2+= " ";
  }
  else if (index<8){
    paragraph2+= " ";
  }
  else if (index<9){
    paragraph2+= " ";
  }
  else if (index<10){
    paragraph2+= "X";
  }
}


console.log(paragraph2);

let a1 = "";
let b1 = true;
let paragraph3 = "";

for (let index = 1; index < 10; index++) {
  if (index == 1) {
     paragraph3+= "X";
  } 
  else if (index==2){
    paragraph3 += " ";
  }
  else if (index==3){
    paragraph3 += " ";
  }
  else if (index<=5){
    paragraph3+= "X";
  }
  else if (index<6){
    paragraph3+= " ";
  }
  else if (index<7){
    paragraph3+= "X";
  }
  else if (index<9){
    paragraph3+= " ";
  }
  else if (index<10){
    paragraph3+= "X";
  }
}

console.log(paragraph3);

let a3 = "";
let b3 = true;
let word3 = "";

for (let index = 1; index < 10; index++) {
  if (index ==1 ){
    word3 += "X";
  } 
  else if (index==3){
    word3 += " ";
  }
  else if (index<5){
    word3+= " ";
  }
  else if (index<6){
    word3+= " ";
  }
  else if (index<8){
    word3+= " ";
  }
  else if (index<9){
    word3+= " ";
  }
  else if (index<10){
    word3+= "X";
  }
}

console.log(word3);