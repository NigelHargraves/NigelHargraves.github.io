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
var jokeText = ['', 'Why is the moon bald?', "It has no air!", "How does the Moon hold up it’s trousers?", "With an asteroid belt!", "What do you call a crazy moon? ", "A Lunatic!", "What do you call an ocean on the moon? ", "Lunacy!", "What do you call an exam mark on the moon? ", "A lunar tick!", "What did the Moon say to Saturn?", "Give me a ring sometime!", "Why is the moon so conceited at times?", "It becomes full of itself!", "What was the biggest problem   with the restaurant on the moon?", 'It had no atmosphere!', "Why is the moon landing obviously fake?", 'The moon is clearly still up there!', 'What happened to the person   who was obsessed with the Moon?', 'They got better it was just a phase!', 'What happened to the impatient person that tried to see how long a day is on the moon?', 'They called it a day after 24 hours!', "What would cashews grown on the Moon’s soil be called?", "Astro-nuts!", "What do you call a meal from the moon?", ' A satellite dish!', "How does the man in the moon cut his hair?", 'Eclipse it!', 'How does the sun greet the moon?', "Light waves!", "Why is the moon so hungry?", "Because it’s only full once a month!", "What does Buzz Aldrin say when he meets people?", 'I am the second person to       land on the moon. Neil before me!', 'Why do we have more than one moon?', 'Because once a month we have a new moon!', 'Thank you for laughing', ' I am in stitches', 'Please like and subscribe, Take Care, and Goodbye'];
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
        opt.value = 107;
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