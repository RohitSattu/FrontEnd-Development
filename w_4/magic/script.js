var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");

for (var i = 1; i < 100; i++) {
	draw100x100Rect(random(500), random(500), random(50));
	tri(random(500),random(500),random(50));
}


function random(x) {
	return Math.random() * x;
}

function draw100x100Rect(x, y, size) {
	context.beginPath();
	context.moveTo(x,y);
	context.lineTo(x+size,y);
	context.lineTo(x+size,y+size);
	context.lineTo(x,y+size);
	context.lineTo(x,y);
	context.fillStyle = "rgba("+Math.floor(random(255))+","+Math.floor(random(255))+","+Math.floor(random(255))+","+random(1)+")";
	context.fill();
	context.strokeStyle = "rgba("+Math.floor(random(255))+","+Math.floor(random(255))+","+Math.floor(random(255))+","+random(1)+")";
	context.stroke();	
}

function tri(x, y, size) {
	context.beginPath();
	context.moveTo(x,y);
	context.lineTo(x+size, y+size);
	context.lineTo(x-size,y+size);
	context.lineTo(x,y);
	context.fillStyle = "rgba("+Math.floor(random(255))+","+Math.floor(random(255))+","+Math.floor(random(255))+","+random(1)+")";
	context.fill();
	context.strokeStyle = "rgba("+Math.floor(random(255))+","+Math.floor(random(255))+","+Math.floor(random(255))+","+random(1)+")";
	context.stroke();
}
