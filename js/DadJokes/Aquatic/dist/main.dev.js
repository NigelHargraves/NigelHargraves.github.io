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
var jokeText = ['', 'Where does a mountain climber keep his plane?', 'In a cliff-hangar!', 'Will invisible airplanes ever be a thing?', "I just can't see it getting off the ground!", 'Why did the airplane get sent to his room?', 'He had a Bad altitude!', "A plane lands and shortly after the           flight attendant announces over the speaker...", 'Sorry about that rough landing it was     not the pilots fault, It was the asphalt!', 'I asked a flight attendant to change my seat because of a crying baby next to me.', 'It turns out you can not do that if the baby is yours!', 'A giraffe swallowed a toy jet...', 'It now has a plane in the neck!', 'I threw my phone from the roof, and it broke...', 'Silly me!, I forgot to turn on airplane mode!', 'How often do airplanes crash?', 'Just once!', 'What do you call an airplane that flies backwards?', 'A receding airline!', 'Why do Stormtroopers make the best pilots?', 'They never hit anything!', 'Have you heard of the TV show about the airplane?', 'It crashed and burned, because of the bad pilot!', 'A plane crashed, and every         single person died, except two. Why?', 'Because they were a couple!', 'Why did the librarian get kicked off the plane?', 'Because it was overbooked!', 'What do you get if you cross a snake and a plane?', 'A Boeing Constrictor!', 'What kind of chocolate do they sell at the airport? ', 'Plane chocolate!', 'Where can you find the Great Plains? ', 'At the great airports!', 'Never fly with a homeless pilot...', 'They are always looking for a place to crash!', 'If you never laughed at these jokes...', 'They probably went straight over your head!', 'Thank you for laughing', ' I am in stitches', 'Please like and subscribe, Take Care, and Goodbye'];
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
        opt.value = 111;
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