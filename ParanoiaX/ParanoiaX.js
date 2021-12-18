Crafty.init(600, 400,);



// A series of map arrays that represent rendering layers of the game screen.

// Map Key:
// 00- empty Tile
// 01- horizontal wall
// 02- vertical wall
// 03- top left corner
// 04- top right corner
// 05- interior wall
// 06- bottom left corner
// 07- bottom right corner
// 08- Left laser emitter
// 09- laser beam
// 10- right laser emitter
// 11- computer terminal
// 12- green goo
// 13-


var backMap = [
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00]
  ];


var demoMap = [
    [03,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,04],
    [02,12,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,03,01,01,07,00,00,06,01,01,04,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,02,00,00,00,00,00,00,00,00,02,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,02,00,00,00,00,00,00,00,00,02,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,06,01,01,04,00,00,03,01,01,07,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,11,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,02,00,00,02,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,08,09,09,10,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02],
    [06,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,07]
  ];

  var decMap = [
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00],
    [00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00]
  ];


// a series of asset definitions using sprite tilesheet terminology
var map_assets = {
    "sprites": {
        "tileset.png": {
            tile: 16,
            tileh: 16,
            map: {
                floor: [2,2],
                vertWall: [2,0],
                horWall: [3,0],
                topLeft: [1,0],
                topRight: [0,3],
                bottomLeft:[0,1],
                bottomRight:[1,1]
            }
        }
    }
};

var red_assets = {
    "sprites": {
        "redshirt.png": {
            tile: 16,
            tileh: 16,
            map: {
                    redwalk_down: [1, 0],
                    redwalk_up: [1, 1],
                    redwalk_left: [1, 2],
                    redwalk_right: [1, 3],
                    redstatic: [0, 0]
            }
        }
    }
};

var green_assets = {
    "sprites": {
        "greenshirt.png": {
            tile: 16,
            tileh: 16,
            map: {
                    greenwalk_down: [1, 0],
                    greenwalk_up: [1, 1],
                    greenwalk_left: [1, 2],
                    greenwalk_right: [1, 3],
                    greenstatic: [0, 0]
                }
        }
    }
};
   
var computer_assets = {
    "sprites": {
        "computer.png": {
            tile: 16,
            tileh: 16,
            map: {
                    termOn: [0, 0],
                    termOff: [1, 0]
                }
        }
    }
};

var environmental_assets = {
    "sprites": {
        "doodads.png": {
            tile: 16,
            tileh: 16,
            map: {
                    gooPour: [0, 0],
                    gooSpat1: [5, 3],
                    radSymbol: [3, 1],
                    blood1: [2, 0],
                    blood2: [3, 0],
                    blood3: [4, 0],
                    blood4: [5, 0],
                    hazStripe: [0, 3],
                    extinguisher: [2, 3],
                    hazSymbol: [3, 1],
                    readOut: [5, 1]
                }
        }
    }
};

var laser_assets = {
    "sprites": {
        "lasers.png": {
            tile: 16,
            tileh: 16,
            map: {
                    rightLaser: [9, 5],
                    leftLaser: [9, 6],
                    redLaser: [1, 0],
                }
        }
    }
};


// Instructs the canvas to load all of the defined assets for use
Crafty.load(red_assets);
Crafty.load(green_assets);
Crafty.load(map_assets);
Crafty.load(computer_assets);
Crafty.load(environmental_assets);
Crafty.load(laser_assets);






// a series of component definitions (Essentially classes)
//TODO: Create "Tile" component, then subdivide that into "Wall" etc to reduce redundant code
Crafty.c("floorTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, floor')
      },
})
Crafty.c("horWallTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, horWall')
      },
})
Crafty.c("vertWallTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, vertWall')
      },
})
Crafty.c("topLeftTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, topLeft')
      },
})
Crafty.c("topRightTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, topRight')
      },
})
Crafty.c("bottomLeftTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, bottomLeft')
      },
})
Crafty.c("bottomRightTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, bottomRight')
      },
})
Crafty.c("leftLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, , leftLaser, Wall')
      },
})
Crafty.c("redLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, redLaser, Hazard')
      },
})
Crafty.c("rightLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, rightLaser, Wall')
      },
})
Crafty.c("computerTerminalTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, , termOn, Interactible')
      },
})
Crafty.c("gooTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, gooPour, Interactible')
      },
});



// takes a given array map and renders it according to the map key at the z-index passed
function mapRender(map, z){
    for(i = 0; i<map.length; i++){
        for(j = 0; j<map[i].length; j++){
            if(map[i][j] === 00){
                Crafty.e("floorTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 01){
                Crafty.e("horWallTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 02){
                Crafty.e("vertWallTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 03){
                Crafty.e("topLeftTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 04){
                Crafty.e("topRightTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 05){
                Crafty.e("interiorWallTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 06){
                Crafty.e("bottomLeftTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 07){
                Crafty.e("bottomRightTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 08){
                Crafty.e("leftLaserTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 09){
                Crafty.e("redLaserTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 10){
                Crafty.e("rightLaserTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 11){
                Crafty.e("computerTerminalTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }
            else if(map[i][j] === 12){
                Crafty.e("gooTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }

        }
    } 
}

// instructs the canvas to render the background layer and map layer of the game screen
mapRender(demoMap, 1)
mapRender(backMap, 0)

// initializes the player character as a controllable rectangle with tags
  var player = Crafty.e("2D, Canvas, redstatic, SpriteAnimation, Fourway, Player")
  .attr({x: 50, y: 50, z: 2, w: 16, h: 16})
  .fourway(100)
  
// currently unused definition for a similiar character in green, for story use
//   var greenPlayer = Crafty.e("2D, Canvas, greenstatic, SpriteAnimation, Fourway, Player")
//   .attr({x: 70, y: 70, z: 2, w: 16, h: 16})
//   .fourway(100)

// a series of reel definitions to create gifs from the same sprite sheet, passing a name
// and number of milliseconds for the animation to run in
player.reel("redwalkDown", 1000, [
    [0,0],
    [1,0],
    [2,0],
    [3,0],
])
player.reel("redwalkUp", 1000, [
    [0,1],
    [1,1],
    [2,1],
    [3,1]
])
player.reel("redwalkLeft", 1000, [
    [0,2],
    [1,2],
    [2,2],
    [3,2]
])
player.reel("redwalkRight", 1000, [
    [0,3],
    [1,3],
    [2,3],
    [3,3]
])

// handles directional input and animates the appropriate reel
//TODO: add in a stop point to return the character to rest after keys are released
player.bind("KeyDown", function(evt){
      if(evt.key === Crafty.keys.UP_ARROW){
          player.animate("redwalkUp", -1)
      }
      if(evt.key === Crafty.keys.DOWN_ARROW){
        player.animate("redwalkDown", -1)
      }
      if(evt.key === Crafty.keys.LEFT_ARROW){
        player.animate("redwalkLeft", -1)
      }
      if(evt.key === Crafty.keys.RIGHT_ARROW){
        player.animate("redwalkRight", -1)
      }
  })


  // currently unused reel/animation process for the green version of the player character
// greenPlayer.reel("greenwalkDown", 1000, [
//     [0,0],
//     [1,0],
//     [2,0],
//     [3,0],
// ])
// greenPlayer.reel("greenwalkUp", 1000, [
//     [0,1],
//     [1,1],
//     [2,1],
//     [3,1]
// ])
// greenPlayer.reel("greenwalkLeft", 1000, [
//     [0,2],
//     [1,2],
//     [2,2],
//     [3,2]
// ])
// greenPlayer.reel("greenwalkRight", 1000, [
//     [0,3],
//     [1,3],
//     [2,3],
//     [3,3]
// ])

// greenPlayer.bind("KeyDown", function(evt){
//       if(evt.key === Crafty.keys.UP_ARROW){
//         greenPlayer.animate("greenwalkUp", -1)
//       }
//       if(evt.key === Crafty.keys.DOWN_ARROW){
//         greenPlayer.animate("greenwalkDown", -1)
//       }
//       if(evt.key === Crafty.keys.LEFT_ARROW){
//         greenPlayer.animate("greenwalkLeft", -1)
//       }
//       if(evt.key === Crafty.keys.RIGHT_ARROW){
//         greenPlayer.animate("greenwalkRight", -1)
//       }
//   })





