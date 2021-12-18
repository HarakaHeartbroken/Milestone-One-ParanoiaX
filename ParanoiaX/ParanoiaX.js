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
    [02,12,12,00,00,00,00,00,00,00,02,13,13,02,00,00,00,00,00,00,00,00,00,02],
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
        this.requires('Tile, 2D, Canvas, Wall, Collision, horWall')
      },
})
Crafty.c("vertWallTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, vertWall')
      },
})
Crafty.c("topLeftTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, topLeft')
      },
})
Crafty.c("topRightTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, topRight')
      },
})
Crafty.c("bottomLeftTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, bottomLeft')
      },
})
Crafty.c("bottomRightTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall, Collision, bottomRight')
      },
})
Crafty.c("leftLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, , leftLaser, Collision, Wall')
      },
})
Crafty.c("redLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, redLaser, Collision, Hazard')
      },
})
Crafty.c("rightLaserTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, rightLaser, Collision, Wall')
      },
})
Crafty.c("computerTerminalTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, , termOn, Collision, Interactible')
      },
})
Crafty.c("gooTile", {
    init: function() {
        this.requires('Tile, 2D, Canvas, gooPour, Collision, Interactible')
      },
})
Crafty.c("hazardTile", {
        init: function() {
            this.requires('Tile, 2D, Canvas, hazStripe, Collision, Interactible')
          },
});



// takes a given array map and renders it according to the map key/tile definitions
// at the z-index passed
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
                .addComponent("laserBeam")
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
            else if(map[i][j] === 13){
                Crafty.e("hazardTile")
                .attr({x: (16*j), y: (16*i), z: z, w: 16, h: 16})
            }

        }
    } 
}


// Defines a series of screens for various gamestate purposes, including the main "gameScreen"

// Start screen, names and explains game, listens for keydown to move to gameScreen
Crafty.defineScene("startScreen", function(){
    Crafty.background("#000");    
    var decoration1 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 40})
    var decoration2 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 40})
    var decoration3 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 40, y: 300})
    var decoration4 = Crafty.e("2D, Canvas, hazSymbol")
        .attr({w: 32, h: 32, x: 490, y: 300})
    var decoration5 = Crafty.e("2D, Canvas, blood1")
        .attr({w: 32, h: 32, x: 240, y: 75})
    var decoration6 = Crafty.e("2D, Canvas, blood2")
        .attr({w: 32, h: 32, x: 95, y: 170})
    var welcomeText = Crafty.e("2D, DOM, Text")
        .attr({w: 150, h: 20, x: 200, y: 120,})
        .text("Welcome to Alpha Complex, Citizen! Friend Computer would like" +
        " to remind you that you may control your character with the arrow keys!" +
        " Reminder: Happiness is Mandatory. Fun is Mandatory. Unhappiness is TREASON.")
        .textColor("#0fdc13");
    var startText = Crafty.e("2D, DOM, Text")
        .attr({w: 150, h: 20, x: 200, y: 220})
        .text("Your job is to get to the door at the end of the hall." +
        " Press any key to start the game!")
        .textColor("#0fdc13");
    welcomeText.bind('KeyDown', function(evt){
        console.log("Registered key input")
        Crafty.enterScene("gameScreen");
    });
});
// The main game, defines the player as a 16x16 rectangle with fourway control and handled 
// directional image control, defines a series of responses for player events and animations
// for various gamestates
Crafty.defineScene("gameScreen", function(){
    mapRender(backMap)
    mapRender(demoMap)

    Crafty.e("2d, Canvas, greenstatic, SpriteAnimation, Collision, NPC")
    .attr({x: 160, y: 110, z: 2, w: 16, h: 16})
    var player = Crafty.e("2D, Canvas, redstatic, SpriteAnimation, Collision, Fourway, Player")
    .attr({lives: 6, x: 50, y: 50, z: 2, w: 16, h: 16})
    .fourway(100)
    .onHit('Wall', function(evt){
      console.log("Hit a wall at X = "+ this.x + ", Y = " + this.y)
      this.shift(2*evt[0].nx, 2*evt[0].ny)
    })
    .onHit('laserBeam', function(evt){
      console.log("Got blowed up at X = "+ this.x + ", Y = " + this.y + "!")
      this.lives -= 1;
      if(this.lives > 0){
      window.alert(
          "You stepped into a laser above your clearance level!" + 
          " Your sizzling ashes slowly sink to the floor. You have " +
          this.lives + 
          " clones remaining!")
      console.log(this.lives);
      player.animate("death", 2)
      this.shift(2*evt[0].nx, 2*evt[0].ny)
      }
      else{
          Crafty.enterScene("gameOver")
      }
    })
    .onHit("Interactible", function(){
        console.log("Hit an interactible!")
    })
    .onHit("NPC", function(evt){
        console.log("Hit an NPC at X = "+ this.x + ", Y = " + this.y + "!")
        window.alert("Hey! Don't push me!")
        this.shift(2*evt[0].nx, 2*evt[0].ny)
    })
  
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
  player.reel("death", 1000, [
      [0,4],
      [2,5],
      [3,4],
      [2,4],
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

})


Crafty.defineScene("gameOver", function(){
    Crafty.background("#000");
    var gameOverText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 120 })
          .text("You have run out of clones! Friend Computer sadly marks your" +
          " permanent file as TRAITOROUS FAILURE, then deletes you from its" +
          " memory banks so it won't be sad anymore. YOU LOSE!")
          .textAlign("center")
          .textColor("#0fdc13");
    var hintText = Crafty.e("2D, DOM, Text")
          .attr({ w: 150, h: 20, x: 200, y: 240 })
          .text("Press any key to play again! Remember: Fun is Mandatory!")
          .textAlign("center")
          .textColor("#0fdc13");
    hintText.bind('KeyDown', function(evt){
        Crafty.enterScene("startScreen")
    })
});





Crafty.enterScene("startScreen")







// // currently unused definition for a similiar character in green, for story use
// //   var greenPlayer = Crafty.e("2D, Canvas, greenstatic, SpriteAnimation, Fourway, Player")
// //   .attr({x: 70, y: 70, z: 2, w: 16, h: 16})
// //   .fourway(100)

//   // currently unused reel/animation process for the green version of the player character
// // greenPlayer.reel("greenwalkDown", 1000, [
// //     [0,0],
// //     [1,0],
// //     [2,0],
// //     [3,0],
// // ])
// // greenPlayer.reel("greenwalkUp", 1000, [
// //     [0,1],
// //     [1,1],
// //     [2,1],
// //     [3,1]
// // ])
// // greenPlayer.reel("greenwalkLeft", 1000, [
// //     [0,2],
// //     [1,2],
// //     [2,2],
// //     [3,2]
// // ])
// // greenPlayer.reel("greenwalkRight", 1000, [
// //     [0,3],
// //     [1,3],
// //     [2,3],
// //     [3,3]
// // ])

// // greenPlayer.bind("KeyDown", function(evt){
// //       if(evt.key === Crafty.keys.UP_ARROW){
// //         greenPlayer.animate("greenwalkUp", -1)
// //       }
// //       if(evt.key === Crafty.keys.DOWN_ARROW){
// //         greenPlayer.animate("greenwalkDown", -1)
// //       }
// //       if(evt.key === Crafty.keys.LEFT_ARROW){
// //         greenPlayer.animate("greenwalkLeft", -1)
// //       }
// //       if(evt.key === Crafty.keys.RIGHT_ARROW){
// //         greenPlayer.animate("greenwalkRight", -1)
// //       }
// //   })





