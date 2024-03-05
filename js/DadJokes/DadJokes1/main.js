// Set the canvas element to  variable.
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;


let timer = 200,
    selectText = 0;

let sayIt = false;

let jokeText = ['', 'How do you make an Octopus laugh?', 'Ten Tickles!', 'What is the most musical fish in the sea?', 'The Tuna Fish!',
    'How do oysters call their friends?', 'On shell phones!', 'What is the strongest creature in the sea?', 'The mussel!',
    'Where do fish keep their money?', 'In a river-bank!', 'Why dont oysters share their pearls?', 'Because they are shellfish!',
    'Where do fish sleep?', 'On the seabed!', 'Why was the orca so happy?', 'Because He was having a whale of a time!',
    'What did the ocean say to the shore?', 'Nothing, it just waved!', 'Why did the whale blush?', 'It saw the oceans bottom!',
    'A red ship crashed into a blue ship...', 'The sailors were marooned!', 'What sits at the bottom of the sea, and twitches?',
    'A nervous wreck!', 'Why did the dolphin feel sick?', 'Because the sea weed!', 'What is the most famous fish?', 'The STAR fish!',
    'I have not seen my pet lobster in months...', 'I think it is a lost claws!', 'What should dolphins always take, to stay healthy?',
    'Vitamin sea!', 'How do dolphins make decisions?', 'They FLIPPER coin!', 'I saw a sailor putting helium balloons in his ship...',
    'Well I suppose, whatever floats your boat!', 'Thank you for laughing, I am in stitches', 'Goodbye'
];

function animate() {





    if (timer > -1) {
        timer -= 1;
    }


    if (timer == 0) {
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
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.font = "bold 60px Arial";
        ctx.fillStyle = "white";
        ctx.fillText(jokeText[selectText], (canvas.width / 2) - (jokeText[selectText].length / 2) * 30, canvas.height / 2);

        speak();
        sayIt = false;
        selectText++;
        timer = 500;

    }
    //call next frame.
    animationId = requestAnimationFrame(animate);
}

animate();

window.addEventListener("mousedown", (e) => {
    info = e.which;
    if (e.which == 1) {

    }

});