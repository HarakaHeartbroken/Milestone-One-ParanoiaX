Crafty.init(600, 400,);

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
    [02,00,00,00,00,00,00,00,00,00,02,00,00,03,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,08,09,09,10,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02],
    [02,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,00,02],
    [06,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,01,07]
  ];

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
   
Crafty.c("floor", {
    init: function() {
        this.requires('Tile, 2D, Canvas')
      },
})
Crafty.c("horWall", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("vertWall", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("topLeft", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("topRight", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("interiorWall", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("bottomLeft", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("bottomRight", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("leftLaser", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("horlaserWall", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Hazard')
      },
})
Crafty.c("rightLaser", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Wall')
      },
})
Crafty.c("computerTerminal", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Interactible')
      },
})
Crafty.c("goo", {
    init: function() {
        this.requires('Tile, 2D, Canvas, Interactible')
      },
})







  Crafty.load(red_assets);
  Crafty.load(green_assets);
  Crafty.load(map_assets);

// function mapRender(map){
//     for(i = 0; i<map.length; i++){
//         for(j = 0; j<map[i].length; j++){
//             if(map[i][j] === 0){
//                 Crafty.e("floor").at(i, j)
//             }
//             else if(map[i][j] === 1){
//                 Crafty.e("horWall").at(i, j)
//             }
//             else if(map[i][j] === 2){
//                 Crafty.e("vertWall").at(i, j)
//             }
//             else if(map[i][j] === 3){
//                 Crafty.e("topLeft").at(i, j)
//             }
//             else if(map[i][j] === 4){
//                 Crafty.e("topRight").at(i, j)
//             }
//             else if(map[i][j] === 5){
//                 Crafty.e("interiorWall").at(i, j)
//             }
//             else if(map[i][j] === 6){
//                 Crafty.e("bottomLeft").at(i, j)
//             }
//             else if(map[i][j] === 7){
//                 Crafty.e("bottomRight").at(i, j)
//             }
//             else if(map[i][j] === 8){
//                 Crafty.e("leftLaser").at(i, j)
//             }
//             else if(map[i][j] === 9){
//                 Crafty.e("horlaserWall").at(i, j)
//             }
//             else if(map[i][j] === 10){
//                 Crafty.e("rightLaser").at(i, j)
//             }
//             else if(map[i][j] === 11){
//                 Crafty.e("computerTerminal").at(i, j)
//             }
//             else if(map[i][j] === 12){
//                 Crafty.e("goo").at(i, j)
//             }

//         }
//     } 
// }
  
// mapRender(demoMap)


  var player = Crafty.e("2D, Canvas, redstatic, SpriteAnimation, Fourway, Player")
  .attr({x: 50, y: 50, z: 2, w: 16, h: 16})
  .fourway(100)

//   var greenPlayer = Crafty.e("2D, Canvas, greenstatic, SpriteAnimation, Fourway, Player")
//   .attr({x: 70, y: 70, z: 2, w: 16, h: 16})
//   .fourway(100)


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

greenPlayer.reel("greenwalkDown", 1000, [
    [0,0],
    [1,0],
    [2,0],
    [3,0],
])
greenPlayer.reel("greenwalkUp", 1000, [
    [0,1],
    [1,1],
    [2,1],
    [3,1]
])
greenPlayer.reel("greenwalkLeft", 1000, [
    [0,2],
    [1,2],
    [2,2],
    [3,2]
])
greenPlayer.reel("greenwalkRight", 1000, [
    [0,3],
    [1,3],
    [2,3],
    [3,3]
])

greenPlayer.bind("KeyDown", function(evt){
      if(evt.key === Crafty.keys.UP_ARROW){
        greenPlayer.animate("greenwalkUp", -1)
      }
      if(evt.key === Crafty.keys.DOWN_ARROW){
        greenPlayer.animate("greenwalkDown", -1)
      }
      if(evt.key === Crafty.keys.LEFT_ARROW){
        greenPlayer.animate("greenwalkLeft", -1)
      }
      if(evt.key === Crafty.keys.RIGHT_ARROW){
        greenPlayer.animate("greenwalkRight", -1)
      }
  })
// player.bind(onHit('Wall'), function(){
//     player.x = 
//     player.y = 
// })




// player.checkHits("wall")
//     .bind("HitOn", function(hitData){
//         this.x = evt._x;
//         this.y = evt._y;
//     })