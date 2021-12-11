// async function mapRender(map) {
//         map.array.forEach(element => {
//          console.log(element)   
//             })
//         }
    
    
//     var testmap = [
//         [111],
//         [101],
//         [111]
//     ]
//     mapRender(testmap)

// 415
// 263
// 718


var demoMap = [
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,4,1,1,5,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,4,1,1,8,6,6,7,1,1,5,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,2,6,6,6,6,6,6,6,6,3,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,2,6,6,6,6,6,6,6,6,3,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,7,1,1,5,6,6,4,1,1,8,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,2,6,6,3,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,7,1,1,8,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2],
    [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]
  ];







var testmap = [
    [1, 2, 3], 
    [1, 0, 0], 
    [1, 1, 1]
];
function test(map){
    for(i = 0; i<map.length; i++){
        for(j = 0; j<map[i].length; j++){
            if(map[i][j] === 0){
                move(newImage('assets/bgTile.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 1){
                move(newImage('assets/wall1.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 2){
                move(newImage('assets/wall6.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 3){
                move(newImage('assets/wall6.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 4){
                move(newImage('assets/wall4.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 5){
                move(newImage('assets/wall5.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 6){
                move(newImage('assets/intWall.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 7){
                move(newImage('assets/wall7.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 8){
                move(newImage('assets/wall8.png')).to(16*i, 16*j)
            }
            else if(map[i][j] === 9){
                move(newImage('assets/wall9.png')).to(16*i, 16*j)
            }
        }
    }
}
const pc = newPlayableCharacter(100, 110)
test(demoMap)
// expected output wall leftWall rightWall wall background wall wall wall wall
// console.log(map[])