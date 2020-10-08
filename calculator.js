
let storedNumber = 0.0;

let currentLine = [];
let currentNumberString = '';
let currentNumber = 0;
let displayTestNum = 0;
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

function operate(num1, operator, num2){
    if(operator == '+'){
        return add(+num1,+num2);
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
        //adds currentNumber, adds input to current working line, moves on!
    }
    else if(commands.includes(input)){
        if(input == '='){ //read EVERYTHING
            currentNumber = currentNumberString; //Set number int
            currentNumberString = ''; //clear number String
    
            currentLine.push(currentNumber);
            displayTestNum = solveCurrentLine(currentLine);

            clear();
        }
        else{ //input == C
            clear();
        }
    }
    else{
        currentNumberString += input; //adding number to current number
    }
}
function clear(){
    currentNumberString = '';
    currentNumber = 0;
    currentLine = [];
}
function solveCurrentLine(line){
    let answer = 0;
    
    while(line.length != 1){
        answer = operate(line[0],line[1],line[2]);
        line.shift();
        line.shift();
    
        line[0]= answer;
    }
    console.log(answer);
    return answer;

}


var btns = document.querySelectorAll('button');

btns.forEach(e => {
    e.addEventListener('click',function(){
        // console.log(e.getAttribute('data-input'));
        userInput(e.getAttribute('data-input'));
    });
});

