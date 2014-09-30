critterBox.sketchyBrush = function( context, options )
{
    options = options || {};
    this.init( context, options );
}

critterBox.sketchyBrush.prototype =
{
    name: "Sketchy",
    context: null,
    prevX: null, prevY: null,
    points: null, count: null,

    init: function( context, options )
    {
        this.context = context;
        this.context.globalCompositeOperation = 'source-over';

        this.color = options.color || [250,250,250];
        this.brush_size = options.brush_size || 1;
        this.brush_pressure = options.brush_pressure || 1;
        this.max_points = 1000;

        this.points = new Array();
        this.count = 0;
    },

    destroy: function()
    {
    },

    strokeStart: function( X, Y )
    {
        this.prevX = X;
        this.prevY = Y;
    },

    stroke: function( X, Y )
    {
        var i, dx, dy, d;

        this.points.push( [ X, Y ] );
        if (this.points.length > this.max_points){
          this.points.shift();
          this.count--;
        }

        this.context.lineWidth = this.brush_size;
        this.context.strokeStyle = "rgba(" + this.color[0] + ", " + this.color[1] + ", " + this.color[2] + ", " + 0.05 * this.brush_pressure + ")";

        this.context.beginPath();
        this.context.moveTo(this.prevX, this.prevY);
        this.context.lineTo(X, Y);
        this.context.stroke();

        for (i = 0; i < this.points.length; i++)
        {
            dx = this.points[i][0] - this.points[this.count][0];
            dy = this.points[i][1] - this.points[this.count][1];
            d = dx * dx + dy * dy;

            if (d < 4000 && Math.random() > (d / 2000))
            {
                this.context.beginPath();
                this.context.moveTo( this.points[this.count][0] + (dx * 0.3), this.points[this.count][1] + (dy * 0.3));
                this.context.lineTo( this.points[i][0] - (dx * 0.3), this.points[i][1] - (dy * 0.3));
                this.context.stroke();
            }
        }

        this.prevX = X;
        this.prevY = Y;

        this.count ++;
    },

    strokeEnd: function()
    {

    }
}

