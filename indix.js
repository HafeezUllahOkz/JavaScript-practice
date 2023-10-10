console.log('hafeez');
let lastName = 'Ullah';
let age = 30;
let fullName = 'Hafeez Ullah';
let other = null;
let email = undefined;

let person = {
    name: 'hafeez',
    age: 30,
    cnic: 140230129
};

console.log(person);
person.age = 25;
console.log(person.age);
console.log(person);
person['age'] = 35;
console.log(person.age);
let selectedColor = ['blue', 'red', 'green', 'yellow',];
selectedColor[4] = 'pink';
console.log(selectedColor[2]);
console.log(selectedColor);

function greet (name, lastNames){
    console.log('hello' + ' ' + name + ' ' + lastNames);
}
greet('Hafeez','Ullah');

function square (Number){
    return Number * Number;
}

let Number = square(2);
console.log(Number);

// here we are using the points to sperate the customers
//  classes using the points if the points are more then 100
//  then the customer type is gold if the customer points are 
// less then 100 then the customer will be considered as 
// the silver customer

let points = 100;
let customerType = points > 100 ? 'gold' : 'silver';

console.log(customerType);

// and operator
let highIncome = true;
let highCriditScore = true;
let eligibalForLone = highIncome && highCriditScore;
console.log(eligibalForLone);

// or operator
let Income = false;
let CriditScore = true;
let eligibalFrLone = Income || CriditScore;

console.log('Eligibal', eligibalFrLone);
// not operator
let aplicationRfused = !eligibalFrLone;
console.log('aplication refused', aplicationRfused);

// if else statement
 let hours = 19;

 if (hours >= 6 && hours <= 12) {
    console.log('Good Morning');
 }
 else if (hours >= 12 && hours <= 18){
    console.log('Good afternoon'); 
 }
 else{
    console.log('Good evening'); 
 }

// switch statement
let role = 'admin'

switch (role) {
    case 'admin':
        console.log('admin');
        break;
        
    case 'user':
        console.log('user');
        break;
        
    default:
        console.log('default');
        
}

// if statement 

if (role === 'admin') console.log('admin');

else if (role === 'user') console.log('user');

else console.log('default');

// for loops 

for (let i = 5; i >= 1; i--) 
{if (i % 2 !== 0) console.log(i);}

// while loop
let i = 0;

while (i <= 10){
    if (i % 2 !== 0) console.log(i);
    i++;
}

// for in loop

let persons = {name:"John", age: 30};

for (let key in persons)
    console.log(key,person[key]);

    const colors =['red','green','blue'];
    for (let indix in colors)
    console.log(indix,colors[indix]);

// for off loop

    for (let color of colors)
    console.log(color);

    // break and continue 

let j = 0;
while (j <= 10){
    if (j % 2 === 0){
    j++;
    continue;
}
console.log(j);
j++;
}

// excersise 
let number = max(3, 2);
console.log ('the maximum number is', number);
function max(a, b){
    if (a > b) return a;
    else return b;
}

function isLandscape(width, height){
    return (width > height)
} 
let numbers = isLandscape(60, 70);
console.log(numbers);

// fiz buzz exercise

const output = FizzBuzz(5);
console.log(output);

function FizzBuzz(input) {
    if (typeof input !== 'number')
    return 'not a number';
    else if (input % 3 === 0 && input % 5 === 0) 
    return 'FizzBuzz';
    else if (input % 3 === 0) 
    return 'Fizz';
    else if (input % 5 === 0) 
    return 'Buzz';
    else 
    return input;
}

// excersise

showNumber(10)
function showNumber(limt ) {
    for (var i = 0; i <= limt; i++) {
    if (i % 2 !== 0){
    console.log('Odd number', i);
    } else
    { 
    console.log('Even number', i);
    }
    }
}

// find thee truthy values

const array = [0, null, undefined, '',5, 1, 2, 3,];
console.log(count(array));


function count(array) {
    let count = 0;
    for (let value of array) {
        if (value) 
        count++;
    }
    return count;
}

// find string in object 

const personss = {
    name: 'hafeez',
    age: 30,
    cnic: 140230129
};

function findString(personss) {
    for (let key in personss) {
        if (typeof personss[key] ==='string') {
            console.log(personss[key]);
        }
    }
}
// function find grade for the student
// obtainMarks = 50;
const marks = [80,75,85];
console.log(calculateGrade(marks));

function calculateGrade(marks) {
    const average = calculateAverage(marks)
    if (average < 60) return 'F';
    if (average < 70) return 'D';
    if (average < 80) return 'C';
    if (average < 90) return 'B';
    return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for (let value of array)
        sum += value;
    return sum / array.length;
}
// printing star using function

// function printStar(stars) {
//     for (let i = 0; i <= star; i++)
//     for (let j = i )
//     console.log('*');

// }
// let a = 4;
// let b = 5;
// let c = 7;
showStar(10);
function showStar(rows){
    for(let row = 1; row <= rows; row++){
        let pattern = '';
        for(let i = 1; i <= row; i++)
            pattern += '*';
            console.log(pattern);
        
        // console.log('helo');
    }
}

// challange prime numbers

showPrimes(30) 

 function  showPrimes(limt) {
    for (let number = 2; number <= limt; number++)
    if(isPrime(number)) console.log(number);
 }

function isPrime(number) {
    for (let factor = 2; factor < number; factor++)
        if (number % factor == 0)
        return false;
    
    return true;
}

// factory function 

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw');
        }
    };
}

const circle1 = createCircle(1);
console.log(circle1);

const circle2 = createCircle(2);
console.log(circle2);

