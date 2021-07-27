const buttons = document.querySelectorAll('button');
const turbulence = document.querySelector('feTurbulence');
let verticalFrequency = 0.00001;
turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
const steps = 30;
const interval = 1000 / steps;

buttons.forEach(function(button) {
    button.addEventListener('mouseover', function() {
        verticalFrequency = 0.00001;

        for (i = 0; i < steps; i++) {
            setTimeout(function() {
                verticalFrequency += 0.006;
                turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
            }, i * interval);

        }
        setTimeout(function() {
            verticalFrequency = 0.00001;
            turbulence.setAttribute('baseFrequency', verticalFrequency + '0.00001');
        }, i * interval);
    })
});