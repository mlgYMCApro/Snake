const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world, body;
var gamestate;
window.size = 0;
window.colorScheme = Math.round(Math.random()*3);
var snakeHead, snakeBody, snakeBodyBit, steps, snakeDirection;
var pastX, pastY;
var speed;
var food1, food2, food3;
function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world = Engine.world;
  engine.world.gravity.y = 0;
  // Code to create the head of the snake.
snakeHead = new SnakeBit(40, 40);
snakeDirection = null;
window.size = 0;
steps = -1;
// Create an array for the rest of the snake bits.
snakeBody = [];
pastX = [];
pastY = [];
gameState = "Play";
food1 = new Food(round(random(1, 19))*20, round(random(1,19))*20)
food2 = new Food(round(random(1, 19))*20, round(random(1,19))*20)
food3 = new Food(round(random(1, 19))*20, round(random(1,19))*20)
}

function draw() {
  background(0,255,0);
  if(gamestate === "Play"){
    Engine.update(engine);
   
  } 
  food1.display();
  food2.display();
  food3.display();
  // snakeHead.display();
}