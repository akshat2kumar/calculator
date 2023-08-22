const Clear= document.getElementById('clear');
const Percent= document.getElementById('percent');
const Backspace= document.getElementById('backspace');
const Divide= document.getElementById('divide');
const Seven= document.getElementById('seven');
const Eight= document.getElementById('eight');
const Nine= document.getElementById('nine');
const Multiply= document.getElementById('multiply');
const Four= document.getElementById('four');
const Five= document.getElementById('five');
const Six= document.getElementById('six');
const Substract= document.getElementById('substract');
const One= document.getElementById('one');
const Two= document.getElementById('two');
const Three= document.getElementById('three');
const Plus= document.getElementById('plus');
const Doblezero= document.getElementById('doublezero');
const Zero= document.getElementById('zero');
const Dot= document.getElementById('dot');
const Equal= document.getElementById('equal');

const Input = document.getElementById('input');
const Ans = document.getElementById('ans');

let expression = '';
let result='';

Clear.addEventListener('click', () => {
    expression = '';
    result='';
    Input.textContent = expression;
    Ans.textContent = expression;
    console.log(expressionDisplay.textContent)
});
Percent.addEventListener('click', () => {
    if(result===''){
        expression += '%';
        Input.textContent = expression;
    }
    else{
        expression=''
        expression += `${result}`;
        expression += '%';
        Input.textContent = expression;

    }
});
Backspace.addEventListener('click', () => {
    let expression1 = expression.slice(0, -1);
    Input.textContent = expression1;
    expression=Input.textContent
    console.log(Input.textContent)
});

Divide.addEventListener('click', () => {
    if(result===''){
        expression += '/';
        Input.textContent = expression;
    }
    else{
        expression=''
        expression += `${result}`;
        expression += '/';
        Input.textContent = expression;

    }
});

Seven.addEventListener('click', () => {
    expression += '7';
    Input.textContent = expression;
});
Eight.addEventListener('click', () => {
    expression += '8';
    Input.textContent = expression;
});

Nine.addEventListener('click', () => {
    expression += '9';
    Input.textContent = expression;
});
Multiply.addEventListener('click', () => {
    if(result===''){
        expression += '*';
        Input.textContent = expression;
    }
    else{
        expression=''
        expression += `${result}`;
        expression += '*';
        Input.textContent = expression;

    }
});
Four.addEventListener('click', () => {
    expression += '4';
    Input.textContent = expression;
});
Five.addEventListener('click', () => {
    expression += '5';
    Input.textContent = expression;
});

Six.addEventListener('click', () => {
    expression += '6';
    Input.textContent = expression;
});

Substract.addEventListener('click', () => {
    if(result===''){
        expression += '-';
        Input.textContent = expression;
    }
    else{
        expression=''
        expression += `${result}`;
        expression += '-';
        Input.textContent = expression;

    }
});
One.addEventListener('click', () => {
    expression += '1';
    Input.textContent = expression;
});

Two.addEventListener('click', () => {
        expression += '2';
        Input.textContent = expression;   

});

Three.addEventListener('click', () => {
    expression += '3';
    Input.textContent = expression;
});
Plus.addEventListener('click', () => {
    if(result===''){
        expression += '+';
        Input.textContent = expression;
    }
    else{
        expression=''
        expression += `${result}`;
        expression += '+';
        Input.textContent = expression;

    }
});

Doblezero.addEventListener('click', () => {
    expression += '00';
    Input.textContent = expression;
});

Zero.addEventListener('click', () => {
    expression += '0';
    Input.textContent = expression;
});
Dot.addEventListener('click', () => {
    expression += '.';
    Input.textContent = expression;
    console.log(expressionDisplay.textContent)
});

Equal.addEventListener('click', () => {
    try {
        result = eval(expression);
        Ans.textContent = `Result: ${result}`;
    } catch (error) {
        Ans.textContent = 'Invalid expression';
    }
});
 