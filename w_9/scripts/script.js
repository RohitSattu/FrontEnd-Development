var wrapper = document.getElementById("wrapper");
var canvas, ctx, counter = 0, h = 500, w = 500;
var col = {};
col.blue = "rgba(124, 174, 255, 1)";
var eqTri=0, sec =0;
setUpCanvas();
var p = {x:0,y:0};
var buf=0;

window.onmousedown = function(event) {
	buf = 1;
}

window.onmouseup = function(event) {
	buf = 0;
}


window.onmousemove = function(event) {
	if (buf) {
		p.x = event.clientX;
		p.y= event.clientY;
		shape(p.x, p.y, 100, 100);
	}
}

// var iterate = setInterval(function(){
// 	if (counter > 1000) {
// 		//clearInterval(iterate);
// 		clear();
// 		counter=0;
// 	}
// 	drawCircle(rand(counter),rand(h/2),rand(50), col.blue);
// 	counter++;
// }, 10);

function clear() {
	ctx.clearRect(0,0,w,h);
}

function rate() {
	eqTri = rand(500);
	shape(h/2, w/2, eqTri, eqTri);
	window.requestAnimationFrame(function() {
		
		rate();
		});
	if (sec > 180) {
		clear();
		sec=0;
	}
	sec++;
}

function rand(max) {
	return max * Math.random();
}

// function drawCircle(x,y,r,c) {
// 	ctx.beginPath();
// 	// arc(x,y,r,sAngle,yAngle)
// 	ctx.arc(x,y,r,0,2*Math.PI);
// 	ctx.strokeStyle = c;
// 	ctx.lineWidth = .4;
// 	ctx.stroke();
// }

function shape(x,y, h, w) {
	ctx.beginPath();
	ctx.moveTo(x,y-(h/2));
	ctx.lineTo(x+(w/2),y+(h/2));
	ctx.lineTo(x-(w/2),y+(h/2));
	ctx.lineTo(x,y-(h/2));
	// ctx.strokeStyle = "black";
	// ctx.stroke();
	ctx.fillStyle = "rgba("+Math.floor(rand(255))+","+Math.floor(rand(255))+","+Math.floor(rand(255))+","+rand(1)+")";
	ctx.fill();
}

function setUpCanvas() {
	canvas = document.createElement("canvas");
	canvas.height = h;
	canvas.width = w;
	canvas.id = "canvas_0";
	canvas.style.border = "5px solid black";
	ctx = canvas.getContext("2d");
	wrapper.appendChild(canvas);
}
