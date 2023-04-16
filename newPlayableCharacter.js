function newPlayableCharacter(x, y) {
    const element = newImage('assets/New Piskel.png')
    element.style.zIndex = 1;

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `assets/New Piskel.png`
        }
        if (direction === 'west') {
            element.src = `assets/green-character/west.gif`
        }
        if (direction === 'north') {
            element.src = `assets/green-character/north.gif`
        }
        if (direction === 'east') {
            element.src = `assets/green-character/east.gif`
        }
        if (direction === 'south') {
            element.src = `assets/green-character/south.gif`
        }
    }

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}