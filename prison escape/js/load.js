function start () {
    document.getElementById("hide").style.zIndex = "-1";
	document.getElementById("hide").innerHTML = "";
    var canvas = document.getElementById("gra");
    gra.width  = 1900;
    gra.height = 950;
    Player.image = new Image();
    Player.image.src = 'res/character.png';
    txt32 = new Image();
    txt32.src = 'res/txt32.png'
    txt128 = new Image();
    txt128.src = 'res/txt128.png'
    rockBar = new Image();
    rockBar.src = 'res/rock_bar.png'
    jail = new Image();
    jail.src = 'res/jail.png';
    
    
   begin();
}
