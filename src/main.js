stats = {
  citizens: 100,
  lumberjacks: 2,
  oilriggers: 2,
  steelworkers: 2,
};

resources = {
  crude_oil: 0,
  lumber: 0,
  steel: 0,
}

function update_resources(){
  var resource_panel = document.getElementById("resources");
  
  resource_panel.innerHTML = "Crude oil: " + resources.crude_oil;
}

function update_stats(){
  
}

function tick(){
  update_resources();
  update_stats();
}

function init(){
  setInterval(tick, 100);    
}
