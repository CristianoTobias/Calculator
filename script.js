let display = document.querySelector('.display');
let button = document.querySelectorAll('button');
let expression = [];
let digit = [];
let total = 0;
let backSpaceValidation = true;


const add = (x, y) =>{
    total = parseFloat(x) + parseFloat(y);
    
}
const subtration = (x, y) =>{
    total =  parseFloat(x) - parseFloat(y);
}
const multiply = (x, y) =>{
    total =  parseFloat(x) * parseFloat(y);
}
const divide = (x, y) =>{
    total =  parseFloat(x) / parseFloat(y);
}

const operate = (op, x, y) => {
    switch(op){
        case "+" : return add(x,y);
        break;
        case "-" : return subtration(x,y);
        break;
        case "*" : return multiply(x,y);
        break;
        case "/" : return divide(x,y);
        break;
        default: return "Error! invalid arguments!"
    }
}

function populateDisplay(){
    if(display.innerHTML != `Did you ran away from school?<br>You can't divide by zero!`){
    display.style.fontSize = "25pt";
    }
    var key = event.keyCode;
    switch(key){
     case 13: this.value = "=";
     break;
     case 96: this.value = "0";
     break;
     case 97: this.value = "1";
     break;
     case 98: this.value = "2";
     break;
     case 99: this.value = "3";
     break;
     case 100: this.value = "4";
     break;
     case 101: this.value = "5";
     break;
     case 102: this.value = "6";
     break;
     case 103: this.value = "7";
     break;
     case 104: this.value = "8";
     break;
     case 105: this.value = "9";
     break;
     case 106: this.value = "*";
     break;
     case 107: this.value = "+";
     break;
     case 108: this.value = "8";
     break;
     case 109: this.value = "-";
     break;
     case 110: this.value = ".";
     break;
     case 111: this.value = "/";
     break;
     case 194: this.value = ".";
     break;
     case 8: this.value = "del";
     break;
     case 46: this.value = "ac";
     break;
     default:
         break;
    }
     
    if(/[0-9.]/g.test(this.value)){
        display.style.fontSize = "25pt";
        if(digit.length < 21){
        if(/[0-9]/g.test(this.value)){
            digit.push(this.value);
        }else if(!/[\.]/g.test(digit)){
            digit.push(this.value);
        }    
    }
    display.innerHTML = digit.join("");

 }else if(/[+|\-|\*|\/]/g.test(this.value)){
    if(digit.length > 0){
      expression.push(digit.join(""));
      digit = [];
     if(!/[+|\-|\*|\/]/g.test(display.innerHTML)){
        expression.push(this.value);
        if(expression.length > 2){
          if(/[\/]/g.test(expression) && expression[2] === "0"){
             digit = [];
             expression.pop();
             expression.pop();
             display.innerHTML = `Did you ran away from school?<br>You can't divide by zero!`;
             display.style.fontSize = "20px";  
              
         }else{
            operate(expression[1],expression[0], expression[2]);
            display.innerHTML = total;
            expression = [];
            expression.push(total);
            expression.push(this.value)
         }
        }
     }
     
    }
 }else if(/[del]/g.test(this.value)){
    display.style.fontSize = "25pt";
    if(digit.length > 0){
       backSpaceValidation = true;     
    } 
    if(backSpaceValidation){
    digit.pop();
    if(digit.length == 0){
        display.innerHTML = "0";
    }else{
    display.innerHTML = digit.join("");
    }
    }
    if(digit.length == 0 && display.innerHTML != total){
       backSpaceValidation = false;
        display.innerHTML = "0";
    }
    
 }else if(/[=]/g.test(this.value)){
     if(digit.length > 0){
     expression.push(digit.join(""));
     }
     if(expression.length === 3){
        if(/[\/]/g.test(expression) && expression[2] == 0 ){
            display.innerHTML = `Did you ran away from school?<br>You can't divide by zero!`;
            display.style.fontSize = "20px";
            expression.pop();
            digit = [];
        }else{
          
     operate(expression[1],expression[0], expression[2]);
     display.innerHTML = total;
     expression = [];
     digit = [];
     backSpaceValidation = false;
        }
     }
 }
 else if(/[ac]/g.test(this.value)){
    display.innerHTML = "0";
    digit = [];
    expression = [];
    total = 0;
    display.style.fontSize = "25pt";
}
 
    
  }



document.addEventListener('keydown', populateDisplay);
button.forEach(element => element.addEventListener('click', populateDisplay, false));
    
    
  

