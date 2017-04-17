var canvas, ctx, w = window.innerWidth, h = window.innerHeight;
var position = {x:w/2,y:h/2,a:0}
var snowPos = [];
var wind, intensity;
var mx = 0, my = 0;
var dorn = 0;
var mount = 'rgba(135,206,235,1)';
var mountTp = 'white';
setUpCanvas();
createPos(500);


window.addEventListener("click", dayOrNight);
// window.onclick = function { dayOrNight()};

window.addEventListener("resize", reCanvas);
window.onload = function() {reCanvas()};

window.onmousemove = function(event) {
	mouses(event);
}

function dayOrNight() {
	if (dorn == 0) {
		document.body.style = "	background: #87CEEB; /* For browsers do not support gradients */ background: -webkit-linear-gradient(bottom, rgba(0,0,0,0), rgba(135,206,235,1)); /*For Safari 5.1 to 6.0 */ background: -o-linear-gradient(top, rgba(0,0,0,0), rgba(135,206,235,1)); /*For Firefox 3.6 to 15 */ background: linear-gradient(bottom, rgba(0,0,0,0), rgba(135,206,235,1)); /*For Standard syntax */";
		dorn = 1;
		mount = 'rgba(135,206,235,1)';
		mountTp = 'white';
	} else {
		document.body.style = "	background: #212121; /* For browsers do not support gradients */ background: -webkit-linear-gradient(bottom, #757575, #212121); /*For Safari 5.1 to 6.0 */ background: -o-linear-gradient(top, #757575, #212121); /*For Firefox 3.6 to 15 */ background: linear-gradient(bottom, #757575, #212121); /*For Standard syntax */";
		dorn = 0;
		mount = '#607D8B';
		mountTp ='#ECEFF1';
	}
}

function reCanvas() {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	animate();
}

function mouses(e) {
	if (e.clientX > mx) {
		wind = 1; // right
	} else if (e.clientX < mx) {
		wind = 2; // left
	} else {
		wind = 0;
	}
	mx = e.clientX;
}

function animate() {
	clear();
	drawMountains();
	drawAllShapes();
	requestAnimationFrame(function() {
		animate();
	});
}

function drawMountains() {
	ctx.beginPath();
	var wiw = window.innerWidth/2;
	var wih = window.innerHeight;
	ctx.lineWidth = 2.5;
	ctx.fillStyle = mount;
	ctx.moveTo(wiw-500, wih);
	ctx.lineTo(wiw-350, wih - 200);
	ctx.lineTo(wiw-200, wih - 100);
	ctx.lineTo(wiw, wih - 400);
	ctx.lineTo(wiw+200, wih - 100);
	ctx.lineTo(wiw+350, wih - 200);
	ctx.lineTo(wiw+500, wih);
	ctx.lineTo(wiw-500, wih);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = mountTp;
	ctx.moveTo(wiw, wih - 400);
	ctx.lineTo(wiw+65, wih - 300);
	ctx.lineTo(wiw+25, wih - 320);
	ctx.lineTo(wiw, wih - 300);
	ctx.lineTo(wiw-25, wih - 320);
	ctx.lineTo(wiw-65, wih - 300);
	ctx.lineTo(wiw, wih - 400);
	ctx.fill();
}


function backg() {
	ctx.beginPath();
	ctx.drawRect
}


function drawAllShapes() {
	for(var i=0; i < snowPos.length; i++) {
		drawShape(snowPos[i]);
		if (wind == 1) {
		// console.log("right");
			snowPos[i].x += snowPos[i].dx;
		} else if (wind == 2) {
			snowPos[i].x -= snowPos[i].dx;
		}

		snowPos[i].y += snowPos[i].dy;

		if (snowPos[i].y > h) {
			snowPos[i].y = 0;
		}

		if (snowPos[i].x > w) {
			snowPos[i].x = 0;
		} else if (snowPos[i].x < 0) {
			snowPos[i].x = w;
		}
	}
}

function createPos(n) {
	var snow;
	for(var i=0; i<n; i++) {
		var size = rand(1);
		snow = {
			x: rand(w),
			y: rand(h),
			a: 0,
			dx: 7*size,
			dy: 5*size,
			s: 1*size
		}
		snowPos.push(snow);
	}
}

function drawShape(p) {
	var savedPos = {};
	for (key in p) {
		savedPos[key] = p[key];
	}

	for(var i = 0; i < 8; i++) {
		forward(10*p.s, p);
		rotate(90,p);
		forward(1*p.s,p);
		rotate(90,p);
		forward(10*p.s,p);
		rotate(-135,p);
	}

	for(key in savedPos) {
		p[key] = savedPos[key];
	}
}

function rand_n(max) {
	return (2*max*Math.random())-max
}

function rand(max) {
	return max*Math.random()
}

function clear() {
	ctx.clearRect(0,0,w,h);
}

function forward(d,p) {
	var tx, ty;
	var deg = 2*Math.PI/360;
	tx = d*Math.cos(p.a*deg);
	ty = d*Math.sin(p.a*deg);

	ctx.beginPath();
	ctx.moveTo(p.x, p.y);
	ctx.lineTo(p.x+tx,p.y+ty);
	ctx.strokeStyle = "white";
	ctx.stroke();

	p.x = p.x+tx;
	p.y = p.y+ty;
}

function rotate(a, p) {
	p.a += a;
}

function setUpCanvas() {
	canvas = document.createElement("canvas");
	canvas.height = h;
	canvas.width = w;
	ctx = canvas.getContext("2d");
	document.getElementById("wrapper").appendChild(canvas);
}