var frame;
function Ship(_x, _y){
    this.x = _x * frame - 32;
    this.y = _y * frame - 32;
    this.dirX = 0;
    this.dirY = 0;
    this.targetX = this.x;
    this.targetY = this.y;
    this.length = 1;
    this.sinus;
}
Ship.prototype.list = new Array(0);

Ship.prototype.create = function(_x, _y){
    Ship.prototype.list.push(new Ship(_x, _y));
}

Ship.prototype.draw = function(){
    if(this.length != 0) this.sinus = (this.targetX - this.x)/this.length;
    else this.sinus = 0;
    this.angle = Math.asin(this.sinus) * 180/Math.PI;
    console.log("angle: "+this.angle);
    ctx.save();
    ctx.translate(this.x, this.y);
    if(this.y < this.targetY) ctx.rotate((this.angle-180) * Math.PI / 180);
    ctx.rotate(this.angle * Math.PI / 180);
    ctx.drawImage(Ship.image, -32 * px, -32 * px, 64 * px, 64 * px);
    ctx.restore();
}
Ship.prototype.setTarget = function(e){
    this.targetX = e.screenX;
    this.targetY = e.screenY;
    //console.log("screenX: "+e.screenX);
    //console.log("screenY: "+e.screenY);
}

Ship.prototype.swim = function(){
    //console.log("targetX: "+this.targetX);
    //console.log("this.x" +this.x)
    this.dirX += this.targetX-this.x;
    this.dirY += this.targetY-this.y;
    //console.log("dirX: "+this.dirX);
    //console.log("dirY: "+this.dirY);
    this.length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY); //oblicza bezpośrednią długość odcinka
   if(this.length != 0) {
        this.dirX /= this.length;
        this.dirY /= this.length;//dzieli kierunek przez długość, żeby niezależnie od długości odcinka iśc z tą samą prędkością 
    } 
    else {
        this.dirX = 0;
        this.dirY = 0;
    }
    //console.log("lenght: "+this.length);
    if(this.length > 5){
        this.x += this.dirX*deltaTime*1*frame;
        this.y += this.dirY*deltaTime*1*frame;
    }
    
    //console.log(deltaTime);
    
}
var ship = new Ship();