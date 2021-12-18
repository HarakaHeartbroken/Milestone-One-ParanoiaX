// The Grid component allows an element to be located
//  on a grid of tiles
Crafty.c('Grid', {
    init: function() {
      this.attr({
        w: Game.map_grid.tile.width,
        h: Game.map_grid.tile.height
      })
    },
  
    // Locate this entity at the given position on the grid
    at: function(x, y) {
      if (x === undefined && y === undefined) {
        return { x: this.x/Game.map_grid.tile.width, y: this.y/Game.map_grid.tile.height }
      } else {
        this.attr({ x: x * Game.map_grid.tile.width, y: y * Game.map_grid.tile.height });
        return this;
      }
    }
  });
  
  // An "Actor" is an entity that is drawn in 2D on canvas
  //  via our logical coordinate grid
  Crafty.c('Actor', {
    init: function() {
      this.requires('2D, Canvas, Grid');
    },
  });
  // A Tree is just an Actor with a certain color
Crafty.c('Tree', {
    init: function() {
      this.requires('Actor, Color, wall')
        .color('rgb(20, 125, 40)');
    },
  });
  
  // A Bush is just an Actor with a certain color
  Crafty.c('Bush', {
    init: function() {
      this.requires('Actor, Color, wall')
        .color('rgb(20, 185, 40)');
    },
  });

  // This is the player-controlled character
Crafty.c('PlayerCharacter', {
    init: function() {
      this.requires('Actor, Fourway, Color, Collision')
        .fourway(100)
        .color('rgb(20, 75, 40)')
        .stopOnSolids();
        .gooChange();
        .laserDeath();
        .computerTalk();
    },
    // registers collision with computer tiles and initiates dialogue tree with Friend Computer
    computerTalk: function(){
      this.onHit('computer', this.dialogue);
      return this;
    },
    dialogue: function(){
      // prompts and radio(?) options for dialogue trees, contains hints/jokes/etc
    }


    // registers collision with a laser fence and kills player, then replaces them with a clone
    laserDeath: function(){
      this.onHit('laser', this.respawn);
      return this;
    },
    respawn: function(){
      // deletes the player image and spawns new Player at given coordinates, iterates
      // Clone Count (lives) down by 1. 
    },

    // registers an event on collision with goo tiles to change player gifs to correct color
    gooChange: function(){
      this.onHit('goo', this.colorChange);
      return this;
    },
    colorChange: function(){
      // HandleDirectionChange in testbed.js has the direction function, to-do:
      // code so that all the "red" in handleDirectionChange's src properties
      // is replaced with "green", eg redUp.gif => greenUp.gif, etc
    }
    
    // Registers a stop-movement function to be called when
    //  this entity hits an entity with the "Solid" component
    stopOnSolids: function(){
      this.onHit('Solid', this.stopMovement);
      return this;
    },
    // Stops the movement
    stopMovement: function(){
    console.log("stopped")
      this._speed = 0; 
      if (this._movement) { 
        this.x -= this._movement.x; 
        this.y -= this._movement.y;
      }
      else{
          console.log("heres the issue")
      }
      
    }
  });