
// To-do: code in collision detection system- hitboxes off tile system? Allows for type: pickup
// type: damaging, type: deadly, etc for interactibles, and walls

// idea: derived "position" variable for each object class, which PC, NPC, Tiles, and Interactibles
// are all subclasses of. If position matches, do X/Y/Z. Walls undo the last keystroke?



// moves a given element, usually the player character, a given amount of pixels per input,
// if held at a rate of 1 per second
function move(element) {
    element.style.position = 'fixed'

    function moveToCoordinates(top, left) {
        element.style.top = top + 'px'
        element.style.left = left + 'px'
    }

    function moveWithArrowKeys(left, bottom, callback){
        let direction = null;
        let x = left;
        let y = bottom;

        element.style.left = x + 'px'
        element.style.bottom = y + 'px'
        
        function moveCharacter(){ 
            if(direction === 'west'){
                x-=1
            }
            if(direction === 'north'){
                y+=1
            }
            if(direction === 'east'){
                x+=1
            }
            if(direction === 'south'){
                y-=1
            }
            element.style.left = x + 'px'
            element.style.bottom = y + 'px'
            // console.log("PC x = " + element.x + " PC y = " + element.y)
        }
        // Xcoord = x Ycoord = Y, checkCollision
        setInterval(moveCharacter, 10)
        
        document.addEventListener('keydown', function(e){
            if(e.repeat) return;
        
            if(e.key === 'ArrowLeft'){
                direction = 'west'
            }
            if(e.key === 'ArrowUp'){
                direction = 'north'
            }
            if(e.key === 'ArrowRight'){
                direction = 'east'
            }
            if(e.key === 'ArrowDown'){
                direction = 'south'
            }
            callback(direction, element)
        })
        
        document.addEventListener('keyup', function(e){
            direction = null
            callback(direction, element)
        })
    }

    return {
        to: moveToCoordinates,
        withArrowKeys: moveWithArrowKeys
    }
}