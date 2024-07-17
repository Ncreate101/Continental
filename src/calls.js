var tileSize = 32;
var viewSize = 1;
var viewMove = {x: 0, y: 0};

function gameDraw() {
    __drawTile("grass", 0, 0)
    __drawTile("water", 1, 0)
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
    console.log(out);
    return color(out[0], out[1], out[2]);
}