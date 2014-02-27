function open_menu(){
    
}

function init(){
    $("#menu_button").click(function(){
        open_menu();
    });
}

$(document).ready(function(){
    init();
    alert(httpGet("http://example.com/"));
});

function httpGet(theUrl)
{
    var xmlHttp = null;

    xmlHttp = new XMLHttpRequest();
    xmlHttp.open( "GET", theUrl, false );
    xmlHttp.send( null );
    return xmlHttp.responseText;
}

