
const add = (x, y) => {
    return x + y;
}
const dif = (x, y) => {
    return x - y;
}
const mult = (x, y) => {
    return x * y;
}
const div = (x, y) => {
    return x / y;
}
const operate = (x, y, z) => {
    switch(z){
        case "+": add(x,y);
        break;
        case "-": diff(x,y);
        break;
        case "*": mult(x,y);
        break;
        case "/": div(x,y);
        break;
        default: return "Error!";
        break
    }
}


