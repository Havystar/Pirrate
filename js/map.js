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
    [3, 2, 0, 0, 0, 0, 0, 0, 0, 0, 2, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 2, 0, 2, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 0, 1, 0, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 2, 0, 2, 3, 3, 3, 3, 3, 3],
    [3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
    
];
function Map(_table){
    this.table = _table;
    this.draw = function(){
        for(let i = 0; i < 20; i++){
            for(let o = 0; o < 40; o++){
                ctx.drawImage(water, o*frame, i*frame, frame,frame);
        } 
    }
        //-------------------------------------------------------------rysuje wode
        for(let i = 0; i < this.table.length; i++){
            for(let o = 0; o < this.table[i].length; o++){
                ctx.save();
                ctx.translate( o * frame, i * frame);
                if(this.table[i][o - 1] == 3 && this.table[i][o] == 0) ctx.rotate(-90 * Math.PI / 180); //jeżeli woda jest po lewej obraca o -90st. DZIAŁA
                //LEWA
                else if(this.table[i][o + 1] == 3 && this.table[i][o] == 0) ctx.rotate(90 * Math.PI / 180); //jeżeli woda jest po prawej obraca o 90st. DZIAŁA
                //PRAWA
                else if(this.table.length > i+1){
                    if(this.table[i + 1][o] == 3 && this.table[i][o] == 0) ctx.rotate(180 * Math.PI / 180); // jeżeli woda jest na dole obraca o 180st. DZIAŁA
                    //DÓŁ
                    if(this.table[i + 1][o] == 3 && this.table[i][o - 1] == 3 && this.table[i][o] == 2) ctx.rotate(180 * Math.PI / 180); 
                    //DÓŁ LEWA
                    if(this.table[i + 1][o] == 3 && this.table[i][o + 1] == 3 && this.table[i][o] == 2) ctx.rotate(90 * Math.PI / 180); 
                    //DÓŁ PRAWA
                }
               if(i - 1 >= 0){
                    if(this.table[i][o - 1] == 3 && this.table[i - 1][o] == 3 && this.table[i][o] == 2) ctx.rotate(-90 * Math.PI / 180);
                    //GÓRA LEWA
                   
                }
                ctx.drawImage(Map.island, this.table[i][o]*100, 0, 100, 100, -32*px, -32*px, 64 *px, 64*px);
                //-----------------------------------------------------rysuje wyspy
                ctx.restore();
                
                if(this.table[i][o] < 3){
                    if(Math.abs(o*frame - Ship.prototype.list[0].x) < 64 && Math.abs(i*frame - Ship.prototype.list[0].y) < 64*px){
                    Ship.prototype.list[0].targetX = Ship.prototype.list[0].x;
                    Ship.prototype.list[0].targetY = Ship.prototype.list[0].y;
                    
                }
                }
                
            }
        }
    
    }
}

var map = new Map(map1);