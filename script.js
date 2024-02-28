//alert('You visited a website');    //displays a message on the top on the website when visited



var favoriteFood = 'Biryani';      //declared a variable and sets its value a string which is biryani
console.log(favoriteFood);        //prints the value of the variable to the console



var num1 = 5;
var num2 = 10;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);



var num3 = 3;
var num4 = 1;
var num5 = 7;

console.log(num1 - num2 / num1 + num3 * num4 -num5)    //BODMAS



//% is used when you want to divide and get the remainder as an answer

var x = 15;
var y = 5;
var z = 2;

console.log(x % y)     //the answer would be 0 as there is no remainder
console.log(x % z)     //the answer would be 1 as it is the value of the remainder
//it can be used to find out wheather a number is even or odd.

var num;
var r = num % 2;          // if the answer would be 0, the number is even. if the answer is 1 the number is odd

num++      //adds one to the number
num--      //subtracts one from the number



var firstName = 'Rohaan';
var lastName = 'Umair';
var fullName = firstName + ' ' + lastName;

console.log(fullName);



/*var userAge = prompt('Enter your age');
console.log(userAge);*/



/*var number = prompt('Enter any number');

if (number % 2 == 0){
    console.log('your number is even')
}else{
    console.log('your number is odd')
}*/



var grade = prompt('enter your percentage');

if (grade > 90){
    console.log('A grade');
}else
if (grade > 80){
    console.log('B grade');
}else
if (grade > 50){
    console.log('C grade');
} else {
    console.log('fail');
}