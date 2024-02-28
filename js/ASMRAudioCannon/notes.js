class Note {
    constructor(x, y, velocity, note, color) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.velocity = velocity;
        this.note = note;
        this.color = color;
        this.angles = 0;
        this.gravity = 0.00002;
        this.acceleration = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
    }
    update() {
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.velocity.y += this.acceleration;
        this.acceleration += this.gravity;
        this.draw();
    }
}

function forNotes() {
    notes.forEach((note, index) => {
        if (note.y >= canvas.height - note.r) {
            note.note.currentTime = 0;
            note.note.play();
            for (let i = 0; i < 20; i++) {
                particles.push(new Particle(note.x, note.y, { x: Math.random() - 0.5, y: Math.random() - 1 }, note.color));
            }
            notes.splice(index, 1);
        }
        note.update();
    });
}