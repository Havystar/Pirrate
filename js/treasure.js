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
    ctx.drawImage(Treasure.image, this.x, this.y);
}

Treasure.prototype.drawAll = function(){
    for(let i = 0; i < Treasure.prototype.list.length; i++){
        Treasure.prototype.list[i].draw();
    }
}