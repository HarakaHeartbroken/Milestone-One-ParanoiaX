// Game = {
//   // This defines our grid's size and the size of each of its tiles
//   map_grid: {
//     width:  24,
//     height: 16,
//     tile: {
//       width:  16,
//       height: 16
//     }
//   },

//   // The total width of the game screen. Since our grid takes up the entire screen
//   //  this is just the width of a tile times the width of the grid
//   width: function() {
//     return this.map_grid.width * this.map_grid.tile.width;
//   },

//   // The total height of the game screen. Since our grid takes up the entire screen
//   //  this is just the height of a tile times the height of the grid
//   height: function() {
//     return this.map_grid.height * this.map_grid.tile.height;
//   },

//   // Initialize and start our game
//   start: function() {
//     // Start crafty and set a background color so that we can see it's working
//     Crafty.init(Game.width(), Game.height());
//     Crafty.background('rgb(249, 223, 125)');

// //  Player character, placed at 5, 5 on our grid
//  Crafty.e('PlayerCharacter').at(10, 5);


//  Crafty.e("2D, Fourway, Collision, player")
//  .attr({x: 32, y: 32, w: 32, h: 32})
//  .collision([0, 16, 16, 0, 32, 16, 16, 32])
//  .fourway()
//  .bind('Move', function(evt) { // after player moved
//    var hitDatas, hitData;
//    if ((hitDatas = this.hit('wall'))) { // check for collision with walls
//      hitData = hitDatas[0]; // resolving collision for just one collider
//      if (hitData.type === 'SAT') { // SAT, advanced collision resolution
//        // move player back by amount of overlap
//        this.x -= hitData.overlap * hitData.nx;
//        this.y -= hitData.overlap * hitData.ny;
//      } else { // MBR, simple collision resolution
//        // move player to previous position
//        this.x = evt._x;
//        this.y = evt._y;
//      }
//    }
//  });

    // Place a tree at every edge square on our grid of 16x16 tiles
//     for (var x = 0; x < Game.map_grid.width; x++) {
//       for (var y = 0; y < Game.map_grid.height; y++) {
//         var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;

//         if (at_edge) {
//           // Place a tree entity at the current tile
//           Crafty.e('Tree').at(x, y);
//         } else if (Math.random() < 0.06) {
//           // Place a bush entity at the current tile
//           Crafty.e('Bush').at(x, y);
//         }
//       }
//     }
//   }
// }





// Game = {
//   // This defines our grid's size and the size of each of its tiles
//   map_grid: {
//     width:  24,
//     height: 16,
//     tile: {
//       width:  16,
//       height: 16
//     }
//   },
 
//   // The total width of the game screen. Since our grid takes up the entire screen
//   //  this is just the width of a tile times the width of the grid
//   width: function() {
//     return this.map_grid.width * this.map_grid.tile.width;
//   },
 
//   // The total height of the game screen. Since our grid takes up the entire screen
//   //  this is just the height of a tile times the height of the grid
//   height: function() {
//     return this.map_grid.height * this.map_grid.tile.height;
//   },
 
//   // Initialize and start our game
//   start: function() {
//     // Start crafty and set a background color so that we can see it's working
//     Crafty.init(Game.width(), Game.height());
//     Crafty.background('black');
 
//     // Place a tree at every edge square on our grid of 16x16 tiles
//     for (var x = 0; x < Game.map_grid.width; x++) {
//       for (var y = 0; y < Game.map_grid.height; y++) {
//         var at_edge = x == 0 || x == Game.map_grid.width - 1 || y == 0 || y == Game.map_grid.height - 1;
 
//         if (at_edge) {
//           // Place a tree entity at the current tile
//           Crafty.e('2D, Canvas, Color')
//             .attr({
//               x: x * Game.map_grid.tile.width,
//               y: y * Game.map_grid.tile.height,
//               w: Game.map_grid.tile.width,
//               h: Game.map_grid.tile.height
//             })
//             .color('rgb(20, 125, 40)');
//         } else if (Math.random() < 0.06) {
//           // Place a bush entity at the current tile
//           Crafty.e('2D, Canvas, Color')
//             .attr({
//               x: x * Game.map_grid.tile.width,
//               y: y * Game.map_grid.tile.height,
//               w: Game.map_grid.tile.width,
//               h: Game.map_grid.tile.height
//             })
//             .color('rgb(20, 185, 40)');
//         }
//       }
//     }
//   }
// }


// Test Collision, one static rectangle one controlled by arrow keys, color change on coll
// Crafty.init(200, 200);

var dim1 = {x: 5, y: 5, w: 50, h: 50}
var dim2 = {x: 20, y: 10, w: 60, h: 40}

var rect1 = Crafty.e("2D, Canvas, Color").attr(dim1).color("red");

var rect2 = Crafty.e("2D, Canvas, Color, Keyboard, Fourway").fourway(80).attr(dim2).color("blue");

rect2.bind("EnterFrame", function () {
    if (rect1.x < rect2.x + rect2.w &&
        rect1.x + rect1.w > rect2.x &&
        rect1.y < rect2.y + rect2.h &&
        rect1.h + rect1.y > rect2.y) {
        // collision detected!
        this.color("green");
    } else {
        // no collision
        this.color("blue");
    }
});