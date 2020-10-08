
let storedNumber = 0.0;

let currentLine = [];
let currentNumberString = '';
let currentNumber = 0;
const operators = ['+','-','/','X',];
const commands = ['=','C'];

function add(num1, num2){
    return num1+num2;
}
function subtract(num1,num2){
    return num1-num2;
}   
function multiply(num1,num2){
    return num1*num2;
}
function divide(num1,num2){ //TO-DO catch /0 error!!!
    return num1/num2;
}

function operate(operator, num1, num2){
    if(operator == '+'){
        return add(num1,num2);
    }
    if(operator == '-'){
        return subtract(num1,num2);
    }
    if(operator == 'X'){
        return multiply(num1,num2);
    }
    if(operator == '/'){
        return divide(num1,num2);
    }
}

function userInput(input){
    if(operators.includes(input)){
        currentNumber = currentNumberString; //Set number int
        currentNumberString = ''; //clear number String

        currentLine.push(currentNumber);
        currentLine.push(input);
        //adds currentNumber, adds input, moves on!
    }
    else if(commands.includes(input)){
        if(input == '='){ //read EVERYTHING

        }
        else{ //input == C
            currentNumberString = '';
            currentNumber = 0;
            currentLine = [];
        }
    }
    else{
        currentNumberString += input; //adding number to current number
    }
}


var btns = document.querySelectorAll('button');

btns.forEach(e => {
    e.addEventListener('click',function(){
        // console.log(e.getAttribute('data-input'));
        userInput(e.getAttribute('data-input'));
    });
});

