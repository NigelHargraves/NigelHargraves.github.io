// Get and set the canvas element to a variable.
let canvas = document.getElementById("canvas1");
let ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
const missiles = [];
const nukes = [];
const enemies = [];
let numberOfEnemies = 10;
let animationId;
let silo = [
    { x: 15, y: canvas.height - 60 },
    { x: canvas.width / 2, y: canvas.height - 60 },
    { x: canvas.width - 15, y: canvas.height - 60 }
];
let availableMissiles = [20, 20, 20];
let refillMissiles = [false, false, false];

let launch = document.getElementById("audio1");
let explode = document.getElementById("audio2");
let alert = document.getElementById("audio3");

let citiesLeft = 6;
let citiesPos = [
    { x: canvas.width / 2 / 4 - 30, y: canvas.height - 60 },
    {
        x: canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4,
        y: canvas.height - 60
    },
    {
        x: canvas.width / 2 / 4 - 30 + (canvas.width / 2 / 4) * 2,
        y: canvas.height - 60
    },
    { x: canvas.width / 2 + canvas.width / 2 / 4 - 30, y: canvas.height - 60 },
    {
        x: canvas.width / 2 + canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4,
        y: canvas.height - 60
    },
    {
        x: canvas.width / 2 + canvas.width / 2 / 4 - 30 + (canvas.width / 2 / 4) * 2,
        y: canvas.height - 60
    }
];



function startScreen() {
    //draw start screen.
    //draw missile silos.
    ctx.fillStyle = "green";
    ctx.fillRect(0, canvas.height - 30, canvas.width, canvas.height);
    ctx.fillRect(0, canvas.height - 60, 30, canvas.height - 30);
    ctx.fillRect(
        canvas.width / 2 - 15,
        canvas.height - 60,
        30,
        canvas.height - 30
    );
    ctx.fillRect(canvas.width - 30, canvas.height - 60, 30, canvas.height - 30);

    //draw cities left.
    ctx.fillStyle = "brown";
    ctx.fillRect(canvas.width / 2 / 4 - 30, canvas.height - 60, 60, 30);
    ctx.fillRect(
        canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4,
        canvas.height - 60,
        60,
        30
    );
    ctx.fillRect(
        canvas.width / 2 / 4 - 30 + (canvas.width / 2 / 4) * 2,
        canvas.height - 60,
        60,
        30
    );
    //draw cities right.
    ctx.fillStyle = "brown";
    ctx.fillRect(
        canvas.width / 2 + canvas.width / 2 / 4 - 30,
        canvas.height - 60,
        60,
        30
    );
    ctx.fillRect(
        canvas.width / 2 + canvas.width / 2 / 4 - 30 + canvas.width / 2 / 4,
        canvas.height - 60,
        60,
        30
    );
    ctx.fillRect(
        canvas.width / 2 + canvas.width / 2 / 4 - 30 + (canvas.width / 2 / 4) * 2,
        canvas.height - 60,
        60,
        30
    );
}

//Missile class.
class Missile {
    //construct missile data.
    constructor(x, y, radius, color, velocity, exX, exY) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
            this.velocity = velocity;
            this.explodeX = exX;
            this.explodeY = exY;
        }
        //draw missile.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        //update missile.
    update() {
        this.draw();
        this.x += this.velocity.x;
        this.y += this.velocity.y;
    }
}

//Enemy class.
class Enemy {
    //construct enemy data.
    constructor(x, y, velocityX, velocityY) {
            this.x = x;
            this.y = y;
            this.velocityX = velocityX;
            this.velocityY = velocityY;
        }
        //draw enemy.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, 2, 0, Math.PI * 2);
            ctx.fillStyle = "red";
            ctx.fill();
        }
        //update enemy.
    update() {
        this.x += this.velocityX;
        this.y += this.velocityY;
        this.draw();
    }
}

//Nuke class.
class Nuke {
    //construct Nuke data.
    constructor(x, y, radius, color) {
            this.x = x;
            this.y = y;
            this.radius = radius;
            this.color = color;
        }
        //draw nuke.
    draw() {
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
            ctx.fillStyle = this.color;
            ctx.fill();
        }
        //update nuke.
    update() {
        if (this.radius < 50) {
            this.radius += 0.5;
        }
        this.draw();
    }
}

function animate() {
    animationId = requestAnimationFrame(animate); //call next frame.
    ctx.fillStyle = "rgba(0,0,0,0.1)";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    startScreen();

    //reload empty silo after 30 seconds.
    for (i = 0; i < 3; i++) {
        if (availableMissiles[i] === 0 && refillMissiles[i] === true) {
            refillMissiles[i] = false;
            const fill = i;
            document.getElementById("silo" + fill).innerHTML = "RL";
            setTimeout(() => {
                availableMissiles[fill] = 20;
                document.getElementById("silo" + fill).innerHTML =
                    availableMissiles[fill];
            }, 30000);
        }
    }

    //detect city hit by enemy & enemy caught in nuke blast.
    enemies.forEach((enemy, index) => {

        for (i = 0; i < 6; i++) {
            if (
                enemy.x >= citiesPos[i].x &&
                enemy.x <= citiesPos[i].x + 60 &&
                enemy.y > canvas.height - 60
            ) {
                explode.currentTime = 0;
                explode.play();
                nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
            }
        }

        if (enemy.y > canvas.height - 30) {
            explode.currentTime = 0;
            explode.play();
            nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
        }
        enemy.update();
        nukes.forEach((nuke) => {
            const dist = Math.hypot(nuke.x - enemy.x, nuke.y - enemy.y);
            if (dist - 2 - nuke.radius < 1) {
                setTimeout(() => {
                    explode.currentTime = 0;
                    explode.play();
                    nukes.push(new Nuke(enemy.x, enemy.y, 5, "red"));
                    enemies.splice(index, 1);
                }, 0);
            }
        });
    });

    nukes.forEach((nuke, index) => {
        nuke.update();
        if (nuke.radius >= 50) {
            setTimeout(() => {
                nukes.splice(index, 1);
            }, 0);
        }
    });

    //update & remove missiles at target.
    missiles.forEach((missile, index) => {
        missile.update();
        if (
            missile.x <= missile.explodeX + 5 &&
            missile.x >= missile.explodeX - 5 &&
            missile.y <= missile.explodeY + 5 &&
            missile.y >= missile.explodeY - 5
        ) {
            setTimeout(() => {
                explode.currentTime = 0;
                explode.play();
                nukes.push(new Nuke(missile.x, missile.y, 5, "orange"));
                missiles.splice(index, 1);
            }, 0);
        }
    });
}

addEventListener("click", (e) => {
    //check missile stock if all are empty bad luck.
    if (
        availableMissiles[0] == 0 &&
        availableMissiles[1] == 0 &&
        availableMissiles[2] == 0
    ) {
        return;
    }

    const explodeX = e.clientX;
    const explodeY = e.clientY;
    let orig = [];
    let num;
    //calc dist to target from silo.
    for (i = 0; i < 3; i++) {
        let newPoint = new Point(silo[i].x, silo[i].y);
        let nextPoint = new Point(explodeX, explodeY);

        function Point(x, y) {
            this.x = x;
            this.y = y;

            this.distanceTo = function(point) {
                var distance = Math.sqrt(
                    Math.pow(point.x - this.x, 2) + Math.pow(point.y - this.y, 2)
                );
                return distance;
            };
        }
        orig.push(newPoint.distanceTo(nextPoint));
    }

    //select nearest silo.
    if (orig[0] < orig[1] && orig[0] < orig[2]) {
        num = 0;
    } else if (orig[0] > orig[1] && orig[1] < orig[2]) {
        num = 1;
    } else {
        num = 2;
    }

    checkStock();

    //check missile stock.
    function checkStock() {
        if (availableMissiles[num] < 1) {
            refillMissiles[num] = true;
            num = Math.floor(Math.random() * 3);
            checkStock(num);
        } else {
            availableMissiles[num] -= 1;
            document.getElementById("silo" + num).innerHTML = availableMissiles[num];
        }
    }

    //calculate angle and launch missle if available.
    const angles = Math.atan2(e.clientY - silo[num].y, e.clientX - silo[num].x);
    const velocity = {
        x: Math.cos(angles) * 3,
        y: Math.sin(angles) * 3
    };
    launch.currentTime = 0;
    launch.play();
    missiles.push(
        new Missile(
            silo[num].x,
            silo[num].y,
            2,
            "white",
            velocity,
            explodeX,
            explodeY
        )
    );
});

// resize page.
addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    startScreen();
    silo = [
        { x: 15, y: canvas.height - 60 },
        { x: canvas.width / 2, y: canvas.height - 60 },
        { x: canvas.width - 15, y: canvas.height - 60 }
    ];
});

setTimeout(() => {
    alert.play();
}, 500);


for (i = 0; i < numberOfEnemies; i++) {

    const x =
        Math.random() * (canvas.width - canvas.width / 4) + canvas.width / 8;
    const y = Math.random() * 30 - 60;
    const velocityX = (Math.random() - 0.5) / 40;
    const velocityY = (Math.random() + 1) / 4;
    enemies.push(new Enemy(x, y, velocityX, velocityY));
}

setInterval(() => {
    numberOfEnemies += 1;
    for (i = 0; i < numberOfEnemies; i++) {
        alert.play();
        const x =
            Math.random() * (canvas.width - canvas.width / 4) + canvas.width / 8;
        const y = Math.random() * 30 - 60;
        const velocityX = (Math.random() - 0.5) / 40;
        const velocityY = (Math.random() + 1) / 4;
        enemies.push(new Enemy(x, y, velocityX, velocityY));
    }
}, 30000);

startScreen();
animate();