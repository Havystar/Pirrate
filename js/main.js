var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fullscreen = false;
var px; //względne pixele, są rzeczywiste dla rozdzielczości 1920/1080//gdy podajesz jakąkolwiek wielkość mnóż ją przez VerticalPixel i HorizontalPixel dla responsywności, dla przykładu woda została pomnoża, statek nie sprawdź to przy różnych rozmiarach okna ;) 
var frame; //mnoznik klatki (gdy chcesz coś umieścić na 3 klatce wpisz this.x = 3 * frame)
var deltaTime, now, last;

var actuallMap = 1;
var money = 0;


var water = new Image();
water.src = 'img/water.jpg';
Ship.image = new Image();
Ship.image.src = 'img/ship.png';
Ship.target = new Image();
Ship.target.src = 'img/target.png';
Map.island = new Image();
Map.island.src = 'img/island.png';
Treasure.image = new Image();
Treasure.image.src = 'img/treasure.png';

var jakubImage = new Image();
jakubImage.src = 'img/jakub.png';

var moneyAudio = new Audio();
moneyAudio.src = 'msc/monety2.wav';
var shotAudio = new Audio();
shotAudio.src = 'msc/Salwa2.wav';




function main(){
    setScreen();
    Enemy.prototype.create(0);
    Ship.prototype.create(12,15);
    Treasure.prototype.create(15*frame, 8*frame, 100);
    canvas.addEventListener("click", go);
    tick();

}
function go(e){
    Ship.prototype.list[0].setTarget(e);
}
function tick(){
    now = Date.now();
    deltaTime = (now - last)/1000;
    
	if(!(window.innerWidth == screen.width && window.innerHeight == screen.height)){
		canvas.width = 0;
		canvas.height = 0;
        fullscreen = false;
	}
	else{
		setScreen();
        fullscreen = true;
        
	}
    
    Ship.prototype.list[0].swim();
    Enemy.prototype.swimAll();
    
    update();
	draw();
    last = now;
	requestAnimationFrame(tick);
}
function update(){
    Ship.prototype.updateAll();
    Enemy.prototype.updateAll();
    Treasure.prototype.updateAll();
}
function draw(){
    switch(actuallMap){
        case 1:
            map1.draw();
            break;
        case 2:
            map2.draw();
            break;
        case 3:
            map3.draw();
            break;
        case 4:
            map4.draw();
            break;
    }
    Treasure.prototype.drawAll();
    Enemy.prototype.drawAll();
    Ship.prototype.list[0].draw();
    
}

function goFullScreen(){
    canvas.webkitRequestFullScreen(); //przechodzi na fullscreen
    
    
    main();
}
function setScreen(){
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    px = canvas.width/1920;
    frame = px * 64;
}


//siatka 30x17