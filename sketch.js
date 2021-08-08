var ghost,ghostimg

function preload() {
ghostimg=loadAnimation("ghost1.png","ghost2.png","ghost3.png")
}

function setup(){
createCanvas(400,400)
ghost=createSprite(200,200)
ghost.addAnimation("running",ghostimg)
}

function draw(){
background("black")
  drawSprites()
}