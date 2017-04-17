console.log("Suppp");

var canvas;
var ctx;
var w = 500;
var h = 500;
var prevX = 0, prevY = 0, newX, newY;
var z = true;
var col = ["green", 'blue', 'purple', 'silver', 'grey'];
var positions = []

for (var i = 0; i < 10; i++) {
	var oStyle = {
		x: 100,
		y: 100,
		r: 50,
		c: "purple"
	};
}

setUpCanvas();


setInterval(function() {
	clear();
	drawCircle(oStyle.x, oStyle.y, oStyle.r, oStyle.c);
	console.log(oStyle.x);
	if (oStyle.x > 400) {
		oStyle.x-=1;
	} else if (oStyle.x < 400) {
		oStyle.x+=1;
	} else {
		oStyle.x = 100;
	}
}, 10);

// window.onmousemove = function(rat) { dosomething(rat)};
// window.onclick = function(rat) { paintIt(rat)};

// function paintIt(rat) {
// 	var x = rat.clientX;
// 	var y = rat.clientY;
// 	if (z == true) {
// 		prevX = x;
// 		prevY = y;
// 		z = false;
// 	}
// 	newX = x;
// 	newY = y;
// 	ctx.beginPath();
// 	ctx.moveTo(prevX,prevY);
// 	ctx.lineTo(newX,newX);
// 	ctx.stroke();
// 	prevX = x;
// 	prevY = y;
// 	ctx.clearRect(0,0,w,h);
// }
// ctx.beginPath();
// function dosomething(rat) {
// 	// drawCircle(rand(w), rand(h), rand(50));
// 	// newX = rat.clientX;
// 	// newY = rat.clientY;
// 	// ctx.moveTo(prevX, prevY);
// 	// ctx.lineTo(newX,newY);
// 	// ctx.strokeStyle = "white";
// 	// ctx.stroke();
// 	// prevX = rat.clientX;
// 	// prevY = rat.clientY;
// }

function clear() {
	ctx.clearRect(0,0,w,h);
}

function drawCircle(x,y,r) {
	ctx.beginPath();
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.fill();
}

function rand(max) {
	return Math.random() * max;
}

function setUpCanvas() {
	canvas = document.createElement("canvas");
	canvas.width = w;
	canvas.height = h;
	canvas.style.border = "1px solid grey";
	ctx = canvas.getContext("2d");
	document.getElementById("wrapper").appendChild(canvas);
}