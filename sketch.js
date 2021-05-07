const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ground;
var plinkos=[];
var particles=[];
var divisions=[];

function setup() {
	var canvas = createCanvas(480, 800);
	
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground(240,790,480,20);

	for (var j = 0; j <=480; j=j+40) {plinkos.push(new Plinko(j,100)); }

    for (var j = 20; j <480-10; j=j+40) { plinkos.push(new Plinko(j,150));}
	
	for (var j = 0; j <=480; j=j+40) {plinkos.push(new Plinko(j,200));}

    for (var j = 20; j <480-10; j=j+40) {plinkos.push(new Plinko(j,250));}

	for (var j = 0; j <=480; j=j+40) {plinkos.push(new Plinko(j,300));}

    for (var j = 20; j <480-10; j=j+40) {plinkos.push(new Plinko(j,350));}
	
	for (var j = 0; j <=480; j=j+40) {plinkos.push(new Plinko(j,400));}

    for (var j = 20; j <480-10; j=j+40) {plinkos.push(new Plinko(j,450));}

	for (var i = 0; i <=480; i = i + 50) {divisions.push(new Division(i,660));}

	
	 Engine.run(engine);

}

function draw() {
	background(0);
	Engine.update(engine);

	if (frameCount % 30 === 0) {particles.push(new Particles(random(0, 480), 10, 10));}

	for (var i = 0; i < plinkos.length; i++) {plinkos[i].display()}

	for (var k = 0; k < divisions.length; k++) {divisions[k].display()}

	for (var i = 0; i < particles.length; i++) {
		particles[i].display();
	  }

	ground.display();

}