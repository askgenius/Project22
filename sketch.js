var starImg, fairyImg, bgImg;
var fairySprite, fairyVoice;
var starSprite, starBody;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {
	starImg = loadImage("images/star.png");
	fairyImg = loadAnimation("images/fairyImage1.png", "images/fairyImage2.png");
	bgImg = loadImage("images/starNight.png");
	fairyVoice = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	// fairyVoice.play();

	fairySprite = createSprite(130, 520);
	fairySprite.addAnimation("fairyflying", fairyImg);
	fairySprite.scale = 0.2;

	starSprite = createSprite(650, 30);
	starSprite.addImage(starImg);
	starSprite.scale = 0.2;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650, 30, 5, { restitution: 0.5, isStatic: true });
	World.add(world, starBody);

	Engine.run(engine);
}

function draw() {
	background(bgImg);
	starSprite.y = starBody.position.y;

	if (starSprite.y > 470 && starBody.position.y > 470) {
		fairySprite.velocityX=0;
		starSprite.velocityY=0;
		Matter.Body.setStatic(starBody, true);
	}

	drawSprites();
}

function keyPressed() {
	//write code here
	if (keyCode === RIGHT_ARROW) {
		fairySprite.velocityX = 5;
	}
	if (keyCode === LEFT_ARROW) {
		fairySprite.velocityX = -5;
	}
	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody, false);
	}
}