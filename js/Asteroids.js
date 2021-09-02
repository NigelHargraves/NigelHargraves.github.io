// Get and set the canvas element to a variable.
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const friction = 0.99;
let animationId;
const bullets = [];
let asteroids = [];
const particles = [];
let mouse = { x: 0, y: 0 };
const ship = document.querySelector(".player");

//set images.
let playerShip = new Image();
playerShip.src = 'images/ship.png';
let spaceHum = document.getElementById("audio1");
let laser = document.getElementById("audio2");
let explode = document.getElementById("audio3");
let explode2 = document.getElementById("audio4");
let explode3 = document.getElementById("audio5");
let angle = 0,
    playerRadius = 10,
    spawnRate = 3000,
    score = 0;
document.getElementById("canvas1").style.cursor = "crosshair";
let stars = [];
for (i = 0; i < 20; i++) {
    stars.push({ x: Math.random() * canvas.width, y: Math.random() * canvas.height });
}
console.log(stars);



function movePlayer(x, y) {
    angle = (Math.atan2(y - ship.offsetTop, x - ship.offsetLeft) * (180 / Math.PI)) + 90;
    document.querySelector(".player").style.transform =
        "rotate(" + angle + "deg)";
}

//Bullet class.
class Bullet {
    //construct bullet data.
    constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        }
        //draw bullets.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        //update bullets.
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

//Asteriod class.
class Asteroid {
    //construct asteroid data.
    constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
        }
        //draw asteroids.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        //update asteroids.
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

//Particle class.
class Particle {
    //construct Particle data.
    constructor(x, y, radius, color, velocity) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.alpha = 1;
        }
        //draw Particle.
    draw() {
            ctx.save();
            ctx.globalAlpha = this.alpha;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
            ctx.restore();
        }
        //update Particles.
    update() {
        this.draw();
        this.velocity.x *= friction;
        this.velocity.y *= friction;
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.alpha -= 0.01;
    }
}


function animate() {
    spaceHum.play();
    animationId = requestAnimationFrame(animate); //call next frame.
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    for (i = 0; i < stars.length; i++) {
        ctx.beginPath();
        ctx.arc(stars[i].x, stars[i].y, 1, 0, Math.PI * 2);
        ctx.fillStyle = 'Cornsilk';
        ctx.fill();
    }

    particles.forEach((particle, index) => {
        if (particle.alpha <= 0) {
            particles.splice(index, 1);
        } else {
            particle.update();
        }
    });
    //update & remove offscreen bullets.
    bullets.forEach((bullet, index) => {
        bullet.update();
        if (
            bullet.x + bullet.radius < 0 ||
            bullet.x - bullet.radius > canvas.width ||
            bullet.y + bullet.radius < 0 ||
            bullet.y - bullet.radius > canvas.height
        ) {
            setTimeout(() => {
                bullets.splice(index, 1);
            }, 0);
        }
    });

    //update asteroids & detect game over .
    asteroids.forEach((asteroid, index) => {
        asteroid.update();
        const dist = Math.hypot(
            (canvas.width / 2 + 20) - asteroid.x,
            (canvas.height / 2 + 20) - asteroid.y
        );
        if (dist - asteroid.radius - playerRadius < 1) {
            //game over.

            ship.remove();
            setTimeout(() => {
                cancelAnimationFrame(animationId);
                spaceHum.pause();
                document.getElementById("endBoard").style.zIndex = "1";
            }, 3000);
            explode2.currentTime = 0;
            explode2.play();
            setTimeout(() => {
                asteroids = [];
                for (i = 0; i < 80; i++) {
                    particles.push(
                        new Particle(
                            canvas.width / 2 + 20,
                            canvas.height / 2 + 20,
                            Math.random() * 2,
                            'white', {
                                x: (Math.random() - 0.5) * (Math.random() * 6),
                                y: (Math.random() - 0.5) * (Math.random() * 6)
                            }
                        )
                    );
                }

            }, 0);
        }
        //detect bullet hitting asteroid and shrink or remove.
        bullets.forEach((bullet, bulletIndex) => {
            const dist = Math.hypot(bullet.x - asteroid.x, bullet.y - asteroid.y);

            if (dist - asteroid.radius - bullet.radius < 1) {
                //create explosions.
                for (i = 0; i < asteroid.radius * 2; i++) {
                    particles.push(
                        new Particle(
                            bullet.x,
                            bullet.y,
                            Math.random() * 2,
                            asteroid.color, {
                                x: (Math.random() - 0.5) * (Math.random() * 6),
                                y: (Math.random() - 0.5) * (Math.random() * 6)
                            }
                        )
                    );
                }
                if (asteroid.radius - 10 > 5) {
                    score += 2;
                    document.getElementById("scoreBoard").innerHTML = 'SCORE: ' + score;
                    if (asteroid.radius > 20) {
                        explode.currentTime = 0;
                        explode.play();
                    } else {
                        explode3.currentTime = 0;
                        explode3.play();
                    }

                    gsap.to(asteroid, {
                        radius: asteroid.radius - 10
                    });
                    setTimeout(() => {
                        bullets.splice(bulletIndex, 1);
                    }, 0);
                } else {
                    score += 5;
                    document.getElementById("scoreBoard").innerHTML = 'SCORE: ' + score;
                    explode2.currentTime = 0;
                    explode2.play();
                    setTimeout(() => {
                        asteroids.splice(index, 1);
                        bullets.splice(bulletIndex, 1);
                    }, 0);
                }
            }
        });
    });
}

//create new asteroid.
function spawnAsteroid() {

    setInterval(() => {
        const radius = Math.random() * 30 + 10;
        let x;
        let y;
        if (Math.random() < 0.5) {
            x = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
            y = Math.random() * canvas.height;
        } else {
            x = Math.random() * canvas.width;
            y = Math.random() < 0.5 ? 0 - radius : canvas.width + radius;
        }

        const color = `hsl(${Math.random() * 360},50%,50%)`;
        const angle = Math.atan2(canvas.height / 2 - y + 20, canvas.width / 2 - x + 20);
        const velocity = {
            x: Math.cos(angle),
            y: Math.sin(angle)
        };
        asteroids.push(new Asteroid(x, y, radius, color, velocity));
        if (spawnRate <= 500) {
            spawnRate = 500;
        } else {
            spawnRate -= 10;
        }

    }, spawnRate);
}

function init() {
    animate();
    spawnAsteroid();
}

addEventListener("click", (e) => {
    const angles = Math.atan2(
        e.clientY - canvas.height / 2 - 20,
        e.clientX - canvas.width / 2 - 20
    );
    const velocity = {
        x: Math.cos(angles) * 5,
        y: Math.sin(angles) * 5
    };
    bullets.push(
        new Bullet(canvas.width / 2 + 20, canvas.height / 2 + 20, 2, "white", velocity)
    );
    laser.currentTime = 0;
    laser.play();
});

addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    init();
});

addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;

    movePlayer(mouse.x, mouse.y);
});

init();