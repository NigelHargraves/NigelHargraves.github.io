class EjectNote {
    constructor(x, y, noteNumber, color) {
        this.x = x;
        this.y = y;
        this.noteNumber = noteNumber;
        this.color = color;
        this.r = 10;
        this.gravity = Math.random() / 100;
        this.velocity = { x: Math.random() - 0.5, y: -Math.random() * 2 };
        this.friction = 0.001;
        this.lineWidth = 1;
        this.opacity = 1;
        this.bounceNumber = 0;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = this.lineWidth;
        ctx.globalAlpha = this.opacity;
        ctx.stroke();
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.2;
    }
    update() {
        if (this.opacity > 0.2) {
            this.opacity -= 0.01;
        }

        if (this.lineWidth > 1) {
            this.lineWidth -= 0.01;
        }

        this.x += this.velocity.x;
        this.y += this.velocity.y;

        this.velocity.y += this.gravity;
        if (this.velocity.y < 0) {
            this.velocity.y += this.friction;
        }

        if (this.x - this.r <= 0 || this.x + this.r >= canvas.width) {
            this.velocity.x = -this.velocity.x;
        }

        if (this.y + this.r >= canvas.height) {
            this.bounceNumber++;
            this.r -= 2;
            if (this.r == 8) {
                this.color = 'crimson';
            }
            if (this.r == 6) {
                this.color = 'DarkMagenta';
            }
            if (this.r == 4) {
                this.color = 'DeepPink';
            }
            this.velocity.y = -this.velocity.y;
            this.lineWidth = 3;
            this.opacity = 1;
            if (this.bounceNumber == 1) {
                if (newChord == 0) {
                    if (this.noteNumber == 1) {
                        FTFF.currentTime = 0.1;
                        FTFF.play();
                    }
                    if (this.noteNumber == 2) {
                        ATFF.currentTime = 0.1;
                        ATFF.play();
                    }
                    if (this.noteNumber == 3) {
                        CTFF.currentTime = 0.1;
                        CTFF.play();
                    }
                }
                if (newChord == 1) {
                    if (this.noteNumber == 1) {
                        BFTFF.currentTime = 0.1;
                        BFTFF.play();
                    }
                    if (this.noteNumber == 2) {
                        DTFF.currentTime = 0.1;
                        DTFF.play();
                    }
                    if (this.noteNumber == 3) {
                        FTFF.currentTime = 0.1;
                        FTFF.play();
                    }
                }
                if (newChord == 2) {
                    if (this.noteNumber == 1) {
                        DTFF.currentTime = 0.1;
                        DTFF.play();
                    }
                    if (this.noteNumber == 2) {
                        FTFF.currentTime = 0.1;
                        FTFF.play();
                    }
                    if (this.noteNumber == 3) {
                        ATFF.currentTime = 0.1;
                        ATFF.play();
                    }
                }
                if (newChord == -1) {
                    if (this.noteNumber == 1) {
                        CTFF.currentTime = 0.1;
                        CTFF.play();
                    }
                    if (this.noteNumber == 2) {
                        ETFF.currentTime = 0.1;
                        ETFF.play();
                    }
                    if (this.noteNumber == 3) {
                        GTFF.currentTime = 0.1;
                        GTFF.play();
                    }
                }
            }
            if (this.bounceNumber == 2) {
                if (newChord == 0) {
                    if (this.noteNumber == 1) {
                        FHT.currentTime = 0.1;
                        FHT.play();
                    }
                    if (this.noteNumber == 2) {
                        AHT.currentTime = 0.1;
                        AHT.play();
                    }
                    if (this.noteNumber == 3) {
                        CHT.currentTime = 0.1;
                        CHT.play();
                    }
                }
                if (newChord == 1) {
                    if (this.noteNumber == 1) {
                        BFHT.currentTime = 0.1;
                        BFHT.play();
                    }
                    if (this.noteNumber == 2) {
                        DHT.currentTime = 0.1;
                        DHT.play();
                    }
                    if (this.noteNumber == 3) {
                        FHT.currentTime = 0.1;
                        FHT.play();
                    }
                }
                if (newChord == 2) {
                    if (this.noteNumber == 1) {
                        DHT.currentTime = 0.1;
                        DHT.play();
                    }
                    if (this.noteNumber == 2) {
                        FHT.currentTime = 0.1;
                        FHT.play();
                    }
                    if (this.noteNumber == 3) {
                        AHT.currentTime = 0.1;
                        AHT.play();
                    }
                }
                if (newChord == -1) {
                    if (this.noteNumber == 1) {
                        CHT.currentTime = 0.1;
                        CHT.play();
                    }
                    if (this.noteNumber == 2) {
                        EHT.currentTime = 0.1;
                        EHT.play();
                    }
                    if (this.noteNumber == 3) {
                        GHT.currentTime = 0.1;
                        GHT.play();
                    }
                }
            }
            if (this.bounceNumber == 3) {
                if (newChord == 0) {
                    if (this.noteNumber == 1) {
                        FPiano.currentTime = 0.1;
                        FPiano.play();
                    }
                    if (this.noteNumber == 2) {
                        APiano.currentTime = 0.1;
                        APiano.play();
                    }
                    if (this.noteNumber == 3) {
                        CPiano.currentTime = 0.1;
                        CPiano.play();
                    }
                }
                if (newChord == 1) {
                    if (this.noteNumber == 1) {
                        BFPiano.currentTime = 0.1;
                        BFPiano.play();
                    }
                    if (this.noteNumber == 2) {
                        DPiano.currentTime = 0.1;
                        DPiano.play();
                    }
                    if (this.noteNumber == 3) {
                        FPiano.currentTime = 0.1;
                        FPiano.play();
                    }
                }
                if (newChord == 2) {
                    if (this.noteNumber == 1) {
                        DPiano.currentTime = 0.1;
                        DPiano.play();
                    }
                    if (this.noteNumber == 2) {
                        FPiano.currentTime = 0.1;
                        FPiano.play();
                    }
                    if (this.noteNumber == 3) {
                        APiano.currentTime = 0.1;
                        APiano.play();
                    }
                }
                if (newChord == -1) {
                    if (this.noteNumber == 1) {
                        CPiano.currentTime = 0.1;
                        CPiano.play();
                    }
                    if (this.noteNumber == 2) {
                        EPiano.currentTime = 0.1;
                        EPiano.play();
                    }
                    if (this.noteNumber == 3) {
                        GPiano.currentTime = 0.1;
                        GPiano.play();
                    }
                }
            }
            if (this.bounceNumber == 4) {
                for (let i = 0; i < 10; i++) {
                    splashes.push(new Splash(this.x, this.y, 'DeepPink'));
                }
                endNote++;
                if (endNote == 0) {
                    end1.play();
                }
                if (endNote == 1) {
                    end2.play();
                }
                if (endNote == 2) {
                    end3.play();
                }
                if (endNote == 3) {
                    end4.play();
                }
                if (endNote == 3) {
                    endNote = 0;
                }
            }
        }



        this.draw();
    }
}

function forEjectNotes() {
    ejectNotes.forEach((ejectNote, index) => {
        if (ejectNote.r < 4) {
            ejectNotes.splice(index, 1);
        }
        ejectNote.update();
    });
}