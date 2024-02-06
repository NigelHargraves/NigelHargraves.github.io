function init() {
    chords.push(new Chord(canvas.width / 2, canvas.height / 2, 0.01, true, 30, 0)); //drum & chord change.
    chords.push(new Chord((canvas.width / 2) + (canvas.width * 0.100), canvas.height / 2, 0.009, false, 20, 1));
    chords.push(new Chord((canvas.width / 2) - (canvas.width * 0.100), canvas.height / 2, 0.008, false, 20, 2));
    chords.push(new Chord((canvas.width / 2) + (canvas.width * 0.200), canvas.height / 2, 0.007, false, 20, 3));
    chords.push(new Chord((canvas.width / 2) - (canvas.width * 0.200), canvas.height / 2, 0.006, false, 20, 4));
    chords.push(new Chord((canvas.width / 2) + (canvas.width * 0.300), canvas.height / 2, 0.005, false, 20, 5));
    chords.push(new Chord((canvas.width / 2) - (canvas.width * 0.300), canvas.height / 2, 0.004, false, 20, 6));
}