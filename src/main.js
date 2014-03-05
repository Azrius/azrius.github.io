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
  var stats_panel = document.getElementById("stats");
  
  resources.crude_oil += stats.oilriggers * 0.1;
  resources.lumber += stats.lumberjacks * 0.2;
  resources.steel += stats.steelworkers 0.4;
  
  resource_panel.innerHTML = "Crude oil: " + resources.crude_oil + "<br />" + "Lumber: " + resources.lumber + "<br />" + "Steel: " + resources.steel;
  stats_panel.innerHTML = "Citizens: " + stats.citizens + "<br />" + "Lumberjacks: " + stats.lumberjacks + "<br />" + "Oilriggers: " + stats.oilriggers + "<br />" + "Steelworkers: " + stats.steelworkers;
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
