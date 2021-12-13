class Snake{
    currentPosX = 10;
    currentPosY = 10;

    // previousPos[dim][pos]
    previousPos = [[],[]];

    length;
    alive;

    constructor(length) {
        this.length = length;
        this.alive = true;
    }

    savePosition() {
        this.previousPos[X].unshift(this.currentPosX);
        this.previousPos[Y].unshift(this.currentPosY);
    }
}