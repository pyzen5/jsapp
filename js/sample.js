// Single line comment
/*
    Multi-line comments
*/

// DOMContentLoaded

function guess() {}

// arthimetic operators: +, -, *, %, **, /, >, <, ===, !==
// conditionals: 
// events: <element>.addEventListener(event, callback)
// loops: for(starting val; exit cond;incrementor)


// input.value
// p.textContent
// element.style.backgroundColor = 'yellow';

let myName;         // declaring a variable - undefined
myName = 'John';    // initializing a variable
myName = 'Max';     // updating the variable

let myNum = 18;             // numbers
let myStr = 'John';         // strings
let isTrue = true;          // boolean
let data = [1,2,3];         // arrays, arrays are zero indexed, accessed by bracket notation; data[0]
let dog = {name: 'Sop'};    // objects, accessed by dot notation; dog.name

const pi = 3.17;
Number('20') // converting a string to number
25/5*3+9-4   // BODMAS rule for operator precedence


// arthimetic operators: +, -, *, /, %, **
// assignment operators: =, +=, -=, *=, /=
// comparision operators:  >, <, ==(value), ===(type & value), !==, >=, <=
// logical operator: &&, ||, !
// events: <element>.addEventListener(event, callback)
// loops: for(starting val; exit cond;incrementor)

let string = 'Text';
let scope = 'I\'m'; // escaping the characters
let third = string + ' new' //concatenation
let myNum = 123;
myNum.toString()    // converts number to string
let output = `New ${string}`;    // template strings, ${} - placeholder
string.length; // length of string
string[0];  // retrieve specific character
string.indexOf('a') // substring to search in string
string.slice(2,3)   // start index and end index(exclude)
string.toUpperCase() // to uppercase
string.replace('old','new') // replacing part of string
let myArray = string.split(',');    // converting from string to array

// Arrays - list of elements
let shopping = ['Apple', 'Banana']
shopping[0] //accessing the value, mulidimentional array random[1][2]
shopping[0] = 'Orange'; //modifying the value
shopping.length;    //length of an array
let myString = myArray.join(',');   // converting from array to string
let aString = myArray.toString();   // converts arraay to string, comma seperated
myArray.push('New'); // adding new element at the end
myArray.pop(); // removes last element at the end
myArray.unshift('Orange');  // adds an element at the start
myArray.shift(); // removes an element at the start

let condition;
if(a===1) { return true; } else if(a===2) { return false;}

switch(condition) {
    case 'a': a =2; break;
    default: a=10
}

(condition) ? a=2: a=3;

for(let i=0; i<100; i++) { // logic }
while(i<10) { k+= i; i++; };    // executes only if condition satisfies
do { k+= i; i++; } while(i<10)  // executes once before check

function say() { alert('Hello'); }  // defining a function
say()   // invoking a function
const say = function() { alert('Hello'); }  // anonymous function
say('John') // function parameters, arguments, properties, attributes
function func1() { let a=2; subfunc1(a); }    // calling function inside a function
function subfunc1(a){ console.log(a) }

// events
const btn = document.querySelector('button');
btn.onclick = function() { }    // event handler properties
btn.onclick = bgChange; // multiple handlers will overwrite
<button onclick="bgChange()">Press me</button>  // inline event handlers
btn.addEventListener('click', bgChange);    // can register multiple listeners
btn.removeEventListener('click', bgChange); // remove event
// event objects

e.preventDefault(); // prevent default action of the browser
// event bubbling and capture
// Event bubbling and capture are two mechanisms that describe what happens when two handlers of the same event type are activated on one element.

event.stopPropagation()     // stops the propogation move upwards
event.stopImmediatePropagation()    //To stop the bubbling and prevent handlers on the current element from running

