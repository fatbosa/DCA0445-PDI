var player;
var enemy;
var playerMAXhp, enemyMAXhp;
var playerhp, enemyhp;
var playerstr = 1, enemystr = 1;
var playercon = 1, enemycon = 1;
var playerint = 1, enemyint = 1;
var pontos = 1, enemypontos = 1, eclass = 1;
var butcon, butstr, butint;
var attack;

function gladiadores(){
	playerMAXhp = playercon*2 + 10;
	enemyMAXhp = enemycon*2 + 10;
	if(playerhp>playerMAXhp){
		playerhp = playerMAXhp;
	}
	if(enemyhp>enemyMAXhp){
		enemyhp = enemyMAXhp;
	}

}

function addcon(){
	if(pontos > 0){
		playercon += 1;
		playerhp += 2;
		pontos -= 1;
	}
}
function addstr(){
	if(pontos > 0){
		playerstr += 1;
		pontos -= 1;
	}
}
function addint(){
	if(pontos > 0){
		playerint += 1;
		pontos -= 1;
	}
}
function golpear(){
	enemyhp = enemyhp - playerstr*3;
}

function morte(){
	if(enemyhp <= 0){
		pontos += 1;
		enemypontos += 1;
		if(eclass = 1){
			eclass = 2;
		}
		if(eclass = 2){
			eclass = 3;
		}
		if(eclass = 3){
			eclass = 1;
		}
		next();
	}
}
function next(){
	enemycon = 1;
	enemystr = 1;
	enemyint = 1;
	for(var i = 0; i < enemypontos; i++){
		if(eclass = 1){
			enemycon += 1;
		}
		if(eclass = 2){
			enemystr += 1;
		}
		if(eclass = 3){
			enemyint += 1;
		}
	}
	enemyhp = enemyMAXhp;
}

function setup() {
    createCanvas(800, 400);
    player = createSprite(200, height-80, 40, 40);	
    enemy = createSprite(600, height-80, 40, 40);	
	solo = createSprite(0, height-20, 2*width, 80);
	player.draw = function() { 
		fill(66, 244, 89);
		ellipse(0, 0, 40, 40); 
	}
	enemy.draw = function() { 
		fill(255, 0, 0);
		ellipse(0, 0, 40, 40); 
	}
	playerMAXhp = playercon*2 + 10;
	enemyMAXhp = enemycon*2 + 10;
	playerhp = playerMAXhp;
	enemyhp = enemyMAXhp;
	
	butcon = createButton('+');
    butcon.position(100, 10);
    butcon.mousePressed(addcon);
    butstr = createButton('+');
    butstr.position(100, 30);
    butstr.mousePressed(addstr);
    butint = createButton('+');
    butint.position(100, 50);
    butint.mousePressed(addint);
    attack = createButton('ATTACK');
    attack.position(width/2 - 40, height/2);
    attack.mousePressed(golpear);

	
}

function draw() {
    background(18, 176, 243);
    drawSprites();
    textSize(40);
    text("battle", width/2 - 60, 50);
    text("hp: ", 140, height - 120);
    text(playerhp, 200, height - 120);
    text("hp: ", 540, height - 120);
    text(enemyhp, 600, height - 120);
    textSize(20);
    text("con: ", 10, 30);
    text("str: ", 10, 50);
    text("int: ", 10, 70);
    text(playercon, 50, 30);
    text(playerstr, 50, 50);
    text(playerint, 50, 70);
    text("pontos: ", 10, 100);
    text(pontos, 80, 100);
    gladiadores();
    morte();
}
