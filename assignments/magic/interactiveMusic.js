console.log("Code Written by Rohit Sattu");

var osc, envelope, fft; // variables for sound
var shapeArray = []; // shape array to hold all the circles
var selectedArray = []; // Select shape array (sorted)
var indNote = 0; // if any shape is selected then this is an index counter
var note = 0; // just a holder to start playing sounds.

// set up code // runs only once at the beginning 
function setup() {
  // create canvas with window size.
  createCanvas(windowWidth, windowHeight);

  // create shape array. Size is same as the midi value
  for (var i = 50; i <= 80; i = i + 2) {
    shapeArray.push(new interactiveMusic(i));
  }

  osc = new p5.SinOsc();
  // Instantiate the envelope
  envelope = new p5.Env();
  // set attackTime, decayTime, sustainRatio, releaseTime
  envelope.setADSR(0.001, 0.5, 0.1, 0.5);
  // set attackLevel, releaseLevel
  envelope.setRange(1, 0);
  // fft analyze: in case you need to analyze sound even more for visualization
  fft = new p5.FFT();
}

// this part repeats
function draw() {
  clear(); // clear screen
  // display and move shapes on the screen 
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].display();
    shapeArray[i].move();
  }

  // check if there are any shapes selected
  if (selectedArray.length > 0) {
    // 45 frames per second. 
    if (frameCount % 45 == 0 || frameCount == 1) {
      // convert midivalue to frequency and play.
      osc.freq(midiToFreq(selectedArray[indNote]));
      envelope.play(osc, 0, 0.1);
      // counter for selected shapes
      indNote = (indNote + 1) % selectedArray.length;
    }
  }
}


// triggers when mouse is pressed 
function mousePressed() {
  // if its the first time user pressed mouse then start playing sound.
  if (note == 0) {
    osc.start();
    note = 1;
  } 
  // go through all the shapes and check if the mouse was clicked inside any shape.
  for (var i = 0; i < shapeArray.length; i++) {
    shapeArray[i].clicked();
  }
}

// if the window is resized then adjust the canvas to window size.
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

// main interactive music object.
function interactiveMusic(dia) {
  // start shape at random place on the screen.
  this.x = random(width);
  this.y = random(height);
  //assign random speed, range 1 to 4,to the shape.
  this.xspeed = random(1,4);
  this.yspeed = random(1,4);
  // use parameter to set the diameter of the shape.
  this.diameter = dia;
  // convert midi value (diameter) to frequency.
  this.freq = midiToFreq(this.diameter);
  // initially selected is false.
  this.selected = false;
  
  this.clicked = function() {
    var d = dist(this.x, this.y, mouseX, mouseY);
    if (d < this.diameter) { // if mouse is clicked in the shape
      osc.freq(this.freq); // assign frequency
      if (this.selected) { // if shape was already selected then deselect (change color) and remove from selected array
        var index = selectedArray.indexOf(dia);
        if (index > -1) {
          selectedArray.splice(index, 1);
        }
        this.selected = false;
      } else { // if shape is not selected then select (change color) and add to selected array
        selectedArray.push(dia);
        this.selected = true;  
      }
      if (selectedArray.length > 0) {
        selectedArray.sort();
      }
      envelope.play(osc, 0, 0.1);
    }
  };
  this.move = function() {  
    // move the shape at this speed
    this.x = this.x + this.xspeed; 
    this.y = this.y + this.yspeed;

    // bounce of the walls (corners)
    if (this.x > windowWidth || this.x < 0)  {
      this.xspeed = -this.xspeed;
    }    
    if (this.y > windowHeight || this.y < 0) {
      this.yspeed = -this.yspeed;
    }
  }
  this.display = function() {
    // change color depending on selection
    if (this.selected) {
      fill('#405BA4');
    } else {
      fill('rgba(255,255,255, 0.1)');
    }
    // random stroke effect
    stroke(random(0, 250), random(0, 250), random(0, 250));
    // shape like a circle.
    ellipse(this.x, this.y, this.diameter, this.diameter);
  };
}



// https://p5js.org/reference/#/p5/windowResized
// https://p5js.org/examples/sound-oscillator-frequency.html
// https://www.youtube.com/watch?v=DEHsr4XicN8
// https://p5js.org/examples/sound-note-envelope.html
// https://p5js.org/examples/objects-array-of-objects.html
// https://p5js.org/reference/#/p5/rect