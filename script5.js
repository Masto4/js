let num1 = 2;
let num2 = 5;
console.log(num1 + num2);
console.log(num2 - num1);
console.log(num1 * num2);
console.log(num2 / num1);



let age = 2;
if (age >= 18){
    console.log('You are an adult');
}else{
    console.log('You are a minor');
}


//3 nhi hua


let fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
for (let i = 0; i <= fruits.length - 1; i++){
    console.log(fruits[i]);
}


let star = '';
for (let j = 1; j <= 5; j++){
    star = star + '*';
    console.log(star);
}



let sum = 0;
for (let k = 1; k <= 10; k++){
    sum = sum + k;
}
console.log(sum);



let colors = ['red', 'green', 'blue', 'yellow', 'orange'];
let colorsReversed = [];
for (let l = colors.length - 1; l >= 0; l--){
    colorsReversed.push(colors[l]);
}
console.log(colorsReversed);