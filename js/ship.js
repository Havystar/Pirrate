var frame;
function Ship(_x, _y){
    this.x = _x * frame - 32;
    this.y = _y * frame - 32;
    this.dirX = 0;
    this.dirY = 0;
    this.targetX = this.x; //x celu do którego płynie
    this.targetY = this.y; //y celu do którego płynie
    this.length = 1;
    this.sinus;
    this.haveTarget = false; //czy ma cel do którego płynie 
}
Ship.prototype.list = new Array(0);

Ship.prototype.create = function(_x, _y){
    Ship.prototype.list.push(new Ship(_x, _y));
}

Ship.prototype.draw = function(){
    if(this.haveTarget) ctx.drawImage(Ship.target, this.targetX -32 * px, this.targetY -32 * px, 64 * px, 64 * px); 
    //-----------------------------------------------jeżeli ma cel rysuje strzałki
    
    if(this.length != 0) this.sinus = (this.targetX - this.x)/this.length;
    else this.sinus = 0;
    this.angle = Math.asin(this.sinus) * 180/Math.PI;
    //console.log("angle: "+this.angle);
    ctx.save();
    ctx.translate(this.x, this.y);
    if(this.y < this.targetY){
        ctx.rotate (180 * Math.PI / 180);
        ctx.rotate(-this.angle * Math.PI / 180);
    }
    else{
        ctx.rotate(this.angle * Math.PI / 180);
    }
    //------------------------------------------------obracanie
    
    ctx.drawImage(Ship.image, -32 * px, -32 * px, 64 * px, 64 * px);
    ctx.restore();
}
Ship.prototype.setTarget = function(e){
    //console.log(Math.pow(this.x - e.screenX, 2) + Math.pow(this.y - e.screenY, 2));
    if(Math.pow(this.x - e.screenX, 2) + Math.pow(this.y - e.screenY, 2) > 900 * px ){
       
            this.haveTarget = true;
            this.targetX = e.screenX;
            this.targetY = e.screenY;
        
        
    }
    //------------------------------------------------jeżeli kliknięcie znajduje się o pierwiastek z 900 od statku, obiera to miejsce za cel
    
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
    //--------------------------------------------ruch
    if(Math.pow(this.x - this.targetX, 2) + Math.pow(this.y - this.targetY, 2) < 20 ) this.haveTarget = false;
    //----------------------------------------------jeżeli statek znajduje się przy celu, przestaje rysować strzałki
    //console.log(deltaTime);
    
}
var ship = new Ship();