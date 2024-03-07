"use strict";

//audio to variables.
var laugh1 = document.getElementById("audio1");
var laugh2 = document.getElementById("audio2");
var laugh3 = document.getElementById("audio3");
var laugh4 = document.getElementById("audio4");
var laugh5 = document.getElementById("audio5");
var laugh6 = document.getElementById("audio6");
var chatter = document.getElementById("audio7");
var applause = document.getElementById("audio8");

function setVolume() {
  var chatterVolume = 0.5;
  chatter.volume = chatterVolume;
}