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
  
  resource_panel.innerHTML = "Crude oil: " + resources.crude_oil + "<br />" + "Lumber: " + resources.lumber;
  stats_panel.innerHTML = "Citizens: " + stats.citizens + "<br />" + "Lumberjacks: " + "<br />" + "Oilriggers: " + stats.oilriggers + "<br />" + "Steelworkers" + stats.steelworkers;
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
