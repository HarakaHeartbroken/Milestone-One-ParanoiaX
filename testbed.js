// draw: function(){
//     var self = this;
//     this.context.clearRect(0, 0, this.w, this.h);
//       this.context.fillStyle = "rgba(255,0,0,0.6)";
//     _(this.map).each(function(row,i){
//       _(row).each(function(tile,j){
//         if(tile !== 0){ //if tile is not walkable
//           self.drawTile(j,i); //draw a rectangle at j,i
//         }
//       });
//     });
//   },
//   drawTile: function(x,y){
//     this.context.fillRect(
//       x * this.tileSize, y * this.tileSize,
//       this.tileSize, this.tileSize
//     );
//   }
// var a = 

// bool DoBoxesIntersect(a, b) {
//     return (abs((a.x + a.width/2) - (b.x + b.width/2)) * 2 < (a.width + b.width)) &&
//            (abs((a.y + a.height/2) - (b.y + b.height/2)) * 2 < (a.height + b.height));
//   }



// ForEvery map tile, check collision, if collision check type, if type Wall 
// stop movement (in collision direction? Or check which boundaries are colliding and go there)
// if type Item do X for pickup, if type hazard stop movement do damage, etc
// the map is checked every player movement, too calc intensive but functional for now
// to -do: figure out how to assign a coordinate variable to player coordinates, 
// just need to tag those in the player element, so like var player.xcoord = this.x? then 
// I can reference player.xcoord?

// function checkCol(){
// forEvery(map)
//  var player x > map[i][j].x
// }
// pc.x + 1 map[i][j].x

// let playerX = pc.x
// function checkCollision(A, B){
//   var AisToTheRightOfB = A.getLeft() > B.getRight();
//   var AisToTheLeftOfB = A.getRight() < B.getLeft();
//   var AisAboveB = A.getBottom() < B.getTop();
//   var AisBelowB = A.getTop() > B.getBottom();
//   return !(AisToTheRightOfB
//     || AisToTheLeftOfB
//     || AisAboveB
//     || AisBelowB);
// }

// collCheck(){
// pc.x++
// if (map[pc.x][pc.y].type != "walkable"){
//     pc.x--
// }
// else if (map[pc.x][pc.y].type = "item"){
//     // To-Do: itemGet code
// }
// pc.x--
// pc.y++
// if (map[pc.x][pc.y].type != "walkable"){
//     pc.y--
// }
// else if (map[pc.x][pc.y].type = "item"){
//     // To-Do: itemGet code
// }
// pc.x--
// else if (map[pc.x][pc.y].type = "item"){
//     // To-Do: itemGet code
// }
// else return collCheck
// }

// to-do, make a class/constructor for the player tile with xy coords as properties?
// rewrite the movement to be like:
// x = x + "px"
// xCoords = x
// at the end

var demoMap = [
    [4,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,5],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,6,0,0,0,0,0,4,1,1,5,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,8,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,6,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,4,1,1,8,6,6,7,1,1,5,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,2,6,6,6,6,6,6,6,6,3,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,2,6,6,6,6,6,6,6,6,3,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,7,1,1,5,6,6,4,1,1,8,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,4,5,0,4,5,0,0,0,7,1,1,8,0,0,0,0,0,0,0,0,0,2],
    [3,0,7,1,1,1,8,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [7,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,8]
  ];


class Tile {
    constructor(url, x, y, height, width, type) {
        this.x = 16*x;
        this.y = 16*y;
        this.height = height;
        this.width = width;
        this.type = type;
        this.zIndex = 0;
        move(newImage(url)).to(this.x, this.y)
        // this.element = newImage(url);
    }
    // meant to translate this.x and this.y back into 0-i.length (Map height/width) 
    // grid coordinates
    getCoords() {
        xCoord = this.x/16;
        yCoord = this.y/16;
        console.log("X Coord = " + xCoord + "Y Coord = " + yCoord)
    }
}

class Player {
    constructor(url, x, y, height, width, type) {
        this.x = x;
        this.y = y;
        this.height = height;
        this.width = width;
        this.type = type;  
        // move(newImage(url)).to(this.x, this.y) 
        this.element = newImage(url);
        // this.style.top = y + 'px';
        // this.style.left = x + 'px';
        this.element.style.zIndex = 1;
    }
    handleDirectionChange(direction, element) {
        if (direction === null) {
            element.src = `assets/redStatic.png`
        }
        if (direction === 'west') {
            element.src = `assets/redLeft.gif`
        }
        if (direction === 'north') {
            element.src = `assets/redUp.gif`
        }
        if (direction === 'east') {
            element.src = `assets/redRight.gif`
        }
        if (direction === 'south') {
            element.src = `assets/redDown.gif`
        }
    }
}



// Appends array of object properties to the ASCII map array passed to it
//to-do: lessen redundant code by making the properties passable as an array, so:
// [0, "assets/bgTile.png", 16, 16, "walkable"]
// [1, "assets/wall1.png", 16, 16, "wall"]
// etc. I could in theory make bigger images of specific tiles this way
// use this to replace the multiple subArray.push... lines present. 
function mapRender(map){
    const renderedMap = [];
    for(i = 0; i<map.length; i++){
        const subArray = [];
        for(j = 0; j<map[i].length; j++){
            if(map[i][j] === 0){
            subArray.push(new Tile('assets/bgTile.png', i, j, 16, 16, "walkable"));
            }
            else if(map[i][j] === 1){
                subArray.push(new Tile('assets/wall1.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 2){
                subArray.push(new Tile('assets/wall6.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 3){
                subArray.push(new Tile('assets/wall6.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 4){
                subArray.push(new Tile('assets/wall4.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 5){
                subArray.push(new Tile('assets/wall5.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 6){
                subArray.push(new Tile('assets/intWall.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 7){
                subArray.push(new Tile('assets/wall7.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 8){
                subArray.push(new Tile('assets/wall8.png', i, j, 16, 16, "wall"));
            }
            else if(map[i][j] === 9){
                subArray.push(new Tile('assets/wall9.png', i, j, 16, 16, "wall"));
            }
        }
        renderedMap.push(subArray)
    }
    return renderedMap;
}



// Creates new controllable Player
// var pc = newPlayableCharacter(80, 160)
let pc = new Player(`assets/redStatic.png`, 48, 0, 16, 16, "player1");
move(pc.element).withArrowKeys(pc.x, pc.y, pc.handleDirectionChange);
console.log(pc)
console.log("Initial PC x = " + pc.x)
console.log("Initial PC y = " + pc.y)
var map = mapRender(demoMap)
const inventory = newInventory()
move(inventory).to(250, 0)
 console.log(map[4][4])
//  getCoords(map[4][4])
// console.log("Map 0-0 zIndex = " + map[0][0].zIndex)
