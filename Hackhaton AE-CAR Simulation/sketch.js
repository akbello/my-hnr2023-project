var car_x;
var car_y;
var floorPos_y;
var count;

var pos;

var text_given;
var start;

function preload(){
    img = loadImage("car1.png");
}

function setup()
{
    createCanvas(1000, 600);

    floorPos_y = 500;
    car_x = width/2 - 190;
    car_y = floorPos_y - 105;

    car_speed = 0;
    pos = 0;
    count = 0;
    
    text_given = " ";
    start = false;

    img = loadImage('car1.png');

}

function draw()
{
    background(173,216,230);
    
    if(start == true){
        startGame();
    }
    else{
        intro();
    }
    
   
}

function keyPressed(){
    if(keyCode == 13){
        start = true;
    }
}

function intro(){
    fill(255,255,255,125);
    rect(250, 170, 500,250);
    fill(0);
    textSize(35);
    text("Æ-CAR SIMULATION",330, 220);
    textSize(20);
    text("Press Enter to Continue",390, 270);
    textSize(20);
    text("Speed could be seen in left-top corner",325, 310);
    textSize(15);
    text("Left Key = BRAKE",320, 390);
    text("Right Key = SPEED",550, 390);
}
function startGame(){
    
    //INTERACTION CODE
    //RANDOM SPEED
    if (pos < -1200)
    {
        pos = 1100;
    }
    
    fill(105);
    rect(0, floorPos_y, width, height);
    drawBuilding3(pos);
    drawBuilding1(pos);
    drawBuilding2(pos);
    drawBuilding4(pos);
    drawBuilding5(pos);
    drawtree1(pos);

    //change based on car speed
    pos -= 3;

    //drawCar(); self-drawing car

    image(img, car_x,car_y,350,210);
    

    if(frameCount % 60 == 0){
        var speed_random = random(0,30);
    }
    
    //CONDITIONAL STATEMENT FOR SPEED
    if(speed_random >=1 && speed_random <= 10){
        car_speed = 35;
        text_given = " ";
    }
    else if(speed_random > 10 && speed_random <= 20){
        car_speed = 45;
        text_given = " ";
    }
    else if(speed_random > 20 && speed_random <= 30){
        car_speed = 60;
        text_given = "CAREFUl !!! BRAKE !!!";
    }
    
    else if(keyIsDown(LEFT_ARROW)){
        pos -= 1;
        car_speed = 10;
        count = 0;
        text_given = "BRAKE";
    }
   else if(keyIsDown(RIGHT_ARROW)){
        pos -= 12;
        car_speed = 80;
        text_given = "DANGER !!!";
        count+=1;
       //if too long, slow the speed
       if(count > 50){
            pos +=10;
            car_speed = 45;
            speed_random = 25;
            text_given = "SLOW !!!";
        }
    }

    fill(0);
    text("Speed: " + car_speed + " km/h", 20,40);
    fill(255,0,0);
    textSize(30);
    text(text_given, width/2-90,40); 
    
    //CHANGE OF SPEED BACKGROUND
    if(car_speed == 45){
        pos-=3;
    }
    else if(car_speed == 60){
        pos-=8;
    }

    
}
function keyReleased(){
    if(keyCode == 39){
        count = 0;
    }
}

/* self-drawing car
function drawCar(){
    noStroke();
    fill(254,209,48);
    rect(car_x, car_y, 150,80); //car body
    triangle(car_x + 150, car_y + 20, car_x + 150, car_y + 80, car_x + 200, car_y + 80);
    fill(173,216,230);
    //noStroke();
    //rect(car_x + 190, car_y + 70, 30, 30);
    strokeWeight(1);
    stroke(0);
    fill(255,255,255);
    rect(car_x + 160, car_y + 50, 10, 10); //car window
    fill(0);
    ellipse(car_x+30, car_y+90, 32,32); //car tire outer
    ellipse(car_x+140, car_y+90, 32,32);
    fill("#b7b7b7");
    ellipse(car_x+30, car_y+90, 18,18); //car tire inner
    ellipse(car_x+140, car_y+90, 18,18);
}
*/

function drawBuilding1(x)
{

    fill(55, 100, 200);
    rect(width / 2 - 300 + x, floorPos_y - 350, 170, 350);
    fill(255, 255, 255);
    rect(width / 2 - 270 + x, floorPos_y - 320, 40, 40);
    rect(width / 2 - 200 + x, floorPos_y - 320, 40, 40);

    var w_x1 = width / 2 - 270 + x;
    var w_x2 = width / 2 - 200 + x;
    var w_y = floorPos_y - 320;

    for (let i = 0; i < 6; i += 1)
    {
        if (i % 2 == 0)
        {
            w_y += 70
            rect(w_x1, w_y, 40, 40);
        }
        else
        {
            rect(w_x2, w_y, 40, 40);
        }
    }
    

}

function drawBuilding2(x)
{
    fill(200, 130, 55);
    rect(width / 2 - 500 + x, floorPos_y - 250, 170, 250);
    fill(255, 255, 255);
    rect(width / 2 - 470 + x, floorPos_y - 220, 40, 40);
    rect(width / 2 - 400 + x, floorPos_y - 220, 40, 40);

    var w_x1 = width / 2 - 470 + x;
    var w_x2 = width / 2 - 400 + x;
    var w_y = floorPos_y - 220;

    for (let i = 0; i < 4; i += 1)
    {
        if (i % 2 == 0)
        {
            w_y += 70
            rect(w_x1, w_y, 40, 40);
        }
        else
        {
            rect(w_x2, w_y, 40, 40);
        }
    }
}

function drawBuilding3(x)
{
    fill(123, 234, 70);
    rect(width / 2 - 350 + x, floorPos_y - 450, 170, 450);
    fill(255, 255, 255);
    rect(width / 2 - 320 + x, floorPos_y - 420, 40, 60);
    rect(width / 2 - 250 + x, floorPos_y - 420, 40, 60);

    var w_x1 = width / 2 - 320 + x;
    var w_x2 = width / 2 - 250 + x;
    var w_y = floorPos_y - 420;

    for (let i = 0; i < 6; i += 1)
    {
        if (i % 2 == 0)
        {
            w_y += 90;
            rect(w_x1, w_y, 40, 60);
        }
        else
        {
            rect(w_x2, w_y, 40, 60);
        }
    }
}

function drawBuilding4(x)
{
    fill(225, 30, 80);
    rect(width / 2 - 50 + x, floorPos_y - 450, 170, 450);
    fill(255, 255, 255);
    rect(width / 2 - 20 + x, floorPos_y - 420, 110, 110);
    
    var w_x1 = width / 2 - 20 + x;
    var w_y = floorPos_y - 420;

    for (let i = 0; i < 2; i += 1)
    {
        w_y += 70;
        rect(w_x1, w_y, 110, 110);
    }
}

function drawBuilding5(x)
{
    fill(150, 100, 225);
    rect(width / 2 + 50 + x, floorPos_y - 150, 130, 150);
    fill(255, 255, 255);
    rect(width / 2 + 70 + x, floorPos_y - 120, 40, 40);
    rect(width / 2 + 120 + x, floorPos_y - 120, 40, 40);

    var w_x1 = width / 2 + 70 + x;
    var w_x2 = width / 2 + 120 + x;
    var w_y = floorPos_y - 120;

    for (let i = 0; i < 2; i += 1)
    {
        if (i % 2 == 0)
        {
            w_y += 70;
            rect(w_x1, w_y, 40, 40);
        }
        else
        {
            rect(w_x2, w_y, 40, 40);
        }
    }
}

function drawtree1(x)
{
    fill(102, 61, 0);
    rect(width / 2 + 400 + x, floorPos_y - 200, 30, 200);

    fill(0, 153, 0);
    ellipse(width / 2 + 415 + x, floorPos_y - 200, 150, 150);

    fill(102, 71, 0);
    rect(width / 2 + 450 + x, floorPos_y - 200, 30, 200);

    fill(0, 200, 0);
    ellipse(width / 2 + 465 + x, floorPos_y - 200, 150, 150);

    fill(102, 51, 0);
    rect(width / 2 + 550 + x, floorPos_y - 150, 30, 150);

    fill(0, 150, 0);
    ellipse(width / 2 + 565 + x, floorPos_y - 150, 150, 150);

    fill(102, 70, 0);
    rect(width / 2 + 600 + x, floorPos_y - 200, 30, 200);

    fill(0, 200, 0);
    ellipse(width / 2 + 605 + x, floorPos_y - 200, 150, 150);
}

