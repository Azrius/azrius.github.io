stats = {};
resources = {
  crude_oil: 0,
  lumber: 0,
}

function tick(){
  alert(resources.lumber);
}

function init(){
  setInterval(tick, 100);    
}
