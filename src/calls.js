var tileSize = 32;
var viewSize = 1;
var viewMove = {x: 0, y: 0};
var worldMap = {};
var placing = "grass";

function gameDraw() {
    
    
    // Draw All In Map
    Object.keys(map).forEach(tl => {
        __drawTile(map[tl], +tl.split(" ")[0], +tl.split(" ")[1])
    });

    push();
    stroke(60);
    strokeWeight(3 / (tileSize * viewSize));
    fill(0,0,0,0);
    translate(__getMouseOverTile().x, __getMouseOverTile().y);
    scale(tileSize * viewSize)
    rect(0, 0, 1, 1);
    pop();
}

function __drawTile(name, x, y) {
    // TODO: implement textured tiles;
    /* PSEUDO CODE
    map name to atlas pos
    create tile
    scale tile
    position tile
    */
    push();
    noStroke();
    fill(stringColor(name));
    translate(x * tileSize * viewSize + viewMove.x, y * tileSize * viewSize + viewMove.y);
    scale(tileSize * viewSize)
    rect(0, 0, 1, 1);
    pop();
}

function __getMouseOverTile() {
    return {x:(viewMove.x % (tileSize * viewSize))+Math.round((mouseX - ((viewMove.x % (tileSize * viewSize))-(tileSize * viewSize) / 2))/(tileSize * viewSize))*(tileSize * viewSize),y:(viewMove.y % (tileSize * viewSize))+Math.round((mouseY - ((viewMove.y % (tileSize * viewSize))-(tileSize * viewSize) / 2))/(tileSize * viewSize))*(tileSize * viewSize)};
}

function __getMouseOverTilePos() {
    return {x:__getMouseOverTile.x / (tileSize * viewSize), x:__getMouseOverTile.x / (tileSize * viewSize)}
}

function stringColor(s) {
    out = [0, 0, 0]
    outC = [0, 0, 0]
    let idx = 0;
    Array.from(s).forEach(l => {
        outC[idx % 3]++;
        out[idx % 3] += (l.charCodeAt(0) * 4) % 255;
        idx++;
    });
    out[0] = out[0] / outC[0];
    out[1] = out[1] / outC[1];
    out[2] = out[2] / outC[2];
    return color(out[0], out[1], out[2]);
}

function makeTile(tl, x, y) {
    map[`${x} v${y}`] = tl;
}