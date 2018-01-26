function Ship(_x, _y){
    this.x = _x * frame - 64;
    this.y = _y * frame - 64;
    this.dirX = 200;
    this.dirY = 800;
}
Ship.prototype.list = new Array(0);

Ship.prototype.create = function(_x, _y){
    Ship.prototype.list.push(new Ship(_x, _y));
}

Ship.prototype.draw = function(){
    ctx.drawImage(Ship.image, this.x, this.y);
}

Ship.prototype.swim = function(e){
    this.dirX += e.screenX-this.x;
    this.dirY += e.screenY-this.y; //obiera kierunek na kliknięte miejsce
    
    var length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY); //oblicza bezpośrednią długość odcinka
    console.log(length);
   if(length != 0) {
        this.dirX /= length;
        this.dirY /= length;//dzieli kierunek przez długość, żeby niezależnie od długości odcinka iśc z tą samą prędkością 
    } 
    else {
        this.dirX = 0;
        this.dirY = 0;
    }
    this.x += this.dirX*deltaTime*1*frame;
    this.y += this.dirY*deltaTime*1*frame;
    
}
