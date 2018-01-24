var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");

var Vpixel; //względne pixele, są rzeczywiste dla rozdzielczości 1920/1080
var Hpixel; //gdy podajesz jakąkolwiek wielkość mnóż ją przez VerticalPixel i HorizontalPixel dla responsywności, dla przykładu woda została pomnoża, statek nie sprawdź to przy różnych rozmiarach okna ;) 

var water = new Image();
water.src = 'img/woda.png';
Ship.image = new Image();
Ship.image.src = 'img/statek.png';

function main(){
    
    draw();
    

}
function draw(){
    for(let i = 0; i < 20; i++){
        for(let o = 0; o < 40; o++){
            ctx.drawImage(water, o*64*Vpixel, i*64*Hpixel, 64 * Vpixel, 64 * Hpixel);
        } //dla wody, wysp itd. trzeba będzie stworzyć dodatkowy plik
    }
    ship.draw();
}

function goFullScreen(){
    canvas.webkitRequestFullScreen() //przechodzi na fullscreen
    canvas.width = window.innerWidth; 
    canvas.height = window.innerHeight;
    Vpixel =canvas.width/1920;
    Hpixel =canvas.height/1080;
    main();
}


