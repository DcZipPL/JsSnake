class Snake{
    currentPosX = 10;
    currentPosY = 10;

    // previousPos[dim][pos]
    previousPos = [[],[]];

    baseLength;
    length;
    alive;

    constructor(length) {
        this.baseLength = length;
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
        if (this.currentPosX < 0){
            this.kill();
        }
        if (this.currentPosY >= gridSize){
            this.kill();
        }
        if (this.currentPosY < 0){
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
        document.getElementById("goText").className = "";
        document.getElementById("goBtn").className = "";
    }

    tick(grid) {
        // Splice the array to keep it short
        if (this.previousPos[X].length + this.previousPos[Y].length > this.length + this.length){
            this.previousPos[X].splice(-1);
            this.previousPos[Y].splice(-1);
        }

        // Interact with user input
        if (grid.previousKey===Direction.UP && this.alive){
            this.savePosition();
            grid.setObjAt("lime", this.currentPosX,this.currentPosY--);
            grid.setObjAt("red", this.currentPosX,this.currentPosY);
        }
        else if (grid.previousKey===Direction.LEFT && this.alive){
            this.savePosition();
            grid.setObjAt("lime", this.currentPosX--,this.currentPosY);
            grid.setObjAt("red", this.currentPosX,this.currentPosY);
        }
        else if (grid.previousKey===Direction.RIGHT && this.alive){
            this.savePosition();
            grid.setObjAt("lime", this.currentPosX++,this.currentPosY);
            grid.setObjAt("red", this.currentPosX,this.currentPosY);
        }
        else if (grid.previousKey===Direction.DOWN && this.alive){
            this.savePosition();
            grid.setObjAt("lime", this.currentPosX,this.currentPosY++);
            grid.setObjAt("red", this.currentPosX,this.currentPosY);
        }

        // Kill snake if it touches himself
        this.checkCollision(grid);

        // Clear areas that ware this is no more
        grid.removeObjAt(this.previousPos[X][this.length],this.previousPos[Y][this.length]);
        grid.setObjAt("#282828", this.previousPos[X][this.length],this.previousPos[Y][this.length])

        // Update apple circle when player is already in apple
        grid.setObjAt("yellow",grid.applePosX,grid.applePosY);
    }

    respawn() {
        this.alive = true;
        this.currentPosX = 10;
        this.currentPosY = 10;
        this.previousPos[X] = [];
        this.previousPos[Y] = [];
        this.length = this.baseLength;

        document.getElementById("goText").className = "alive";
        document.getElementById("goBtn").className = "alive";
    }
}