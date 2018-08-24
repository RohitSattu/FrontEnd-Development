// Code written by Rohit Sattu
var canvas = document.getElementById("drawingPad");
var context = canvas.getContext('2d');
var square = 100;
var i;

context.beginPath();
context.rect(100, 200, square, square);

context.fillStyle ='black';
context.fill();


context.lineWidth = 10;
context.strokeStyle = 'red';
context.stroke();

for (i = 0; i < 10; i++) {
  context.beginPath();
  context.lineWidth = 4;
  context.strokeStyle = 'blue';
  context.moveTo(0, 0);
  context.lineTo(100 + (random() * 100), 100);
  context.stroke();
}

context.beginPath();
context.arc();
