var canvas, ctx, w = window.innerWidth, h = window.innerHeight;
var position = {x:w/2,y:h/2,a:0}
var snowPos = [];
var wind, intensity;


setUpCanvas();
createPos(500);

window.addEventListener("resize", reCanvas);
window.onload = function() {reCanvas()};

window.onmousemove = function(event) {
	mouses(event);
}


function reCanvas() {
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	animate();
}

function mouses(e) {
	if (e.clientX > window.innerWidth/2) {
		wind = 1; // right
	} else if (e.clientX < window.innerWidth/2) {
		wind = 2; // left
	} else {
		wind = 0;
	}
}

function animate() {
	clear();
	drawMountains();
	drawAllShapes();
	requestAnimationFrame(function() {
		animate();
	});
	w = window.innerWidth 
	h = window.innerHeight;
}

function drawMountains() {
	ctx.beginPath();
	ctx.lineWidth = 2.5;
	ctx.fillStyle = 'rgba(135,206,235,1)';
	ctx.moveTo((window.innerWidth/2)-500, window.innerHeight);
	ctx.lineTo((window.innerWidth/2)-350, window.innerHeight - 200);
	ctx.lineTo((window.innerWidth/2)-200, window.innerHeight - 100);
	ctx.lineTo((window.innerWidth/2), window.innerHeight - 400);
	ctx.lineTo((window.innerWidth/2)+200, window.innerHeight - 100);
	ctx.lineTo((window.innerWidth/2)+350, window.innerHeight - 200);
	ctx.lineTo((window.innerWidth/2)+500, window.innerHeight);
	ctx.lineTo((window.innerWidth/2)-500, window.innerHeight);
	ctx.fill();
	ctx.beginPath();
	ctx.fillStyle = "white";
	ctx.moveTo((window.innerWidth/2), window.innerHeight - 400);
	ctx.lineTo((window.innerWidth/2)+65, window.innerHeight - 300);
	ctx.lineTo((window.innerWidth/2)+25, window.innerHeight - 320);
	ctx.lineTo((window.innerWidth/2), window.innerHeight - 300);
	ctx.lineTo((window.innerWidth/2)-25, window.innerHeight - 320);
	ctx.lineTo((window.innerWidth/2)-65, window.innerHeight - 300);
	ctx.lineTo((window.innerWidth/2), window.innerHeight - 400);
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
			dx: 1/size,
			dy: 1/size,
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
	canvas.height = window.innerHeight;
	canvas.width = window.innerWidth;
	ctx = canvas.getContext("2d");
	document.getElementById("wrapper").appendChild(canvas);
}