let displayDigit = document.querySelector('#displayDigit');
let displayExpression = document.querySelector('#displayExpression');
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
    if(displayDigit.innerHTML != `Did you ran away from school?You can't divide by zero!`){
    displayDigit.style.fontSize = "25pt";
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
        displayDigit.style.fontSize = "25pt";
         
        if(digit.length < 21){

        if(/[0-9]/g.test(this.value)){
        if(/[=]/g.test(displayExpression.innerHTML)){
            displayExpression.innerHTML = "";
        }    
            digit.push(this.value);
        }else if(!/[\.]/g.test(digit)){
            digit.push(this.value);
        }    
        }
        if(/[/[+|\-|\*|\/]/g.test(displayExpression.innerHTML)){
        displayDigit.innerHTML = digit.join("");
        displayExpression.innerHTML += this.value;
        }else{
            displayExpression.innerHTML = "";
            displayDigit.innerHTML = digit.join("");
            displayExpression.innerHTML += digit.join(""); 
        }
        
        
    
    
 }else if(/[+|\-|\*|\/]/g.test(this.value)){
    if(digit.length > 0){
      expression.push(digit.join(""));
      digit = [];
      displayExpression.innerHTML += this.value;
     if(!/[+|\-|\*|\/]/g.test(displayDigit.innerHTML)){
        expression.push(this.value);
        
        if(expression.length > 2){
          if(/[\/]/g.test(expression) && expression[2] === "0"){
             digit = [];
             expression.pop();
             expression.pop();
             displayDigit.innerHTML = `Did you ran away from school?<br>You can't divide by zero!`;
             displayDigit.style.fontSize = "20px";  
              
         }else{
            operate(expression[1],expression[0], expression[2]);
            displayDigit.innerHTML = total;
            displayExpression.innerHTML = expression.join("");
            expression = [];
            expression.push(total);
            expression.push(this.value)
         }
        }
     }
     
    }
 }else if(/[del]/g.test(this.value)){
    displayDigit.style.fontSize = "25pt";
    if(digit.length > 0){
       backSpaceValidation = true;     
    } 
    if(backSpaceValidation){
    
     digit.pop();
    if(digit.length === 0 ){
        displayDigit.innerHTML = "0";
        if(/[/[+|\-|\*|\/]/g.test(displayExpression.innerHTML)){
            let aux1 =  displayExpression.innerHTML;
            let auxSplit1 = aux1.split("");
            auxSplit1.pop();
            displayExpression.innerHTML = auxSplit1.join("");
            backSpaceValidation = false;
        
        }else{
        displayExpression.innerHTML = "0";
        }
    }else{
    displayDigit.innerHTML = digit.join("");
    if(/[/[+|\-|\*|\/]/g.test(displayExpression.innerHTML)){
        let aux =  displayExpression.innerHTML;
        let auxSplit = aux.split("");
        auxSplit.pop();
        displayExpression.innerHTML = auxSplit.join("");
       
    }else{
     displayExpression.innerHTML = digit.join("");
    }
    
    }
    }
    if(digit.length == 0 && displayDigit.innerHTML != total){
       backSpaceValidation = false;
        displayDigit.innerHTML = "0";
        
    }
    
 }else if(/[=]/g.test(this.value)){
     if(digit.length > 0){
     expression.push(digit.join(""));
     }
     if(expression.length === 3){
        if(/[\/]/g.test(expression) && expression[2] == 0 ){
            displayDigit.innerHTML = `Did you ran away from school?<br>You can't divide by zero!`;
            displayDigit.style.fontSize = "20px";
            expression.pop();
            digit = [];
        }else{
          
     operate(expression[1],expression[0], expression[2]);
     displayDigit.innerHTML = total;
     displayExpression.innerHTML = expression.join("") + "=" + total;
     expression = [];
     digit = [];
     backSpaceValidation = false;
        }
     }
 }
 else if(/[ac]/g.test(this.value)){
    displayDigit.innerHTML = "0";
    displayExpression.innerHTML = "0";
    digit = [];
    expression = [];
    total = 0;
    displayDigit.style.fontSize = "25pt";
}
 
    
  }



document.addEventListener('keydown', populateDisplay);
button.forEach(element => element.addEventListener('click', populateDisplay, false));
    
    
  

