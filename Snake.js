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

    checkCollision(grid) {
        if (this.currentPosX >= gridSize){
            this.kill();
        }
        if (this.currentPosX <= 0){
            this.kill();
        }
        if (this.currentPosY >= gridSize){
            this.kill();
        }
        if (this.currentPosY <= 0){
            this.kill();
        }

        for (let i = 1; i <= this.previousPos[X].length; i++) {
            if (this.currentPosX === this.previousPos[X][i] && this.currentPosY === this.previousPos[Y][i]){
                this.kill();
            }
        }

        if (this.currentPosX === grid.applePosX && this.currentPosY === grid.applePosY){
            grid.spawnApple();
            this.length++;
        }
    }

    kill(){
        this.alive = false;
        document.getElementById("goText").style="";
    }
}