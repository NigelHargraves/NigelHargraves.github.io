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
        if (this.note != 0 && this.velocity < 0.04 && this.velocity > -0.04) {
            splashes.push(new Splash(this.x, this.y, 'white'));
            this.opacity = 1;
            this.lineWidth = 3;
        }

        if (this.note != 0 && Math.floor(this.y) == canvas.height / 2) {
            if (newChord == 0) {
                if (this.note == 1) {
                    FLSilky.play();
                }
                if (this.note == 2) {
                    ALSilky.play();
                }
                if (this.note == 3) {
                    CLSilky.play();
                }
                if (this.note == 4) {
                    FUSilky.play();
                }
                if (this.note == 5)
                    AUSilky.play();

                if (this.note == 6) {
                    CUSilky.play();
                }
                if (this.note == 7) {
                    FLWG.play();
                }
                if (this.note == 8) {
                    ALWG.play();
                }
                if (this.note == 9) {
                    CLWG.play();
                }
                if (this.note == 10) {
                    FUWG.play();
                }
                if (this.note == 11) {
                    AUWG.play();
                }
                if (this.note == 12) {
                    CUWG.play();
                }
            }

            if (newChord == 1) {
                if (this.note == 1) {
                    FLSilky.play();
                }
                if (this.note == 2) {
                    BFLSilky.play();
                }
                if (this.note == 3) {
                    DLSilky.play();
                }
                if (this.note == 4) {
                    FUSilky.play();
                }
                if (this.note == 5) {
                    BFUSilky.play();
                }
                if (this.note == 6) {
                    DUSilky.play();
                }
                if (this.note == 7) {
                    FLWG.play();
                }
                if (this.note == 8) {
                    BFLWG.play();
                }
                if (this.note == 9) {
                    DLWG.play();
                }
                if (this.note == 10) {
                    FUWG.play();
                }
                if (this.note == 11) {
                    BFUWG.play();
                }
                if (this.note == 12) {
                    DUWG.play();
                }
            }
            if (newChord == 2) {
                if (this.note == 1) {
                    DLSilky.play();
                }
                if (this.note == 2) {
                    FLSilky.play();
                }
                if (this.note == 3) {
                    ALSilky.play();
                }
                if (this.note == 4) {
                    DUSilky.play();
                }
                if (this.note == 5) {
                    FUSilky.play();
                }
                if (this.note == 6) {
                    AUSilky.play();
                }
                if (this.note == 7) {
                    DLWG.play();
                }
                if (this.note == 8) {
                    FLWG.play();
                }
                if (this.note == 9) {
                    ALWG.play();
                }
                if (this.note == 10) {
                    DUWG.play();
                }
                if (this.note == 11) {
                    FUWG.play();
                }
                if (this.note == 12) {
                    AUWG.play();
                }
            }
            if (newChord == -1) {
                if (this.note == 1) {
                    CLSilky.play();
                }
                if (this.note == 2) {
                    ELSilky.play();
                }
                if (this.note == 3) {
                    GLSilky.play();
                }
                if (this.note == 4) {
                    CUSilky.play();
                }
                if (this.note == 5) {
                    EUSilky.play();
                }
                if (this.note == 6) {
                    GUSilky.play();
                }
                if (this.note == 7) {
                    CLWG.play();
                }
                if (this.note == 8) {
                    ELWG.play();
                }
                if (this.note == 9) {
                    GLWG.play();
                }
                if (this.note == 10) {
                    CUWG.play();
                }
                if (this.note == 11) {
                    EUWG.play();
                }
                if (this.note == 12) {
                    GUWG.play();
                }
            }
        }

        if (this.note == 0 && this.velocity < 0.01 && this.velocity > -0.01) {
            if (eject) {
                for (let i = 1; i < 4; i++) {
                    ejectNotes.push(new EjectNote(this.x, this.y, i, 'coral'));
                }
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
                    if (this.note == 7) {
                        FLWG.currentTime = 0.1;
                        FLWG.play();
                    }
                    if (this.note == 8) {
                        ALWG.currentTime = 0.1;
                        ALWG.play();
                    }
                    if (this.note == 9) {
                        CLWG.currentTime = 0.1;
                        CLWG.play();
                    }
                    if (this.note == 10) {
                        FUWG.currentTime = 0.1;
                        FUWG.play();
                    }
                    if (this.note == 11) {
                        AUWG.currentTime = 0.1;
                        AUWG.play();
                    }
                    if (this.note == 12) {
                        CUWG.currentTime = 0.1;
                        CUWG.play();
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
                    if (this.note == 7) {
                        FLWG.currentTime = 0.1;
                        FLWG.play();
                    }
                    if (this.note == 8) {
                        BFLWG.currentTime = 0.1;
                        BFLWG.play();
                    }
                    if (this.note == 9) {
                        DLWG.currentTime = 0.1;
                        DLWG.play();
                    }
                    if (this.note == 10) {
                        FUWG.currentTime = 0.1;
                        FUWG.play();
                    }
                    if (this.note == 11) {
                        BFUWG.currentTime = 0.1;
                        BFUWG.play();
                    }
                    if (this.note == 12) {
                        DUWG.currentTime = 0.1;
                        DUWG.play();
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
                    if (this.note == 7) {
                        DLWG.currentTime = 0.1;
                        DLWG.play();
                    }
                    if (this.note == 8) {
                        FLWG.currentTime = 0.1;
                        FLWG.play();
                    }
                    if (this.note == 9) {
                        ALWG.currentTime = 0.1;
                        ALWG.play();
                    }
                    if (this.note == 10) {
                        DUWG.currentTime = 0.1;
                        DUWG.play();
                    }
                    if (this.note == 11) {
                        FUWG.currentTime = 0.1;
                        FUWG.play();
                    }
                    if (this.note == 12) {
                        AUWG.currentTime = 0.1;
                        AUWG.play();
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
                    if (this.note == 7) {
                        CLWG.currentTime = 0.1;
                        CLWG.play();
                    }
                    if (this.note == 8) {
                        ELWG.currentTime = 0.1;
                        ELWG.play();
                    }
                    if (this.note == 9) {
                        GLWG.currentTime = 0.1;
                        GLWG.play();
                    }
                    if (this.note == 10) {
                        CUWG.currentTime = 0.1;
                        CUWG.play();
                    }
                    if (this.note == 11) {
                        EUWG.currentTime = 0.1;
                        EUWG.play();
                    }
                    if (this.note == 12) {
                        GUWG.currentTime = 0.1;
                        GUWG.play();
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