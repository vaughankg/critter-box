critterBox.critter = function( context, options )
{
  options = options || {};
  this.init( context, options );
}

critterBox.critter.prototype =
{
  init: function( context, options )
  {
    this.canvas = context.canvas;
    this.step_function = critterBox.step_functions[(options.step_function || 'levy_flight')]
    this.prevPos = options.start_pos || [0, 0];

    this.brush = new critterBox.sketchyBrush(context, options);
  },

  takeStep: function()
  {
    var step = this.step_function.call(
        this,
        this.prevPos,
        [0, 0],
        [this.canvas.width, this.canvas.height]
    );
    var newPos = [ this.prevPos[0] + step[0], this.prevPos[1] + step[1] ]
    this.brush.strokeStart(this.prevPos[0], this.prevPos[1]);
    this.brush.stroke(newPos[0], newPos[1]);
    this.prevPos = newPos;
  }
}

