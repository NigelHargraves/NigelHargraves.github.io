"use strict";

/*Noughts and Crosses game.

create a function called 'ask' to ask user if they want to be noughts or crosses.
create function called 'goFirst' to ask user if they want to go first or second.
create function called 'draw' to draw nought or cross depending on choice of user.
create a function called 'checkstatus' to see if the user or the computor has won or noone(draw) no more moves can be made.
create function callec 'think' to calculate if winning move can be made or blocking move should be made,
if neither calculate the correct logical move from the user move, call(draw) function, call(checkStatus) function.*/
//set variables
var userSide = "";
var compSide = "";
var moveComplete = false;
var winner = false;
var turn = true;
var grid = [0, 0, 0, 0, 0, 0, 0, 0, 0];
var haveClicked = [];

for (var i = 0; i < 9; i++) {
  haveClicked.push(true);
}

document.getElementById("dropdownMenuButton2").disabled = true;
document.getElementById("dropdownMenuButton3").disabled = true; //check status function.

function checkStatus() {
  //check for comp win then check for user win or draw.
  for (j = 1; j <= 2; j++) {
    //check vertical.
    for (k = 0; k <= 2; k++) {
      if (grid[k] == j && grid[k + 3] == j && grid[k + 6] == j) {
        if (j == 1) {
          document.getElementById("display1").value = "I win";
          document.getElementById("display1").style.fontWeight = "bold";
        } else {
          document.getElementById("display1").value = "You win";
          document.getElementById("display1").style.fontWeight = "bold";
        }

        winner = true;
        moveComplete = true;
        document.getElementById("dropdownMenuButton3").disabled = false;
      }
    }

    for (k = 0; k <= 6; k += 3) {
      //check horizontal.
      if (grid[k] == j && grid[k + 1] == j && grid[k + 2] == j) {
        if (j == 1) {
          document.getElementById("display1").value = "I win";
          document.getElementById("display1").style.fontWeight = "bold";
        } else {
          document.getElementById("display1").value = "You win";
          document.getElementById("display1").style.fontWeight = "bold";
        }

        winner = true;
        moveComplete = true;
        document.getElementById("dropdownMenuButton3").disabled = false;
      }
    } //check diagonal left to right.


    if (grid[0] == j && grid[4] == j && grid[8] == j) {
      if (j == 1) {
        document.getElementById("display1").value = "I win";
        document.getElementById("display1").style.fontWeight = "bold";
      } else {
        document.getElementById("display1").value = "You win";
        document.getElementById("display1").style.fontWeight = "bold";
      }

      winner = true;
      moveComplete = true;
      document.getElementById("dropdownMenuButton3").disabled = false; //check diagonal right to left.
    } else if (grid[2] == j && grid[4] == j && grid[6] == j) {
      if (j == 1) {
        document.getElementById("display1").value = "I win";
        document.getElementById("display1").style.fontWeight = "bold";
      } else {
        document.getElementById("display1").value = "You win";
        document.getElementById("display1").style.fontWeight = "bold";
      }

      winner = true;
      moveComplete = true;
      document.getElementById("dropdownMenuButton3").disabled = false;
    }
  } //check for draw


  if (winner == false) {
    if (grid[0] !== 0 && grid[1] !== 0 && grid[2] !== 0 && grid[3] !== 0 && grid[4] !== 0 && grid[5] !== 0 && grid[6] !== 0 && grid[7] !== 0 && grid[8] !== 0) {
      document.getElementById("display1").value = "It's a draw";
      document.getElementById("display1").style.fontWeight = "bold";
      winner = true;
      moveComplete = true;
      document.getElementById("dropdownMenuButton3").disabled = false;
    }
  }
} //draw function.


function draw(number) {
  if (haveClicked[number] == false) {
    haveClicked[number] = true;

    if (grid[number] == 0) {
      document.getElementById(number).innerHTML = userSide;
      document.getElementById(number).style.fontWeight = "bold";
      grid[number] = 2;
      checkStatus();

      if (winner == true) {
        return;
      } else {
        moveComplete = false;
        think();
      }
    }
  }
} //think function.


function think() {
  //looking for winning move first then look for blocking move then random move.
  //think vertical.
  for (i = 1; i <= 2; i++) {
    if (grid[0] == i && grid[3] == i && grid[6] == 0) {
      grid[6] = 1;
      document.getElementById("6").innerHTML = compSide;
      document.getElementById("6").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[0] == i && grid[3] == 0 && grid[6] == i) {
      grid[3] = 1;
      document.getElementById("3").innerHTML = compSide;
      document.getElementById("3").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[0] == 0 && grid[3] == i && grid[6] == i) {
      grid[0] = 1;
      document.getElementById("0").innerHTML = compSide;
      document.getElementById("0").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[1] == i && grid[4] == i && grid[7] == 0) {
      grid[7] = 1;
      document.getElementById("7").innerHTML = compSide;
      document.getElementById("7").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[1] == i && grid[4] == 0 && grid[7] == i) {
      grid[4] = 1;
      document.getElementById("4").innerHTML = compSide;
      document.getElementById("4").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[1] == 0 && grid[4] == i && grid[7] == i) {
      grid[1] = 1;
      document.getElementById("1").innerHTML = compSide;
      document.getElementById("1").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[2] == i && grid[5] == i && grid[8] == 0) {
      grid[8] = 1;
      document.getElementById("8").innerHTML = compSide;
      document.getElementById("8").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[2] == i && grid[5] == 0 && grid[8] == i) {
      grid[5] = 1;
      document.getElementById("5").innerHTML = compSide;
      document.getElementById("5").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[2] == 0 && grid[5] == i && grid[8] == i) {
      grid[2] = 1;
      document.getElementById("2").innerHTML = compSide;
      document.getElementById("2").style.fontWeight = "bold";
      moveComplete = true; //think horizontal
    } else if (grid[0] == i && grid[1] == i && grid[2] == 0) {
      grid[2] = 1;
      document.getElementById("2").innerHTML = compSide;
      document.getElementById("2").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[0] == i && grid[1] == 0 && grid[2] == i) {
      grid[1] = 1;
      document.getElementById("1").innerHTML = compSide;
      document.getElementById("1").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[0] == 0 && grid[1] == i && grid[2] == i) {
      grid[0] = 1;
      document.getElementById("0").innerHTML = compSide;
      document.getElementById("0").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[3] == i && grid[4] == i && grid[5] == 0) {
      grid[5] = 1;
      document.getElementById("5").innerHTML = compSide;
      document.getElementById("5").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[3] == i && grid[4] == 0 && grid[5] == i) {
      grid[4] = 1;
      document.getElementById("4").innerHTML = compSide;
      document.getElementById("4").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[3] == 0 && grid[4] == i && grid[5] == i) {
      grid[3] = 1;
      document.getElementById("3").innerHTML = compSide;
      document.getElementById("3").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[6] == i && grid[7] == i && grid[8] == 0) {
      grid[8] = 1;
      document.getElementById("8").innerHTML = compSide;
      document.getElementById("8").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[6] == i && grid[7] == 0 && grid[8] == i) {
      grid[7] = 1;
      document.getElementById("7").innerHTML = compSide;
      document.getElementById("7").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[6] == 0 && grid[7] == i && grid[8] == i) {
      grid[6] = 1;
      document.getElementById("6").innerHTML = compSide;
      document.getElementById("6").style.fontWeight = "bold";
      moveComplete = true; //think diagonal left to right.
    } else if (grid[0] == i && grid[4] == i && grid[8] == 0) {
      grid[8] = 1;
      document.getElementById("8").innerHTML = compSide;
      document.getElementById("8").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[0] == i && grid[4] == 0 && grid[8] == i) {
      grid[4] = 1;
      document.getElementById("4").innerHTML = compSide;
      document.getElementById("4").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[0] == 0 && grid[4] == i && grid[8] == i) {
      grid[0] = 1;
      document.getElementById("0").innerHTML = compSide;
      document.getElementById("0").style.fontWeight = "bold";
      moveComplete = true; //think diagonal right to left.
    } else if (grid[2] == i && grid[4] == i && grid[6] == 0) {
      grid[6] = 1;
      document.getElementById("6").innerHTML = compSide;
      document.getElementById("6").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[2] == i && grid[4] == 0 && grid[6] == i) {
      grid[4] = 1;
      document.getElementById("4").innerHTML = compSide;
      document.getElementById("4").style.fontWeight = "bold";
      moveComplete = true;
    } else if (grid[2] == 0 && grid[4] == i && grid[6] == i) {
      grid[2] = 1;
      document.getElementById("2").innerHTML = compSide;
      document.getElementById("2").style.fontWeight = "bold";
      moveComplete = true;
    }

    if (i == 1) {
      checkStatus();
    } else {
      if (moveComplete == false) {
        //place first move in a corner.
        if (grid[0] == 0 && grid[1] == 0 && grid[2] == 0 && grid[3] == 0 && grid[4] == 0 && grid[5] == 0 && grid[6] == 0 && grid[7] == 0 && grid[8] == 0) {
          var rndNum = Math.floor(Math.random() * 4);

          if (rndNum == 0) {
            grid[0] = 1;
            document.getElementById(0).innerHTML = compSide;
            document.getElementById(0).style.fontWeight = "bold";
          } else if (rndNum == 1) {
            grid[2] = 1;
            document.getElementById(2).innerHTML = compSide;
            document.getElementById(2).style.fontWeight = "bold";
          } else if (rndNum == 2) {
            grid[6] = 1;
            document.getElementById(6).innerHTML = compSide;
            document.getElementById(6).style.fontWeight = "bold";
          } else {
            grid[8] = 1;
            document.getElementById(8).innerHTML = compSide;
            document.getElementById(8).style.fontWeight = "bold";
          }
        } else {
          if (grid[4] == 0) {
            grid[4] = 1;
            document.getElementById(4).innerHTML = compSide;
            document.getElementById(4).style.fontWeight = "bold";
          } else {
            randomMove();
          }
        }
      }

      if (winner == true) {
        return;
      }
    }
  }
} //make a random move function.


function randomMove() {
  var rndNum = Math.floor(Math.random() * 9);

  if (grid[rndNum] == 0) {
    grid[rndNum] = 1;
    document.getElementById(rndNum).innerHTML = compSide;
    document.getElementById(rndNum).style.fontWeight = "bold";
    checkStatus();
  } else {
    randomMove();
  }
} //ask user to be 0's or X's.


function ask(side) {
  userSide = side;

  if (userSide == "O") {
    compSide = "X";
  } else {
    compSide = "O";
  }

  document.getElementById("dropdownMenuButton1").disabled = true;
  document.getElementById("dropdownMenuButton2").disabled = false;
} //decide to go first or second


function goFirst(choice) {
  haveClicked = [];

  for (var i = 0; i < 9; i++) {
    haveClicked.push(false);
  }

  document.getElementById("dropdownMenuButton2").disabled = true;
  document.getElementById("dropdownMenuButton3").disabled = false;

  if (choice == "f") {
    turn = true;
  } else {
    turn = false;
  }

  if (turn == false) {
    think();
  }
}

function reset(choice) {
  if (choice == "yes") {
    userSide = "";
    compSide = "";
    moveComplete = false;
    winner = false;
    turn = true;
    haveClicked = [];

    for (var _i = 0; _i < 9; _i++) {
      haveClicked.push(true);
      grid[_i] = 0;
      document.getElementById(_i).innerHTML = "" + "&nbsp;";
    }

    document.getElementById("display1").value = "";
    document.getElementById("dropdownMenuButton1").disabled = false;
    document.getElementById("dropdownMenuButton2").disabled = true;
  } else {
    document.getElementById("display1").value = "Ok Bye";
    document.getElementById("dropdownMenuButton3").disabled = true;
  }
}