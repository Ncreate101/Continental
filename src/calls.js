var tileSize = 32;
var viewSize = 1;
var viewMove = {x: 0, y: 0};
var worldMap = {"23 20":"zzO","24 20":"zzO","25 20":"zzO","26 20":"zzO","26 21":"zzO","25 21":"zzO","24 21":"zzO","23 21":"zzO","24 19":"zzO","25 19":"zzO","25 18":"zzO","24 18":"zzO","24 17":"zzO","25 17":"zzO","25 16":"zzO","24 16":"zzO","24 15":"zzO","25 15":"zzO","25 14":"zzO","24 14":"zzO","26 14":"zzO","26 15":"zzO","26 16":"zzO","27 15":"zzO","27 16":"zzO","27 17":"zzO","28 16":"zzO","28 17":"zzO","28 18":"zzO","29 18":"zzO","29 17":"zzO","29 16":"zzO","30 17":"zzO","30 16":"zzO","30 15":"zzO","31 16":"zzO","31 15":"zzO","31 14":"zzO","32 15":"zzO","32 14":"zzO","32 16":"zzO","33 14":"zzO","33 15":"zzO","33 16":"zzO","32 17":"zzO","33 17":"zzO","33 18":"zzO","32 18":"zzO","32 19":"zzO","33 19":"zzO","32 20":"zzO","31 20":"zzO","31 21":"zzO","32 21":"zzO","33 21":"zzO","34 21":"zzO","34 20":"zzO","33 20":"zzO","34 14":"zzO","34 15":"zzO","23 14":"zzO","23 15":"zzO","23 22":"OOz","22 22":"OOz","22 20":"OOz","22 21":"OOz","22 19":"OOz","22 18":"OOz","22 17":"OOz","22 15":"OOz","22 16":"OOz","22 14":"OOz","22 13":"OOz","23 13":"OOz","24 13":"OOz","25 13":"OOz","26 13":"OOz","28 13":"OOz","29 13":"OOz","27 13":"OOz","31 13":"OOz","30 13":"OOz","33 13":"OOz","32 13":"OOz","35 13":"OOz","34 13":"OOz","35 14":"OOz","35 15":"OOz","35 16":"OOz","35 17":"OOz","35 18":"OOz","35 20":"OOz","35 19":"OOz","35 21":"OOz","35 22":"OOz","34 22":"OOz","33 22":"OOz","32 22":"OOz","31 22":"OOz","30 22":"OOz","29 22":"OOz","28 22":"OOz","27 22":"OOz","25 22":"OOz","24 22":"OOz","26 22":"OOz","27 21":"OOz","27 20":"OOz","29 20":"OOz","30 20":"OOz","30 21":"OOz","29 21":"OOz","28 21":"OOz","28 20":"OOz","27 19":"OOz","26 19":"OOz","26 18":"OOz","26 17":"OOz","27 18":"OOz","28 19":"OOz","29 19":"OOz","30 19":"OOz","31 19":"OOz","31 18":"OOz","31 17":"OOz","30 18":"OOz","23 16":"OOz","23 17":"OOz","23 18":"OOz","23 19":"OOz","27 14":"OOz","28 14":"OOz","29 14":"OOz","30 14":"OOz","28 15":"OOz","29 15":"OOz","34 16":"OOz","34 17":"OOz","34 18":"OOz","34 19":"OOz"};
var placing = "grass";

function gameDraw() {
    
    
    // Draw All In Map
    Object.keys(worldMap).forEach(tl => {
        __drawTile(worldMap[tl], +(tl.split(" ")[0]), +(tl.split(" ")[1]))
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
    worldMap name to atlas pos
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
    let out = {x:0,y:0}
    out.x = Math.round(((mouseX - cameraMove.x) - (0.5 * tileSize * viewSize)) / (tileSize * viewSize)) * (tileSize * viewSize);
    out.y = Math.round(((mouseY - cameraMove.y) - (0.5 * tileSize * viewSize)) / (tileSize * viewSize)) * (tileSize * viewSize);
    return out;
}

function __getMouseOverTilePos() {
    let out = {x:0, y:0}
    out.x = Math.round(((mouseX - cameraMove.x) - (0.5 * tileSize * viewSize)) / (tileSize * viewSize));
    out.y = Math.round(((mouseY - cameraMove.y) - (0.5 * tileSize * viewSize)) / (tileSize * viewSize));
    return out;
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
    worldMap[`${x} v${y}`] = tl;
}