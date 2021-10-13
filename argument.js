function addNumbers(num1, num2) {
    return num1 + num2;
}
var result = addNumbers(3, 5);
console.log(result);  //Normaly we set the function this way.


//if I set more parameter value. we can't read this.
function addNumbers(num1, num2) {
    return num1 + num2;
}
var result = addNumbers(3, 5, 7, 9); //add more value. but not added.
console.log(result);


//To solve this problem we use argument.

function addNumberWithArguments(num1, num2) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        var sum = sum + num;
    }
    
    return sum;
}
var result = addNumberWithArguments(3, 5, 7, 8); //can add value as more as needed.
console.log(result);


function oneMoreArgument(num1, num2, num3) {
    var sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        const num = arguments[i];
        sum = sum + num;
    }
    return sum;
}
var result = oneMoreArgument(3, 5, 6, 56);
console.log(result);