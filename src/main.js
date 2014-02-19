function open_menu(){
    
}

function init(){
    $("#menu_button").click(function(){
        open_menu();
    });
    
    mouse_cursor();
}

function mouse_cursor(){
    $(document).mousemove(function(e){
       $("#cursor").css("position","absolute");
       
       $("#cursor").css('left', e.clientX + 0.1).css('top', e.clientY + 0.1);
    });
}

$(document).ready(function(){
    init();
});
