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


var testmap = [
    [1, 2, 3], 
    [1, 0, 1], 
    [1, 1, 1]
];

// map.forEach(element => console.log(element));


function test(map){
    for(i = 0; i<map.length; i++){
        for(j = 0; j<map[i].length; j++){
            if(map[i][j] > 1)
            console.log(map[i][j])
        }
    }
}
test(testmap)
// expected output 2, 3
// console.log(map[])