class FigEight {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = Math.random() * 100;
        this.speed = this.r / 100;
        this.angle = 0;
        this.point = { x: 0, y: 0 };
        this.leftCircle = true;
        this.velocity = { x: Math.random() - 0.5, y: Math.random() - 0.5 };
        this.opacity = 0.001;
        this.fadeIn = true;
        this.life = 10;
    }
    draw() {
        ctx.fillStyle = 'white';
        ctx.globalAlpha = this.opacity;

        ctx.beginPath();
        ctx.arc(this.x + this.point.x, this.y + this.point.y, 1, 0, Math.PI * 2);
        ctx.fill();

        ctx.globalAlpha = 0.4;
    }
    update() {

        if (this.fadeIn) {
            this.opacity += 0.001;
        } else {
            this.life -= 1;
        }

        if (this.opacity >= 1) {
            this.opacity = 1;
            this.fadeIn = false;
        }


        if (this.life <= 0) {
            this.opacity -= 0.001;
        }


        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.point.x = this.r * Math.cos(this.angle);
        this.point.y = this.r * Math.sin(this.angle);

        if (this.leftCircle) {
            this.angle += (Math.PI / 180) / this.speed;
        } else {
            this.angle -= (Math.PI / 180) / this.speed;
        }

        if (this.angle >= Math.PI * 2) {
            this.leftCircle = false;
            this.angle = Math.PI;
            this.x += this.r * 2;
        }

        if (this.angle <= -Math.PI) {
            this.leftCircle = true;
            this.angle = 0;
            this.x -= this.r * 2;
        }
        this.draw();
    }
}

function forFigEights() {
    figEights.forEach((fe, index) => {
        if (!fe.fadeIn && fe.opacity < 0.02) {
            figEights.splice(index, 1);
        }
        fe.update();
    });
}