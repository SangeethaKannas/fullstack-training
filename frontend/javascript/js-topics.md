JavaScript Topics
1. Null vs Undefined
2. Examples 
    typeof([]) – object
    typeof({}) - object
    typeof(null) - object
    typeof(undefined) – undefined
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
Shallow Copy Deep Copy
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