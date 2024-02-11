"use strict";

function notesToPlay() {
  if (chordToPlay == 1) {
    playFirstDChord = true;
  }

  if (chordToPlay == 0 && playFirstDChord || chordToPlay == 1 || chordToPlay == 6) {
    if (noteToPlay == 1) {
      DO1.currentTime = 0.1;
      DO1.play();
    }

    if (noteToPlay == 2) {
      FSO1.currentTime = 0.1;
      FSO1.play();
    }

    if (noteToPlay == 3) {
      AO1.currentTime = 0.1;
      AO1.play();
    }

    if (noteToPlay == 4) {
      DO2.currentTime = 0.1;
      DO2.play();
    }

    if (noteToPlay == 5) {
      FSO2.currentTime = 0.1;
      FSO2.play();
    }

    if (noteToPlay == 6) {
      AO2.currentTime = 0.1;
      AO2.play();
    }

    if (noteToPlay == 7) {
      DO3.currentTime = 0.1;
      DO3.play();
    }

    if (noteToPlay == 8) {
      FSO3.currentTime = 0.1;
      FSO3.play();
    }

    if (noteToPlay == 9) {
      AO3.currentTime = 0.1;
      AO3.play();
    }

    if (noteToPlay == 10) {
      DO4.currentTime = 0.1;
      DO4.play();
    }

    if (noteToPlay == 11) {
      FSO4.currentTime = 0.1;
      FSO4.play();
    }

    if (noteToPlay == 12) {
      AO4.currentTime = 0.1;
      AO4.play();
    }
  }

  if (chordToPlay == 0 && !playFirstDChord || chordToPlay == 2 || chordToPlay == 8) {
    if (noteToPlay == 1) {
      AO1.currentTime = 0.1;
      AO1.play();
    }

    if (noteToPlay == 2) {
      CSO1.currentTime = 0.1;
      CSO1.play();
    }

    if (noteToPlay == 3) {
      EO1.currentTime = 0.1;
      EO1.play();
    }

    if (noteToPlay == 4) {
      AO2.currentTime = 0.1;
      AO2.play();
    }

    if (noteToPlay == 5) {
      CSO2.currentTime = 0.1;
      CSO2.play();
    }

    if (noteToPlay == 6) {
      EO2.currentTime = 0.1;
      EO2.play();
    }

    if (noteToPlay == 7) {
      AO3.currentTime = 0.1;
      AO3.play();
    }

    if (noteToPlay == 8) {
      CSO3.currentTime = 0.1;
      CSO3.play();
    }

    if (noteToPlay == 9) {
      EO3.currentTime = 0.1;
      EO3.play();
    }

    if (noteToPlay == 10) {
      AO4.currentTime = 0.1;
      AO4.play();
    }

    if (noteToPlay == 11) {
      CSO4.currentTime = 0.1;
      CSO4.play();
    }

    if (noteToPlay == 12) {
      EO4.currentTime = 0.1;
      EO4.play();
    }
  }

  if (chordToPlay == 3) {
    playFirstDChord = false;

    if (noteToPlay == 1) {
      BO1.currentTime = 0.1;
      BO1.play();
    }

    if (noteToPlay == 2) {
      DO1.currentTime = 0.1;
      DO1.play();
    }

    if (noteToPlay == 3) {
      FSO1.currentTime = 0.1;
      FSO1.play();
    }

    if (noteToPlay == 4) {
      BO2.currentTime = 0.1;
      BO2.play();
    }

    if (noteToPlay == 5) {
      DO2.currentTime = 0.1;
      DO2.play();
    }

    if (noteToPlay == 6) {
      FSO2.currentTime = 0.1;
      FSO2.play();
    }

    if (noteToPlay == 7) {
      BO3.currentTime = 0.1;
      BO3.play();
    }

    if (noteToPlay == 8) {
      DO3.currentTime = 0.1;
      DO3.play();
    }

    if (noteToPlay == 9) {
      FSO3.currentTime = 0.1;
      FSO3.play();
    }

    if (noteToPlay == 10) {
      BO4.currentTime = 0.1;
      BO4.play();
    }

    if (noteToPlay == 11) {
      DO4.currentTime = 0.1;
      DO4.play();
    }

    if (noteToPlay == 12) {
      FSO4.currentTime = 0.1;
      FSO4.play();
    }
  }

  if (chordToPlay == 4) {
    if (noteToPlay == 1) {
      FSO1.currentTime = 0.1;
      FSO1.play();
    }

    if (noteToPlay == 2) {
      AO1.currentTime = 0.1;
      AO1.play();
    }

    if (noteToPlay == 3) {
      CSO1.currentTime = 0.1;
      CSO1.play();
    }

    if (noteToPlay == 4) {
      FSO2.currentTime = 0.1;
      FSO2.play();
    }

    if (noteToPlay == 5) {
      AO2.currentTime = 0.1;
      AO2.play();
    }

    if (noteToPlay == 6) {
      CSO2.currentTime = 0.1;
      CSO2.play();
    }

    if (noteToPlay == 7) {
      FSO3.currentTime = 0.1;
      FSO3.play();
    }

    if (noteToPlay == 8) {
      AO3.currentTime = 0.1;
      AO3.play();
    }

    if (noteToPlay == 9) {
      CSO3.currentTime = 0.1;
      CSO3.play();
    }

    if (noteToPlay == 10) {
      FSO4.currentTime = 0.1;
      FSO4.play();
    }

    if (noteToPlay == 11) {
      AO4.currentTime = 0.1;
      AO4.play();
    }

    if (noteToPlay == 12) {
      CSO4.currentTime = 0.1;
      CSO4.play();
    }
  }

  if (chordToPlay == 5 || chordToPlay == 7) {
    if (noteToPlay == 1) {
      GO1.currentTime = 0.1;
      GO1.play();
    }

    if (noteToPlay == 2) {
      BO1.currentTime = 0.1;
      BO1.play();
    }

    if (noteToPlay == 3) {
      DO1.currentTime = 0.1;
      DO1.play();
    }

    if (noteToPlay == 4) {
      GO2.currentTime = 0.1;
      GO2.play();
    }

    if (noteToPlay == 5) {
      BO2.currentTime = 0.1;
      BO2.play();
    }

    if (noteToPlay == 6) {
      DO2.currentTime = 0.1;
      DO2.play();
    }

    if (noteToPlay == 7) {
      GO3.currentTime = 0.1;
      GO3.play();
    }

    if (noteToPlay == 8) {
      BO3.currentTime = 0.1;
      BO3.play();
    }

    if (noteToPlay == 9) {
      DO3.currentTime = 0.1;
      DO3.play();
    }

    if (noteToPlay == 10) {
      GO4.currentTime = 0.1;
      GO4.play();
    }

    if (noteToPlay == 11) {
      BO4.currentTime = 0.1;
      BO4.play();
    }

    if (noteToPlay == 12) {
      DO4.currentTime = 0.1;
      DO4.play();
    }
  }
}