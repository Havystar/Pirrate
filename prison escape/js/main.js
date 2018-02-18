var canvas = document.getElementById("gra");
var ctx = canvas.getContext("2d");

var W = false;
var A = false;
var S = false;
var D = false;
var Space = false;

var last = Date.now();

var timer = 0;
var coins = 5;

var checkpointX = -700; //-700
var checkpointY = -20; //-20

//var bieganie = false;


var minutes = 0,
    sekunds = 0,
    milisekundy = 0,
    s = "0" + 0;

flymode = false;



function begin() {
    
    restart();
    refresh();
}

function refresh(){
    var now = Date.now();
    var deltaTime = (now - last)/1000;
    ctx.fillStyle ='black';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    Platform.prototype.list.length = 0;

   
    
    map1.draw();
    
    Coin.prototype.drawAll();
    Pursuer.prototype.drawAll();
    player.draw();
    if (!player.isAlive) player.ju_lose(deltaTime);
    Platform.prototype.drawAll();
 
    
    Update(deltaTime);
    last = now;
    
    milisekunds += 1.5;
    if (milisekunds >= 100){
        milisekunds -= 100;
        sekunds += 1;
        
        if (sekunds < 10) s = "0" + sekunds;
        else s = sekunds;
        
        if (sekunds == 59){
            sekunds -= 60;
        }
        if (sekunds == 0) minutes += 1;
    }
    
    window.requestAnimationFrame(refresh);
}

function Update(deltaTime) { 
    player.update(deltaTime);
    Coin.prototype.updateAll(deltaTime)
    Pursuer.prototype.updateAll(deltaTime);
    timer += 12*deltaTime;

    
    
}

function restart(){
    player.x = checkpointX;
    player.y = checkpointY;
    minutes = 0;
    sekunds = 0;
    milisekunds =0;
    coins = 0;
    Coin.prototype.list.length = 0;
    Pursuer.prototype.list.length = 0;
    player.isAlive = true;
    
    Coin.prototype.create(120,-100);
    Coin.prototype.create(4000,-138);
    Coin.prototype.create(9075 ,-138 );
    Coin.prototype.create(11900 ,-266 );
    Coin.prototype.create(16250 ,-778 );
    Coin.prototype.create(19373 ,-138 );
    
    Coin.prototype.create(24195 ,-10 );
    Coin.prototype.create(24235 ,-10 );
    Coin.prototype.create(24275 ,-10 );
    Coin.prototype.create(24315 ,-10 );
    Coin.prototype.create(24355 ,-10 );
    Coin.prototype.create(24395 ,-10 );
    
    
    
    
    Pursuer.prototype.create(1500,-500);
    Pursuer.prototype.create(4068 ,-394 );
    Pursuer.prototype.create(5518 ,-650 );
    Pursuer.prototype.create(9440 ,-650 );
    Pursuer.prototype.create(9765 ,-650 );
    Pursuer.prototype.create(10432 ,-650 );
    Pursuer.prototype.create(11250 ,-778 );
    Pursuer.prototype.create(12925 ,-778 );
    Pursuer.prototype.create(13896 ,-778 );
    Pursuer.prototype.create(14452 ,-778 );
    Pursuer.prototype.create(16461 ,-10 );
    Pursuer.prototype.create(16930,-10 );
    Pursuer.prototype.create(18342 ,-10 );
    Pursuer.prototype.create(19466 ,-10 );

    
    for (var i = 0; i < 8; i++){
        Pursuer.prototype.create(19760 + i*50 ,-10 );
    }
    
    for (var i = 0; i < 8; i++){
        Pursuer.prototype.create(20411 + i*50 ,-10 );
    }
    
    Pursuer.prototype.create(21240, -10 );
    
    for (var i = 0; i < 16; i++){
        Pursuer.prototype.create(21735 + i*50 ,-10 );
    }
    
    for (var i = 0; i < 10; i++){
        Pursuer.prototype.create(23600 + i*50 ,-10 );
    }
    
    
}

document.onkeydown = function (e) {
    if (e.keyCode == 87) W = true;
    if (e.keyCode == 65) A = true;
    if (e.keyCode == 83) S = true;
    if (e.keyCode == 68) D = true;
    if (e.keyCode == 32) Space = true;    
        
}

document.onkeyup = function (e) {
    if (e.keyCode == 87) W = false;
    if (e.keyCode == 65) A = false;
    if (e.keyCode == 83) S = false;
    if (e.keyCode == 68) D = false;
    if (e.keyCode == 32) Space = false;
    
}
