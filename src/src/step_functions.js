critterBox.step_functions = (function(){
  var step_functions = {
    'levy_flight': function(old_pos, min, max)
{
  var s = levy_flight(1.5, 4);
  s = limit_step(s, scale_point(max, -1), max);
  s = reflected_step(old_pos, s, min, max);
  return s;
},
'brownian_motion': function(old_pos, min, max)
{
  var s = brownian_motion(50);
  s = limit_step(s, scale_point(max, -1), max);
  s = reflected_step(old_pos, s, min, max);
  return s;
}
}

return step_functions;

// Private functions

function scale_point(point, scale){
  return [point[0]*scale, point[1]*scale];
}

function levy_flight(alpha, beta){
  alpha = alpha || 1.5;
  beta = beta || 1;
  theta = Math.random()*2*Math.PI; // uniform random angle
  f = beta * Math.pow(Math.random(), (-1/alpha)); // fat tailed random length
  x = f*Math.cos(theta);
  y = f*Math.sin(theta);
  return [x, y];
}

function brownian_motion(alpha){
  alpha = alpha || 1.5;
  theta = Math.random()*2*Math.PI; // uniform random angle
  f = Math.random()*alpha; // uniformed random length
  x = f*Math.cos(theta);
  y = f*Math.sin(theta);
  return [x, y];
}

function limit_step(step, min, max){
  return [ Math.max(min[0], Math.min(max[0], step[0])),
         Math.max(min[1], Math.min(max[1], step[1])) ];
}

function reflected_step(current, step, min, max){
  // TODO, reflect off any object. Maybe pass in a list of objects and bounce of the nearest one.
  return [ reflect_step_dimention(current[0], step[0], min[0], max[0]),
         reflect_step_dimention(current[1], step[1], min[1], max[1]) ];
}

function reflect_step_dimention(current, step, min, max){
  if (step > 0){
    var gap = max - current;
    return (step > gap) ? (2*gap - step) : step;
  }
  else{
    var gap = min - current;
    return (step < gap) ? (2*gap - step) : step;
  }
}


})();

