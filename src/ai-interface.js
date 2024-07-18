var __units = {};

function drawUnits() {
    Object.values(__units).forEach(unit => {
        push();
        translate(unit.position[0], unit.position[1]);
        fill(255, 0, 0);
        noStroke();
        ellipse(0, 0, 10, 10)
        pop();
    });
}

__units["bob"] = Unit([20, 20], 0)