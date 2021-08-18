let numbers = [];
for (let i = 0; i < 20; i++) {
    numbers.push(i);
}
let cleared = 0,
    moves = 0,
    clickOne = 0,
    clickTwo = 0;
let firstCard = "";
let secondCard = "";
let firstClick = true,
    check = false,
    turnComplete = false;

function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
        // Pick a remaining element
        let randId = Math.floor(Math.random() * curId);
        curId -= 1;
        // Swap it with the current element.
        let tmp = array[curId];
        array[curId] = array[randId];
        array[randId] = tmp;
    }
    return array;
}

arrayToUse = shuffleArray(numbers);
console.log(arrayToUse);
for (let i = 0; i < arrayToUse.length; i++) {
    if (arrayToUse[i] > 9) {
        arrayToUse[i] -= 10;
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
        document.getElementById("message").innerHTML =
            "complete it took " + moves + " moves";
    }

    clearTimeout(timer);
}

let timer = setTimeout(clear, 1);