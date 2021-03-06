function Enemy(_type) {
    this.x = Math.floor((Math.random() * 1660) + 130) * px - 32;
    this.y = Math.floor((Math.random() * 870) + 112) * px - 32;
    this.sinus = 0;
    //this.targetX = this.x; //x celu do którego płynie
    //this.targetY = this.y; //y celu do którego płynie
    this.type = _type;
    this.sighted = false;
    this.dirX = this.x;
    this.dirY = this.y;
    this.targetX = this.x;
    this.targetY = this.y;
    this.fire = true;
    //this.counter=2;



    switch (this.type) {
        case 0:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.monster = false;
            this.name = "Franek";
            this.money = 100;
            this.firerate = 2;
            this.peacerate = 3;
            this.damage = 20;
            this.speed = 0.4;
            this.rangeOffire = 300;
            this.rangeOfSee = 300;
            this.angry = true; //angry oznacza czy nas atakuje od razu czy nie
            this.startAngry = false; //angry oznacza czy nas atakuje od razu czy nie
            //Powstawiałem losowe wartości, żeby reszta kodu działała, gdy się to doczepi - B

            break;
        case 1:
            this.life = 200;
            this.maxlife = 200;
            this.crew = 20;
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 2;
            this.peacerate = 3;
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
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 2;
            this.peacerate = 3;
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
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 2;
            this.peacerate = 3;
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
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.peacerate = 3;
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
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.peacerate = 3;
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
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.peacerate = 3;
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
            this.monster = false;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.peacerate = 3;
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
            this.monster = true;
            this.name = "Jakub";
            this.money = 100;
            this.firerate = 1;
            this.peacerate = 3;
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

Enemy.prototype.create = function (_type) {
    Enemy.prototype.list.push(new Enemy(_type));
}

Enemy.prototype.draw = function () {


    if (this.haveTarget) ctx.drawImage(Enemy.target, this.targetX - 32 * px, this.targetY - 32 * px, 64 * px, 64 * px);
    //-----------------------------------------------jeżeli ma cel rysuje strzałki

    if (this.length != 0) this.sinus = (this.targetX - this.x) / this.length;
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

    switch (this.type) {

        case 0:
            ctx.drawImage(jakubImage, -32 * px, -32 * px, 64 * px, 64 * px);
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

    this.targetX = Math.floor((Math.random() * 1660) + 130);
    this.targetY = Math.floor((Math.random() * 870) + 112);
}

//pojedyncze funkcje odpowiadajace za podazanie strzał abordarz i uspokajanie sie
Enemy.prototype.follow = function () {
    if (this.monster) {
        this.targetX = Ship.prototype.list[0].x;
        this.targetY = Ship.prototype.list[0].y;
    } 
    else {
        this.targetX = Ship.prototype.list[0].x - 5;
        this.targetY = Ship.prototype.list[0].y - 5;
    }
}


Enemy.prototype.counter = function () {

    if (Math.sqrt(Math.pow(this.x - Ship.prototype.list[0].x, 2) + Math.pow(this.y - Ship.prototype.list[0].y, 2)) <= this.rangeOffire) {

    //setInterval(function () {for (let i = 0; i < Enemy.prototype.list.length; i++) {Enemy.prototype.list[i].kkk();}}, 2000);
    //setTimeout(function () {shotAudio.play();}, 2000);
    //setInterval(() => {this.fire = true}, 2000);
    this.firerate-=deltaTime;
    if(this.firerate<=0){
        this.fire = true
        this.firerate = 2;
    }
    //console.log(Ship.prototype.list[1].counter)
    }}


Enemy.prototype.bording = function () {

    if (Math.sqrt(Math.pow(this.x - Ship.prototype.list[0].x, 2) + Math.pow(this.y - Ship.prototype.list[0].y, 2)) <= 25) {
        Ship.prototype.list[0].crew -= this.crew;
        this.crew = 0;
        //alert("Abordaż");
    }
}
Enemy.prototype.shot = function () {
    if (Math.sqrt(Math.pow(this.x - Ship.prototype.list[0].x, 2) + Math.pow(this.y - Ship.prototype.list[0].y, 2)) <= this.rangeOffire && this.angry == true && this.fire == true){
        Ship.prototype.list[0].life -= this.damage;
        shotAudio.play();
        this.fire = false;
    }
}

Enemy.prototype.angryStop = function () {

    this.peacerate-=deltaTime;
    if(this.peacerate<=0){
        this.angry = false;
        this.firerate = 2;
    }
}



Enemy.prototype.swim = function () {
    //console.log("targetX: "+this.targetX);
    //console.log("this.x" +this.x)
    this.dirX += this.targetX - this.x;
    this.dirY += this.targetY - this.y;
    //console.log("dirX: "+this.dirX);
    //console.log("dirY: "+this.dirY);
    this.length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY); //oblicza bezpośrednią długość odcinka
    if (this.length !== 0) {
        this.dirX /= this.length;
        this.dirY /= this.length; //dzieli kierunek przez długość, żeby niezależnie od długości odcinka iśc z tą samą prędkością 
    } else {
        this.dirX = 0;
        this.dirY = 0;
    }
    //console.log("lenght: "+this.length);
    if (this.length > 5) {
        this.x += this.dirX*deltaTime*this.speed*frame;
        this.y += this.dirY*deltaTime*this.speed*frame;
    }
}

Enemy.prototype.swimAll = function () {
    for (var i = 0; i < Enemy.prototype.list.length; i++) {
        Enemy.prototype.list[i].swim();
    }

}

Enemy.prototype.update = function () {

    this.alive();
    this.dirX += this.targetX - this.x;
    this.dirY += this.targetY - this.y;
    this.length = Math.sqrt(this.dirX * this.dirX + this.dirY * this.dirY); //oblicza bezpośrednią długość odcinka

    if (this.length !== 0) {

        this.dirX /= this.length;
        this.dirY /= this.length; //dzieli kierunek przez długość, żeby niezależnie od długości odcinka iśc z tą samą prędkością    
    } else {

        this.dirX = 0;
        this.dirY = 0;

    }

    if (this.length > 5) {
        this.x += this.dirX * deltaTime * 1 * frame;
        this.y += this.dirY * deltaTime * 1 * frame;
    }

    //podązanie i strzał jeśli go widzi
    if (Math.sqrt(Math.pow(this.x - Ship.prototype.list[0].x, 2) + Math.pow(this.y - Ship.prototype.list[0].y, 2)) <= this.rangeOfSee && this.angry) {

        this.follow();
        this.counter();
        this.shot();
        this.bording();
        //  console.log(1);

    }
    
    
    if (Math.sqrt(Math.pow(this.x - Ship.prototype.list[0].x, 2) + Math.pow(this.y - Ship.prototype.list[0].y, 2)) > this.rangeOfSee && this.angry) {

        this.angryStop();
        //console.log(2);

    }


    //sprawdza czy jest u celu jak tak to daje mu nowy cel jeśli nie widzi Graczaa i nie jest wkurzony
    if (Math.pow(this.x - this.targetX, 2) + Math.pow(this.y - this.targetY, 2) < this.rangeOfSee) {
        this.setTarget();
        //console.log(3);
    }

    //staje się zły jak oberwie
    if (this.life < this.maxlife) {
        this.angry = true;
        //console.log(4);
    }

}

Enemy.prototype.updateAll = function () {
    for (var i = 0; i < Enemy.prototype.list.length; i++) {
        Enemy.prototype.list[i].update();
    }

}

Enemy.prototype.alive = function () {
    if (this.life <= 0 || this.crew <= 0) {
        while (Math.abs(Ship.prototype.list[0].x - this.x) <= 350 || Math.abs(Ship.prototype.list[0].y - this.y) <= 350) {
            this.x = Math.floor((Math.random() * 1660) + 130);
            this.y = Math.floor((Math.random() * 870) + 112);;
        }
        money += this.money;
        this.life = this.maxlife;
        this.angry = this.startAngry;
        this.crew = (this.maxlife / 10);
    }
}
