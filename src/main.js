function open_menu(){
    
}

function init(){
    $("#menu_button").click(function(){
        open_menu();
    });  
}

function mouse_cursor(){
    $(document).mousemove(function(e){
       alert(e.clientX); 
    });
}

$(document).ready(function(){
    init();
});
