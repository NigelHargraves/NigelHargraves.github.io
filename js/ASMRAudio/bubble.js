class Bubble {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.r = 5;
        this.velocity = { x: 0, y: 0 };
        this.angles = 0;
        this.expand = false;
        this.opacity = 1;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        if (this.r == 5) {
            ctx.strokeStyle = "pink";
        } else {
            ctx.strokeStyle = "purple";
        }
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.globalAlpha = 1;
    }
    update() {
        if (!this.expand) {
            this.x += this.velocity.x;
            this.y += this.velocity.y;
            this.angles = Math.atan2(chords[0].y - this.y, chords[0].x - this.x);
            this.velocity.x = Math.cos(this.angles) * 3;
            this.velocity.y = Math.sin(this.angles) * 3;
        } else {
            this.r += 1;
        }


        this.draw();
    }
}

function forBubble() {

    bubbles.forEach((bubble, index) => {


        let collide = collisionDetection(bubble.x, bubble.y, 2, 2, chords[0].x, chords[0].y, 2, 2);

        if (collide) {
            bubble.expand = true;
            if (chordChange == 'C') {
                if (CLowBell.currentTime > 0 && !CLowBell.ended) {
                    ELowBell.currentTime = 0;
                    ELowBell.play();
                } else {
                    CLowBell.currentTime = 0;
                    CLowBell.play();
                }
            }
            if (chordChange == 'D') {
                if (DLowBell.currentTime > 0 && !DLowBell.ended) {
                    FSLowBell.currentTime = 0;
                    FSLowBell.play();
                } else {
                    DLowBell.currentTime = 0;
                    DLowBell.play();
                }
            }
            if (chordChange == 'F') {
                if (FLowBell.currentTime > 0 && !FLowBell.ended) {
                    ALowBell.currentTime = 0;
                    ALowBell.play();
                } else {
                    FLowBell.currentTime = 0;
                    FLowBell.play();
                }
            }
            if (chordChange == 'G') {
                if (GLowBell.currentTime > 0 && !GLowBell.ended) {
                    BLowBell.currentTime = 0;
                    BLowBell.play();
                } else {
                    GLowBell.currentTime = 0;
                    GLowBell.play();
                }
            }
        }

        if (bubble.r >= 400) {
            bubble.opacity -= 0.005;
        }

        if (bubble.opacity <= 0.1) {
            if (chordChange == 'C') {
                CEnd.currentTime = 0;
                CEnd.play();
            }
            if (chordChange == 'D') {
                DEnd.currentTime = 0;
                DEnd.play();
            }
            if (chordChange == 'F') {
                FEnd.currentTime = 0;
                FEnd.play();
            }
            if (chordChange == 'G') {
                GEnd.currentTime = 0;
                GEnd.play();
            }
            bubbles.splice(index, 1);
        }


        bubble.update();
    });





}