var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");
var fullscreen = false;
var px; //względne pixele, są rzeczywiste dla rozdzielczości 1920/1080//gdy podajesz jakąkolwiek wielkość mnóż ją przez VerticalPixel i HorizontalPixel dla responsywności, dla przykładu woda została pomnoża, statek nie sprawdź to przy różnych rozmiarach okna ;) 
var frame; //mnoznik klatki (gdy chcesz coś umieścić na 3 klatce wpisz this.x = 3 * frame)
var deltaTime, now, last;

var water = new Image();
water.src = 'img/woda.png';
Ship.image = new Image();
Ship.image.src = 'img/statek.png';

function main(){
    setScreen();
    Ship.prototype.create(15,8);
    document.addEventListener("click", Ship.prototype.list[0].swim);
    tick();

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
    

	draw();
    last = now;
	requestAnimationFrame(tick);
}
function draw(){
    map.draw();
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