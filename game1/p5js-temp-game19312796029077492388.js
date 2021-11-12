var ballx = 300; 
var bally = 300;
var ballSize = 70;
var score = 0;
var gameState = "L1";

function setup() {
createCanvas(600,600);
textAlign (CENTER);
textSize(25);
} //end set up


function draw() {
  if(gameState == "L1"){
    levelOne();
  }
  if(gameState == "L2"){
    levelTwo();
  }
  if(gameState == "L3"){
     levelThree();
  }
  if(gameState == "L4"){
     levelFour();
  }
  if(gameState == "L5"){
     levelFive();
  }
  if(gameState == "L6"){
     levelSix();
  }
  if(gameState == "L7"){
     levelSeven();
  }
  if(gameState == "L8"){
     levelEight();
  }
  if(gameState == "L9"){
     levelNine();
  }
  if(gameState == "L10"){
     levelTen();
    }
  if(gameState == "L11"){
     levelEleven();
    }
  if(gameState == "L12"){
     levelTwelve();
    }
  if(gameState == "L13"){
     levelThirteen();
}
  fill(219, 50, 146);
  text(("Score: " + score), width/2, 40); 
} //end of draw

function levelOne() {
   background(230, 255, 204);
   fill(219, 50, 146);
   text("Level 1", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
   if(score>= 2){
     gameState = "L2";
   }
   noStroke();
   fill(231, 252, 194);
   ellipse (ballx,bally, ballSize, ballSize);   
    
} //end level one ======================================

function levelTwo() {
   background(213, 255, 204);
   fill(219, 50, 146); 
   text("Level 2", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 4){
     gameState = "L3";
   }
   noStroke();
   fill(217, 252, 189);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level two ======================================

function levelThree() {
   background(206, 255, 204);
   fill(219, 50, 146);
   text("Level 3", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 6){
     gameState = "L4";
   }
   noStroke();
   fill(196, 255, 206);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level three ======================================

function levelFour() {
   background(204, 255, 214);
   fill(219, 50, 146);
   text("Level 4", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 8){
     gameState = "L5";
   }
   noStroke();
   fill(199, 255, 200);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level four ======================================

function levelFive() {
   background(204, 255, 221);
   fill(219, 50, 146);
   text("Level 5", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 10){
     gameState = "L6";
   }
   noStroke();
   fill(198, 247, 214);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level five ======================================

function levelSix() {
   background(192, 252, 219);
   fill(219, 50, 146);
   text("Level 6", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 12){
     gameState = "L7";
   }
   noStroke();
   fill(197, 252, 255);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level six ======================================

function levelSeven() {
   background(182, 250, 213);
   fill(219, 50, 146);
   text("Level 7", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 14){
     gameState = "L8";
   }
   noStroke();
   fill(189, 252, 200);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level seven ======================================

function levelEight() {
   background(182, 250, 214);
   fill(219, 50, 146);
   text("Level 8", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 16){
     gameState = "L9";
   }
   noStroke();
   fill(182, 240, 220);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level eight ======================================

function levelNine() {
   background(165, 240, 210);
   fill(219, 50, 146);
   text("Level 9", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 18){
     gameState = "L10";
   }
   noStroke();
   fill(162, 242, 240);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level nine ======================================

function levelTen() {
   background(162, 219, 208);
   fill(219, 50, 146);
   text("Level 10", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 20){
     gameState = "L11";
   }
   noStroke();
   fill(163, 227, 230);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level ten ======================================

function levelEleven() {
   background(162, 222, 235);
   fill(219, 50, 146);
   text("Level 11", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 22){
     gameState = "L12";
   }
   noStroke();
   fill(153, 229, 232);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level eleven ======================================

function levelTwelve() {
   background(140, 192, 230);
   fill(219, 50, 146);
   text("Level 12", width/2, height-30);
   var distToBall = dist(ballx, bally, mouseX, mouseY);
   if(distToBall<ballSize/2){
     ballx = random(width);
     bally = random(height);
     score = score + 1;
   }
      if(score>= 24){
     gameState = "L13";
   }
   noStroke();
   fill(152, 186, 237);
   ellipse (ballx,bally, ballSize, ballSize);
} //end level twelve ======================================
