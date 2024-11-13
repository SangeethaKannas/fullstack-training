JavaScript Topics

3. Hoisting
    Hoisting is a JavaScript mechanism where variables and function declarations are moved to 
    the top of their scope before code execution.
    Variable hoisting
    Example 1
    console.log(Hoist);
    var Hoist = ’The variable Has been hoisted’;
    //output : undefined//
    actually, JavaScript has hoisted the variable declaration. This is what the code above looks 
    like to the interpreter
    var Hoist;
    console.log(Hoist);
    Hoist = ’The variable Has been hoisted’;
    JavaScript only hoists declarations, not initialization. The var is initialized with undefined or 
    the (generator) function right when the binding is created at the top of the scope.
    Example 2
    console.log(x);
    let x = 30;
    //output : VM741:1 Uncaught ReferenceError: Cannot access 'y' before initialization
    Let, const variables stay uninitialized. This means that a ReferenceError exception is thrown 
    when you try to access it.
    Example 3
    x = y = "global";
    (function() {
    x; // undefined
    y; // Reference error: y is not defined
    var x = "local";
    let y = "local";
    }());
    Function hoisting
    Like variables, the JavaScript engine also hoists the function declarations. It moves the 
    function declarations to the top of the script.
    let result = add(4,8);
    console.log(result);
    function add(a,b) {
    return a+b; 
    }
    // output 12
4. Callback function
the callback function is a function passed into another function as an argument, which is 
then invoked inside the outer function to complete some kind of routine or action.
function greeting(name) {console.log('Hello ' + name);
}function processUserInput(callback) {
 //var name = prompt('Please enter your name.');
 name = 'raja';
 callback(name);
}
processUserInput(greeting); //output Hello Raja
in the above, function greeting passed as an argument to the processUserInput function. 
That means callback parameter of processUserInput is the function definition of greeting.
Now inside processUserInput function, callback(name) means greeting(name).
5. JavaScript Prototype
When an object is created in JavaScript, JavaScript engine adds a __proto__ property to the 
newly created object which is called dunder proto. dunder proto or __proto__ points to the 
prototype object of the constructor function.
function Car(model, color) {
 this.model = model;
 this.color = color;
}
Car.prototype.getDetails = function() {
 return this.model+" car is "+this.color;
}
var carObj = new Car("BMW","Black");
carObj.getDetails() // "BMW car is Black"
6. JavaScript Destructuring
Destructuring is a new way to extract elements from an object or an array.
const details = {
 name: 'Piyali Das',
 city: 'Kolkata',
 country: 'India'
};
const {name:fullName, city, country} = details;
console.log(fullName); // “Piyali Das”
console.log(city); // “Kolkata”
console.log(country); //India
7. JavaScript Design Pattern
8. == vs === (equal vs strictly equal)
For value types (numbers):
x = 2
y = 2
x === y will print true. Here the values of x and y are 2, and the types of x and y are number. 
Then x and y have same value and same type.
+0 === -0 true
+0 and -0 both have number type. Then same type and same value
For reference types
Some will say that === means equal and of the same type, but that's not really true. It 
actually means that both operands reference the same object, or in case of value types,
have the same value.
var a = [1,2,3];
var b = [1,2,3];
a === b will print false
var a = [1,2,3];
var b = [1,2,3];
a = b
a === b will print true
[1,2] === [1,2] false
{} === {} false
[] === [] false
Type of {}, [] are object. Then it will follow object reference rule. 
9. Explain call(), apply() and, bind() methods
function say(msg) {
 return this.name + msg;
}
var ob1 = {name: "piyali"};
say.call(ob1," Hi!"); // "piyali Hi!"
say.apply(ob1,[" Hi!"]); // "piyali Hi!"
say.bind(ob1," Hi!");
var print = say.bind(ob1," Hi!");
print(); // "piyali Hi!"
10. Curring
Currying is an advanced technique to transform a function of arguments n, to n functions of 
one or less arguments.
function add (a) {
 return function(b){
 return a + b;
 }
}
add(3)(4) // Returns 7
11. Scope
Global Scope
Variables or functions declared in the global namespace have global scope, which means all 
the variables and functions having global scope can be accessed from anywhere inside the 
code
var globalVariable = "Hello world";
function sendMessage(){
 return globalVariable; // can access globalVariable since it's written in global space
}
function sendMessage2(){
 return sendMessage(); // Can access sendMessage function since it's written in global 
space
}
sendMessage2(); // Returns “Hello world”
Local or Function Scope
Any variables or functions declared inside a function have local/function scope, which 
means that all the variables and functions declared inside a function, can be accessed from 
within the function and not outside of it.
Var is example of function scope.
function awesomeFunction(){
 var a = 2;
 var multiplyBy2 = function(){
 console.log(a*2); // Can access variable "a" since a and multiplyBy2 both are written 
inside the same function
 }
}
console.log(a); // Throws reference error since a is written in local scope and cannot be 
accessed outside
multiplyBy2(); // Throws reference error since multiplyBy2 is written in local scope
Block Scope
Block scope is related to the variables declared using let and const. Variables declared with 
var do not have block scope.
{
 let x = 45;
}
console.log(x); // Gives reference error since x cannot be accessed outside of the block
for(let i=0; i<2; i++){
 // do something
}
console.log(i); // Gives reference error since i cannot be accessed outside of the for loop 
block
12. Closure
Closure means that an inner function always has access to the vars and parameters of its 
outer function, even after the outer function has returned.
var Person = function(pName){
 var name = pName;
 this.getName = function(){
 return name;
 }
}
var person = new Person("Neelesh");
console.log(person.getName());
13. Recursion
Recursion is a technique to iterate over an operation by having a function call itself 
repeatedly until it arrives at a result.
function counter(num) {
 console.log(num);
 const newNum = num - 1;
 if(newNum > 0) {
 counter(newNum);
 }
}
counter(5) will print the following :
5
4
3
2
1
14. Arrow Function vs Normal Function
provide us with a new and shorter syntax for declaring functions.
var obj1 = {
 show: function() {
 console.log('function this => ', this);
 }
}
var obj2 = {
 show: ()=> {
 console.log('arrow function this => ', this);
 }
}
obj1.show(); // function this => {show: ƒ}
obj2.show(); // arrow function this => Window {0: global, 1: global, 2: global, 3: Window, 
4: global, 5: global, window: Window, self: Window, document: document, name: "", 
location: Location, …}
The biggest difference between the traditional function expression and the arrow function, 
is the handling of the this keyword.
By general definition, the this keyword always refers to the object that is calling the 
function.
As you can see in the code above, obj1.show() returns obj1, since this keyword refers to the 
object calling the function.
In the arrow functions, there is no binding of the this keyword.
15. When You Should Not Use Arrow Functions
Event Handlers
<button type="button" id="click">
Click me</button>
<div id="demo"></div>
const btn = document.getElementById('click');
const div = document.getElementById('demo');
btn.addEventListener('click', ()=> {
div.innerText = 'Hello, ' + this.innerText;
});
Will print Hello, undefined because the arrow function doesn’t have its own this value.
The this in the arrow function in this example references the global window object.
To fix it, we need to use regular function.
btn.addEventListener('click', function() {
div.innerText = 'Hello, ' + this.innerText;
});
Will print Hello, Click me because The this value will be bound to the <button> element that 
triggers the event.
Object methods
const person = {
name: "Piyali",
show: ()=> {
 console.log('Hi! ', this.name);
}
};
person.show("Piyali") will print Hi! undefined
const person = {
name: "Piyali",
show: function() {
 console.log('Hi! ', this.name);
}
};
person.show("Piyali") will print Hi! Piyali
The reason is that when you use the arrow function inside the object, it inherits this value 
with global window scope. The window.name is undefined by default because 
the window object doesn’t have the name property.
Prototype Methods
function Person(name) {
this.name = name;
}
Person.prototype.display = function() {
return this.name;
}
var one = new Person('Piyali');
console.log(one.display()); // will print “Piyali”
function Person(name) {
this.name = name;
}
Person.prototype.display = ()=> {
return this.name;
}
var one = new Person('Piyali');
console.log(one.display()); // will print undefined
16. Var vs let vs const
Before the ES6 version of JavaScript, only the keyword var was used to declare variables.
With the ES6 Version, keywords let and const were introduced to declare variables.
keyword const let var
global scope no no yes
function scope yes yes yes
block scope yes yes no
can be 
reassigned no yes yes
17. Rest vs Spread operator
Both rest parameter and spread operator were introduced in the ES6 version of JavaScript.
Rest parameter ( … )
Any number of arguments will be converted into an array using the rest parameter. It also 
helps in extracting all or some parts of the arguments.
function restExample(val, ...args){
 console.log(args);
}
restExample(1,2,3,4,5); // prints [2, 3, 4, 5]
**Note- Rest parameter should always be used at the last parameter of a function:
// Incorrect way to use rest parameter
function randomFunc(a,...args,c){
//Do something
}
// Correct way to use rest parameter
function randomFunc2(a,b,...args){
//Do something
}
Spread operator (…)
function add(num1, num2, num3) {
 return num1+num2+num3;
}
let arr = [1,2,3];
add(...arr); // print 6 because …arr will spread array into 1,2,3
18. Promise
A promise is an object that may produce a single value sometime in the future: either a 
resolved value, or a reason that it’s not resolved (e.g., a network error occurred). A promise 
may be in one of 3 possible states: fulfilled, rejected, or pending.
The function passed to new Promise is called the executor. When new Promise is created, 
the executor runs automatically. It contains the producing code which should eventually 
produce the result. In terms of the analogy above: the executor is the “singer”.
Its arguments resolve and reject are callbacks provided by JavaScript itself. Our code is only 
inside the executor.
When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of 
these callbacks:
• resolve(value) — if the job is finished successfully, with result value.
• reject(error) — if an error has occurred, error is the error object.
function doSomeStuff() {
return new Promise(function(resolve, reject) {
 console.log("Promise started");
 console.log("Promise is doing some important work...");
 console.log(
 "Promise has completed, will resolve shortly"
 );
 resolve("Promise resolved");
});
}
doSomeStuff().then(
function(message) {
 console.log("Resolved: ", message);
},
function(error) {
 console.log("Rejected: ", error);
}
);
Console prints ------------------------------------
Promise started
Promise is doing some important work...
has completed, will resolve shortly
Resolved: Promise resolved
1. Promise {<fulfilled>: undefined}
1. __proto__: Promise
2. [[PromiseState]]: "fulfilled"
3. [[PromiseResult]]: undefined



JavaScript Other Topics
Shallow and Deep copy
A deep copy means that all of the values of the 
new variable are copied and disconnected from 
the original variable.
A shallow copy means that certain (sub-)values 
are still connected to the original variable.
Object.assign() is example of shallow copy JSON.parse(JSON.stringify(object)), Lodash 
cloneDeep() are examples of deep copy
Shallow Copy Examples
let obj1 = {
 'firstName': 'Piyali',
 'lastName': 'Das'
};
let obj2 = obj1;
obj2.firstName = 'Soma';
console.log(obj2); // {firstName: "Soma", lastName: "Das"}
console.log(obj1); // {firstName: "Soma", lastName: "Das"}
When you are using assignment operator(=) to copy the value, it will reference the same object with 
original one in the memory. So obj1 and obj2 will act like same objects. Any changes in obj2 will reflect 
in obj1.
let obj1 = {
 'firstName': 'Piyali',
 'lastName': 'Das'
};
let obj2 = Object.assign({}, obj1);
console.log(obj2); // {firstName: "Soma", lastName: "Das"}
console.log(obj1); // {firstName: "Piyali", lastName: "Das"}
Object.assign() can create deep copy when only have primitives values.
let obj1 = {
 'firstName': 'Piyali',
 'lastName': 'Das',
 'address': {
 'city': 'Kolkata',
 'state': 'West Bengal'
 }
};
let obj2 = obj1;
obj2.address.city = 'South 24 parganas';
obj2.firstName = 'Soma';
console.log(obj2);
1. {firstName: "Soma", lastName: "Das", address: {…}}
1. address: {city: "South 24 parganas", state: "West Bengal"}
2. firstName: "Soma"
3. lastName: "Das"
4. __proto__: Object
console.log(obj2);
1. {firstName: "Piyali", lastName: "Das", address: {…}}
1. address: {city: "South 24 parganas", state: "West Bengal"}
2. firstName: "Piyali"
3. lastName: "Das"
4. __proto__: Object
Now address is generating shallow copy where firstName and lastName are generating deep copy. The 
reason is that the address is reference value while both firstName and lastName are primitive values. 
Both obj1 and obj2 references different objects but these objects reference the same address objects.
let obj1 = {
 'firstName': 'Piyali',
 'lastName': 'Das',
 'address': {
 'city': 'Kolkata',
 'state': 'West Bengal'
 }
};
let obj2 = {...obj1};
obj2.address.city = 'South 24 parganas';
obj2.firstName = 'Soma';
console.log(obj2);
2. {firstName: "Soma", lastName: "Das", address: {…}}
1. address: {city: "South 24 parganas", state: "West Bengal"}
2. firstName: "Soma"
3. lastName: "Das"
4. __proto__: Object
console.log(obj2);
2. {firstName: "Piyali", lastName: "Das", address: {…}}
1. address: {city: "South 24 parganas", state: "West Bengal"}
2. firstName: "Piyali"
3. lastName: "Das"
4. __proto__: Object
Spread operator is doing same thing like Object.assign(). Spread operator can create deep copies only 
for primitive values.
Deep Copy examples
let obj1 = {
 'firstName': 'Piyali',
 'lastName': 'Das',
 'address': {
 'city': 'Kolkata',
 'state': 'West Bengal'
 }
};
let obj2 = JSON.parse(JSON.stringify(obj1));
obj2.address.city = 'South 24 parganas';
obj2.firstName = 'Soma';
console.log(obj2);
3. {firstName: "Soma", lastName: "Das", address: {…}}
1. address: {city: "South 24 parganas", state: "West Bengal"}
2. firstName: "Soma"
3. lastName: "Das"
4. __proto__: Object
console.log(obj2);
3. {firstName: "Piyali", lastName: "Das", address: {…}}
1. address: {city: "Kolkata", state: "West Bengal"}
2. firstName: "Piyali"
3. lastName: "Das"
4. __proto__: Object
JSON.parse(JSON.stringify(object)) creates deep copy. Any changes in obj2 will not change the values of 
obj1.
Lodash | _.cloneDeep() Method is the best choice for deep clone copy.
slice vs splice
Slice Splice
Doesn't modify the original array(immutable) Modifies the original array(mutable)
Returns the subset of original array Returns the deleted elements as array
Used to pick the elements from array Used to insert or delete elements to/from array
== vs === operators
0 == false // true
0 === false // false
1 == "1" // true
1 === "1" // false
null == undefined // true
null === undefined // false
'0' == false // true
'0' === false // false
[]==[] or []===[] //false, refer different objects in memory
{}=={} or {}==={} //false, refer different objects in memory
Temporal Dead Zone
the term to describe the state where variables are un-reachable. The Temporal Dead Zone is a behavior 
in JavaScript that occurs when declaring a variable with the let and const keywords, but not with var. In 
ECMAScript 6, accessing a let or const variable before its declaration (within its scope) causes a 
Reference Error. The time span when that happens, between the creation of a variable’s binding and its 
declaration, is called the temporal dead zone.
function somemethod() {
 console.log(counter1); // undefined
 console.log(counter2); // ReferenceError
 var counter1 = 1;
 let counter2 = 2;
}
web storage
Web storage is an API that provides a mechanism by which browsers can store key/value pairs locally 
within the user's browser, in a much more intuitive fashion than using cookies. The web storage 
provides two mechanisms for storing data on the client.
i. Local storage: It stores data for current origin with no expiration date.
ii. Session storage: It stores data for one session and the data is lost when the browser tab is 
closed.
Cookie
A cookie is a piece of data that is stored on your computer to be accessed by your browser. Cookies are 
saved as key/value pairs. For example, you can create a cookie named username as below,
document.cookie = "username=John";
Need a Cookie
Cookies are used to remember information about the user profile(such as username). It basically 
involves two steps,
iii. When a user visits a web page, the user profile can be stored in a cookie.
iv. Next time the user visits the page, the cookie remembers the user profile.
Options in a cookie
There are few below options available for a cookie,
By default, the cookie is deleted when the browser is closed but you can change this behavior by setting 
expiry date (in UTC time).
document.cookie = "username=John; expires=Sat, 8 Jun 2019 12:00:00 UTC";
By default, the cookie belongs to a current page. But you can tell the browser what path the cookie 
belongs to using a path parameter.
document.cookie = "username=John; path=/services";
Delete a cookie
You can delete a cookie by setting the expiry date as a passed date. You don't need to specify a cookie 
value in this case. For example, you can delete a username cookie in the current page as below.
document.cookie = "username=; expires=Fri, 07 Jun 2019 00:00:00 UTC; path=/;";
Note: You should define the cookie path option to ensure that you delete the right cookie. Some 
browsers doesn't allow to delete a cookie unless you specify a path parameter.
Differences between cookie, local storage, and session storage
Feature Cookie Local storage Session storage
Accessed on client or server 
side
Both server-side & client-side client-side 
only
client-side only
Lifetime As configured using Expires 
option
until deleted until tab is 
closed
SSL support Supported Not supported Not supported
Maximum data size 4KB 5 MB 5MB
callback hell
Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug 
when dealing with asynchronous logic. The callback hell looks like below,
async1(function(){
 async2(function(){
 async3(function(){
 async4(function(){
 ....
 });
 });
 });
});
server-sent events
Server-sent events (SSE) is a server push technology enabling a browser to receive automatic updates 
from a server via HTTP connection without resorting to polling. These are a one-way communications 
channel - events flow from server to client only. This has been used in Facebook/Twitter updates, stock 
price updates, news feeds etc.
You can perform browser support for server-sent events before using it as below,
if(typeof(EventSource) !== "undefined") {
 // Server-sent events supported. Let's have some code here!
} else {
 // No server-sent events supported
}
<!DOCTYPE html>
<html>
<body>
<h1>Getting server updates</h1>
<div id="result"></div>
<script>
if(typeof(EventSource) !== "undefined") {
 var source = new EventSource("https://www.w3schools.com/html/demo_sse.php");
 source.onmessage = function(event) {
 document.getElementById("result").innerHTML += event.data + "<br>";
 };
} else {
 document.getElementById("result").innerHTML = "Sorry, your browser does not support server-sent 
events...";
}
</script>
</body>
</html>
Getting server updates
The server time is: Wed, 07 Jul 2021 11:01:10 +0000
The server time is: Wed, 07 Jul 2021 11:01:13 +0000
The server time is: Wed, 07 Jul 2021 11:01:17 +0000
The server time is: Wed, 07 Jul 2021 11:01:20 +0000
The server time is: Wed, 07 Jul 2021 11:01:23 +0000
Below is the list of events available for server sent events
Event Description
onopen It is used when a connection to the server is opened
onmessage This event is used when a message is received
onerror It happens when an error occurs
promise chaining
The process of executing a sequence of asynchronous tasks one after another using promises is known 
as Promise chaining.
new Promise(function(resolve, reject) {
 setTimeout(() => resolve(1), 1000);
}).then(function(result) {
 console.log(result); // 1
 return result * 2;
}).then(function(result) {
 console.log(result); // 2
 return result * 3;
}).then(function(result) {
 console.log(result); // 6
 return result * 4;
});
promise.all
Promise.all is a promise that takes an array of promises as an input (an iterable), and it gets resolved 
when all the promises get resolved or any one of them gets rejected.
let urls = [
 'https://jsonplaceholder.typicode.com/posts/1',
 'https://jsonplaceholder.typicode.com/posts/2',
 'https://jsonplaceholder.typicode.com/posts/3'
];
// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));
// Promise.all waits until all jobs are resolved
Promise.all(requests)
 .then(responses => responses.forEach(response => {
 console.log(response.url + response.status + response.data); 
 }
 ));
Promise.race()
Promise.race() method will return the promise instance which is firstly resolved or rejected.
let urls = [
 'https://jsonplaceholder.typicode.com/comments',
 'https://jsonplaceholder.typicode.com/users',
 'https://jsonplaceholder.typicode.com/posts' 
];
// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));
Promise.race(requests).then((value) => {
 console.log(value);
 // Both resolve, but promise2 is faster
});
Promise {<pending>}
Response {type: "basic", url: "https://jsonplaceholder.typicode.com/users", redirected: false, status: 
200, ok: true, …}
Code execute in console
Check API speed from network tab
Users API fetch timing is less than others 17 ms. So, Promise.race() return 2nd promise (Users).
Promise.allSettled()
The Promise.allSettled() method returns a promise that resolves after all of the given promises have 
either fulfilled or rejected, with an array of objects that each describes the outcome of each promise.
let urls = [
 'https://jsonplaceholder.typicode.com/comments',
 'https://jsonplaceholder.typicode.com/users',
 'https://jsonplaceholder.typicode.com/posts' 
];
// map every url to the promise of the fetch
let requests = urls.map(url => fetch(url));
Promise.allSettled(requests).then((value) => {
 console.log(value);
 // Both resolve, but promise2 is faster
});
(3) [{…}, {…}, {…}]
Promise.allSettled() vs Promise.all()
Promise.all() will reject as soon as one of the Promises in the array rejects. Promise. allSettled() will 
never reject, it will resolve once all Promises in the array have either rejected or resolved.
Fetch
The Fetch API provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, 
such as requests and responses.
A basic fetch request is really simple to set up. Have a look at the following code:
fetch('http://example.com/movies.json')
 .then(response => response.json())
 .then(data => console.log(data));
Strict Mode
Strict Mode is a new feature in ECMAScript 5 that allows you to place a program, or a function, in a 
“strict” operating context. This way it prevents certain actions from being taken and throws more 
exceptions. The literal expression "use strict"; instructs the browser to use the javascript code in the 
Strict mode.
Strict mode is useful to write "secure" JavaScript by notifying "bad syntax" into real errors. For example, 
it eliminates accidentally creating a global variable by throwing an error and also throws an error for 
assignment to a non-writable property, a getter-only property, a non-existing property, a non-existing 
variable, or a non-existing object.
<!DOCTYPE html>
<html>
<body>
<h2>With "use strict":</h2>
<h3>Using a variable without declaring it, is not allowed.</h3>
<script>
"use strict";
x = 3.14; // This will cause an error (x is not defined).
</script>
</body>
</html>
Purpose of void 0
Void(0) is used to prevent the page from refreshing. It is commonly used for HTML documents that use 
href="JavaScript:Void(0);" within an <a> element. i.e, when you click a link, the browser loads a new 
page or refreshes the same page. But this behavior will be prevented using this expression. For example, 
the below link notify the message without reloading the page
<a href="JavaScript:void(0);" onclick="alert('Well done!')">Click Me!</a>
preventDefault()
The preventDefault() method cancels the event if it is cancelable, meaning that the default action or 
behaviour that belongs to the event will not occur. For example, prevent form submission when clicking 
on submit button and prevent opening the page URL when clicking on hyperlink are some common use 
cases.
Note: Remember that not all events are cancelable.
<a id="link" href="https://www.w3schools.com">Click me</button>
<script>
document.getElementById("link").addEventListener("click", function(event){
event.preventDefault();
});
</script>
Prevent the default function of a tag, then click on a href will not open new page.
stopPropagation()
<!DOCTYPE html>
<html>
<head>
<style>
div{
width: 200px;
 height: 200px;
}
.parent{
width: 150px;
 height: 150px;
background: #FF0000;
 padding: 25px;
}
.child{
width: 150px;
 height: 150px;
background: #00FF00;
}
</style>
<body>
<p>Click Red and Green color Div</p>
<div class="parent" onclick="parentFunc()">
 <div class="child" onclick="childFunc(event)"></div>
</div>
<script>
function parentFunc(event) {
 alert("Parent");
 event.stopPropagation();
}
function childFunc() {
 alert("Child");
}
</script>
</body>
</html>
Child div is inside parent div. So as default nature, if you click on child div, childFunc() and parentFunc() 
both will be triggered. The stopPropagation() prevents propagation/spread of the same event from 
being called.
Event capturing vs Event bubbling
Event capturing
When you use event capturing
the event handler of element1 fires first, the event handler of element2 fires last.
Event bubbling
When you use event bubbling
the event handler of element2 fires first, the event handler of element1 fires last.
BOM
The Browser Object Model (BOM) allows JavaScript to "talk to" the browser. It consists of the objects 
navigator, history, screen, location and document which are children of the window. The Browser Object 
Model is not standardized and can change based on different browsers.
window and document
Window Document
It is the root level element in any web 
page
It is the direct child of the window object. This is also 
known as Document Object Model(DOM)
By default window object is available 
implicitly in the page
You can access it via window.document or document.
It has methods like alert(), confirm() and 
properties like document, location
It provides methods like getElementById, 
getElementsByTagName, createElement etc
setTimeout vs setInterval
setTimeout(expression, timeout); runs the code/function once after 
the timeout. setInterval(expression, timeout); runs the code/function repeatedly, with the length of 
the timeout between each repeat. Example: setInterval fires again and again in intervals, 
while setTimeout only fires once.
setTimeout(function(){ console.log("Good morning"); }, 2000);
setInterval(function(){ console.log("Good morning"); }, 2000);
Default parameters
Default function parameters allow named parameters to be initialized with default values if no value or 
undefined is passed.
function add(x = 10, y = 20) {
 return x+y;
}
console.log('Addition with passing value => ', add(3,6));
console.log('Addition with default value => ', add());
Addition with passing value => 9
Addition with default value => 30
Features of ES6
i. Support for constants or immutable variables
ii. Block-scope support for variables, constants and functions
iii. Arrow functions
iv. Default parameters
v. Rest and Spread Parameters
vi. Template Literals
vii. Multi-line Strings
viii. Destructuring Assignment
ix. Enhanced Object Literals
x. Promises
xi. Classes
xii. Modules


## Javascript Advanced

 <!--[if lt IE 9]>
    <link rel="stylesheet" href="<ie8.css>">
    <script src="<ie8>"></script>
  <![endif]-->


### Javascript Engine

- Javascript Runtime
- Interpreter/Compiler /JIT Compiler
- Writing Optimized Code
- Call stack + memory Heap
- Stack overflow + Memory Leaks
- Garbage Collection

#### Enginers - JS engines | Virtual Machines
   - Chrome - V8 engine
   - Safari - JavaScriptCore engine
   - Firefox - SpiderMonkey (except iOS)
   - Edge - Chakra -> Chromium

## Node.js
- Single Threaded Model

## Others

- Execution Context
- Lexical Environment
- Scope Chain
- Hoisting
- Function Invocation
- Function Scope Vs Block Scope
- Dynamic Vs Lexical Scope
- this - call, apply and bind
- IIFE

## Types
- Static Vs Dynamically Typed
- Primitive Types

## Pass by Reference and Pass By Value
- Type Coercion
- Arrays, Functions and Objects

## The 2 Pillars
- Closures
- Prototypical Inheritance

## Higher order functions
- Functions Vs Objects
- Schme + Java

## OOP Vs FP
### OOP
- this keyword
- new keyword
 - Prototype
  ES 6 classes
  Java
  Inheritance
  Object.create
  Private Vs Public
  4 principles of OOP

### FP
  Composition vs inheritance
  Curry
  Partial Application
  Pure Functions
  Referential Transparency
  Compose
  Pipe

 ## Extras+
 ###  Asynchronous Javascript
      Web APIs
      Async / Await
      Callbacks
      Microtask Queue ( Job Queue )
      Task Queue (callback Queue )
      Promises
      Event loop

  ### Error handling

  ### Modules
      Native ES Modules
      CommonJS
      UMD
      AMD
      IIFE

### Others
Deep copy : structuredClone (obj0)

### Check if online or offline

window.addEventListener('online', () => {})
window.addEventListener('offline', () => {})

window.navigator.onLine

### Structure clode

_.cloneDeep

structuredClone(object);


### Send Beacon

const body = {events}
const headers = {type: 'application/json' }
const blob = new Blob([JSON.stringify(body)], headers)

//Executes when user closes or switches tab or closes session

document.addEventListener('visibilityChange', () => {
  if(document.visibilityState === 'hidden') {
     navigator.sendBeacon('/events', btob)
     //Guaranteed to send event even when session ends
  }
});

### Get battery status

navigator.getBattery().then((battery) => {
  console.log(battery);
})

### Console utilities API
copy()              -  copies string representation of parameter as string in clipboard
inspect()           -  opens and selects the specified element or object in appropriate method
monitor()           -  logs in the console when specified function is called and lists its parameters
getEventListeners() -  returns the event listeners registered on specific object
$$(selector)        -  returns an array of elements that match given CSS selectors. = document.querySelectorAll()

### Performance
let supported, perf;
function isPerformanceSupported() {
    var c;
    return supported !== void 0 || (typeof window != "undefined" && window.performance ? (supported = !0,
    perf = window.performance) : typeof global != "undefined" && ((c = global.perf_hooks) === null || c === void 0 ? void 0 : c.performance) ? (supported = !0,
    perf = global.perf_hooks.performance) : supported = !1),
    supported
}

function now() {
    return isPerformanceSupported() ? perf.now() : Date.now()
}

### Scroll Positions

const computeScrollPosition = ()=>({
    left: window.pageXOffset,
    top: window.pageYOffset
});


function getScrollKey(c, d) {
    return (history.state ? history.state.position - d : -1) + c
}
const scrollPositions = new Map;

function saveScrollPosition(c, d) {
    scrollPositions.set(c, d)
}

	$(document).ready(function() {
		var content = $('#div1');
		var top = $('#div2');

		$(window).on('scroll', function() {
			if(content.offset().top <= 100) {
				top.css({'opacity': 0.8});
			}else{
				top.css({'opacity': 1});
			}
		});
	});

	$(document).ready(function() {
		var top = $("#menu");
		$(window).on('scroll', function(){
			if(($('#content').offset().top - $(window).scrollTop()) <= 100){
				top.css({'opacity': 0.4});
			}else{
				top.css({'opacity': 1});
			}
		});
	});

////////////////////////////// Scroll to Top

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


### Regular expressions

const HASH_RE = /#/g
  , AMPERSAND_RE = /&/g
  , SLASH_RE = /\//g
  , EQUAL_RE = /=/g
  , IM_RE = /\?/g
  , PLUS_RE = /\+/g
  , ENC_BRACKET_OPEN_RE = /%5B/g
  , ENC_BRACKET_CLOSE_RE = /%5D/g
  , ENC_CARET_RE = /%5E/g
  , ENC_BACKTICK_RE = /%60/g
  , ENC_CURLY_OPEN_RE = /%7B/g
  , ENC_PIPE_RE = /%7C/g
  , ENC_CURLY_CLOSE_RE = /%7D/g
  , ENC_SPACE_RE = /%20/g;


###   const ClickApp = () => {
    let isMobile = {
      Android: function () {
        return navigator.userAgent.match(/windows|Android/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/mac|iPhone|iPad|iPod/i);
      },
    };
    if (isMobile.Android()) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.stashfin.android","_blank");
    }

    if (isMobile.iOS()) {
      window.open(
        "https://apps.apple.com/us/app/stashfin/id1276990457","_blank");
    }
  };


#### Random Notes
if (!yaa.test(a))
return a;
-1 != a.indexOf("&") && (a = a.replace(zaa, "&amp;"));
-1 != a.indexOf("<") && (a = a.replace(Aaa, "&lt;"));
-1 != a.indexOf(">") && (a = a.replace(Baa, "&gt;"));
-1 != a.indexOf('"') && (a = a.replace(Caa, "&quot;"));
-1 != a.indexOf("'") && (a = a.replace(Daa, "&#39;"));
-1 != a.indexOf("\x00") && (a = a.replace(Eaa, "&#0;"));
return a

var d = new Uint8Array(c)

return e !== c ? d.subarray(0, e) : d

for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.",

void 0


element.classList.toggle("sub-menu-item-active")
element.classList.toggle("show")

### Polyfils
String
  "trimStart"in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft),
        "trimEnd"in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight),
        "description"in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
            configurable: !0,
            get: function() {
                var e = /\((.*)\)/.exec(this.toString());
                return e ? e[1] : void 0
            }
        }),


Array
        Array.prototype.flat || (Array.prototype.flat = function(e, t) {
            return t = this.concat.apply([], this),
            e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
        }
        ,
        Array.prototype.flatMap = function(e, t) {
            return this.map(e, t).flat()
        }
        ),

Promise - finally
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            if ("function" != typeof e)
                return this.then(e, e);
            var t = this.constructor || Promise;
            return this.then((function(r) {
                return t.resolve(e()).then((function() {
                    return r
                }
                ))
            }
            ), (function(r) {
                return t.resolve(e()).then((function() {
                    throw r
                }
                ))
            }
            ))
        }
        )


### Decode encode URI component
 encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
 encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
 return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)

### Devtools
Dev tools : unused code
Tip: DevTools can measure how much unused JavaScript is on your page. Helpful to identify code to remove or lazy-load.

DevTools > three-right menu > More tools > Coverage

Ideally, only load code users need when they need it (or soon before they need it). The Coverage tab in Chrome DevTools can help you find unused JavaScript and CSS. Removing unused code or lazy-loading non-critical code can improve how quickly pages load and render for users. Learn more: https://bit.ly/unused-js.

I usually like to pair usage of Coverage with Lighthouse Treemap or Webpack Bundle Analyzer. Lighthouse also includes audits for discovering unused JavaScript and identifying specific opportunities to optimize or remove less necessary things in your bundles (e.g. duplicate modules).

Is all unused JavaScript bad? Not quite. Some of it might be needed right away, but may not be executed on page load as it requires a user interaction. For a more accurate picture of what to lazy-load, here's how I tend to use it:

I do an initial run (which may say 50% of my code is unused) and then I click around on key actions the user is most likely to immediately perform on the page (e.g. clicking on tabs, focusing on Search) - this might take the number down to 40%. You can eagerly load this code or prefetch chunks for this work if you want, lazy-loading most of the rest.

The key part is to load what's actually important to the user when they need it most, while not delaying their ability to perform early interactions.

Advanced: We've been talking about code-splitting and lazy-loading for a number of years now. If you're interested in how this pertains to modern frameworks, partial hydration etc you may be interested in "is 0KB of JavaScript your future?": https://lnkd.in/g4ZYR4Dq. You might also be interested in reading up about the value of reducing unused code as it relates to newer performance metrics like INP: https://web.dev/inp/


1. Let's start from the basics. When we browse any website, we are connected via multiple HTTP requests which are sent over a TCP connection maintained between the client and the server. We also know, that for real-time systems like chat applications, we use Web Sockets instead of HTTP connections. Now, the question comes, what type of connection is maintained during streaming and how is the data actually transferred?

2. Answering the first question, the type of connection that is maintained while streaming is called the HTTP streaming connection.

3. The "HTTP streaming" mechanism keeps a request open indefinitely. It never terminates the request or closes the connection, even after the server pushes data to the client. This mechanism significantly reduces the network latency because the client and the server do not need to open and close the connection.

4. The basic life cycle of an application using "HTTP streaming" is as follows:1) The client makes an initial request and then waits for a response.2) The server defers the response to a poll request until an update is available, or until a particular status or timeout has occurred.3) Whenever an update is available, the server sends it back to the client as a part of the response.4) The data sent by the server does not terminate the request or the connection. The server returns to step 3.

5. Now we know the connection type used for streaming, as HTTP depends on TCP, the underlying connection is TCP. Now let's discuss how the data actually travels.

6. For this, HTTP live streaming (HLS) protocol is used. An HLS stream originates from a server where (in on-demand streaming) the media file is stored, or where (in live streaming) the stream is created.

7. Two main processes take place on the server:1) Encoding: The video data is reformatted so that any device can recognize and interpret the data. HLS must use H.264 or H.265 encoding.2) Segmenting: The video is divided up into segments a few seconds in length. In addition to dividing the video into segments, HLS creates an index file of the video segments to record the order they belong in.HLS will also create several duplicate sets of segments at different quality levels: 480p, 720p, 1080p, and so on.

8. Then these segments are supplied over CDN which then makes these available to the client which is your device- laptop or mobile on which you are streaming contents.

9. One of the advantages HLS has over some other streaming protocols is adaptive bitrate streaming.

There are some other streaming protocols too like DASH. A lot of people prefer DASH over HLS.

I also created a detailed video on the topic explaining video streaming in detail:
https://lnkd.in/d2fP53du


https://lnkd.in/dX8nuf5D


### Key Codes
          Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }
          , Xr = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }
Other events
        At("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),


        At("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
        At(Lt, 2);
        for (var Ut = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Vt = 0; Vt < Ut.length; Vt++)

### Video Events
  Lt = ["abort", "abort", je, "animationEnd", He, "animationIteration", $e, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Be, "transitionEnd", "waiting", "waiting"];


### Pointer events

case "focus":
case "blur":
case "dragenter":
case "dragleave":
case "mouseover":
case "mouseout":
case "pointerover":
case "pointerout":
case "gotpointercapture":
case "lostpointercapture":


### Cookies
1. Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you. Cookies are also of two types: first-party cookies and third-party cookies.

2. First-party cookies are the cookies that the website you are on stores to help populate the information when you again come back on the website like username etc. Third-Party cookies are the cookies that are stored by the ad servers - Meta.

3. Every eCommerce website generally has an integration with Meta to record the things you search for. A part of the code of these ad-servers gets executed whenever you shop for an item or click on it.
These websites generally do this so that they can re-target you in the future using Facebook/Instagram Ads.

4. The new Apple IOS update disabled Third-party cookies which became a big issue for Meta and also eCommerce websites that depend on this data to sell your products.

5. eCommerce websites started seeing bad results with their Facebook ads. They started losing money for ads and not getting good impressions or click-through rates.

6. This caused them to move away from Meta which in turn led to declining in revenue of Meta and hence the stock dip.

### Javascript Advanced
//Create generator
function *myGenerator() {
  console.log('Invoked 1st time');
  yield 1

  console.log('Invoked 2nd time');
  yield 2

  console.log('Invoked 3rd time');
  yield 3
}

//Assign generator a variable
const myGeneratorValue = myGenerator();

console.log(myGeneratorValue.next());

console.log(myGeneratorValue.next());

console.log(myGeneratorValue.next());

// This call does'nt return any yield, since there is no other yield the generator is done
console.log(myGeneratorValue.next());


### Console methods
1. console.log
2. console.warn
3. console.error
4. console.table
5. console.assert
6. console.time and console.timeEnd
7. console.info
8. console.trace
9. console.count
10. console.clear

### Observables
1. handle async operations that give multiple values
2. are objects that can emit values, errors and completion notifications

`
const apiServices = new ApiService()

const observable = apiService.getNewsArticles()

observable.subscribe(articles => {
  console.log(articles)
})
`

### Topics
1. Variables and Datatypes
2. Control flow : Order of statement execution
3. Functions
4. Object oriented programming
5. Debugging
6. Memory management
7. Algorithms and Datastructures
8. APIs and webservices

