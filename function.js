var number = [34, 54, 643, 67, 44, 66, 80];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    if(element % 2 == 0){
        console.log('This number is even:', element);
    }
    else{
        console.log('This number is odd:', element);
    }
}


// function  can do 2 ways. Here is the one type of.
function friendsAge(num) {
    if (num%2 == 0) {
        return num;
    }
    else{
        return num * 2;
    }
}
var result = friendsAge(8);
console.log(result);


// function  can do 2 ways. Here is the another type of.
function nephewAge(num) {
    var result = 0;
    if(num%2 == 0){
        result = num;
    }
    else{
        result = num*3;
    }
    return result;
}
var result = nephewAge(5);
console.log(result);