class OrbitPath {
    constructor(x, y, radiusX, radiusY) {
        this.x = x;
        this.y = y;
        this.radius = { x: radiusX, y: radiusY };
    }
    draw() {
        ctx.beginPath();
        ctx.ellipse(this.x, this.y, this.radius.x, this.radius.y, 0, 0, Math.PI * 2);
        ctx.strokeStyle = 'white';
        ctx.stroke();
    }
    update() {

        this.draw();
    }
}

function forOrbitPaths() {
    orbitPaths.forEach((op, index) => {
        op.update();
    });
}