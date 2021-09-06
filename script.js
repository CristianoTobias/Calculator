let displayDigit = document.querySelector('#displayDigit');
let displayExpression = document.querySelector('#displayExpression');
let button = document.querySelectorAll('button');
let expression = [];
let digit = [];
let total = 0;
let backSpaceValidation = true;

const add = (x, y) =>{
   return parseFloat(x) + parseFloat(y);
    
}
const subtration = (x, y) =>{
    return  parseFloat(x) - parseFloat(y);
}
const multiply = (x, y) =>{
    return  parseFloat(x) * parseFloat(y);
}
const divide = (x, y) =>{
    return  parseFloat(x) / parseFloat(y);
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
function calculate(expression){
   let digit = "";
   let calculateExpression = [];
   for(let i = 0; i < expression.length;i++){
    if(i == expression.length - 1){
        digit += expression[i];
        calculateExpression.push(digit);
    }else if(/[\+|\-|\/|\*]/g.test(expression[i])){
     calculateExpression.push(digit);
     digit = "";
     calculateExpression.push(expression[i]);
     
    }else{  
    digit += expression[i];
    }
   }
   
   while(/[\+|\-|\/|\*]/g.test(calculateExpression.join(""))){
    total = operate(calculateExpression[1], calculateExpression[0], calculateExpression[2])
    calculateExpression.splice(0,3, total);
    
    }
  
     return total;

}

function populateDisplay(){
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
    // insert numbers and point
    if(/[0-9\.]/g.test(this.value)){
        if(this.value === "."){
             if(!/[\.]/g.test(digit)){
                 // insert only one point for the number
                 if(digit.length > 0){
                expression.push(this.value); 
                digit.push(this.value);
                displayDigit.innerHTML = digit.join("");
                displayExpression.innerHTML = expression.join("");
                 }
                 
             }
         }else{             
            expression.push(this.value);
            digit.push(this.value);
            displayDigit.innerHTML = digit.join("");
            displayExpression.innerHTML = expression.join("");
         }   
        
       backSpaceValidation = true; 
     // Insert function +-/*   
     }else if(/[\+|\-|\/|\*]/g.test(this.value)){
        if(/[\/]/g.test(expression.join("")) &&  expression[expression.length - 1] === "0"){
            expression.pop();
            digit.pop();
            displayExpression.innerHTML = "You can't divide by zero!:(";
            
    }
        else if(digit.length > 0){
            digit = [];
            displayDigit.innerHTML = "=" + calculate(expression);
            expression.push(this.value)
            displayExpression.innerHTML = expression.join("");
            backSpaceValidation = true;
          }
         
          
     }else if(/[del]/g.test(this.value)){
        if(backSpaceValidation){
        
         if(/[\+|\-|\/|\*]/g.test(expression[expression.length - 1])){
            
            expression.pop();
            for(let i = 0; i < expression.length;i++){
                 if(/[\+|\-|\/|\*]/g.test(expression[i])){
                    digit = [];
                    
                 }else{
                     digit.push(expression[i])

                 }    
                
            }
            displayDigit.innerHTML = digit.join("");
            displayExpression.innerHTML = expression.join("");
         }else{
         digit.pop();
         expression.pop();
         displayDigit.innerHTML = digit.join("");
         displayExpression.innerHTML = expression.join("");
         if(digit.length === 0){
            displayDigit.innerHTML = "0";
            if(expression.length === 0){
            displayExpression.innerHTML = "0"; 
            } 
         }
        }
    } 
     }else if(/[ac]/g.test(this.value)){
        
        digit = [];
        expression = [];
        displayExpression.innerHTML = "0";
        displayDigit.innerHTML = "0";
        total = 0;
        
        
    }else if(/[=]/g.test(this.value)){
        if(/[\/]/g.test(expression.join("")) &&  expression[expression.length - 1] === "0"){
            expression.pop();
            digit.pop();
            displayExpression.innerHTML = "You can't divide by zero!:(";
            
    }else if(/[\+|\-|\/|\*]/g.test(expression.join("")) && /[0-9\.]/g.test(expression[expression.length -1])){
       displayDigit.innerHTML = calculate(expression);
       displayExpression.innerHTML = expression.join("") + "=";
       digit = [];
       expression = [];
       backSpaceValidation = false;
        }
    }
   
  }



document.addEventListener('keydown', populateDisplay);
button.forEach(element => element.addEventListener('click', populateDisplay, false));
    
    
  

