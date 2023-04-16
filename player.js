function player(x, y) {
    const element = newImage('img/New-Piskel.png')
    element.style.zIndex = 1;
    element.setAttribute("id","bob");   

    function handleDirectionChange(direction) {
        if (direction === null) {
            element.src = `img/New-Piskel.png`
        }
        if (direction === 'west') {
            element.src = `img/New-Piskel.png`
        }
        if (direction === 'north') {
            element.src = `img/New-Piskel.png`
        }
        if (direction === 'east') {
            element.src = `img/New-Piskel.png`
        }
        if (direction === 'south') {
            element.src = `img/New-Piskel.png`
        }
        }
        

    move(element).withArrowKeys(x, y, handleDirectionChange)

    return {
        element: element
    }
}