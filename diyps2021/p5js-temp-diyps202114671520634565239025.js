var img;
var img2; 
var img3;
var img4; 
var img5;
var img6; 
var img7;
var img8;
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('diyps_template.png');  // cat.jpg needs to be next to this .js file
  img2 = loadImage('whiteeraser.png');
  img3 = loadImage('averageface.png');
  img4 = loadImage('img4.png');
  img5 = loadImage('averagemaleface.png');
  img6 = loadImage('grey.png');
  img7 = loadImage('img7.png');
  img8 = loadImage('img8.png');
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(800, 600);  // canvas size
background(img);   // use our background screen color
}

function draw() {
  if (keyIsPressed) {
    choice = key; // set choice to the key that was pressed
    clear_print(); // check to see if it is clear screen or save image
  }
  if (mouseIsPressed){
    newkeyChoice(choice);  // if the mouse is pressed call newkeyChoice
  }
}

function newkeyChoice(toolChoice) { //toolchoice is the key that was pressed
  // the key mapping if statements that you can change to do anything you want.
  // just make sure each key option has the a stroke or fill and then what type of 
  // graphic function

 if (toolChoice == '1' ) {  // drawing
   
    stroke(4);
    line(mouseX, mouseY, pmouseX, pmouseY);
    strokeWeight(1);
    
  } else if (toolChoice == '2') { // eraser
    image(img2, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '3') { //5th portrait
    image(img3,mouseX-15, mouseY-15, 30, 30);
    fill(100, 200, 100);
    
  } else if (toolChoice == '4') { //6th average female face
    image(img4,mouseX-15, mouseY-15, 30, 30);
    fill(100, 200, 100);
    
  } else if (toolChoice == '5') { //7th average male face
    image(img5,mouseX-15, mouseY-15, 30, 30);
    fill(100, 200, 100);
    
  }else if (toolChoice == '6') { //7th average male face
    image(img6,mouseX-15, mouseY-15, 30, 30);
    fill(100, 200, 100);

  }else if (toolChoice == '7') { //7th average male face
    image(img7,mouseX-15, mouseY-15, 30, 30);
    fill(100, 200, 100);
    
  }else if (toolChoice == '8') { //7th average male face
    image(img8,mouseX-15, mouseY-15, 30, 30);
    fill(100, 200, 100);
  }
 }
 
function testbox(r, g, b) {
// this is a test function that will show you how you can put your own functions into the sketch
  x = mouseX;
  y = mouseY;
  fill(r, g, b);
  rect(x-50, y-50, 100, 100);

}

function clear_print() {
// this will do one of two things, x clears the screen by resetting the background
// p calls the routine saveme, which saves a copy of the screen
  if (key == 'x' || key == 'X') {
    background(img); // set the screen back to the background color
  } else if (key == 'p' || key == 'P') {
     saveme();  // call saveme which saves an image of the screen
     key = ""; // reset the key so that it doesn't keep taking screenshots
  }
}

function saveme(){
    //this will save the name as the intials, date, time and a millis counting number.
    // it will always be larger in value then the last one.
    filename=initials+day() + hour() + minute() +second();
    saveCanvas(filename, 'jpg');
 // }
}
