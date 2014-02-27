function open_menu(){
    
}

function init(){
    $("#menu_button").click(function(){
        open_menu();
    });
    
    document.getElementById("menu_button").webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
}

$(document).ready(function(){
    init();
    webkitRequestFullScreen();
});

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

alert(httpGet("http://example.com/"));
