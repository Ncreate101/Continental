let cameraMove = {x:0, y:0}
let draggingCam = false

function setup() {
    createCanvas(windowWidth, windowHeight);
    for (let element of document.getElementsByClassName("p5Canvas")) {
        element.addEventListener("contextmenu", (e) => e.preventDefault());
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

function draw() {
    background(255);

    gameDraw();

    if(!fullscreen()) {
        fill(50, 50, 50, 150);
        noStroke();
        rect(0, 0, windowWidth, windowHeight);
    }
    if (fullscreen()) {
        if (mouseButton === RIGHT && draggingCam) {
            viewMove.x += -(mouseX - cameraMove.x) * 0.05;
            viewMove.y += -(mouseY - cameraMove.y) * 0.05;
        }
    }
}

function mouseClicked() {
    if(!fullscreen()) {
        fullscreen(true);
    }
}

function mousePressed() {
    if(fullscreen()) {
        if (mouseButton === RIGHT) {
            draggingCam = true
            cameraMove = {x:mouseX, y:mouseY};
        }
    }
    return false;
}

function mouseReleased() {
    if(fullscreen()) {
        if (mouseButton === RIGHT) {
            draggingCam = false
        }
    }
    return false;
}

function mouseWheel(event) {
    if (fullscreen()) {
        viewSize += event.delta / 512;
    }
}