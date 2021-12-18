Crafty.init(600, 400,);

var game_assets = {
    "sprites": {
      "redshirt.png": {
        tile: 16,
        tileh: 16,
        map: {
          walk_down: [1, 0],
          walk_up: [1, 1],
          walk_left: [1, 2],
          walk_right: [1, 3],
          static: [0, 0]
        }
      }
    }
  };
   
  Crafty.load(game_assets);

pc.reel("walkUp", 1000, [
    [],
    [],
    [],
    []
])
pc.reel("walkDown", 1000, [
    [],
    [],
    [],
    []
])
pc.reel("walkLeft", 1000, [
    [],
    [],
    [],
    []
])
pc.reel("walkRight", 1000, [
    [],
    [],
    [],
    []
])


  var player = Crafty.e("2D, Canvas, static, SpriteAnimation, Fourway")
  .attr({x: 50, y: 50, w: 16, h: 16})
  .fourway(100)
  .bind("KeyDown", function(evt){
      if(evt.key === Crafty.keys.UP_ARROW){
          player.animate("walkUp", -1)
      }
      if(evt.key === Crafty.keys.DOWN_ARROW){
        player.animate("walkDown", -1)
      }
      if(evt.key === Crafty.keys.LEFT_ARROW){
        player.animate("walkLeft", -1)
      }
      if(evt.key === Crafty.keys.RIGHT_ARROW){
        player.animate("walkRight", -1)
      }
  })





  var downWalk = Crafty.e("2D, Canvas, walk_down, SpriteAnimation, Fourway")
  .attr({x: 10, y: 10, w: 16, h: 16})
  .fourway(50);

//   var playerBox = Crafty.e("2D, Canvas, Color, Fourway")
//     .attr({ x: 50, y: 50, w: 50, h: 50 })
//     .color("black")
//     .fourway(200);

downWalk.reel("downWalking", 1000, [
    [0,0],
    [1,0],
    [2,0],
    [3,0],
])
downWalk.animate("downWalking", -1);

// player.checkHits("wall")
//     .bind("HitOn", function(hitData){
//         this.x = evt._x;
//         this.y = evt._y;
//     })