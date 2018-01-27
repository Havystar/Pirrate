function Enemy(_type){
    this.x = Math.floor((Math.random() * canvas.width) + 10);
    this.y = Math.floor((Math.random() * canvas.height) + 10);
    this.type = _type;
    this.sighted = false;
    this.dirX =  this.x;
    this.dirY =  this.y;
    
     switch(this.type){
        case 0:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =false;
            //angry oznacza czy nas atakuje od razu czy nie
            break;
        case 1:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =false;
            break;
            
        case 2:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =false;
            break;
            
        case 3:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =false;
            break;
            
        case 4:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =false;
            break;
             
        case 5:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =true;
            break;
             
        case 6:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =true;
            break;
             
        case 7:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =true;
            break;
             
        case 8:
            this.life = 200;
            this.maxlife = 200;
            this.name = ;
            this.money = 100;
            this.firerate = ;
            this.damage = 20;
            this.speed = ;
            this.rangeOffire = ;
            this.rangeOfSee = ;
            this.angry =true;
            break;
                    }
}
Enemy.prototype.lit = new Array(0);

Enemy.prototype.create = function(){
    Enemy.prototype.list.push(new Enemy(_type));
}

Enemy.prototype.draw = function(){
        switch(this.type){
            
            case 0:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 1:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 2:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 3:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 4:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 5:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 6:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                
            case 7:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
             case 8:
                ctx.drawImage(this.name.image, this.x, this.y);
                break;
                        }
}
Enemy.prototype.drawAll = function(){
    for(var i = 0; i<Enemy.prototype.list.length; i++){
        Enemy.prototype.list[i].draw();     
    }
}

Enemy.prototype.swim = function(){
var length=this.dirX+this.dirY;
     if(length !== 0) {
        this.x += this.dirX/length * deltaTime;
        this.y += this.dirY/length * deltaTime;
    } 
    if(length==this.x+this.y){
        this.dirY = Math.floor((Math.random() * canvas.height) + 10);
        this.dirX = Math.floor((Math.random() * canvas.width) + 10);
}
}
Enemy.prototype.alive = function(){
 if(this.life==0){
    this.x = Math.floor((Math.random() * canvas.width) + 10);
    this.y = Math.floor((Math.random() * canvas.height) + 10);
    this.life=this.maxlife;
 }   
}
