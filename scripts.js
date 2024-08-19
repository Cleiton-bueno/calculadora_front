let isResult = false;

function appendToDisplay(value) {
    const display = document.getElementById('display');
    
    if (isResult) {
        display.value = '';
        isResult = false;
    }
    
    display.value += value;
}

function clearDisplay() {
    document.getElementById('display').value = '';
    isResult = false;
}

function calculateResult() {
    const display = document.getElementById('display');
    try {
        display.value = eval(display.value);
        isResult = true;
    } catch (e) {
        display.value = 'Erro';
        isResult = false;
    }
}

function handleKeyboard(event) {
    const key = event.key;
    const validKeys = "0123456789/*+-.";
    
    if (validKeys.includes(key)) {
        appendToDisplay(key);
    } else if (key === 'Enter') {
        calculateResult();
    } else if (key === 'Escape') {
        clearDisplay();
    } else if (key === 'Backspace') {
        const display = document.getElementById('display');
        display.value = display.value.slice(0, -1);
        isResult = false;
    }
}

document.addEventListener('keydown', handleKeyboard);