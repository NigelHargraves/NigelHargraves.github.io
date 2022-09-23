class Lander {
    //construct Lander data.
    constructor(x, y) {
            this.x = x;
            this.y = y;

            this.velocity = {
                x: 0,
                y: 0
            };
        }
        //move Lander draw flame.
    move() {
        lem.style.left = this.x - landerSize / 2 + "px";
        lem.style.top = this.y - landerSize / 2 + "px";
        if (thrustForce > 0 && !rotateLeft && !rotateRight) {
            lem.style.backgroundImage = "url('images/Lunar Lander engine on.png')";

            lemEngine.play();
        } else if (thrustForce <= 0 && !rotateLeft && !rotateRight) {
            lem.style.backgroundImage = "url('images/Lunar Lander engine off.png')";
            lemEngine.pause();
            lemEngine.currentTime = 0;

        }
    }

    //update Lander.
    update() {
        if (rotateLeft) {
            rotation -= 0.1;
            lem.style.transform = "rotate(" + rotation + "deg)";
            if (thrustForce > 0) {
                lem.style.backgroundImage = "url('images/Lunar Lander engine on rotate left.png')";
            } else {
                lem.style.backgroundImage = "url('images/Lunar Lander engine off rotate left.png')";
            }

            thrusters.play();

        }
        if (rotateRight) {
            rotation += 0.1;
            lem.style.transform = "rotate(" + rotation + "deg)";
            if (thrustForce > 0) {
                lem.style.backgroundImage = "url('images/Lunar Lander engine on rotate right.png')";
            } else {
                lem.style.backgroundImage = "url('images/Lunar Lander engine off rotate right.png')";
            }

            thrusters.play();
        }
        if (thrustUp) {
            thrustForce += (90 - Math.abs(rotation)) / 10000000;
            if (thrustForce > 0.002) {
                thrustForce = 0.002;
            }
        }
        if (thrustDown) {
            thrustForce -= 0.00001;
            if (thrustForce < 0) {
                thrustForce = 0;
            }
        }

        //update position.
        this.velocity.y -= thrustForce;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        //add lateral motion & gravity.
        if (thrustForce > 0) {
            this.velocity.x += rotation / (10000 - thrustForce);
        }

        if (lander.y >= c.height - 20) {} else {
            this.velocity.y += gravity;
        }
        this.move();
    }
}