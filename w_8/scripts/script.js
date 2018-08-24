var wrapper = document.getElementById("wrapper");
var canvas, ctx, counter = 0, h = 500, w = 500;
var col = {};
col.blue = "rgba(124, 174, 255, 1)";

setUpCanvas();

var iterate = setInterval(function(){
	if (counter > 1000) {
		//clearInterval(iterate);
		clear();
		counter=0;
	}
	drawCircle(rand(counter),rand(h/2),rand(50), col.blue);
	counter++;
}, 10);

function clear() {
	ctx.clearRect(0,0,w,h);
}

function rand(max) {
	return max * Math.random();
}

function drawCircle(x,y,r,c) {
	ctx.beginPath();
	// arc(x,y,r,sAngle,yAngle)
	ctx.arc(x,y,r,0,2*Math.PI);
	ctx.strokeStyle = c;
	ctx.lineWidth = .4;
	ctx.stroke();
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
