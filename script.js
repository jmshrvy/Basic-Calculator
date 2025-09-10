let display = document.querySelector('.lcd-display');
let buttons = document.querySelectorAll('.calculator-btn');
let userInput = '';
let isDisabled = false;

function buttonValue(btnValue) {
    if (isDisabled) return;
    display.value += btnValue;

    if (display.value === '0' || display.value === '') display.value = '';

    userInput += btnValue;
    display.value = userInput;
}

function calculate() {
    if (isDisabled) return;
    try {
        if (display.value === '^') userInput = Math.sqrt(userInput);
        userInput = eval(userInput).toFixed(2);
        display.value = parseFloat(eval(userInput).toString());
    } catch {
        display.value = 'Error';
        userInput = '';
    }
}

function clearBtn() {
    userInput = '';
    display.value = '';
}

function hapiBtn() {
    if (isDisabled) return;
    const sound = new Audio("audio/dry-fart.mp3");
    sound.play();
}

function powerOff() {
    isDisabled = true;
    display.placeholder = '';
    display.value = '';
}

function powerOn() {
    isDisabled = false;
    userInput = '';
    display.placeholder = '0';
}

function deleteBtn(){
    if (isDisabled) return;
    userInput = userInput.slice(0, -1);
    display.value = userInput;
}

function buttonAnimation(){
        buttons.forEach(btn => {
            btn.addEventListener('touchstart', () => {
                btn.classList.add('touch');
            });

            btn.addEventListener('touchend', () => {
                btn.classList.remove('touch');
        });
    });
}

buttonAnimation();