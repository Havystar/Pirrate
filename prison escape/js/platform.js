function Platform(_x, _y, _width, _height) {
    this.x = _x-canvas.width/2+100;
    this.y = _y-950;
    this.width = _width;
    this.height = _height;
}


Platform.prototype.list = new Array(0);

Platform.prototype.create = function(_x, _y, _width, _height) {
    Platform.prototype.list.push(new Platform(_x, _y, _width, _height));
}
Platform.prototype.draw = function() {
    ctx.save();
    ctx.translate(-player.x,0);
    ctx.fillStyle = "#00ff00";
    ctx.fillRect(this.x, this.y, this.width, this.height);
    ctx.restore();
    
}
Platform.prototype.drawAll = function() {
    for(var i = 0; i < Platform.prototype.list.length; i++) {
        Platform.prototype.list[i].draw();
    }
}