var map1 = [
    /*
    0 - brzeg
    1 - środek wyspy
    2 - brzeg zakręt
    3 - woda
    */
    
    [3, 3, 3, 3, 3, 3, 3, 3, 3 ,3, 3, 3],
    [3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3],
    [3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3],
    [3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3],
    [3, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 3],
    [3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    
];
function Map(_table){
    this.table = _table;
    this.draw = function(){
        for(let i = 0; i < 20; i++){
            for(let o = 0; o < 40; o++){
                ctx.drawImage(water, o*64*px, i*64*px, 64 * px, 64 * px);
        } 
    }
        //-------------------------------------------------------------rysuje wode
        for(let i = 0; i < this.table.length; i++){
            for(let o = 0; o < this.table[i].length; o++){
                ctx.save();
                ctx.translate( o * 64 * px, i * 64 * px);
                if(this.table[i][o - 1] == 3) ctx.rotate(-90 * Math.PI / 180); //jeżeli woda jest po lewej obraca o -90st. DZIAŁA
                if(this.table.length > i+1){
                    if(this.table[i + 1][o] == 3 && this.table[i][o] == 0) ctx.rotate(180 * Math.PI / 180); // jeżeli woda jest na dole obraca o 180st. NIE DZIAŁA
                }
                
                ctx.drawImage(Map.island, this.table[i][o]*100, 0, 100, 100, -32, -32, 64, 64);
                ctx.restore();
            }
        }
        //------------------------------------------------------------rysuje wyspy
    }
}

var map = new Map(map1);