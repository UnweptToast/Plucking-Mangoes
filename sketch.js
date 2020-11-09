const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var boy, tree, stone, ground, mango1, mango2, mango3, mango4, mango5, mango6;
var constraint;
var stoneSprite, ms1, ms2, ms3, ms4, ms5, ms6;


function setup() {
	createCanvas(1375, 689);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(width/2, height, width, 160);

	boy = new Boy(260, 100, 250, 375);
	boy.body.position.y = 525
	tree = new Tree(1000,300,700,700);
	stone = new Stone(150, 460, 20, {isStatic: false, restitution: 0.4, density: 1.0, friction: 10.0});
	constraint = new Constraint(stone.body, {x: 150, y: 460}, 0.02, 1);
	mango1 = new Mango(random(840,1210), random(30, 285), 30);
	mango2 = new Mango(random(840,1210), random(30, 285), 30);
	mango3 = new Mango(random(840,1210), random(30, 285), 30);
	mango4 = new Mango(random(840,1210), random(30, 285), 30);
	mango5 = new Mango(random(840,1210), random(30, 285), 30);
	mango6 = new Mango(random(840,1210), random(30, 285), 30);

	stoneSprite = createSprite(stone.body.position.x, stone.body.position.y, 20, 20);
	ms1 = createSprite(mango1.body.position.x, mango1.body.position.y, mango1.width, mango1.height);
	ms2 = createSprite(mango2.body.position.x, mango2.body.position.y, mango2.width, mango2.height);
	ms3 = createSprite(mango3.body.position.x, mango3.body.position.y, mango3.width, mango3.height);
	ms4 = createSprite(mango4.body.position.x, mango4.body.position.y, mango4.width, mango4.height);
	ms5 = createSprite(mango5.body.position.x, mango5.body.position.y, mango5.width, mango5.height);
	ms6 = createSprite(mango6.body.position.x, mango6.body.position.y, mango6.width, mango6.height);

	Engine.run(engine);
}


function draw() {
	background("lightblue");

	console.log(mango1.body);
	ms1.visible = false;
	ms2.visible = false;
	ms3.visible = false;
	ms4.visible = false;
	ms5.visible = false;
	ms6.visible = false;
	stoneSprite.visible = false;

	stoneSprite.x = stone.body.position.x;
	stoneSprite.y = stone.body.position.y;
	stoneSprite.visible = true;
	boy.display();
	tree.display();
	ground.display();
	drawSprites();
	constraint.display();

	stone.display();
	mango1.display();
	mango2.display();
	mango3.display();
	mango4.display();
	mango5.display();
	mango6.display();

	
	mangoFall();

}

function mouseDragged(){
	Body.setPosition(stone.body, {x: mouseX, y: mouseY});
}

function mouseReleased() {
	constraint.remove()
}

function mangoFall() {
	if(stoneSprite.isTouching(ms1)) {
		World.add(world, mango1.body)
	}
	if(stoneSprite.isTouching(ms2)) {
		World.add(world, mango2.body)
	}
	if(stoneSprite.isTouching(ms3)) {
		World.add(world, mango3.body)
	}
	if(stoneSprite.isTouching(ms4)) {
		World.add(world, mango4.body)
	}
	if(stoneSprite.isTouching(ms5)) {
		World.add(world, mango5.body)
	}
	if(stoneSprite.isTouching(ms6)) {
		World.add(world, mango6.body)
	}
}