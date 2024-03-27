"use strict";

// Set the canvas element to  variable.
var ctx1 = canvas1.getContext("2d");
var ctx2 = canvas2.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;
var background = new Image();
background.src = 'images/dadJokes/mic.jpeg';
var timer = 200,
    selectText = 0,
    delay = 0,
    delaySet = 60;
var sayIt = false,
    volumeDown = false,
    delayLaugh = false;
var jokeText = ['', 'How does a train hear another train coming?', 'With its engine ears!', 'What do you get if you cross a train with a dog?', "A choo-chiwawa!", 'What kind of train eats too much?', 'A chew chew train!', "Boss. You’re the worst train driver       ever, How many have you derailed this year?", 'Driver. I’m not sure, it’s hard to keep track!', 'Why did the train go to the sauna?', 'To blow off some steam!', 'Why was the train going backwards?', 'Just doing a little reverse engineering!', 'What does a train have to do before it goes into service?', 'The training!', 'What do you call a grateful train?', 'Thomas the Thank Engine!', 'What do you call a winter train, full of teeth?', 'The Molar Express!', 'What did one ancient Egyptian train say to the other     when they realized they had the same train whistle sound?', 'Hey, we have a toot-in-common!', 'What kind of locomotive do ghosts use?', 'A fright train!', 'What did the depressed train driver do ?', 'He went off the rails!', 'What did one train car say to the other train car?', 'Do you want to hook up later?', 'Why do you have to wait so   long for a train on Halloween?', 'They only run a skeleton service!', 'What do you give a train driver for Christmas?', 'Platform shoes!', "Why can’t the engineer be electrocuted?", "Because he’s not a conductor!", "What happened to the man that took the 5 o’clock train home?", 'He had to give it back!', 'What do you call a pretend railway?', 'A play station!', 'Thank you for laughing', ' I am in stitches', 'Please like and subscribe, Take Care, and Goodbye'];
var laughs = [];
laughs.push(laugh1, laugh2, laugh3, laugh4, laugh5, laugh6);
setVolume();
chatter.play();

function animate() {
  ctx1.drawImage(background, 0, 0, canvas1.width, canvas2.height);

  if (volumeDown && chatter.volume > 0) {
    chatter.volume -= 0.001;
  }

  if (timer > -1) {
    timer -= 1;
  }

  if (timer <= 0) {
    sayIt = true;
  }

  if (sayIt) {
    // (A) GET HTML ELEMENTS
    var hdemo = document.getElementById("demo"),
        hvoice = document.getElementById("voice"),
        hvol = document.getElementById("vol"),
        hpitch = document.getElementById("pitch"),
        hrate = document.getElementById("rate"),
        hmsg = jokeText[selectText],
        hgo = document.getElementById("go"); // (B) POPULATE AVAILABLE VOICES

    var voices = function voices() {
      speechSynthesis.getVoices().forEach(function (v, i) {
        var opt = document.createElement("option");
        opt.value = 105;
        opt.innerHTML = v.name;
        hvoice.appendChild(opt);
      });
    };

    voices();
    speechSynthesis.onvoiceschanged = voices; // (C) SPEAK

    var speak = function speak() {
      var msg = new SpeechSynthesisUtterance();
      msg.voice = speechSynthesis.getVoices()[hvoice.value];
      msg.text = hmsg.valueOf(jokeText);
      msg.volume = +hvol.value;
      msg.pitch = +hpitch.value;
      msg.rate = +hrate.value;
      speechSynthesis.speak(msg);
      return false;
    }; // (D) ENABLE FORM


    hdemo.onsubmit = speak;
    hgo.disabled = false;
    ctx2.clearRect(0, 0, canvas2.width, canvas2.height);
    ctx2.font = "bold 60px Arial";
    ctx2.fillStyle = "white";

    if (jokeText[selectText].length > 50) {
      delaySet = 200;
      var firstHalf = '';
      var secondHalf = '';
      firstHalf = jokeText[selectText].slice(0, jokeText[selectText].length / 2);
      secondHalf = jokeText[selectText].slice(jokeText[selectText].length / 2, jokeText[selectText].length);
      ctx2.fillText(firstHalf, canvas2.width / 2 - firstHalf.length / 2 * 30, canvas2.height / 2);
      ctx2.fillText(secondHalf, canvas2.width / 2 - secondHalf.length / 2 * 30, canvas2.height / 2 + 60);
    } else {
      delaySet = 60;
      ctx2.fillText(jokeText[selectText], canvas2.width / 2 - jokeText[selectText].length / 2 * 30, canvas2.height / 2);
    }

    if (jokeText[selectText] == 'Please like and subscribe, Take Care, and Goodbye') {
      applause.play();
      volumeDown = true;
    }

    sayIt = false;
    timer = 500;
    speak();

    if (selectText % 2 == 0 && selectText >= 1) {
      delayLaugh = true;
    }

    selectText++;
  }

  if (delayLaugh) {
    delay += 1;
  }

  if (delay > delaySet) {
    var pickLaugh = Math.floor(Math.random() * 4);
    laughs[pickLaugh].play();
    laughs[5].play();
    delay = 0;
    delayLaugh = false;
  } //call next frame.


  animationId = requestAnimationFrame(animate);
}

animate();