console.log("conditions");

if (10 > 2) {
    console.log("10 is greater than 2");
} else {
    console.log("10 is less than 2");
}

if (10 < 2) {
    console.log("10 is greater");
} else {
    console.log("10 is smaller");
}



console.log("Question");
var unitprice = 200;
var quantity = 5;


var amount = unitprice * quantity;
console.log("The amount is = " + amount);
if (amount >= 1000 && quantity>=5) {
    var discount = amount * (10 / 100);
    console.log("the discount is = " + discount)
    var finalAmount = amount - discount;
    console.log("the final payment after dicount is = " + finalAmount);
}else{
    console.log("Not enough amount to get 10% discount");
    console.log("so your final payment is "+amount);
}


var per=78;
var grade="";
if(per>90){
    grade="A";
}else if(per>80){
    grade="B";
}else if(per>70){
    grade="C";
}else if(per>60){
    grade="D";
}else if(per>50){
    grade="E";
}else{
    grade="F";
}
console.log("Grade = "+grade);

// AND = &&
// OR=||
// NOT=!

var f="admin";
if(!(isNaN(f))){
    console.log(f);
}
if(isNaN(f)){
    console.log(f);
}

var mobile=2345678190;
if(!(isNaN(mobile))){
    console.log(mobile)
}
if(isNaN(mobile)){
    console.log(mobile);
}

// ternary 
var n1=10;
var n2=35;
 var max=(n1>n2)?n1:n2;
 console.log("max = "+max);

//  1.start value;
//2. end Value
//3.increment/decrement//

console.log("Increment")
var x=0;
while(x<5){
    console.log(x);
    x++;
}
console.log("decrement:")

while(x>=0){
    console.log(x);
    x--;
}