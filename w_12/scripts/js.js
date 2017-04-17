var counter = 0;
var condition = 0;
var c1 = {x:w/4, y:h/2, r:10, d:3, a:0, c:"red"};
var c2 = {x:w/2, y:h/4, r:10, d:3, a:0, c:"blue"};
var degree = 2*Math.PI/260;
var returnedCods1, returnedCods2;

setUpCanvas();
animationLoop();

function animationLoop() {
	drawCircle(c1);
	drawCircle(c2);
	returnedCods1 = updateCods(c1);
	returnedCods2 = updateCods(c2);
	c1.x += returnedCods1[0];
	c1.y += returnedCods1[1];
	c1.a += randN(1);

	c2.x += returnedCods2[0];
	c2.y += returnedCods2[1];
	c2.a += randN(1);

	if (c1.x > w-c1.r ||  c1.x < 0+c1.r || c1.y > h-c1.r  ||  c1.y < 0+c1.r) {
		c1.a += 180;
	}
	
	if (c2.x > w-c2.r  ||  c2.x < 0+c1.r || c2.y > h-c1.r  ||  c2.y < 0+c1.r) {
		c2.a += 180;
	}

	requestAnimationFrame(function() {
		animationLoop();
	})
}

function drawCircle(pos) {
	ctx.beginPath();
	ctx.arc(pos.x,pos.y,pos.r,0,2*Math.PI);
	ctx.strokeStyle = pos.c;
	ctx.lineWidth = 3;
	ctx.stroke();
	// pos.x+=2;
}

function updateCods(pos) {
	var dx, dy, array;
	dx = pos.d * Math.cos(pos.a * degree);
	dy = pos.d * Math.sin(pos.a * degree);
	array = [dx, dy];
	return array;
}