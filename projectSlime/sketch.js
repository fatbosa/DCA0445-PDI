//essa variável vai receber as informações do personagem
var jogador;
var solo, final;
var auxiliar;
var jump = 1;
var wall = new Group();

function victory(){
    if(keyWentDown('R')){
		location.reload();
	}
    if(jogador.position.y>height+80){
        location.reload();
    }
}

function gravity(){
	jogador.limitSpeed(10);
	if(!(solo.overlap(jogador))){
		jogador.addSpeed(0.3, 90);
	}
	jogador.collide(wall);
}

function move(){
	if(keyDown('D')){
		jogador.addSpeed(0.2 ,0);
	}
	if(keyDown('A')){
		jogador.addSpeed(0.2, 180);
	}
	if(keyWentDown('W') && jump > 0){
		auxiliar = jogador.velocity.x;
		jogador.setVelocity(auxiliar,-7);
		jump -= 1;
	}
	if(jogador.touching.bottom && !keyDown('D') && !keyDown('A')){
		jogador.friction = 0.07;
	}else{
		jogador.friction = 0;
	}
	if(jogador.touching.bottom || jogador.touching.left || jogador.touching.right){
		jump = 1;
	}
}

function setup() {
    createCanvas(800, 400);
    jogador = createSprite(400, height-80, 40, 40);	
	solo = createSprite(0, height-20, 2*width, 80);
	final = createSprite(2*width+20000, height-20, 2*width, 80);
	jogador.draw = function() { 
		fill(66, 244, 89);
		ellipse(0, 0, 40, 40); 
	}
	jogador.setCollider("circle", 0, 0, 20);
	solo.setCollider("rectangle", 0, 0, 2*width, 80);
	solo.shapeColor = color(0);
	final.setCollider("rectangle", 0, 0, 2*width, 80);
	final.shapeColor = color(255, 204, 0);
	wall = new Group();
	wall.add(solo);
    wall.add(final);
    for (var i = 0; i < 200; i++) {
    var c = createSprite(
            random(width, width+20000), random(height)-40,
            random(25, 100), random(25, 100));
        
        c.setCollider("rectangle", 0, 0, c.width, c.height);
        c.shapeColor = color(random(200, 255));
        wall.add(c);
    }
}

function draw() {
    background(18, 176, 243);
    translate(-jogador.position.x+400, 0);
    drawSprites();
    gravity();
    move();
    textSize(40);
    text("Use as teclas W, A e D para se locomover,", 15, 50);
    text("utilize as nuvens para chegar no final", 15, 100);
    text("sem cair no buraco e vencer.", 15, 150);    
    text("Tu venceu! Aperte R para reiniciar o jogo.", width+20000, 50);
    victory();    
}