let display = document.querySelector('.lcd-display');
let expression = '';
let isDisabled = false;

function buttonValue(btnValue) {
    if (isDisabled) return;
    display.value += btnValue;

    if (display.value === '0' || display.value === '') display.value = '';

    expression += btnValue;
    display.value = expression;
}

function calculate() {
    try {
        if (display.value === '^') expression = Math.sqrt(expression);
        expression = eval(expression);
        display.value = expression.toString();
    } catch {
        display.value = 'Error';
        expression = '';
    }
}

function clearBtn() {
    expression = '';
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
    expression = '';
    display.placeholder = '0';
}

function deleteBtn(){
    expression = expression.slice(0, -1);
    display.value = expression;
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