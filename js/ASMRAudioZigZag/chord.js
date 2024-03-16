class Chord {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.dot = 20;
        this.opacity = 1;
        this.lineWidth = 5;
        this.speed = 1.3;
        this.velocity = { x: 0, y: 0 };
        this.detectionTimer = 100;
        this.bassDetectionTimer = 50;
        this.hatDetectionTimer = 10;
        this.bassNoteToPlay = 1;
        this.angle = 0;
        this.aim = { x: cRight, y: cBottom };
        this.yHat = 0;
        this.hatDown = true;
        this.hatInterval = 20;
    }
    draw() {
        ctx.strokeStyle = 'Turquoise';
        ctx.fillStyle = 'Turquoise';
        ctx.save();
        ctx.beginPath();
        ctx.arc(this.x, this.y, 20, 0, Math.PI * 2);
        ctx.globalAlpha = this.opacity;
        ctx.lineWidth = this.lineWidth;
        ctx.stroke();
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.dot, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
    }
    update() {
        if (this.lineWidth > 1) {
            this.lineWidth -= 0.1;
        }

        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }
        if (this.dot > 4) {
            this.dot -= 0.2;
        }
        this.x += this.velocity.x;
        this.y += this.velocity.y;
        this.angle = Math.atan2(this.aim.y - this.y, this.aim.x - this.x);
        this.velocity.x = Math.cos(this.angle) * this.speed;
        this.velocity.y = Math.sin(this.angle) * this.speed;

        if (this.detectionTimer > 0) {
            this.detectionTimer -= 1;
        }

        if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
            changeChord();
            if (this.hatDown) {
                this.hatDown = false;
            } else {
                this.hatDown = true;
            }

            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.x, this.y, 'Turquoise'));
            }
            zz.cBoxLineWidth = 10;
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: cRight, y: cBottom };
            this.y = cTop;
            this.detectionTimer = 100;
            this.x = cLeft;
        }

        if (this.x >= cLeft - 1 && this.x <= cLeft + 1 && this.y >= cBottom - 1 && this.y <= cBottom + 1 && this.detectionTimer == 0) {
            changeChord();
            if (this.hatDown) {
                this.hatDown = false;
            } else {
                this.hatDown = true;
            }
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.x, this.y, 'Turquoise'));
            }
            zz.cBoxLineWidth = 10;
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: 0, y: center.y };
            this.y = cBottom;
            this.detectionTimer = 100;
            this.x = cLeft;
        }

        if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cBottom - 1 && this.y <= cBottom + 1 && this.detectionTimer == 0) {
            changeChord();
            if (this.hatDown) {
                this.hatDown = false;
            } else {
                this.hatDown = true;
            }
            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.x, this.y, 'Turquoise'));
            }
            zz.cBoxLineWidth = 10;
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: left, y: center.y };
            this.y = cBottom;
            this.detectionTimer = 100;
            this.x = cRight;
        }





        //midlle outer diadonal points.
        if (this.x >= left - 1 && this.x <= left + 1 && this.y >= center.y - 1 && this.y <= center.y + 1 && this.detectionTimer == 0) {
            this.aim = { x: cRight, y: cTop };
            this.y = center.y;
            this.detectionTimer = 100;
            this.x = left;
        }
        if (this.x >= 0 - 1 && this.x <= 0 + 1 && this.y >= center.y - 1 && this.y <= center.y + 1 && this.detectionTimer == 0) {
            this.aim = { x: cLeft, y: cTop };
            this.y = center.y;
            this.detectionTimer = 100;
            this.x = 0;
        }







        if (this.x >= cRight - 1 && this.x <= cRight + 1 && this.y >= cTop - 1 && this.y <= cTop + 1 && this.detectionTimer == 0) {
            changeChord();
            if (this.hatDown) {
                this.hatDown = false;
            } else {
                this.hatDown = true;
            }

            for (let i = 0; i < 10; i++) {
                particles.push(new Particle(this.x, this.y, 'Turquoise'));
            }
            zz.cBoxLineWidth = 10;
            this.lineWidth = 5;
            this.opacity = 1;
            this.aim = { x: cLeft, y: cBottom };
            this.y = cTop;
            this.detectionTimer = 100;
            this.x = cRight;
        }

        //play bass notes.
        if ((this.y >= cBottom - 1 && this.y <= cBottom + 1 || this.y >= cTop - 1 && this.y <= cTop + 1) && this.bassDetectionTimer == 0) {
            bassNoteToPlay(this.bassNoteToPlay);
            this.bassNoteToPlay += 1;
            this.bassDetectionTimer = 50;
            this.dot = 20;
            bassCircles.push(new BassCircle(this.x, this.y));
            this.yHat = this.y;
            highHatClosed.play();
            hat.lineWidth = 4;
            for (let i = 0; i < 4; i++) {
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
        }
        if (this.y >= bass1 - 1 && this.y <= bass1 + 1 && this.bassDetectionTimer == 0) {
            bassNoteToPlay(this.bassNoteToPlay);
            this.bassNoteToPlay += 1;
            this.bassDetectionTimer = 50;
            this.dot = 20;
            bassCircles.push(new BassCircle(this.x, this.y));
            this.yHat = this.y;
            highHatClosed.play();
            hat.lineWidth = 4;
            for (let i = 0; i < 4; i++) {
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
        }
        if (this.y >= bass2 - 1 && this.y <= bass2 + 1 && this.bassDetectionTimer == 0) {
            bassNoteToPlay(this.bassNoteToPlay);
            this.bassNoteToPlay += 1;
            this.bassDetectionTimer = 50;
            this.dot = 20;
            bassCircles.push(new BassCircle(this.x, this.y));
            this.yHat = this.y;
            highHatClosed.play();
            hat.lineWidth = 4;
            for (let i = 0; i < 4; i++) {
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
        }
        if (this.y >= bass3 - 1 && this.y <= bass3 + 1 && this.bassDetectionTimer == 0) {
            bassNoteToPlay(this.bassNoteToPlay);
            this.bassNoteToPlay += 1;
            this.bassDetectionTimer = 50;
            this.dot = 20;
            bassCircles.push(new BassCircle(this.x, this.y));
            this.yHat = this.y;
            highHatClosed.play();
            hat.lineWidth = 4;
            for (let i = 0; i < 4; i++) {
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
        }





        if (this.hatDown) {
            if (this.y - this.yHat >= hatInterval - 1 && this.y - this.yHat <= hatInterval + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.y - this.yHat >= (hatInterval * 2) - 1 && this.y - this.yHat <= (hatInterval * 2) + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.y - this.yHat >= (hatInterval * 3) - 1 && this.y - this.yHat <= (hatInterval * 3) + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                kick1.play();
                zz.kickLineWidth = 5;
                kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.y - this.yHat >= (hatInterval * 4) - 1 && this.y - this.yHat <= (hatInterval * 4) + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                kick2.play();
                kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
                zz.kickLineWidth = 5;
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.y - this.yHat >= (hatInterval * 5) - 1 && this.y - this.yHat <= (hatInterval * 5) + 1 && this.hatDetectionTimer == 0) {
                highHatOpen.play();

                hat.pole.y -= cTop / 10;
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
        } else {
            if (this.yHat - this.y >= hatInterval - 1 && this.yHat - this.y <= hatInterval + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.yHat - this.y >= (hatInterval * 2) - 1 && this.yHat - this.y <= (hatInterval * 2) + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.yHat - this.y >= (hatInterval * 3) - 1 && this.yHat - this.y <= (hatInterval * 3) + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                kick1.play();
                kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
                zz.kickLineWidth = 5;
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.yHat - this.y >= (hatInterval * 4) - 1 && this.yHat - this.y <= (hatInterval * 4) + 1 && this.hatDetectionTimer == 0) {
                highHatClosed.play();
                kick2.play()
                kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
                zz.kickLineWidth = 5;
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
            if (this.yHat - this.y >= (hatInterval * 5) - 1 && this.yHat - this.y <= (hatInterval * 5) + 1 && this.hatDetectionTimer == 0) {
                highHatOpen.play();;
                hat.pole.y -= cTop / 10;
                this.hatDetectionTimer = this.hatInterval;
                hat.lineWidth = 4;
                particles.push(new Particle(hat.x, hat.y, 'skyblue'));
            }
        }




        if (this.bassNoteToPlay == 4) {
            this.bassNoteToPlay = 0;
        }
        if (this.bassDetectionTimer > 0) {
            this.bassDetectionTimer -= 1;
        }
        if (this.hatDetectionTimer > 0) {
            this.hatDetectionTimer -= 1;
        } else {
            hat.pole.y = cTop;
        }
        this.draw();
    }
}


function bassNoteToPlay(bassToPlay) {
    //kick.currentTime = 0;
    kick1.play();
    kicks.push(new Kick(right + (canvas.width - right) / 2, center.y));
    zz.kickLineWidth = 5;
    if (chordToPlay == 'E1' || chordToPlay == 'E2' || chordToPlay == 'E3') {
        if (bassToPlay == 0) {
            EBass.play();
        }
        if (bassToPlay == 1) {
            AbBass.play();
        }
        if (bassToPlay == 2) {
            BBass.play();
        }
        if (bassToPlay == 3) {
            AbBass.play();
        }
    }
    if (chordToPlay == 'A1' || chordToPlay == 'A2' || chordToPlay == 'A3') {
        if (bassToPlay == 0) {
            ABass.play();
        }
        if (bassToPlay == 1) {
            CSBassTop.play();
        }
        if (bassToPlay == 2) {
            EBassTop.play();
        }
        if (bassToPlay == 3) {
            CSBassTop.play();
        }
    }
    if (chordToPlay == 'B') {
        if (bassToPlay == 0) {
            BBass.play();
        }
        if (bassToPlay == 1) {
            EbBassTop.play();
        }
        if (bassToPlay == 2) {
            FSBassTop.play();
        }
        if (bassToPlay == 3) {
            EbBassTop.play();
        }
    }
    if (chordToPlay == 'Gsus4') {
        if (bassToPlay == 0) {
            GBass.play();
        }
        if (bassToPlay == 1) {
            CBassTop.play();
        }
        if (bassToPlay == 2) {
            DBassTop.play();
        }
        if (bassToPlay == 3) {
            GBass.play();
        }
    }
    if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
        if (bassToPlay == 0) {
            CBassTop.play();
        }
        if (bassToPlay == 1) {
            EBassTop.play();
        }
        if (bassToPlay == 2) {
            GBassTop.play();
        }
        if (bassToPlay == 3) {
            EBassTop.play();
        }
    }
    if (chordToPlay == 'F1' || chordToPlay == 'F2') {
        if (bassToPlay == 0) {
            FBass.play();
        }
        if (bassToPlay == 1) {
            ABass.play();
        }
        if (bassToPlay == 2) {
            CBassTop.play();
        }
        if (bassToPlay == 3) {
            ABass.play();
        }
    }
    if (chordToPlay == 'G') {
        if (bassToPlay == 0) {
            GBass.play();
        }
        if (bassToPlay == 1) {
            BBass.play();
        }
        if (bassToPlay == 2) {
            DBassTop.play();
        }
        if (bassToPlay == 3) {
            BBass.play();
        }
    }
    if (chordToPlay == 'F#m7') {
        if (bassToPlay == 0) {
            FSBassTop.play();
        }
        if (bassToPlay == 1) {
            ABassTop.play();
        }
        if (bassToPlay == 2) {
            CSBassTop.play();
        }
        if (bassToPlay == 3) {
            ABassTop.play();
        }
    }
    if (chordToPlay == 'Bsus4') {
        if (bassToPlay == 0) {
            BBass.play();
        }
        if (bassToPlay == 1) {
            EBassTop.play();
        }
        if (bassToPlay == 2) {
            FSBassTop.play();
        }
        if (bassToPlay == 3) {
            BBass.play();
        }
    }
}







function changeChord() {
    if (chordToPlay == 'E1') {
        chordToPlay = 'A1';

    } else if (chordToPlay == 'A1') {
        chordToPlay = 'E2';

    } else if (chordToPlay == 'E2') {
        chordToPlay = 'A2';

    } else if (chordToPlay == 'A2') {
        chordToPlay = 'E3';

    } else if (chordToPlay == 'E3') {
        chordToPlay = 'B';

    } else if (chordToPlay == 'B') {
        chordToPlay = 'A3';

    } else if (chordToPlay == 'A3') {
        chordToPlay = 'Gsus4';

    } else if (chordToPlay == 'Gsus4') {
        chordToPlay = 'C1';

    } else if (chordToPlay == 'C1') {
        chordToPlay = 'F1';

    } else if (chordToPlay == 'F1') {
        chordToPlay = 'C2';

    } else if (chordToPlay == 'C2') {
        chordToPlay = 'F2';

    } else if (chordToPlay == 'F2') {
        chordToPlay = 'C3';

    } else if (chordToPlay == 'C3') {
        chordToPlay = 'G';

    } else if (chordToPlay == 'G') {
        chordToPlay = 'F#m7';

    } else if (chordToPlay == 'F#m7') {
        chordToPlay = 'Bsus4';

    } else if (chordToPlay == 'Bsus4') {
        chordToPlay = 'E1';

    }

    if (chordToPlay == 'E1' || chordToPlay == 'E2' || chordToPlay == 'E3') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordE[i];
        }
    }

    if (chordToPlay == 'A1' || chordToPlay == 'A2' || chordToPlay == 'A3') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordA[i];
        }
    }

    if (chordToPlay == 'B') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordB[i];
        }
    }

    if (chordToPlay == 'Gsus4') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordGsus4[i];
        }
    }

    if (chordToPlay == 'G') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordG[i];
        }
    }

    if (chordToPlay == 'F#m7') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordFSm7[i];
        }
    }

    if (chordToPlay == 'C1' || chordToPlay == 'C2' || chordToPlay == 'C3') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordC[i];
        }
    }

    if (chordToPlay == 'F1' || chordToPlay == 'F2') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordF[i];
        }
    }

    if (chordToPlay == 'Bsus4') {
        for (let i = 0; i < 36; i++) {
            notes[i].note = chordBsus4[i];
        }
    }
}