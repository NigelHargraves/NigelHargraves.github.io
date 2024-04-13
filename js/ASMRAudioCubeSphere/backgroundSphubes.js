class BackgroundSphube {
    constructor(x, y, z, size) {
        this.x = x;
        this.y = y;
        this.z = z;
        this.size = size;
        this.opacity = 0.001;
        this.fadeIn = true;
        this.life = 2000;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.zoom = Math.floor(Math.random() * 100);
        this.directX = (Math.random() - 0.5) * 0.02;
        this.directY = (Math.random() - 0.5) * 0.02;
        this.edges = new SphubeEdge(0, 0, this.z, this.size);
    }
    draw() {


        let vertices = sphubeProject(this.edges.vertices, canvas.width, canvas.height, this.zoom);


        ctx.strokeStyle = 'beige';
        if (this.zoom < 20) {
            ctx.lineWidth = 0.05;
        } else {
            ctx.lineWidth = 0.1;
        }


        ctx.save();
        ctx.translate(this.x, this.y);
        ctx.globalAlpha = this.opacity;
        //draw sphube.
        for (let i = this.edges.faces.length - 1; i > -1; --i) {
            let face = this.edges.faces[i];
            ctx.beginPath();
            ctx.moveTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.lineTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(vertices[face[1]].x, vertices[face[1]].y);
            ctx.lineTo(vertices[face[2]].x, vertices[face[2]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(vertices[face[2]].x, vertices[face[2]].y);
            ctx.lineTo(vertices[face[3]].x, vertices[face[3]].y);
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(vertices[face[3]].x, vertices[face[3]].y);
            ctx.lineTo(vertices[face[0]].x, vertices[face[0]].y);
            ctx.stroke();
        }
        ctx.restore();
        ctx.lineWidth = 1;
    }
    update() {

        this.x += this.velocity.x;
        this.y += this.velocity.y;



        if (this.fadeIn) {
            this.opacity += 0.001;
        } else if (this.life > 0) {
            this.life -= 1;
        }

        if (this.life <= 0) {
            this.opacity -= 0.001;
        }

        //rap around.
        let x = center.x - canvas.width;
        if (this.x < x - this.zoom / 2) {
            this.x = x + canvas.width + this.zoom / 2;
        } else if (this.x > x + canvas.width + this.zoom / 2) {
            this.x = x - this.zoom / 2;
        }

        let y = center.y - canvas.height;
        if (this.y < y - this.zoom / 2) {
            this.y = y + canvas.height + this.zoom / 2;
        } else if (this.y > y + canvas.height + this.zoom / 2) {
            this.y = y - this.zoom / 2;
        }

        if (this.opacity >= 0.8) {
            this.fadeIn = false;
        }

        this.edges.rotateX(this.directX);
        this.edges.rotateY(this.directY);

        this.draw();
    }
}

function forBGSphubes() {
    backgroundSphubes.forEach((bgs, index) => {
        if (bgs.opacity < 0.002 && !bgs.fadeIn) {
            backgroundSphubes.splice(index, 1);
        }
        bgs.update();
    });
}