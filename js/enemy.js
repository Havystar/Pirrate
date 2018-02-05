function Enemy(_type) {
    this.x = Math.floor((Math.random() * canvas.width) + 10);
    this.y = Math.floor((Math.random() * canvas.height) + 10);
    this.type = _type;
    this.sighted = false;
    this.dirX = this.x;
    this.dirY = this.y;

    switch (this.type) {
        case 0:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Franek";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false; //angry oznacza czy nas atakuje od razu czy nie
            this.startAngry = false; //angry oznacza czy nas atakuje od razu czy nie
            //Powstawiałem losowe wartości, żeby reszta kodu działała, gdy się to doczepi - B

            break;
        case 1:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 2:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 3:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 4:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 5:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 6:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 7:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;

        case 8:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.damage = 20;
            this.speed = 1;
            this.rangeOffire = 0;
            this.rangeOfSee = 0;
            this.angry = false;
            this.startAngry = false;
            break;
    }
}
Enemy.prototype.list = new Array(0);

Enemy.prototype.create = function () {
    Enemy.prototype.list.push(new Enemy(_type));
}

Enemy.prototype.draw = function () {


    if (this.length !== 0) this.sinus = (this.targetX - this.x) / this.length;
    else this.sinus = 0;
    this.angle = Math.asin(this.sinus) * 180 / Math.PI;
    //console.log("angle: "+this.angle);
    ctx.save();
    ctx.translate(this.x, this.y);
    if (this.y < this.targetY) {
        ctx.rotate(180 * Math.PI / 180);
        ctx.rotate(-this.angle * Math.PI / 180);
    } else {
        ctx.rotate(this.angle * Math.PI / 180);
    }
    //------------------------------------------------obracanie

    switch (this.type) {

        case 0:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 1:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 2:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 3:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 4:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 5:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 6:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 7:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;

        case 8:
            ctx.drawImage(this.name.image, this.x, this.y, -32 * px, -32 * px, 64 * px, 64 * px);
            break;
    }
    ctx.restore();

}
Enemy.prototype.drawAll = function () {
    for (var i = 0; i < Enemy.prototype.list.length; i++) {
        Enemy.prototype.list[i].draw();
    }
    
}

Enemy.prototype.setTarget = function () {

    this.targetX = Math.floor((Math.random() * canvas.width - 30) + 15);
    this.targetY = Math.floor((Math.random() * canvas.height - 30) + 15);
}

function follow(){
    
    this.targetX = Ship.x - this.x;
    this.targetY = Ship.y - this.y;
    this.lenght = Math.abs(this.dx) +  Math.abs(this.dy);
    
}

function shot(){
    
    if (Math.sqrt(Math.pow(this.x - Ship.x) + Math.pow(this.y - Ship.y)) <= this.rangeOfFire){
    Ship.life-=this.demage;
    shotAudio.play();
    
}
}
function bording(){
    if (Math.sqrt(Math.pow(this.x - Ship.x) + Math.pow(this.y - Ship.y)) <= 5){
    Ship.crew-=this.crew;
    this.crew=0;
    alert("Abordaż");
}
}


/*
Enemy.prototype.swim = function(){
    //console.log("targetX: "+this.targetX);
    //console.log("this.x" +this.x)
    this.dirX += this.targetX-this.x;
    this.dirY += this.targetY-this.y;
    //console.log("dirX: "+this.dirX);
    //console.log("dirY: "+this.dirY);
    this.length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY); //oblicza bezpośrednią długość odcinka
   if(this.length !== 0) {
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
}
*/
Enemy.prototype.update = function () {

    this.dirX += this.targetX - this.x;
    this.dirY += this.targetY - this.y;
    this.length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY); //oblicza bezpośrednią długość odcinka
    
    if (this.length !== 0) {

        this.dirX /= this.length;
        this.dirY /= this.length; //dzieli kierunek przez długość, żeby niezależnie od długości odcinka iśc z tą samą prędkością    
        }
    else {

        this.dirX = 0;
        this.dirY = 0;

    }

    if (this.length > 5) {
        this.x += this.dirX * deltaTime * 1 * frame;
        this.y += this.dirY * deltaTime * 1 * frame;
    }
    //podązanie i strzał jeśli go widzi
    if (Math.sqrt(Math.pow(this.x - Ship.x) + Math.pow(this.y - Ship.y)) <= this.rangeOfSee && this.angry) {

        follow();
        shot();
        bording();

    }

    //sprawdza czy jest u celu jak tak to daje mu nowy cel jeśli nie widzi Graczaa i nie jest wkurzony
    else if (Math.pow(this.x - this.targetX, 2) + Math.pow(this.y - this.targetY, 2) < 20) {
        this.Enemy.setTarget();
    }

    //staje się zły jak oberwie
    if (this.life < this.maxlife) {
        this.angry = true;
    }

}

Enemy.prototype.updateAll = function (DeltaTime) {
    for (var i = 0; i < Enemy.prototype.list.length; i++) {
        Enemy.prototype.list[i].update();
    }

}

Enemy.prototype.alive = function () {
    if (this.life <= 0 || this.crew <=0 ) {
        while (Math.abs(Ship.x - this.x) <= 350 || Math.abs(Ship.y - this.y) <= 350) {
            this.x = Math.floor((Math.random() * canvas.width - 30) + 15);
            this.y = Math.floor((Math.random() * canvas.height - 30) + 15);
        }
        money += this.money;
        this.life = this.maxlife;
        this.angry = this.startAngry;
        this.crew = (this.maxlife/10);
    }
}
var enemy = new Enemy(0);