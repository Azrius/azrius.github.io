function open_menu(){
    
}

function init(){
    $("#menu_button").click(function(){
        open_menu();
    });
    
    document.getElementById("men_button").webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
}

$(document).ready(function(){
    init();
});
