class Direction {
    static UP = "ArrowUp";
    static LEFT = "ArrowLeft";
    static RIGHT = "ArrowRight";
    static DOWN = "ArrowDown";

    static getOpposite(ov) {
        if (ov === this.UP){
            return this.DOWN
        }
        if (ov === this.DOWN){
            return this.UP
        }
        if (ov === this.LEFT){
            return this.RIGHT
        }
        if (ov === this.RIGHT){
            return this.LEFT
        }
    }
}

// C++ macros
const X = 0;
const Y = 1;