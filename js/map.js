function Map(){
    this.draw = function(){
        for(let i = 0; i < 20; i++){
        for(let o = 0; o < 40; o++){
            ctx.drawImage(water, o*64*px, i*64*px, 64 * px, 64 * px);
        } 
    }
    }
}

var map = new Map();