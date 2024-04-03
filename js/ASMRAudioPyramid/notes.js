class Note {
    constructor(x, y, speed, note, color, number) {
        this.x = x;
        this.y = y;
        this.speed = speed;
        this.note = note;
        this.color = color;
        this.noteNo = number;
        this.velocity = { x: 0, y: 0 };
        this.angle = 0;
        this.aim = { x: 0, y: 0 };
        this.aimPoint = [true, false, false];
        this.dist = 0;
        this.lineWidth = 5;

    }
    draw() {

        ctx.strokeStyle = this.color;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(this.x, this.y, 10, 0, Math.PI * 2);
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.lineWidth = 1;




    }
    update() {

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;

        let adj = Math.pow(this.x - this.aim.x, 2);
        if (adj < 0) { adj * -1 };
        let opp = Math.pow(this.y - this.aim.y, 2);
        if (opp < 0) { opp * -1 };

        this.dist = Math.sqrt(adj + opp);



        if (this.noteNo < 12) {
            if (this.dist <= 1 && this.aimPoint[0]) {
                noteCircles.push(new NoteCircle(this.x, this.y, this.color));
                if (this.note.currentTime != 0) this.note.currentTime = 0;
                this.note.play();
                this.aimPoint[0] = false;
                this.aimPoint[1] = true;
                this.lineWidth = 5;
                shoots.push(new Shoot(this.x, this.y));
                pyramid.color = this.color;
            } else if (this.dist <= 1 && this.aimPoint[1]) {
                noteCircles.push(new NoteCircle(this.x, this.y, this.color));
                if (this.note.currentTime != 0) this.note.currentTime = 0;
                this.note.play();
                this.aimPoint[1] = false;
                this.aimPoint[2] = true;
                this.lineWidth = 5;
                shoots.push(new Shoot(this.x, this.y));
                pyramid.color = this.color;
            } else if (this.dist <= 1 && this.aimPoint[2]) {
                noteCircles.push(new NoteCircle(this.x, this.y, this.color));
                if (this.note.currentTime != 0) this.note.currentTime = 0;
                this.note.play();
                this.aimPoint[2] = false;
                this.aimPoint[0] = true;
                this.lineWidth = 5;
                shoots.push(new Shoot(this.x, this.y));
                pyramid.color = this.color;
            }

            if (this.aimPoint[0]) {
                let vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
                let face = pyramid.edges.faces[0];
                this.aim.x = vertices[face[2]].x;
                this.aim.y = vertices[face[2]].y;
            }
            if (this.aimPoint[1]) {
                let vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
                let face = pyramid.edges.faces[2];
                this.aim.x = vertices[face[2]].x;
                this.aim.y = vertices[face[2]].y;
            }
            if (this.aimPoint[2]) {
                let vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
                let face = pyramid.edges.faces[0];
                this.aim.x = vertices[face[0]].x;
                this.aim.y = vertices[face[0]].y;
            }


        } else {
            if (this.dist <= 1 && this.aimPoint[0]) {
                noteCircles.push(new NoteCircle(this.x, this.y, this.color));
                if (this.note.currentTime != 0) this.note.currentTime = 0;
                this.note.play();
                this.aimPoint[0] = false;
                this.aimPoint[1] = true;
                this.lineWidth = 5;
                shoots.push(new Shoot(this.x, this.y));
                pyramid.color = this.color;
            } else if (this.dist <= 1 && this.aimPoint[1]) {
                noteCircles.push(new NoteCircle(this.x, this.y, this.color));
                if (this.note.currentTime != 0) this.note.currentTime = 0;
                this.note.play();
                this.aimPoint[1] = false;
                this.aimPoint[2] = true;
                this.lineWidth = 5;
                shoots.push(new Shoot(this.x, this.y));
                pyramid.color = this.color;
            } else if (this.dist <= 1 && this.aimPoint[2]) {
                noteCircles.push(new NoteCircle(this.x, this.y, this.color));
                if (this.note.currentTime != 0) this.note.currentTime = 0;
                this.note.play();
                this.aimPoint[2] = false;
                this.aimPoint[0] = true;
                this.lineWidth = 5;
                shoots.push(new Shoot(this.x, this.y));
                pyramid.color = this.color;
            }

            if (this.aimPoint[0]) {
                let vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
                let face = pyramid.edges.faces[0];
                this.aim.x = vertices[face[3]].x;
                this.aim.y = vertices[face[3]].y;
            }
            if (this.aimPoint[1]) {
                let vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
                let face = pyramid.edges.faces[2];
                this.aim.x = vertices[face[3]].x;
                this.aim.y = vertices[face[3]].y;
            }
            if (this.aimPoint[2]) {
                let vertices = project(pyramid.edges.vertices, canvas.width, canvas.height, pyramid.zoom);
                let face = pyramid.edges.faces[0];
                this.aim.x = vertices[face[0]].x;
                this.aim.y = vertices[face[0]].y;
            }






        }




















        this.draw();
    }
}

function forNotes() {
    notes.forEach((note, index) => {
        note.update();
    });
}