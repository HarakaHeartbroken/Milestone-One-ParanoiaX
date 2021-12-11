//code for rendering rooms of the dungeon
// To-do: tile system with hitbox layer and type associated with it

// To-do: add in tile system, where 1 -> wall, 2 -> left wall, 3 -> right wall
// etc etc. Have each be a new tile, then feed the map into the Render process.



// async function mapRender(map) {
//     map.array.forEach(element => {
//      console.log(element)   
//         })
//     }


// var testmap = [
//     [111],
//     [101],
//     [111]
// ]
// mapRender(testmap)
// expected output 111, 101, 111 or 1-1-1-1-0-1-1-1-1, 
// Uncaught (in promise) TypeError: Cannot read properties of undefined (reading 'forEach')
//     at mapRender 


// async function mapRender (map) {
//     forEach (map) {
//         if(map = 0){
//             move(newimage(url0)).to(map.XY?)
//         }
//         else if(map = 1){
//             move(newImage(url1)).to(mapXY)
//         }
//         else if(map = 2){
//             move(newImage(url2)).to(mapXY)
//         }
//         else if(map = 3){
//             move(newImage(url3)).to(mapXY)
//         }
//     }
// }
// Demo Room Map 24x16:
var demoMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,2,0,0,0,0,0,0,0,0,3,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,1,1,1,1,0,0,1,1,1,1,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,0,0,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];


// function newTile(url) {
//     let element = newImage(url);
//     element.style.zIndex = 0;
//     move.to (100,100);
// }