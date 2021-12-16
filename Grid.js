import(Direction);

// use lambda to create essential Random in range
const Random = (min, max) => Math.floor(Math.random() * (max - min)) + min;

class Grid {
    previousKey = "unknown";

    applePosX = 0;
    applePosY = 0;

    canvas;
    ctx;

    // Initialize Canvas and construct Grid.obj
    constructor(id, size) {
        this.canvas = document.getElementById(id);
        this.ctx = this.canvas.getContext("2d");
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.rect(0, 0, size, size);
        this.ctx.fill();
    }

    // Draw circle object on cell
    setObjAt(color, cellX, cellY){
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(cellX*cellSize+(cellSize/2), cellY*cellSize+(cellSize/2), cellSize/2, 0, 2 * Math.PI, false);
        this.ctx.fill();
    }

    // Draw black rectangle on top of cell to clear it
    removeObjAt(cellX, cellY){
        this.ctx.beginPath();
        this.ctx.fillStyle = "black";
        this.ctx.rect(cellX*cellSize, cellY*cellSize, cellSize, cellSize);
        this.ctx.fill();
    }

    // Handle player input
    createEventHandler(){
        window.addEventListener("keydown",evt => {
            if (Direction.getOpposite(evt.code) !== grid.previousKey)
                grid.previousKey = evt.code;
        });
    }

    spawnApple() {
        this.applePosX = Random(0,20);
        this.applePosY = Random(0,20);
        this.setObjAt("yellow",this.applePosX,this.applePosY);
    }
}