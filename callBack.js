//syncronise call back 

function call_back(name, age , task) {
    console.log('Hello:', name);
    console.log('Your age:', age);
    task();                                  //pass a function as a parameter.
}
function washHand() {                       //pass a function as a parameter.
    console.log('Wash your hand');    
}
function takeShower() {
    console.log('Take a cool shower');
}
function facebooking() {
    console.log('Always doing facebooking');
}
call_back("Saif", 21, washHand);  //calling function. pass a function as a parameter.
call_back("Tahsin", 13, takeShower);
call_back('Tahmid', 43, facebooking);