console.log("Code written by Rohit Sattu");

var aCan = document.getElementById("webArt");
var canCont = aCan.getContext("2d");
var aCanWidth = aCan.width;
var aCanHeight = aCan.height;
var ranR, ranG, ranB, ranO;
var ranX, ranY, ranW, ranH;
window.addEventListener("resize", reCanvas);
window.onload = function() {reCanvas()};

window.onmousemove = function() {drawNow()};
window.onclick = function() {drawNow()};
window.ontouchmove = function() {drawNow()};
window.ontouchstart = function() {drawNow()};

function drawNow() {
	canCont.clearRect(0, 0, aCan.width, aCan.height);
	
	for (var i = 0; i < 50; i++) {
		randomCircles();
		randomSqrs();
		ranEqTri();
	}
	for (var i = random(3); i < 4; i++) {
		canCont.font = ((aCanWidth/10)+i) + "px Nunito";
		canCont.fillStyle = "rgba("+ranR+","+ranG+","+ranB+","+ranO+")";
		canCont.fillText("ROHIT SATTU",0,aCanHeight/2);
	}
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
	ranO = random(.9);
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




// http://www.w3schools.com/jsref/prop_win_innerheight.asp
// http://www.w3schools.com/jsref/event_onresize.asp
// http://www.w3schools.com/jsref/dom_obj_event.asp
// http://www.html5canvastutorials.com/advanced/html5-clear-canvas/
