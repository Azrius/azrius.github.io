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
       $("#cursor").css("left", e.clientX + "px");
    });
}

$(document).ready(function(){
    init();
});
