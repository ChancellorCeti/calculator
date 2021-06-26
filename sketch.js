var n1;
var n2;
var b1;
var b2;
var b3;
var b4;
var n3;
var n4;
function setup() {
  createCanvas(400,400);
  n1=createInput();
  n1.position(5,60)
  n2=createInput();
  n2.position(200,60)
  b1=createButton("add");
  b1.positon(10,200);
  b1.mousePressed(add);
  b2=createButton("subtract");
  b2.position(100,200)
  b2.mousePressed(subtract);
  b3=createButton("divide");
  b3.position(200,200)
  b3.mousePressed(divide);
  b4=createButton("multiply");
  b4.position(300,200)
  b4.mousePressed(multiply);
textAlign(CENTER);
  textSize(15);
  
}

function draw() 
{
  background(200,10,200);
text("number1",70,50)
text("number2",270,50)
n3=parseInt(n1.value());
n4=parseInt(n2.value());

}
function add(){
  console.log(n3+n4);
}
function subtract(){
  console.log(n3-n4);
}
function multiply(){
  console.log(n3*n4);
}
function divide(){
  console.log(n3/n4);
}



