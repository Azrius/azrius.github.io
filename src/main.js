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
       
       $("#cursor").css('left', e.clientX - 4).css('top', e.clientY - 4);
    });
}

$(document).ready(function(){
    init();
});
