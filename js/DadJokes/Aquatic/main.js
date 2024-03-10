// Set the canvas element to  variable.
let ctx1 = canvas1.getContext("2d");
let ctx2 = canvas2.getContext("2d");
canvas1.width = window.innerWidth;
canvas1.height = window.innerHeight;
canvas2.width = window.innerWidth;
canvas2.height = window.innerHeight;

let background = new Image();
background.src = 'images/dadJokes/mic.jpeg';



let timer = 200,
    selectText = 0,
    delay = 0,
    delaySet = 60;

let sayIt = false,
    volumeDown = false,
    delayLaugh = false;

let jokeText = ['', 'How do you make an Octopus laugh?', 'Ten Tickles!', 'What is the most musical fish in the sea?', 'The Tuna Fish!',
    'How do oysters call their friends?', 'On shell phones!', 'What is the strongest creature in the sea?', 'The mussel!',
    'Where do fish keep their money?', 'In a river-bank!', 'Why dont oysters share their pearls?', 'Because they are shellfish!',
    'Where do fish sleep?', 'On the seabed!', 'Why was the orca so happy?', 'Because He was having a whale of a time!',
    'What did the ocean say to the shore?', 'Nothing, it just waved!', 'Why did the whale blush?', 'It saw the oceans bottom!',
    'A red ship crashed into a blue ship...', 'The sailors were marooned!', 'What sits at the bottom of the sea, and twitches?',
    'A nervous wreck!', 'Why did the dolphin feel sick?', 'Because the sea weed!', 'What is the most famous fish?', 'The STAR fish!',
    'I have not seen my pet lobster in months...', 'I think it is a lost claws!', 'What should dolphins always take, to stay healthy?',
    'Vitamin sea!', 'How do dolphins make decisions?', 'They FLIPPER coin!', 'I saw a sailor putting       helium balloons in his ship...',
    'Well, whatever floats your boat!', 'Thank you for laughing', ' I am in stitches', 'Please like and subscribe, Take Care, and Goodbye'
];

let laughs = [];

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
            hgo = document.getElementById("go");

        // (B) POPULATE AVAILABLE VOICES
        var voices = () => {
            speechSynthesis.getVoices().forEach((v, i) => {
                let opt = document.createElement("option");
                opt.value = 111;
                opt.innerHTML = v.name;
                hvoice.appendChild(opt);
            });
        };
        voices();
        speechSynthesis.onvoiceschanged = voices;

        // (C) SPEAK
        var speak = () => {
            let msg = new SpeechSynthesisUtterance();
            msg.voice = speechSynthesis.getVoices()[hvoice.value];
            msg.text = hmsg.valueOf(jokeText);
            msg.volume = +hvol.value;
            msg.pitch = +hpitch.value;
            msg.rate = +hrate.value;
            speechSynthesis.speak(msg);
            return false;
        };

        // (D) ENABLE FORM
        hdemo.onsubmit = speak;
        hgo.disabled = false;

        ctx2.clearRect(0, 0, canvas2.width, canvas2.height);

        ctx2.font = "bold 60px Arial";
        ctx2.fillStyle = "white";

        if (jokeText[selectText].length > 50) {
            delaySet = 200;
            let firstHalf = '';
            let secondHalf = '';
            firstHalf = jokeText[selectText].slice(0, jokeText[selectText].length / 2);
            secondHalf = jokeText[selectText].slice(jokeText[selectText].length / 2, jokeText[selectText].length);
            ctx2.fillText(firstHalf, (canvas2.width / 2) - (firstHalf.length / 2) * 30, canvas2.height / 2);
            ctx2.fillText(secondHalf, (canvas2.width / 2) - (secondHalf.length / 2) * 30, (canvas2.height / 2) + 60);
        } else {
            delaySet = 60;
            ctx2.fillText(jokeText[selectText], (canvas2.width / 2) - (jokeText[selectText].length / 2) * 30, canvas2.height / 2);
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
        let pickLaugh = Math.floor(Math.random() * 4);
        laughs[pickLaugh].play();
        laughs[5].play();
        delay = 0;
        delayLaugh = false;
    }

    //call next frame.
    animationId = requestAnimationFrame(animate);
}

animate();