var canvas, ctx, w, h;
w = window.innerWidth;
h = window.innerHeight;



function randN(amp) {
	return (2*amp*Math.random())-amp/2;
}

function rand(x) {
	return x * Math.random();
}

function clear() {
	ctx.clearRect(0, 0, w, h);
}

function setUpCanvas() {
	canvas = document.createElement("canvas");
	canvas.height = h;
	canvas.width = w;
	ctx = canvas.getContext("2d");
	document.getElementById("wrapper").appendChild(canvas);
}