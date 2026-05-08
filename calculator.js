let display = document.getElementById('display');
let expression = '';

function appendNumber(num) {
    if (num === '.' && expression.includes('.')) {
        return;
    }
    expression += num;
    updateDisplay();
}

function appendOperator(op) {
    if (expression === '') return;
    
    // Prevent multiple operators in a row
    if (['+', '-', '*', '/'].includes(expression[expression.length - 1])) {
        return;
    }
    
    expression += op;
    updateDisplay();
}

function clearDisplay() {
    expression = '';
    updateDisplay();
}

function deleteLast() {
    expression = expression.slice(0, -1);
    updateDisplay();
}

function calculate() {
    try {
        // Evaluate the expression
        let result = eval(expression);
        expression = result.toString();
        updateDisplay();
    } catch (error) {
        display.value = 'Error';
        expression = '';
        setTimeout(() => {
            display.value = '';
        }, 1000);
    }
}

function updateDisplay() {
    display.value = expression || '0';
}

// Keyboard support
document.addEventListener('keydown', (e) => {
    const key = e.key;
    
    if (key >= '0' && key <= '9') {
        appendNumber(key);
    } else if (key === '.') {
        appendNumber('.');
    } else if (key === '+' || key === '-' || key === '*' || key === '/') {
        appendOperator(key);
    } else if (key === 'Enter' || key === '=') {
        e.preventDefault();
        calculate();
    } else if (key === 'Backspace') {
        e.preventDefault();
        deleteLast();
    } else if (key === 'Escape') {
        e.preventDefault();
        clearDisplay();
    }
});