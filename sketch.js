

//now it's Jerry&tom he he lol
var jerry, tom;
var backgroundI, floor;

function preload() {
    //load the images here
    backgroundI = loadImage("grass.jpeg");

}

function setup(){
    createCanvas(600,600);

    edges = createEdgeSprites();

        //the background but not really
    floor = createSprite(300,300,700,700);
    floor.addImage(backgroundI);
    floor.scale = 2.75;

    //create tom and jerry sprites here
    jerry = createSprite(300,300,20,20);
    jerry.shapeColor ="brown";
        //The cat after the mouse
    tom = createSprite(300,500,80,80);
    tom.shapeColor ="white";
}

function draw() {

    background(255,0,255);
    //Write condition here to evalute if tom and jerry collide
    if(jerry.x - tom.x < jerry.width/2+tom.width/2 && 
        tom.x - jerry.x < jerry.width/2+tom.width/2 &&
        jerry.y - tom.y < jerry.height/2+tom.height/2 &&
        tom.y - jerry.y < jerry.height/2+tom.height/2){
            jerry.shapeColor="blue";
            tom.shapeColor="blue";
        } else{
            jerry.shapeColor ="brown";
            tom.shapeColor ="white";
        }
            //callling functions
            keyPressed();
            //tbh I can make this more complex but nah :)
            tom.collide(edges);
            jerry.collide(edges);
    drawSprites();
}



function keyPressed(){

  //For moving and changing animation write code here I got stuck for the first 30 mins
   if(frameCount%1 ===0){
       if(jerry.y<300){
        tom.y=tom.y-4;
        }
    }
    if(frameCount%1 ===0){
        if(jerry.y>300){
         tom.y=tom.y+4;
         }
     }

    if(frameCount%1 ===0){
        if(jerry.x<300){
            tom.x=tom.x-4;
            }
    }  
    if(frameCount%1 ===0){
        if(jerry.x>300){
            tom.x=tom.x+4;
            }
    }  
    //controls for jerry
    if(keyDown("w")){
        jerry.y=jerry.y-5;
    }
    if(keyDown("s")){
        jerry.y=jerry.y+5;
    }
    if(keyDown("a")){
        jerry.x=jerry.x-5;
    }
    if(keyDown("d")){
        jerry.x=jerry.x+5;
    }

}
