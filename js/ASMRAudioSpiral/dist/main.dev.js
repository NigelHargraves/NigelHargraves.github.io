"use strict";

// Set the canvas element to  variable.
var ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var notes = [],
    chordAm1 = [],
    chordAm2 = [],
    chordF1 = [],
    chordF2 = [],
    chordC1 = [],
    chordC2 = [],
    chordG = [],
    chordE7 = [],
    chordDm7 = [],
    chordGsus4 = [],
    dusts = [],
    spirals = [];
var radius = 400,
    angle = Math.PI / 12,
    x = canvas.width / 2,
    y = canvas.height / 2,
    pointx = 0,
    pointy = 0;
var strokeStyle = 'white';
var acceleration = 2;
chordAm1.push(AO1Piano1);
chordAm1.push(CO1Piano1);
chordAm1.push(EO1Piano1);
chordAm1.push(AO2Piano1);
chordAm1.push(CO2Piano1);
chordAm1.push(EO2Piano1);
chordAm1.push(AO3Piano1);
chordAm1.push(CO3Piano1);
chordAm1.push(EO3Piano1);
chordAm1.push(AO4Piano1);
chordAm1.push(CO4Piano1);
chordAm1.push(EO4Piano1);
chordAm1.push(EO4Piano2);
chordAm1.push(CO4Piano2);
chordAm1.push(AO4Piano2);
chordAm1.push(EO3Piano2);
chordAm1.push(CO3Piano2);
chordAm1.push(AO3Piano2);
chordAm1.push(EO2Piano2);
chordAm1.push(CO2Piano2);
chordAm1.push(AO2Piano2);
chordAm1.push(EO1Piano2);
chordAm1.push(CO1Piano2);
chordAm1.push(AO1Piano2);
chordAm2.push(CO1Piano1);
chordAm2.push(EO1Piano1);
chordAm2.push(AO1Piano1);
chordAm2.push(CO2Piano1);
chordAm2.push(EO2Piano1);
chordAm2.push(AO2Piano1);
chordAm2.push(CO3Piano1);
chordAm2.push(EO3Piano1);
chordAm2.push(AO3Piano1);
chordAm2.push(CO4Piano1);
chordAm2.push(EO4Piano1);
chordAm2.push(AO4Piano1);
chordAm2.push(AO4Piano2);
chordAm2.push(CO4Piano2);
chordAm2.push(EO4Piano2);
chordAm2.push(AO3Piano2);
chordAm2.push(CO3Piano2);
chordAm2.push(EO3Piano2);
chordAm2.push(AO2Piano2);
chordAm2.push(CO2Piano2);
chordAm2.push(EO2Piano2);
chordAm2.push(AO1Piano2);
chordAm2.push(CO1Piano2);
chordAm2.push(EO1Piano2);
chordF1.push(AO1Piano1);
chordF1.push(CO1Piano1);
chordF1.push(FO1Piano1);
chordF1.push(AO2Piano1);
chordF1.push(CO2Piano1);
chordF1.push(FO2Piano1);
chordF1.push(AO3Piano1);
chordF1.push(CO3Piano1);
chordF1.push(FO3Piano1);
chordF1.push(AO4Piano1);
chordF1.push(CO4Piano1);
chordF1.push(FO4Piano1);
chordF1.push(FO4Piano2);
chordF1.push(CO4Piano2);
chordF1.push(AO4Piano2);
chordF1.push(FO3Piano2);
chordF1.push(CO3Piano2);
chordF1.push(AO3Piano2);
chordF1.push(FO2Piano2);
chordF1.push(CO2Piano2);
chordF1.push(AO2Piano2);
chordF1.push(FO1Piano2);
chordF1.push(CO1Piano2);
chordF1.push(AO1Piano2);
chordF2.push(CO1Piano1);
chordF2.push(FO1Piano1);
chordF2.push(AO1Piano1);
chordF2.push(CO2Piano1);
chordF2.push(FO2Piano1);
chordF2.push(AO2Piano1);
chordF2.push(CO3Piano1);
chordF2.push(FO3Piano1);
chordF2.push(AO3Piano1);
chordF2.push(CO4Piano1);
chordF2.push(FO4Piano1);
chordF2.push(AO4Piano1);
chordF2.push(AO4Piano2);
chordF2.push(CO4Piano2);
chordF2.push(FO4Piano2);
chordF2.push(AO3Piano2);
chordF2.push(CO3Piano2);
chordF2.push(FO3Piano2);
chordF2.push(AO2Piano2);
chordF2.push(CO2Piano2);
chordF2.push(FO2Piano2);
chordF2.push(AO1Piano2);
chordF2.push(CO1Piano2);
chordF2.push(FO1Piano2);
chordC1.push(EO1Piano1);
chordC1.push(CO1Piano1);
chordC1.push(GO1Piano1);
chordC1.push(EO2Piano1);
chordC1.push(CO2Piano1);
chordC1.push(GO2Piano1);
chordC1.push(EO3Piano1);
chordC1.push(CO3Piano1);
chordC1.push(GO3Piano1);
chordC1.push(EO4Piano1);
chordC1.push(CO4Piano1);
chordC1.push(GO4Piano1);
chordC1.push(GO4Piano2);
chordC1.push(CO4Piano2);
chordC1.push(EO4Piano2);
chordC1.push(GO3Piano2);
chordC1.push(CO3Piano2);
chordC1.push(EO3Piano2);
chordC1.push(GO2Piano2);
chordC1.push(CO2Piano2);
chordC1.push(EO2Piano2);
chordC1.push(GO1Piano2);
chordC1.push(CO1Piano2);
chordC1.push(EO1Piano2);
chordC2.push(CO1Piano1);
chordC2.push(EO1Piano1);
chordC2.push(GO1Piano1);
chordC2.push(CO2Piano1);
chordC2.push(EO2Piano1);
chordC2.push(GO2Piano1);
chordC2.push(CO3Piano1);
chordC2.push(EO3Piano1);
chordC2.push(GO3Piano1);
chordC2.push(CO4Piano1);
chordC2.push(EO4Piano1);
chordC2.push(GO4Piano1);
chordC2.push(GO4Piano2);
chordC2.push(EO4Piano2);
chordC2.push(CO4Piano2);
chordC2.push(GO3Piano2);
chordC2.push(EO3Piano2);
chordC2.push(CO3Piano2);
chordC2.push(GO2Piano2);
chordC2.push(EO2Piano2);
chordC2.push(CO2Piano2);
chordC2.push(GO1Piano2);
chordC2.push(EO1Piano2);
chordC2.push(CO1Piano2);
chordG.push(BO1Piano1);
chordG.push(DO1Piano1);
chordG.push(GO1Piano1);
chordG.push(BO2Piano1);
chordG.push(DO2Piano1);
chordG.push(GO2Piano1);
chordG.push(BO3Piano1);
chordG.push(DO3Piano1);
chordG.push(GO3Piano1);
chordG.push(BO4Piano1);
chordG.push(DO4Piano1);
chordG.push(GO4Piano1);
chordG.push(GO4Piano2);
chordG.push(DO4Piano2);
chordG.push(BO4Piano2);
chordG.push(GO3Piano2);
chordG.push(DO3Piano2);
chordG.push(BO3Piano2);
chordG.push(GO2Piano2);
chordG.push(DO2Piano2);
chordG.push(BO2Piano2);
chordG.push(GO1Piano2);
chordG.push(DO1Piano2);
chordG.push(BO1Piano2);
chordE7.push(DO1Piano1);
chordE7.push(AFO1Piano1);
chordE7.push(BO1Piano1);
chordE7.push(DO2Piano1);
chordE7.push(AFO2Piano1);
chordE7.push(BO2Piano1);
chordE7.push(DO3Piano1);
chordE7.push(AFO3Piano1);
chordE7.push(BO3Piano1);
chordE7.push(DO4Piano1);
chordE7.push(AFO4Piano1);
chordE7.push(BO4Piano1);
chordE7.push(BO4Piano2);
chordE7.push(AFO4Piano2);
chordE7.push(DO4Piano2);
chordE7.push(BO3Piano2);
chordE7.push(AFO3Piano2);
chordE7.push(DO3Piano2);
chordE7.push(BO2Piano2);
chordE7.push(AFO2Piano2);
chordE7.push(DO2Piano2);
chordE7.push(BO1Piano2);
chordE7.push(AFO1Piano2);
chordE7.push(DO1Piano2);
chordDm7.push(DO1Piano1);
chordDm7.push(FO1Piano1);
chordDm7.push(AO1Piano1);
chordDm7.push(DO2Piano1);
chordDm7.push(FO2Piano1);
chordDm7.push(AO2Piano1);
chordDm7.push(DO3Piano1);
chordDm7.push(FO3Piano1);
chordDm7.push(AO3Piano1);
chordDm7.push(DO4Piano1);
chordDm7.push(FO4Piano1);
chordDm7.push(AO4Piano1);
chordDm7.push(AO4Piano2);
chordDm7.push(FO4Piano2);
chordDm7.push(DO4Piano2);
chordDm7.push(AO3Piano2);
chordDm7.push(FO3Piano2);
chordDm7.push(DO3Piano2);
chordDm7.push(AO2Piano2);
chordDm7.push(FO2Piano2);
chordDm7.push(DO2Piano2);
chordDm7.push(AO1Piano2);
chordDm7.push(FO1Piano2);
chordDm7.push(DO1Piano2);
chordGsus4.push(CO1Piano1);
chordGsus4.push(DO1Piano1);
chordGsus4.push(GO1Piano1);
chordGsus4.push(CO2Piano1);
chordGsus4.push(DO2Piano1);
chordGsus4.push(GO2Piano1);
chordGsus4.push(CO3Piano1);
chordGsus4.push(DO3Piano1);
chordGsus4.push(GO3Piano1);
chordGsus4.push(CO4Piano1);
chordGsus4.push(DO4Piano1);
chordGsus4.push(GO4Piano1);
chordGsus4.push(GO4Piano2);
chordGsus4.push(DO4Piano2);
chordGsus4.push(CO4Piano2);
chordGsus4.push(GO3Piano2);
chordGsus4.push(DO3Piano2);
chordGsus4.push(CO3Piano2);
chordGsus4.push(GO2Piano2);
chordGsus4.push(DO2Piano2);
chordGsus4.push(CO2Piano2);
chordGsus4.push(GO1Piano2);
chordGsus4.push(DO1Piano2);
chordGsus4.push(CO1Piano2);
var color = [];

for (var i = 0; i < 24; i++) {
  var hue1 = Math.random() * 360;
  var hue2 = Math.random() * 360;
  var hue3 = Math.random() * 360;
  color.push('rgb(' + hue1 + ',' + hue2 + ',' + hue3 + ')');
  pointx = radius * Math.cos(angle);
  pointy = radius * Math.sin(angle);
  notes.push(new Note(x + pointx, y + pointy, acceleration, chordAm1[i], i + 1, i));
  acceleration -= 0.002;
  angle += Math.PI / 12;
}

ABass.play();
var chord = new Chord(x, y, 'Am1');
spirals.push(new Spiral(x, y, false, color[Math.floor(Math.random() * 24)]));

function animate() {
  //CLS.
  ctx.fillStyle = "rgb(0, 0, 0, 0.4)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  var createSpiral = Math.random();

  if (createSpiral > 0.999) {
    spirals.push(new Spiral(Math.random() * canvas.width, Math.random() * canvas.height, true, color[Math.floor(Math.random() * 24)]));
  }

  forNotes();
  forDusts();
  forSpirals();
  chord.update(); //call next frame.

  animationId = requestAnimationFrame(animate);
}

animate();