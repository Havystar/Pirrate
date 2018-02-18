function Coin(_x, _y) {
    this.x = _x;
    this.y = _y;
    
}
Coin.prototype.destroy = function () {
    coins++;
}
Coin.prototype.draw = function () {
    
    this.frame = Math.floor(timer%8);

    ctx.save();
    
    ctx.translate(-player.x,0);
    ctx.drawImage(txt32, this.frame*32, 0, 32, 32, this.x+canvas.width/2-100-32, this.y+950-64, 32, 32);
	
    ctx.restore();
}

Coin.prototype.list = new Array(0);
Coin.prototype.create = function(_x, _y) {
    Coin.prototype.list.push(new Coin(_x, _y));
}
Coin.prototype.drawAll = function() {
    for(var i = 0; i < Coin.prototype.list.length; i++) {
        Coin.prototype.list[i].draw();
    }
}

Coin.prototype.update = function () {
	
    this.wektor= Math.sqrt(Math.abs(player.x-this.x)*Math.abs(player.x-this.x) + Math.abs(player.y-this.y) * Math.abs(player.y-this.y)); 
}

Coin.prototype.updateAll = function(deltaCzasu) {
    for(var i = 0; i < Coin.prototype.list.length; i++) {
        Coin.prototype.list[i].update();
    
        if (Coin.prototype.list[i].wektor < 100) {
            Coin.prototype.list[i].destroy();
            Coin.prototype.list.splice(i, 1);
            i--;
            
        }
        
    }
    
   
}