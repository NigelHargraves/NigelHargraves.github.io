"use strict";

//audio to variables.
var A1 = document.getElementById("audio1");
var Bb1 = document.getElementById("audio2");
var B1 = document.getElementById("audio3");
var C1 = document.getElementById("audio4");
var Db1 = document.getElementById("audio5");
var D1 = document.getElementById("audio6");
var Eb1 = document.getElementById("audio7");
var E1 = document.getElementById("audio8");
var F1 = document.getElementById("audio9");
var F$1 = document.getElementById("audio10");
var G1 = document.getElementById("audio11");
var Ab1 = document.getElementById("audio12");
var A2 = document.getElementById("audio13");
var Bb2 = document.getElementById("audio14");
var B2 = document.getElementById("audio15");
var C2 = document.getElementById("audio16");
var Db2 = document.getElementById("audio17");
var D2 = document.getElementById("audio18");
var Eb2 = document.getElementById("audio19");
var E2 = document.getElementById("audio20");
var F2 = document.getElementById("audio21");
var F$2 = document.getElementById("audio22");
var G2 = document.getElementById("audio23");
var Ab2 = document.getElementById("audio24");
var A3 = document.getElementById("audio25");
var Bb3 = document.getElementById("audio26");
var B3 = document.getElementById("audio27");
var C3 = document.getElementById("audio28");
var Db3 = document.getElementById("audio29");
var D3 = document.getElementById("audio30");
var Eb3 = document.getElementById("audio31");
var E3 = document.getElementById("audio32");
var F3 = document.getElementById("audio33");
var F$3 = document.getElementById("audio34");
var G3 = document.getElementById("audio35");
var Ab3 = document.getElementById("audio36");
var A4 = document.getElementById("audio37");
var Bb4 = document.getElementById("audio38");
var B4 = document.getElementById("audio39");
var C4 = document.getElementById("audio40");
var Db4 = document.getElementById("audio41");
var D4 = document.getElementById("audio42");
var Eb4 = document.getElementById("audio43");
var E4 = document.getElementById("audio44");
var F4 = document.getElementById("audio45");
var F$4 = document.getElementById("audio46");
var G4 = document.getElementById("audio47");
var Ab4 = document.getElementById("audio48");
var A5 = document.getElementById("audio49");
var Bb5 = document.getElementById("audio50");
var B5 = document.getElementById("audio51");
var C5 = document.getElementById("audio52");
var Db5 = document.getElementById("audio53");
var D5 = document.getElementById("audio54");
var Eb5 = document.getElementById("audio55");
var E5 = document.getElementById("audio56");
var F5 = document.getElementById("audio57");
var F$5 = document.getElementById("audio58");
var G5 = document.getElementById("audio59");
var Ab5 = document.getElementById("audio60");
var A6 = document.getElementById("audio61");
var Bb6 = document.getElementById("audio62");
var B6 = document.getElementById("audio63");
var C6 = document.getElementById("audio64");
var Db6 = document.getElementById("audio65");
var D6 = document.getElementById("audio66");
var Eb6 = document.getElementById("audio67");
var E6 = document.getElementById("audio68");
var F6 = document.getElementById("audio69");
var F$6 = document.getElementById("audio70");
var G6 = document.getElementById("audio71");
var Ab6 = document.getElementById("audio72");
var A7 = document.getElementById("audio73");
var Bb7 = document.getElementById("audio74");
var B7 = document.getElementById("audio75");
var C7 = document.getElementById("audio76");
var Db7 = document.getElementById("audio77");
var D7 = document.getElementById("audio78");
var Eb7 = document.getElementById("audio79");
var E7 = document.getElementById("audio80");
var F7 = document.getElementById("audio81");
var F$7 = document.getElementById("audio82");
var G7 = document.getElementById("audio83");
var Ab7 = document.getElementById("audio84");
var A8 = document.getElementById("audio85");
var Bb8 = document.getElementById("audio86");
var B8 = document.getElementById("audio87");
var C8 = document.getElementById("audio88");
var Db8 = document.getElementById("audio89");
var D8 = document.getElementById("audio90");
var Eb8 = document.getElementById("audio91");
var E8 = document.getElementById("audio92");
var F8 = document.getElementById("audio93");
var F$8 = document.getElementById("audio94");
var G8 = document.getElementById("audio95");
var Ab8 = document.getElementById("audio96");
var CBass = document.getElementById("audio97");
var DBass = document.getElementById("audio98");
var EBass = document.getElementById("audio99");
var FBass = document.getElementById("audio100");
var ABass = document.getElementById("audio101");
var GBass = document.getElementById("audio102");
var CLongNote = document.getElementById("audio103");
var BLongNote = document.getElementById("audio104");
var ALongNote = document.getElementById("audio105");
var AbLongNote = document.getElementById("audio106");
var DLongNote = document.getElementById("audio107");
var GLongNote = document.getElementById("audio108");

function setVolume() {
  var noteVolume = 0.2;
  var bassVolume = 0.4;
  A1.volume = noteVolume;
  Bb1.volume = noteVolume;
  B1.volume = noteVolume;
  C1.volume = noteVolume;
  Db1.volume = noteVolume;
  D1.volume = noteVolume;
  Eb1.volume = noteVolume;
  E1.volume = noteVolume;
  F1.volume = noteVolume;
  F$1.volume = noteVolume;
  G1.volume = noteVolume;
  Ab1.volume = noteVolume;
  A2.volume = noteVolume;
  Bb2.volume = noteVolume;
  B2.volume = noteVolume;
  C2.volume = noteVolume;
  Db2.volume = noteVolume;
  D2.volume = noteVolume;
  Eb2.volume = noteVolume;
  E2.volume = noteVolume;
  F2.volume = noteVolume;
  F$2.volume = noteVolume;
  G2.volume = noteVolume;
  Ab2.volume = noteVolume;
  A3.volume = noteVolume;
  Bb3.volume = noteVolume;
  B3.volume = noteVolume;
  C3.volume = noteVolume;
  Db3.volume = noteVolume;
  D3.volume = noteVolume;
  Eb3.volume = noteVolume;
  E3.volume = noteVolume;
  F3.volume = noteVolume;
  F$3.volume = noteVolume;
  G3.volume = noteVolume;
  Ab3.volume = noteVolume;
  A4.volume = noteVolume;
  Bb4.volume = noteVolume;
  B4.volume = noteVolume;
  C4.volume = noteVolume;
  Db4.volume = noteVolume;
  D4.volume = noteVolume;
  Eb4.volume = noteVolume;
  E4.volume = noteVolume;
  F4.volume = noteVolume;
  F$4.volume = noteVolume;
  G4.volume = noteVolume;
  Ab4.volume = noteVolume;
  A5.volume = noteVolume;
  Bb5.volume = noteVolume;
  B5.volume = noteVolume;
  C5.volume = noteVolume;
  Db5.volume = noteVolume;
  D5.volume = noteVolume;
  Eb5.volume = noteVolume;
  E5.volume = noteVolume;
  F5.volume = noteVolume;
  F$5.volume = noteVolume;
  G5.volume = noteVolume;
  Ab5.volume = noteVolume;
  A6.volume = noteVolume;
  Bb6.volume = noteVolume;
  B6.volume = noteVolume;
  C6.volume = noteVolume;
  Db6.volume = noteVolume;
  D6.volume = noteVolume;
  Eb6.volume = noteVolume;
  E6.volume = noteVolume;
  F6.volume = noteVolume;
  F$6.volume = noteVolume;
  G6.volume = noteVolume;
  Ab6.volume = noteVolume;
  A7.volume = noteVolume;
  Bb7.volume = noteVolume;
  B7.volume = noteVolume;
  C7.volume = noteVolume;
  Db7.volume = noteVolume;
  D7.volume = noteVolume;
  Eb7.volume = noteVolume;
  E7.volume = noteVolume;
  F7.volume = noteVolume;
  F$7.volume = noteVolume;
  G7.volume = noteVolume;
  Ab7.volume = noteVolume;
  A8.volume = noteVolume;
  Bb8.volume = noteVolume;
  B8.volume = noteVolume;
  C8.volume = noteVolume;
  Db8.volume = noteVolume;
  D8.volume = noteVolume;
  Eb8.volume = noteVolume;
  E8.volume = noteVolume;
  F8.volume = noteVolume;
  F$8.volume = noteVolume;
  G8.volume = noteVolume;
  Ab8.volume = noteVolume;
  CBass.volume = bassVolume;
  DBass.volume = bassVolume;
  EBass.volume = bassVolume;
  FBass.volume = bassVolume;
  ABass.volume = bassVolume;
  GBass.volume = bassVolume;
}