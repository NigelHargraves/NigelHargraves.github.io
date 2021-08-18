"use strict";

var numbers = [];

for (var i = 0; i < 20; i++) {
  numbers.push(i);
}

var cleared = 0,
    moves = 0,
    clickOne = 0,
    clickTwo = 0;
var firstCard = "";
var secondCard = "";
var firstClick = true,
    check = false,
    turnComplete = false;

function shuffleArray(array) {
  var curId = array.length; // There remain elements to shuffle

  while (0 !== curId) {
    // Pick a remaining element
    var randId = Math.floor(Math.random() * curId);
    curId -= 1; // Swap it with the current element.

    var tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }

  return array;
}

arrayToUse = shuffleArray(numbers);
console.log(arrayToUse);

for (var _i = 0; _i < arrayToUse.length; _i++) {
  if (arrayToUse[_i] > 9) {
    arrayToUse[_i] -= 10;
  }
}

function reply_click(number) {
  if (turnComplete) return;

  if (firstClick) {
    firstCard = document.getElementById(number);
    clickOne = arrayToUse[number];
    firstCard.style.backgroundImage = "url('images/cats/" + arrayToUse[number] + ".jpg')";
    firstCard.style.backgroundRepeat = "no-repeat";
    firstCard.style.backgroundSize = "100% 100%";
    firstClick = false;
  } else {
    secondCard = document.getElementById(number);
    clickTwo = arrayToUse[number];
    secondCard.style.backgroundImage = "url('images/cats/" + arrayToUse[number] + ".jpg')";
    secondCard.style.backgroundRepeat = "no-repeat";
    secondCard.style.backgroundSize = "100% 100%";
    firstClick = true;
    check = true;
    turnComplete = true;
    timer = setTimeout(clear, 5000);
  }
}

function clear() {
  if (check) {
    if (clickOne == clickTwo) {
      moves += 1;
      firstCard.remove();
      secondCard.remove();
      cleared += 1;
      check = false;
      turnComplete = false;
    } else {
      moves += 1;
      firstCard.style.backgroundImage = "none";
      secondCard.style.backgroundImage = "none";
      check = false;
      turnComplete = false;
    }
  }

  if (cleared == 10) {
    document.getElementById("message").innerHTML = "complete it took " + moves + " moves";
  }

  clearTimeout(timer);
}

var timer = setTimeout(clear, 1);