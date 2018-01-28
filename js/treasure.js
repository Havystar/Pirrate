function Treasure(_x, _y, _value){
    this.x = _x;
    this.y = _y;
    this.value = _value;
}

Treasure.prototype.list = new Array(0);

Treasure.prototype.create = function(_x,_y,_value){
    Treasure.prototype.list.push(new Treasure(_x,_y,_value));
}

Treasure.prototype.draw = function(){
    ctx.drawImage(Treasure.image, this.x - 32 * px, this.y - 16*px,frame,  0.5 * frame);
}

Treasure.prototype.drawAll = function(){
    for(let i = 0; i < Treasure.prototype.list.length; i++){
        Treasure.prototype.list[i].draw();
    }
}

Treasure.prototype.updateAll = function(){
    for(let i =0; i < Treasure.prototype.list.length; i++){
        if(Math.sqrt((Math.pow(Treasure.prototype.list[i].x - Ship.prototype.list[0].x,2) + Math.pow(Treasure.prototype.list[i].y - Ship.prototype.list[0].y,2))) < 20){
            moneyAudio.play();
            console.log("many");
            money += Treasure.prototype.list[i].value;
            Treasure.prototype.list.splice(i, 1);
            i--;
            
        }
    }
}