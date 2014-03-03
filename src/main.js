function tick(){
    alert("test");    
}

function init(){
    setInterval(tick(), 100);
}

$(document).ready(init());
