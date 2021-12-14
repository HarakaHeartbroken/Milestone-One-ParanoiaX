// creates new player image at a set of initial coordinates, and handles the callback for 
// direction with the appropriate gif
// To-do: replace with class/constructor model that includes xy coords?
function newPlayableCharacter(x, y) {
    this.element = newImage('assets/redStatic.png')
    this.element.style.zIndex = 1;
    // element.xCoord = x? Or outside of the function after each loop?
    // element.yCoord, same idea

    function handleDirectionChange(direction) {
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

    move(element).withArrowKeys(x, y, handleDirectionChange)

    
}