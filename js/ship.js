function Ship(){
    

   this.x = canvas.width / 2;
   this.y = canvas.height / 2;

    this.draw = function(){
        ctx.drawImage(Ship.image, this.x, this.y);
    }

}

var ship = new Ship;