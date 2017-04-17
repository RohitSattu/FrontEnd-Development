var a = {
	"owner":{"first":"jane", "last":"smith"},
	"age":29,
	"car":"suburu",
	"slogan":function(){console.log("zzzz")}
}


console.log("a.age: " + a.age);
// console.log("a[age]: " + a[age]); // not defined
console.log("a.slogan: " + a.slogan);
console.log("a.slogan(): " + a.slogan()); //console.log in console log (Not good) undefined
a.slogan()
// console.log("a.['car']" + a.["car"]); // ERRORRRRR
console.log(a.owner["last"]); 
console.log(a.owner.first);
var carr = a.car;
console.log("asdfas   " + carr);

// console.log("Code written by Rohit Sattu");

// var canvas;
// var ctx;
// var cWidth = 500;
// var cHeight = 500;
// var circles = {};
// var name;
// setupCanvas();

// for (var i = 0; i < 10; i++) {
// 	name = "c_"+i;
// 	circles[name] = {
// 		"x": rand(cWidth),
// 		"y": rand(cHeight),
// 		"r": rand(10)
// 	};
// }

// for (key in circles) {
// 	circle(circles[key].x, circles[key].y, circles[key].r);
// }

// window.onmousemove = function(event) {drawNow(event)};

// function drawNow(e) {

// 	for (key in circles) {
// 		circles[key].x = e.clientX;
// 		circles[key].y = e.clientY;
// 	}

// 	// for (var i = 0; i < 5000; i++) {
// 	// 	circle(rand(cWidth), rand(cHeight), rand(50));	
// 	// }
// 	// canCont.font = "100px arial";
// 	// canCont.fillStyle = "#000000";
// 	// canCont.fillText("ROHIT SATTU",0,250);
// }


// function circle(x, y, r) {
// 	ctx.beginPath();
// 	ctx.arc(rand(cWidth), rand(cHeight), rand(50), 0, 2 * Math.PI);
// 	ctx.strokeStyle = "rgba("+Math.floor(rand(255))+","+Math.floor(rand(255))+","+Math.floor(rand(255))+","+rand(1)+")";
// 	ctx.stroke();
// }

// function rand(x) {
// 	return x * Math.random();
// }

// function setupCanvas() {
// 	canvas = document.createElement("canvas");
// 	canvas.width = cWidth;
// 	canvas.height = cHeight;
// 	canvas.style.border = "1px solid";
// 	document.getElementById("wrapper").appendChild(canvas);
// 	ctx = canvas.getContext("2d");
// 	console.log("Canvas initialized");
// }