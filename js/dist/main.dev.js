"use strict";

var buttons = document.querySelectorAll('button');
var turbulence = document.querySelector('feTurbulence');
var box = document.getElementById("box1");
var redBool = false,
    greenBool = false,
    blueBool = false,
    trans = false;
var r = 0,
    g = 0,
    b = 0,
    t = 0,
    verticalFrequency = 0.00001;
turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
var steps = 30;
var interval = 1000 / steps;
buttons.forEach(function (button) {
  button.addEventListener('mouseover', function () {
    verticalFrequency = 0.00001;

    for (i = 0; i < steps; i++) {
      setTimeout(function () {
        verticalFrequency += 0.006;
        turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
      }, i * interval);
    }

    setTimeout(function () {
      verticalFrequency = 0.00001;
      turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
    }, i * interval);
  });
});

function changeColor() {
  box.style.boxShadow = "0px 0px 20px 20px rgba(" + r + "," + g + "," + b + "," + t + ")";
}

function red() {
  if (!redBool) {
    r += 1;
  } else {
    r -= 1;
  }

  if (r > 255) {
    redBool = true;
  }

  if (r < 0) {
    redBool = false;
  }

  changeColor();
}

function green() {
  if (!greenBool) {
    g += 1;
  } else {
    g -= 1;
  }

  if (g > 255) {
    greenBool = true;
  }

  if (g < 0) {
    greenBool = false;
  }

  changeColor();
}

function blue() {
  if (!blueBool) {
    b += 1;
  } else {
    b -= 1;
  }

  if (b > 255) {
    blueBool = true;
  }

  if (b < 0) {
    blueBool = false;
  }

  changeColor();
}

function transparent() {
  if (!trans) {
    t += 0.01;
  } else {
    t -= 0.01;
  }

  if (t > 1) {
    trans = true;
  }

  if (t < 0) {
    trans = false;
  }

  changeColor();
} //set intervals at different rates so multplies colour combinations


setInterval(red, 100);
setInterval(green, 200);
setInterval(blue, 300);
setInterval(transparent, 150);