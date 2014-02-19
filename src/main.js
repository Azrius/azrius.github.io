function open_menu(){
    
}

function init(){
    $("#menu_button").click(function(){
        open_menu();
    });
    
    document.body.requestFullscreen();
}

$(document).ready(function(){
    init();
});
