critterBox.box = function( context, critterOptions )
{
  this.init( context, critterOptions );
}

critterBox.box.prototype =
{
  init: function( context, critterOptions )
  {
    this.critters = critterOptions.map(function(options){
      return new critterBox.critter(context, options);
    });

  },

  animate: function()
  {
    var previous_timestamp = null;
    // FIXME
    var me = this;

    animloop(0);

    function animloop(timestamp){
      if (previous_timestamp === null) previous_timestamp = timestamp;
      window.requestAnimationFrame(animloop);
      if (timestamp - previous_timestamp > 0){
        me.render();
        previous_timestamp = timestamp;
      }
    }
  },

  render: function()
  {
    for(i=0;i<this.critters.length;i++){
      this.critters[i].takeStep();
    }
  }

}

