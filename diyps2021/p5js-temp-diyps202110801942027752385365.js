var img;
var img2; 
var img3;
var img4; //white eraser
var img5; //grey
var initials ='jm'; // your initials
var choice = '1'; // starting choice, so it is not empty
var screenbg = 240; // off white background

function preload() {
// preload() runs once, it may make you wait
  img = loadImage('portrait.png');  // cat.jpg needs to be next to this .js file
  img2 = loadImage('whiteeraser.png');
  img3 = loadImage('averageface.png');
  img4 = loadImage('averagemaleface.png');
  img5 = loadImage('grey.png');
// you can link to an image on your github account
// img = loadImage('https://dma-git.github.io/images/74.png');
}

function setup() {
createCanvas(600, 400);  // canvas size
background(screenbg);   // use our background screen color
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

 if (toolChoice == '1' ) {  // first tool
   
    stroke(01);
    line(mouseX, mouseY, pmouseX, pmouseY);
    
  } else if (toolChoice == '2') { // second tool

    stroke(0,0,0,250);
    strokeWeight(3);
    line(300,200, mouseX, mouseY);
    strokeWeight(1);
    
  } else if (toolChoice == '3') { // grey tool
    image(img5,mouseX-25, mouseY-25, 50,50);
    fill(100, 200, 100);
    
  } else if (toolChoice == 'e') { //eraser
    image(img2, mouseX-15, mouseY-15, 30, 30);
    
  } else if (toolChoice == '4') { //portrait
    image(img,mouseX-50, mouseY-50, 125,125);
    fill(100, 200, 100);
    
  } else if (toolChoice == '5') { //average female face
    image(img3,mouseX-50, mouseY-50, 125,125);
    fill(100, 200, 100);
    
  } else if (toolChoice == '6') { //average male face
    image(img4,mouseX-50, mouseY-50, 125,125);
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
    background(screenbg); // set the screen back to the background color
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
