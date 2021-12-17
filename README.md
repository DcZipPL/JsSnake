# JsSnake
Snake game example made for school assignment

## Setup
Basic setup:

```js
    let grid = new Grid(<canvas_id>, <cell_size_in_px>, <grid_size>);
    let snake = new Snake(<snake_length>);
    grid.createEventHandler();
    grid.spawnApple();

    document.getElementById("<death_btn_id>").onclick = (ignore => {
       grid.clear();
       snake.respawn();
    });

    setInterval(function() {
        snake.tick(grid);
    }, <tick_speed>);
```
Example html:
```html
    <script src="js/Direction.js"></script>
    <script src="js/Grid.js"></script>
    <script src="js/Snake.js"></script>
</head>...<body>
    <canvas id="<canvas_id>" width="200" height="200"></canvas>
    <section>
        <p id="goText">You died</p>
        <p id="pointsText">0</p>
        <button id="goBtn">Reset</button>
    </section>
```

Note:
- <canvas_id> is id of canvas
- `goText` is game over text
- `pointsText` is points counter
- `goBtn` is respawn button

## Documentation
Object `Direction`
* A js enum containing 4 directional values
* Method `getOpposite(Directon)`
* * `return` Returns opposite direction from argument

Object `Grid`
* Field String (key) `previousKey`
* * Previous clicked key by the user

* Field String (key) `applePosX`
* * Apple cell position in X axis

* Field String (key) `applePosY`
* * Apple cell position in Y axis

---

* `constructor(id, cellSize, gridSize)`
* * Initializes canvas
* * String `id` ID of html canvas element
* * Number `cellSize` Cell size in px
* * Short/Int/Long `gridSize` Uniform amount of cells on the grid

* Method `setObjAt(color, cellX, cellY)`
* * Draws circle object on cell
* * String `color` Color hash or name of color
* * Short/Int/Long `cellX` Cell Position in X axis
* * Short/Int/Long `cellY` Cell Position in Y axis

* Method `removeObjAt(color, cellX, cellY)`
* * Draws black rectangle on top of cell to clear it
* * Short/Int/Long `cellX` Cell Position in X axis
* * Short/Int/Long `cellY` Cell Position in Y axis

* Method `createEventHandler()`
* * Adds keyboard event handler

* Method `clear()`
* * Clears whole canvas

* Method `fade()`
* * Makes canvas a bit blacker

Object `Snake`
* Field Number `points`
* * Amount of points

* Field Number `currentPosX`
* * Current X position of snake

* Field Number `currentPosY`
* * Current Y position of snake

* Field Number\[\]\[\] `previousPos`
* * Two dimensional array of X and Y positions ware snake segments are.

* Field Number `length`
* * Length of snake

---

* `constructor(length)`
* * Creates snake obj
* * Short/Int/Long `length` Inital length of snake

* Method `kill()`
* * Kills snake

* Method `respawn()`
* * Respawns snake

* Method `tick()`
* * Do a game tick

* Method `tick()`
* * Boolean `return` Returns if snake is alive
