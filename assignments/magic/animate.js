console.log("Code written by Rohit Sattu");
var aboutCan = document.getElementById("about");
var aCan, canCont;
var aCanWidth;
var aCanHeight;
var ranR, ranG, ranB, ranO;
var ranX, ranY, ranW, ranH;
var distractorPox = 0, distractorPoy = 0;
var curX, curY, curdx, curdy;
var bunchOfColors = [];
var bunchOfNumbers = {
};

var tracker = 0;
var colorHolder;
for (var i = 0; i < 10; i++) {
	randomColor()
	colorHolder = "rgba("+ranR+","+ranG+","+ranB+",.7)";
	bunchOfColors.push(colorHolder);
}

setUpCanvas();
window.addEventListener("resize", reCanvas);
window.onload = function() {reCanvas()};
window.onmousemove = function(event) {tracker=0;drawNow(); if (window.innerWidth < 1090) {follow(event);}};
window.onclick = function(event) {tracker=0;drawNow(); if (window.innerWidth < 1090) {follow(event);}};
window.ontouchmove = function(event) {tracker=0;drawNow(); if (window.innerWidth < 1090) {follow(event);}};
window.ontouchstart = function(event) {tracker=0;drawNow(); if (window.innerWidth < 1090) {follow(event);}};

colorHolder = 0;
var timer = setInterval(function() {
	if (colorHolder < 9) {
		colorHolder++;
	} else {
		colorHolder = 0;
	}
	canCont.font = "10px Nunito";
	// canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
	canCont.fillStyle = bunchOfColors[colorHolder];
	canCont.fillText(tracker,random(aCanWidth),random(aCanHeight));
	if (tracker > 60 && tracker < aCanHeight) {
		drawCircle(tracker/100,tracker/100,tracker, bunchOfColors[colorHolder]);
	}
	if (tracker > aCanHeight) {
		drawCircle(random(aCanWidth),random(tracker),25, bunchOfColors[colorHolder]);
		canCont.font = "20px Nunito";
		randomColor();
		canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
		canCont.fillText(random(tracker).toString(36),random(aCanWidth),random(aCanHeight));
	}
	if (tracker > 400 && tracker < aCanHeight) {
		drawCircle(tracker,(aCanWidth/2),200, bunchOfColors[colorHolder]);
		canCont.font = (aCanWidth/10) + "px Nunito";
		randomColor();
		canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
		canCont.fillText("ROHIT SATTU",0,aCanHeight/2);
	}
	if (tracker > (aCanHeight+10)) {
		tracker = 0;
		drawNow();
	}
	tracker++;
},100);

function setUpCanvas() {
	aCan = document.createElement("canvas");
	aCanWidth = window.innerWidth;
	aCanHeight = window.innerHeight;
	canCont = aCan.getContext("2d");
	aCan.style.margin = "auto";
	aboutCan.appendChild(aCan);
}

function follow(event) {
	curdx = event.clientX;
	curdy = event.clientY;
	stalker(curdx,curdy, 25);
	curX = curdx;
	curY = curdy;
}

function stalker(x,y,r) {
	for (var i = 0; i < 10; i++) {
		canCont.beginPath();
		canCont.arc(x+random(i), y+random(i), i*50, 0, 2*Math.PI);
		canCont.strokeStyle = "rgba("+ranR+","+ranG+","+ranB+",1)";
		canCont.stroke();
	}
}

function drawCircle(x,y,r,c) {
	canCont.beginPath();
	// arc(x,y,r,sAngle,yAngle)
	canCont.arc(x,y,r,0,2*Math.PI);
	canCont.strokeStyle = c;
	canCont.lineWidth = .4;
	canCont.stroke();
}

/* Background */
function drawNow() {
	canCont.clearRect(0, 0, aCan.width, aCan.height);
	
	for (var i = 0; i < 100; i++) {
		randomCircles();
		randomSqrs();
		ranEqTri();
	}
	
	canCont.font = (aCanWidth/10) + "px Nunito";
	// canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
	canCont.fillStyle = "Black";
	canCont.fillText("ROHIT SATTU",0,aCanHeight/2);
}

function randomXYWH() {
	ranX = random(aCanWidth);
	ranY = random(aCanHeight);
	ranW = random(50);
	ranH = random(50);
}

function randomColor() {
	ranR = Math.floor(random(255));
	ranG = Math.floor(random(255));
	ranB = Math.floor(random(255));
	ranO = random(.2);
}

function randomCircles() {
	// canCont.arc(x,y,r,sAngle,eAngle,counterclockwise);
	randomXYWH();
	randomColor();
	var x = ranX;
	var y = ranY;
	var r = ranW;
	canCont.beginPath();
	canCont.arc(x, y, r, 0, 2*Math.PI);
	if (r < 20) {
		canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
		canCont.fill();
	}
	canCont.strokeStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
	canCont.stroke();
}

function randomSqrs(x, y, size) {
	randomXYWH();
	randomColor();
	var x = ranX;
	var y = ranY;
	var size = ranW;
	canCont.beginPath();
	canCont.moveTo(x,y);
	canCont.lineTo(x+size,y);
	canCont.lineTo(x+size,y+size);
	canCont.lineTo(x,y+size);
	canCont.lineTo(x,y);
	if (size < 20) {
		canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
		canCont.fill();
	}
	canCont.strokeStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
	canCont.stroke();
}

function ranEqTri() {
	randomXYWH();
	randomColor();
	var x = ranX;
	var y = ranY;
	var size = ranW;
	canCont.beginPath();
	canCont.moveTo(x,y);
	canCont.lineTo(x+size, y+size);
	canCont.lineTo(x-size,y+size);
	canCont.lineTo(x,y);
	if (size < 20) {
		canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
		canCont.fill();
	}
	canCont.strokeStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
	canCont.stroke();
}

function random(x) {
	return Math.random() * x;
}

function reCanvas() {
	canCont.clearRect(0, 0, aCan.width, aCan.height);
	if (window.innerWidth < 1090) {
		aCan.width = window.innerWidth;
		aCan.height = window.innerHeight;
	} else {
		aCan.width = 1080;
		aCan.height = window.innerHeight;
	}

	aCanWidth = aCan.width;
	aCanHeight = aCan.height;
	drawNow();
	console.log("Canvas updated to width: "+ aCan.width + " height: " + aCan.height);
}


// http://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
// https://www.w3schools.com/jsref/event_clientx.asp
// http://www.w3schools.com/jsref/prop_win_innerheight.asp
// http://www.w3schools.com/jsref/event_onresize.asp
// http://www.w3schools.com/jsref/dom_obj_event.asp
// http://www.html5canvastutorials.com/advanced/html5-clear-canvas/
