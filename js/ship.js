var frame;
function Ship(_x, _y){
    this.x = _x * frame - 32;
    this.y = _y * frame - 32;
    this.dirX = 0;
    this.dirY = 0;
    this.targetX = this.x; //x celu do którego płynie
    this.targetY = this.y; //y celu do którego płynie
    this.speed = 5;
    this.length = 1;
    this.life = 100;
    this.crew = 50;
    this.damage = 50;
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
        this.x += this.dirX*deltaTime*this.speed*frame;
        this.y += this.dirY*deltaTime*this.speed*frame;
    }
    //--------------------------------------------ruch
    
    
}
Ship.prototype.update = function(){
    console.log(this.life)
    if(Math.pow(this.x - this.targetX, 2) + Math.pow(this.y - this.targetY, 2) < 20 ) this.haveTarget = false;
    //----------------------------------------------jeżeli statek znajduje się przy celu, przestaje rysować strzałki
    if(this.y < 50){
        actuallMap++;
        this.y = 1000;
        this.targetY = 950;
        for(let i = 0; i < Treasure.prototype.list.length; i++){
            Treasure.prototype.list[i].y += canvas.height *px;
        }
        for(let i = 0; i < Enemy.prototype.list.length; i++){
            Enemy.prototype.list[i].y += canvas.height *px;
        }
    }
    if(this.y > 1000){
        actuallMap--;
        this.y = 50;
        this.targetY = 100;
        for(let i = 0; i < Treasure.prototype.list.length; i++){
            Treasure.prototype.list[i].y -=  canvas.height *px;
        }
        for(let i = 0; i < Enemy.prototype.list.length; i++){
            Enemy.prototype.list[i].y -= canvas.height *px;
        }
    }
    if(this.x > 1870){
        actuallMap += 2;
        this.x = 50;
        this.targetX = 100;
        for(let i = 0; i < Treasure.prototype.list.length; i++){
            Treasure.prototype.list[i].x -= canvas.width * px;
        }
        for(let i = 0; i < Enemy.prototype.list.length; i++){
            Enemy.prototype.list[i].x += canvas.width *px;
        }
    }
    if(this.x < 50){
        actuallMap -= 2;
        this.x = 1870;
        this.targetX = 1820;
        for(let i = 0; i < Treasure.prototype.list.length; i++){
            Treasure.prototype.list[i].x += canvas.width * px;
        }
        for(let i = 0; i < Enemy.prototype.list.length; i++){
            Treasure.prototype.list[i].x += canvas.width *px;
        }
    }
    if(this.life <=0 || this.crew <= 0){
        //alert("UMARŁEŚ");
    }
}
Ship.prototype.updateAll = function(){
    for(let i = 0; i < Ship.prototype.list.length; i++){
        Ship.prototype.list[i].update();
        
    }
}
var ship = new Ship();