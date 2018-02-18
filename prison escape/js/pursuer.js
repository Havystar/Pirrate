function Pursuer (_x, _y) {
    this.x = _x;
    this.y = _y;
    this.velY = 0;
    this.frame = 0;
    this.timer = 0;
    this.life = 1;
}

Pursuer.prototype.draw = function () { 
    ctx.save();
    ctx.translate(-player.x, 0);
    //ctx.drawImage(Pursuer.image, this.frame*64, 0, 64, 64, this.x+canvas.width/2-100-64, this.y+950-128, 128, 128);
    ctx.restore();
}

Pursuer.prototype.list = new Array(0);
Pursuer.prototype.create = function(_x, _y) {
    Pursuer.prototype.list.push(new Pursuer(_x, _y));
}
Pursuer.prototype.drawAll = function() {
    for(var i = 0; i < Pursuer.prototype.list.length; i++) {
        Pursuer.prototype.list[i].draw();
    }
}

Pursuer.prototype.update = function (deltaTime) {
    this.timer += 10*deltaTime;
    this.frame = Math.floor(this.timer%6);
    
    this.wektor = Math.sqrt(Math.abs(player.x-this.x)*Math.abs(player.x-this.x) + Math.abs(player.y-this.y) * Math.abs(player.y-this.y));
    if (this.wektor < 1000) this.x -= 400*deltaTime;
    if (this.wektor < 64 && player.zyje){
        //player.death("WASTED");
    } 
    
    this.velY += 900*deltaTime;
    
    this.isOnPlatform = false;
    for(var i = 0; i < Platform.prototype.list.length; i++) {
            var platform = Platform.prototype.list[i];
            if(this.velY > 0 && this.y <= platform.y && this.y+this.velY*deltaTime >= platform.y &&
               this.x >= platform.x && this.x <= platform.x+platform.width) {
                this.velY = 0;
                this.y = platform.y;
                this.jestnaplatformie = true;
            }
    }
    
    this.y += this.velY*deltaTime;
    
    
}

Pursuer.prototype.updateAll = function (deltaTime) { 
    for (var i = 0; i < Pursuer.prototype.list.length; i++){
        Pursuer.prototype.list[i].update(deltaTime);
        if (Pursuer.prototype.list[i].life <= 0) {
            Pursuer.prototype.list.splice(i, 1);
            i--;
        }
    }
}