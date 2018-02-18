function Player() {
    this.x;
    this.y;
    this.timer = 0;
    this.running = false;
    this.turned = false;
    this.velY = 0;
    this.isOnPlatform = false;
    this.life = 3;
    this.isAlive = true;
    this.b = 0;
    this.frame = 0;
    
    this.draw = function() {
        
        ctx.save();
        ctx.translate(canvas.width/2-100,950)
        ctx.scale(this.turned ? -1 : 1, 1);
        ctx.drawImage(Player.image, this.running ? this.frame*64 : 0, this.cutY, 64, 64, -64, this.y-128, 128, 128);
        ctx.restore();
        
        for (var i = 0; i < this.life; i++){
            //ctx.drawImage(obrazekserca, 0, 0, player.image.width, player.image.height,i*90-150, -150, 400, 400);
            //rysowanie w lewym górnym rogu ile pozostało żyć 
        }
        ctx.drawImage(txt32, 0, 0, 64, 64, -20, 110, 128, 128);
        ctx.font = ("120px lato")
        ctx.fillStyle = "white";
        ctx.fillText("x "+coins,100, 210);
        ctx.font = ("30px lato");
        ctx.fillText(minutes +" : "+ s, 1820, 30)
        
    }
    
    this.update = function(deltaTime){
        if (this.x >= 23555){
           this.win();
        }
        
        this.running = false;
        if (!flymode) this.velY += 1000*deltaTime;
        else this.velY = 0;
        
        
        if (A){
            this.running = true;
            this.turned = true;
            this.x -= 600*deltaTime;
            } 
        if (D){
            this.running = true;
            this.turned = false;
            this.x += 600*deltaTime;
            } 
        
        if (player.running) {
            this.timer += 12*deltaTime;
            this.frame = Math.floor(this.timer%8);
            console.log('frame: '+this.frame);
            
        }
        if (A&&D){
            this.running = false;
        }
        
        
        if(W && this.isOnPlatform) {
            this.velY = -500;
           
        }
        
        else if (this.running){
           this.cutY = 0;
        } 
        else{
           this.cutY = 64;
        } 
        
        this.isOnPlatform = false;
        for(var i = 0; i < Platform.prototype.list.length; i++) {
            
            var platform = Platform.prototype.list[i];
            if(this.velY > 0 && this.y <= platform.y && this.y+this.velY*deltaTime >= platform.y &&
               this.x >= platform.x-8 && this.x <= platform.x+platform.width+8) {
                
                this.velY = 0;
                this.y = platform.y;
                this.isOnPlatform = true;
            }
        }
        
        this.y += this.velY*deltaTime;
        
        
        
        if (this.y >=-5 && this.isAlive){
            this.death("YOU DIED");           
        } 
        
        
    }
    
    this.death = function (_reason) {
        this.life--;
        Pursuer.prototype.list.length = 0;
        this.isAlive = false;
        this.deathReason = _reason;
        
        if (this.life < 0){
            //wróć do ekranu głównego 
        }
            
        else {
            begin();
        }
    }
    
    this.ju_lose = function (deltaTime) {
        ctx.fillStyle = "rgba(220,220,220,"+this.b+")";
        ctx.fillRect(-canvas.width,0,canvas.width*3,canvas.height);
        this.b+=0.005;
        if (this.b >= 0.8) this.b=0.8;
        
        A = false;
        W = false;
        S = false;
        D = false;
        Space = false;
        
        
        
        ctx.font = "200px Arial";
        ctx.fillStyle = "red";
        ctx.fillText(this.deathReason, canvas.width/5,canvas.width/4);
        
        
        
        
        
    }
    this.win = function () {
        ctx.fillStyle = "rgba(220,220,220,"+this.b+")";
        ctx.fillRect(-canvas.width,0,canvas.width*3,canvas.height);
        this.b+=0.005;
        if (this.b >= 0.8) this.b=0.8;
        Pursuer.prototype.list.length = 0;
        
        A = false;
        W = false;
        S = false;
        D = false;
        Space = false;
        
        
        
        
        ctx.font = "200px Arial";
        ctx.fillStyle = "red";
        ctx.fillText("LVL 2 SOON", canvas.width/5,canvas.width/4);
        setTimeout(f5,5000);
    }
}

var player = new Player();
