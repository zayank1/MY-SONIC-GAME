var sonic,flash,bg
var sonicImg,flashImg,bgImg,sonic1Img,flash1Img
var resetButton
var level = 1
var speedButton1
function preload(){
sonicImg = loadImage("sonic.png")
flashImg = loadImage("flash.png")
bgImg = loadImage("racetrack.jpg")
sonic1Img = loadImage("sonic1.png")
flash1Img = loadImage("flash1.png")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
  bg = createSprite(windowWidth/2,windowHeight/2,windowWidth,windowHeight)
  bg.addImage(bgImg)
  bg.scale = 3

  sonic = createSprite(150,windowHeight/2+90,50,50)
  sonic.addImage(sonic1Img)
  sonic.scale = 0.35
  

  flash = createSprite(160,windowHeight/2-90,50,50)
  flash.addImage(flash1Img)
  flash.scale = 0.25
  
  speedButton1 = createButton('PRESS TO MOVE')
  speedButton1.position(50,windowHeight/2+150)
  speedButton1.style('background', 'blue')
    
  resetButton = createButton('PRESS TO RESET')
  resetButton.position(10000000000,windowHeight-800)
  resetButton.style('background', 'yellow')

  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  if(sonic.x>=1650){
 
  levelIncrease()
  }
  if(flash.x>=1650){
    levelIncrease()
  }

 console.log(level)
 if(level<=10){
  textSize(80)
 fill("red")
  text("LEVEL "+level,windowWidth/2-250,windowHeight/2-300)  
 }
  
handleButton()

}
function handleButton(){
  speedButton1.mousePressed(() => {
    sonic.addImage(sonicImg)
    sonic.scale = 0.4
    sonic.x+=100
    flash.addImage(flashImg)
    if(level === 1){
      flash.velocityX = 3
    }
    if(level === 2){
      flash.velocityX = 4
    }
    if(level === 3){
      flash.velocityX = 5
    }
    if(level === 4){
      flash.velocityX = 6
    }
    if(level === 5){
      flash.velocityX = 7
    }
    if(level === 6){
      flash.velocityX = 8
    }
    if(level === 7){
      flash.velocityX = 9
    }
    if(level === 8){
      flash.velocityX = 10
    }
    if(level === 9){
      flash.velocityX = 11
    }
    if(level === 10){
      flash.velocityX = 12
    }

   
    })
    
}

function levelIncrease(){
  if(level<=10){
sonic.x = 150
flash.x = 160
flash.velocityX = 0
level+=1
  }
if(level>10){
  hide()
  textSize(100)
  fill("green")
  text("YOU WIN",windowWidth/2-300,windowHeight/2)
  resetButton.position(windowWidth-150,windowHeight-800)
  handleResetButton()
}


}

function hide(){
sonic.x = 1000000
flash.x = 1000000
bg.x = 1000000
speedButton1.position(1000000,50)
}

function handleResetButton(){
resetButton.mousePressed(()=>{
  reset()
})
}


function reset(){
sonic.x = 150
flash.x = 160
bg.x = windowWidth/2
level = 1
resetButton.x = 10000
speedButton1.position(50,windowHeight/2+150)

}

