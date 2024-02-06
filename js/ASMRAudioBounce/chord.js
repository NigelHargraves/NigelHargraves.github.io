class Chord {
    constructor(x, y, gravity, drum, radius, note) {
        this.x = x;
        this.y = y;
        this.gravity = gravity;
        this.drum = drum;
        this.r = radius;
        this.note = note;
        this.opacity = 0.2;
        this.lineWidth = 1;
        this.velocity = 0;
        this.lineOpacity = 0.01;
    }
    draw() {

        ctx.beginPath();
        ctx.moveTo(0, canvas.height / 2);
        ctx.lineTo(canvas.width, canvas.height / 2);
        ctx.strokeStyle = "aquamarine";
        ctx.globalAlpha = this.lineOpacity;
        ctx.stroke();
        ctx.globalAlpha = 0.2;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2);
        if (this.drum) {
            ctx.strokeStyle = "aquamarine";
        } else {
            ctx.strokeStyle = "white";
        }
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

        if (this.lineOpacity > 0.01) {
            this.lineOpacity -= 0.01;
        }

        if (this.note == 0 && this.velocity < 0.01 && this.velocity > -0.01) {
            if (eject) {
                ejectNotes.push(new EjectNote(this.x, this.y));
                ejectNotes.push(new EjectNote(this.x, this.y));
                ejectNotes.push(new EjectNote(this.x, this.y));
                eject = false;
            }

            this.lineOpacity = 1;
            if (newChord == 0) {
                playNow = true;
                FSurfin.play();
                ASurfin.play();
                CSurfin.play();
            }
            if (newChord == 1) {
                BFSurfin.play();
                DSurfin.play();
                FSurfin.play();
            }
            if (newChord == 2) {
                DSurfin.play();
                FSurfin.play();
                ASurfin.play();
            }
            if (newChord == -1 && playNow) {
                CSurfin.play();
                ESurfin.play();
                GSurfin.play();
            }
        }

        this.velocity += this.gravity;
        this.y += this.velocity;

        if (this.y + this.r >= canvas.height) {
            eject = true;
            this.opacity = 1;
            this.lineWidth = 3;
            this.velocity += this.gravity;
            this.velocity = -this.velocity;
            if (this.drum) {
                newChord++;
                drumBass.currentTime = 0.1;
                drumBass.play();
                if (newChord == 0) {
                    FBass.currentTime = 0.1;
                    FBass.play();
                }
                if (newChord == 1) {
                    BFBass.currentTime = 0.1;
                    BFBass.play();
                }
                if (newChord == 2) {
                    DBass.currentTime = 0.1;
                    DBass.play();
                }
                if (newChord == 3) {
                    CBass.currentTime = 0.1;
                    CBass.play();
                }

                if (newChord == 3) {
                    newChord = -1;
                }
            } else {
                if (newChord == 0) {
                    if (this.note == 1) {
                        FLSilky.currentTime = 0.1;
                        FLSilky.play();
                    }
                    if (this.note == 2) {
                        ALSilky.currentTime = 0.1;
                        ALSilky.play();
                    }
                    if (this.note == 3) {
                        CLSilky.currentTime = 0.1;
                        CLSilky.play();
                    }
                    if (this.note == 4) {
                        FUSilky.currentTime = 0.1;
                        FUSilky.play();
                    }
                    if (this.note == 5) {
                        AUSilky.currentTime = 0.1;
                        AUSilky.play();
                    }
                    if (this.note == 6) {
                        CUSilky.currentTime = 0.1;
                        CUSilky.play();
                    }
                }
                if (newChord == 1) {
                    if (this.note == 1) {
                        FLSilky.currentTime = 0.1;
                        FLSilky.play();
                    }
                    if (this.note == 2) {
                        BFLSilky.currentTime = 0.1;
                        BFLSilky.play();
                    }
                    if (this.note == 3) {
                        DLSilky.currentTime = 0.1;
                        DLSilky.play();
                    }
                    if (this.note == 4) {
                        FUSilky.currentTime = 0.1;
                        FUSilky.play();
                    }
                    if (this.note == 5) {
                        BFUSilky.currentTime = 0.1;
                        BFUSilky.play();
                    }
                    if (this.note == 6) {
                        DUSilky.currentTime = 0.1;
                        DUSilky.play();
                    }
                }
                if (newChord == 2) {
                    if (this.note == 1) {
                        DLSilky.currentTime = 0.1;
                        DLSilky.play();
                    }
                    if (this.note == 2) {
                        FLSilky.currentTime = 0.1;
                        FLSilky.play();
                    }
                    if (this.note == 3) {
                        ALSilky.currentTime = 0.1;
                        ALSilky.play();
                    }
                    if (this.note == 4) {
                        DUSilky.currentTime = 0.1;
                        DUSilky.play();
                    }
                    if (this.note == 5) {
                        FUSilky.currentTime = 0.1;
                        FUSilky.play();
                    }
                    if (this.note == 6) {
                        AUSilky.currentTime = 0.1;
                        AUSilky.play();
                    }
                }
                if (newChord == -1) {
                    if (this.note == 1) {
                        CLSilky.currentTime = 0.1;
                        CLSilky.play();
                    }
                    if (this.note == 2) {
                        ELSilky.currentTime = 0.1;
                        ELSilky.play();
                    }
                    if (this.note == 3) {
                        GLSilky.currentTime = 0.1;
                        GLSilky.play();
                    }
                    if (this.note == 4) {
                        CUSilky.currentTime = 0.1;
                        CUSilky.play();
                    }
                    if (this.note == 5) {
                        EUSilky.currentTime = 0.1;
                        EUSilky.play();
                    }
                    if (this.note == 6) {
                        GUSilky.currentTime = 0.1;
                        GUSilky.play();
                    }
                }
            }
        }
        this.draw();
    }
}

function forChords() {
    chords.forEach((chord, index) => {

        chord.update();
    });
}