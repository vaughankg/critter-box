# Critter Box

Critters running around, leaving a trail on an HTML5 canvas? Yeah, why not.

## Installation

Install with npm

`npm install critter-box`

Or dont.

Just include `critterbox.js` in your html.

## Usage

``` js
    var myCritterBox = new critterBox.box(ctx, critters);
    myCritterBox.animate();
```

`ctx` is a reference to a '2d' canvas context;

`critters` is an array of options objects, each object representing a
critter. For example:

``` js
    var critters = [
      {start_pos: [0,0], color: [0,0,0], step_function: 'levy_flight', brush_size: 1, brush_pressure: 10},
      {start_pos: [500,500], color: [100,150,250], step_function: 'levy_flight', brush_size: 1, brush_pressure: 10}
    ];
```

All options are optional. The following options are available:

``` js
start_pos       // Where the critter starts its journey. e.g. [0,0]
color           // In the format [r,g,b] e.g. [250,250,250]
step_function   // 'levy_flight' or 'brownian_motion'. This is describes the type of movement the critter makes. Default is 'levy_flight'
brush_size      // The thickness of the trail. Default is 1
brush_pressure  // Default is 1
```

See the demo folder for a working example.

