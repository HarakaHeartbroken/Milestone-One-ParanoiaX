function newPlayableCharacter(x, y) {
    const element = newImage('assets/redStatic.png')
    element.style.zIndex = 1;

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

    return {
        element: element
    }
}