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
       
       $("#cursor").css('left', e.clientX + 10).css('top', e.clientY + 10);
    });
}

$(document).ready(function(){
    init();
});
