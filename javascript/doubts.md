Node js
	concurrency-node-js/
	callstack
	libuv-in-node-js/express js
	app vs server
	Nodejs modules - you have used
	
	Node JS architecture
	middleware - syntax to create a middle ware
	event loop in nodejs

	NPM Dependencies types
	https://estebansastre.com/posts/types-of-dependencies-in-npm/
	https://nodejs.org/en/blog/npm/peer-dependencies/
	peerdependencies
	optionaldependencies
	devDependencies
	dependencies

npm config set http-proxy 
npm config set https-proxy 

view state vs session state
depreceated react methods
dangerous setDate

services in nodejs
cluster mongodb and nodejs

remove event handlers - useEffect
postgres

rabbitmq

viewstate

SVG vs canvas
Websockets
Synthetic events

event driven languageanti pattern
	
Questions
swap third var
	HTML 5 apis
	Explain difference b/w cookies session storage and local storage
	shadow dom
	jsonp
	null vs undefined
	components
	state vs props
	useEffect - how man 
	rcoconvciilayon
	setState(
	key props ?
	block vs inline-block
	box-model
	ouline vsborder
	float vs clear
	rest


  Memoization | shouldComponentUpdate | may result in buggy code as it may create issues in Code Maintainability | PureComponent

Purity = No Side affects
Default React is impure
React is basically a state machine
Declarative system Performance improvements ShallowComparison
Every child of pure component should also be pure
Javascript concepts

1. Coercion

2. Scope - Function Scope
  ES 6   Blocked scope - with let and const

3. True nature of objects  - Prototype and prototypical inheritance

4. this - occurs with every function invocation - how the function is invoked

5. Functions - Functions are firstclass objects - very powerful feature
    Closure
    IIFEs

6. Namespace  Module pattern

Functional Programming

Pure Functions

1. Return same input for same output EVERY TIME
2. No Side Effects, No Dependencies
3. Predictable and Testable

Functions are values
Higher order functions
Composition
eg.,  Filters in arrays, Reject in arrays

Javascript rules
Values have types and those types don't change but Variable can hold any value any time ( does not have types)

== allows coercion | implicit coercion   0 "" undefined null false true
OOPS comparisons
"" == 0,  "" == false, 0 == false, "0" == false,

=== disallows coercion

null and undefined are one and the same	improves performance a lot
Stop using anonymous functions --> given them names especially inside another functions --> Prefer Names function Expressions

Principle of Least exposure - define your variables where it is going to be used
eg. var i in for loop
"Block Scoping" better than manually hoisting variables

Tranpiling

this keyword ,  Call site

4 rules new objects, new call or bind function, self owned object,  otherwise use global (when therei not "use strict"

var self = this --> lexical scoping

typeof --> always return one of six fixed strings

Swap variables in js
1. Using Temp variable
2. Using array destructuing

[a, b] = [b, a]

3. Using Maths Operations

a = a + b;
b = a - b;
a = a - b

Using Bitwise XOR operator
a = a ^ b
b = a ^ b
a = a ^ b


Closure
Function expression
anonymous functions
Passing AF as agument
Returning AF
Arrow Funtion
IIFE
typeof
undefined/null diffeence between both
var let const keywords
What is
OOP
Encapsulation
Abstraction
Inheritance
Polymorphism
Object in JS
Object Literal | Object constructor
Accessing Obj property | Ob methods
Adding Obj properties and methods
Deleting properties in JS
Factory function
Constructor
How to check propeties existing in JS

For in loop
Ways of creating objects
Constructo as a class 
Private properties and methods
Access private propety from outside in JS

Multidimensional array
How to create empty 2D array
how to get input from user in 2d aray
concat method
join | reverse methods
Sice 
toString
isArray
splice
indexOf
fill
unshift
Push | Shift  \ Pop
boolean | String in javascript
String concantenation
Escape notation
Template literal Diff between Double and Single quotes
Tagged template
String length property
CharAt | CharCodeAt method
toUpperCase and to LowerCase method
Trim 
replace
splite | Sice
indexOf
search
substring | substr
Number with String
NaN
NaN is not equal to anything in JS
isNaN
infinity and negative infinity
toString
toExponential | toFixed
toPrecision
isInteger
isSafeInteger
Number | ParseInt
parseFoat
Math | Min Max
Foor
Round
generate random no in js
Date
Create DateObj with Date()
Create Date Obj using Date (milliecond, year, month, day hour min sec, ms, date string
ISO date | Short Date | Long Date
setDate methods | GetDate methods
Retrieve month name and day name
Format date and timer
Convert date to string

method overriding
multilevel inheitance
composition or mixings
es6 cass
default constructor in js
parameterized constructor
class expression ( class hoisting )
inheitance in JS
super method | Method oerriding
static method
array ( declaration, initialization ) Array literal
declaration and initialization of array
array constructor
accessing, modifiying and removing array element
array length property
iteration of array using loop
for each, For Of loop

Identify the properties for AJAX call
xmlHTTPRequestObjett - response

Sizes units
font : heavy bold

Why we dont need a global namespace  : naming issues

<hgroup> element contain

media queries - reponsive UI based on Screen size of the view port

flexbox   - flexpack, flexbox -items
XMLHttpRequest - binary data
   correct state that user credentials are sent to server
HTML 5 element - organize content so that page maximizes a search engine's algorithm

Valid WebSocket instantiation
control what's sent to the server when submitting a form
WebStorage API - data cleared when user closes browser ?
AppCache manifest - valid section of it
canvas - methods used on the context to beghin drawing at a new point
Geo location api - cached data configure ability to use it
Transformation - scale, skew ...
position relative to browser window
iFrame - load content from containing HTML document - sandbox atribute
exception object properties
trasnsition-timing-function - 
layout based on rows and columns
amount of spaces between words

elemnt to 

referent the object that raised the event easily

video element  rendeiring of the element can function in different browsers

regexp characters - denotes end of string

designate a page as available offline

Express
cluster : 
Swagger : 
Mongo - mongoose
jwt: which place you will configure in express js
Aggregate: mongo db
mocha
no unit testing 

/**
 * 
 * Interview based preparation for javascripts
 * 
 * 1. Hoisting
 * 2. Callstack
 */

 //1. Hoisting

//After hoisting this will be like
/**
 *   function simpleFunction(){
       ....
     }
     var variableFunction() {
         ...
     }
     try {
         ...
     }
     ....
 * 
 */


try {
    simpleFunction();
} catch(err) {
    console.log(err);
}

try {
    variableFunction();
} catch(err) {    
    console.error("Error while calling variableFunction : " + err.message);
}

function simpleFunction() {
    console.log(" I am a plain function");
}

//This is a function variable and here the variable declaration is hoisted above 
var variableFunction = function() {
     console.log("I am a function and stored in a variable");
}


//2. Callback and IIFE
function Callback() {
    console.log("I am in a callback");
}

(function MainFunction(Parameter1, callback){
    console.log('I am in Function ' + Parameter1);
    callback && callback();
})("Hi", Callback);


/**
 * 
 * Good and misunderstood parts
 */

 console.log( [] == ![] )

 //Why? 
 //In javascript all comparison are done after converting data types to numbers
 // Empty Stack [] = 0  Numerical value
 // ![] = false = 0     
 // So  0 == 0 ==> true

 console.log( [] + {} );

 console.log( {} + [] );

 console.log( - 0);

 console.log(Number( "- 0"));

 console.log(Number(""));
 console.log(Number(" "));
 console.log(Number("\r\n\t"));

 console.log(Number("0"));
 console.log(Number("-0"));
 JSON.parse("-0");

 console.log(JSON.stringify(-0));
 console.log(String(-0));
 console.log(-0 + "");
 
 
 /**
WTF *
*/


console.log( Number.MAX_VALUE > 0 );

console.log( Number.MIN_VALUE < 0 );

//Left - Right Associativity of operators
console.log(1 < 2 < 3);

console.log(3 > 2 > 1);

//Rules around period
//Syntax Errors
//console.log(42.toFixed(2))
//console.log(42. toFixed(2))
console.log(42 .toFixed(2));
console.log(42 .toFixed(2));
console.log(42.0.toFixed(2));
console.log(42..toFixed(2));

//Coercion


//Array becomes an empty string, which finally becomes zero

https://www.geeksforgeeks.org/what-is-a-stub-in-node-js/
https://kentcdodds.com/blog/prop-drilling
https://www.mongodb.com/basics/best-practices
https://nodejs.org/en/knowledge/getting-started/what-is-require/
https://www.freecodecamp.org/news/array-and-object-destructuring-in-javascript/


callbackHell

https://egghead.io/lessons/react-redux-react-todo-list-example-filtering-todos
https://egghead.io/lessons/javascript-redux-simplifying-the-arrow-functions
https://www.youtube.com/watch?v=yoJuOs-niIc&list=PLuNEz8XtB51K-x3bwCC9uNM_cxXaiCcRY&index=2
https://www.freecodecamp.org/news/mongodb-mongoose-node-tutorial/
https://mongoosejs.com/docs/connections.html

ravi.k@rrootshell.com
 landru@nsight-inc.com

get the 2nd and third maximum marks in sql query

OOPS concepts

overriding vs overloading
in JS what is possible

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

var container = document.querySelector(".container");

container.addEventListener("click", function(e) {
  [...container.querySelectorAll(".content")].forEach(ele => ele.classList.toggle("show"));
});


Chrome, Firefox, Vivaldi and Safari support getEventListeners(domElement) in their Developer Tools console.

For majority of the debugging purposes, this could be used.

Below is a very good reference to use it: https://developers.google.com/web/tools/chrome-devtools/console/utilities#geteventlisteners


https://stackoverflow.com/questions/2067472/what-is-jsonp-and-why-was-it-created?rq=1

 let variables are scoped to the immediate enclosing block denoted by { }
  
 https://stackoverflow.com/questions/762011/whats-the-difference-between-using-let-and-var?rq=1 
 https://stackoverflow.com/questions/801032/why-is-null-an-object-and-whats-the-difference-between-null-and-undefined?rq=1 

 Security
 https://stackoverflow.com/questions/2669690/why-does-google-prepend-while1-to-their-json-responses?rq=1 
 https://stackoverflow.com/questions/2067472/what-is-jsonp-and-why-was-it-created?rq=1


promiseAllsettled
rest operato
object destructuring vs array destructuring

datatypes in typescript
cassandra
long polling
websocket
real time
rabbit mq
restful 

notifications
 
binary se

proto vs prototype   https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript
Prototype object in JS
how prototype works
PT inheritances in JS
Once super js two sub classes


NPM Dependencies types
	https://estebansastre.com/posts/types-of-dependencies-in-npm/
	https://nodejs.org/en/blog/npm/peer-dependencies/
	peerdependencies
	optionaldependencies
	devDependencies
	dependencies

	Object literals in javascript are by default associative arrays eg object.propertyName.propertyValue is the same as object[propertyName][propertyValue]

var size = Object.keys(myObj).length;
This doesn't have to modify any existing prototype since Object.keys() is now built-in.

Edit: Objects can have symbolic properties that can not be returned via Object.key method. So the answer would be incomplete without mentioning them.

Symbol type was added to the language to create unique identifiers for object properties. The main benefit of the Symbol type is the prevention of overwrites.

Object.keys or Object.getOwnPropertyNames does not work for symbolic properties. To return them you need to use Object.getOwnPropertySymbols


Error handling in javascript
Error handling in promises

Error boundaries in react


Websockets

how to use websockets etc.,

https://github.com/sudheerj/javascript-interview-questions#how-do-you-receive-server-sent-event-notifications


promise.AllAny


+"5" // 5 (string to number)
+"" // 0 (string to number)
+"1 + 2" // NaN (doesn't evaluate)
+new Date() // same as (new Date()).getTime()
+"foo" // NaN (string to number)
+{} // NaN
+[] // 0 (toString() returns an empty string list)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0



https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript

https://stackoverflow.com/questions/336859/var-functionname-function-vs-function-functionname?rq=1


//Handling unhandled rejection at window level
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});


view state vs session state
depreceated react methods
dangerous setDate

postgres

rabbitmq

viewstate

SVG vs canvas
Websockets

Pop vs push
map - return value
shift vs pop
map vs filtering-todos

event driven languageanti pattern
	
swap third var
	HTML 5 apis
	Explain difference b/w cookies session storage and local storage
	jsonp
	null vs undefined
	rcoconvciilayon
	block vs inline-block
	box-model
	ouline vsborder
	float vs clear
	rest

Javascript concepts

1. Coercion

2. Scope - Function Scope
  ES 6   Blocked scope - with let and const

3. True nature of objects  - Prototype and prototypical inheritance

4. this - occurs with every function invocation - how the function is invoked

5. Functions - Functions are firstclass objects - very powerful feature
    Closure
    IIFEs

6. Namespace  Module pattern

Functional Programming

Pure Functions

1. Return same input for same output EVERY TIME
2. No Side Effects, No Dependencies
3. Predictable and Testable

Functions are values
Higher order functions
Composition
eg.,  Filters in arrays, Reject in arrays

Javascript rules
Values have types and those types don't change but Variable can hold any value any time ( does not have types)

== allows coercion | implicit coercion   0 "" undefined null false true
OOPS comparisons
"" == 0,  "" == false, 0 == false, "0" == false,

=== disallows coercion

null and undefined are one and the same	improves performance a lot
Stop using anonymous functions --> given them names especially inside another functions --> Prefer Names function Expressions

Principle of Least exposure - define your variables where it is going to be used
eg. var i in for loop
"Block Scoping" better than manually hoisting variables

Tranpiling

this keyword ,  Call site

4 rules new objects, new call or bind function, self owned object,  otherwise use global (when therei not "use strict"

var self = this --> lexical scoping

typeof --> always return one of six fixed strings

Swap variables in js
1. Using Temp variable
2. Using array destructuing

[a, b] = [b, a]

3. Using Maths Operations

a = a + b;
b = a - b;
a = a - b

Using Bitwise XOR operator
a = a ^ b
b = a ^ b
a = a ^ b


Closure
Function expression
anonymous functions
Passing AF as agument
Returning AF
Arrow Funtion
IIFE
typeof
undefined/null diffeence between both
var let const keywords
What is
OOP
Encapsulation
Abstraction
Inheritance
Polymorphism
Object in JS
Object Literal | Object constructor
Accessing Obj property | Ob methods
Adding Obj properties and methods
Deleting properties in JS
Factory function
Constructor
How to check propeties existing in JS

For in loop
Ways of creating objects
Constructo as a class 
Private properties and methods
Access private propety from outside in JS

Multidimensional array
How to create empty 2D array
how to get input from user in 2d aray
concat method
join | reverse methods
Sice 
toString
isArray
splice
indexOf
fill
unshift
Push | Shift  \ Pop
boolean | String in javascript
String concantenation
Escape notation
Template literal Diff between Double and Single quotes
Tagged template
String length property
CharAt | CharCodeAt method
toUpperCase and to LowerCase method
Trim 
replace
splite | Sice
indexOf
search
substring | substr
Number with String
NaN
NaN is not equal to anything in JS
isNaN
infinity and negative infinity
toString
toExponential | toFixed
toPrecision
isInteger
isSafeInteger
Number | ParseInt
parseFoat
Math | Min Max
Foor
Round
generate random no in js
Date
Create DateObj with Date()
Create Date Obj using Date (milliecond, year, month, day hour min sec, ms, date string
ISO date | Short Date | Long Date
setDate methods | GetDate methods
Retrieve month name and day name
Format date and timer
Convert date to string

method overriding
multilevel inheitance
composition or mixings
es6 cass
default constructor in js
parameterized constructor
class expression ( class hoisting )
inheitance in JS
super method | Method oerriding
static method
array ( declaration, initialization ) Array literal
declaration and initialization of array
array constructor
accessing, modifiying and removing array element
array length property
iteration of array using loop
for each, For Of loop

Identify the properties for AJAX call
xmlHTTPRequestObjett - response

Sizes units
font : heavy bold

Why we dont need a global namespace  : naming issues

<hgroup> element contain

media queries - reponsive UI based on Screen size of the view port

flexbox   - flexpack, flexbox -items
XMLHttpRequest - binary data
   correct state that user credentials are sent to server
HTML 5 element - organize content so that page maximizes a search engine's algorithm

Valid WebSocket instantiation
control what's sent to the server when submitting a form
WebStorage API - data cleared when user closes browser ?
AppCache manifest - valid section of it
canvas - methods used on the context to beghin drawing at a new point
Geo location api - cached data configure ability to use it
Transformation - scale, skew ...
position relative to browser window
iFrame - load content from containing HTML document - sandbox atribute
exception object properties
trasnsition-timing-function - 
layout based on rows and columns
amount of spaces between words

elemnt to 

referent the object that raised the event easily

video element  rendeiring of the element can function in different browsers

regexp characters - denotes end of string

designate a page as available offline

Express
cluster : 
Swagger : 
Mongo - mongoose
jwt: which place you will configure in express js
Aggregate: mongo db
mocha
no unit testing 

/**
 * 
 * Interview based preparation for javascripts
 * 
 * 1. Hoisting
 * 2. Callstack
 */

 //1. Hoisting

//After hoisting this will be like
/**
 *   function simpleFunction(){
       ....
     }
     var variableFunction() {
         ...
     }
     try {
         ...
     }
     ....
 * 
 */


try {
    simpleFunction();
} catch(err) {
    console.log(err);
}

try {
    variableFunction();
} catch(err) {    
    console.error("Error while calling variableFunction : " + err.message);
}

function simpleFunction() {
    console.log(" I am a plain function");
}

//This is a function variable and here the variable declaration is hoisted above 
var variableFunction = function() {
     console.log("I am a function and stored in a variable");
}

//2. Callback and IIFE
function Callback() {
    console.log("I am in a callback");
}

(function MainFunction(Parameter1, callback){
    console.log('I am in Function ' + Parameter1);
    callback && callback();
})("Hi", Callback);

//Coercion

//Array becomes an empty string, which finally becomes zero

callbackHell

OOPS concepts

overriding vs overloading
in JS what is possible

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/rest_parameters

var container = document.querySelector(".container");

container.addEventListener("click", function(e) {
  [...container.querySelectorAll(".content")].forEach(ele => ele.classList.toggle("show"));
});


Chrome, Firefox, Vivaldi and Safari support getEventListeners(domElement) in their Developer Tools console.

For majority of the debugging purposes, this could be used.

Below is a very good reference to use it: https://developers.google.com/web/tools/chrome-devtools/console/utilities#geteventlisteners

datatypes in typescript
cassandra
long polling
websocket
real time
rabbit mq
restful 

notifications
 
✔What do you understand by ViewChild and ContentChild?
Can I read a ViewChild in ngOnInit() life cycle hook? If yes then how?
✔What do you understand by Angular Service?
✔How many objects of a service Angular creates? Can we reconfigure it to create as many objects as we want? how?
✔What is the difference between provideIn and providers?
✔When you may need non-tree shakeable service?
✔Can u explain to me the real use case of useExisting?
✔What do you understand by lazy loaded modules?
✔For a service how many objects Angular creates for lazy loaded modules?
✔Let us say there are three objects an inside that b and inside that C. and there is a service Foo. I have passed Foo in the providers array of component c. Foo is also passed in the providers array of AppModule. How many objects of Foo will be created and inside C component which object will be used?
✔How to dynamically load a component? can you explain me the process?
✔Do Attribute directives have life cycle hooks?
✔What is the purpose of @HostBinding
✔What do you understand by Change Detection?
✔When we should use onPush?
✔What is the difference between detectChange and markForCheck
✔What do you understand by dumb component and smart component?
✔What is the difference between promise and observables
✔What is the difference between observable and subjects?
✔What are various types of subjects?
✔When we should use BehaviorSubject?
✔How will integrate API in the angular app? best practices?
✔Is it ok to use observable<any> if not why?
✔What is the async pipe?

binary se

proto vs prototype   https://stackoverflow.com/questions/9959727/proto-vs-prototype-in-javascript
Prototype object in JS
how prototype works
PT inheritances in JS
Once super js two sub classes

	Object literals in javascript are by default associative arrays eg object.propertyName.propertyValue is the same as object[propertyName][propertyValue]
var size = Object.keys(myObj).length;
This doesn't have to modify any existing prototype since Object.keys() is now built-in.

Edit: Objects can have symbolic properties that can not be returned via Object.key method. So the answer would be incomplete without mentioning them.

Symbol type was added to the language to create unique identifiers for object properties. The main benefit of the Symbol type is the prevention of overwrites.

Object.keys or Object.getOwnPropertyNames does not work for symbolic properties. To return them you need to use Object.getOwnPropertySymbols

Error handling in javascript
Error handling in promises

Websockets

how to use websockets etc.,

+"5" // 5 (string to number)
+"" // 0 (string to number)
+"1 + 2" // NaN (doesn't evaluate)
+new Date() // same as (new Date()).getTime()
+"foo" // NaN (string to number)
+{} // NaN
+[] // 0 (toString() returns an empty string list)
+[1] // 1
+[1,2] // NaN
+new Set([1]) // NaN
+BigInt(1) // Uncaught TypeError: Cannot convert a BigInt value to a number
+undefined // NaN
+null // 0
+true // 1
+false // 0

//Handling unhandled rejection at window level
window.addEventListener('unhandledrejection', function(event) {
  // the event object has two special properties:
  alert(event.promise); // [object Promise] - the promise that generated the error
  alert(event.reason); // Error: Whoops! - the unhandled error object
});

functional  vs class programming

### debouncing

### throttling

<html>
<body>
<button id="debounce">
	Debounce
</button>
<script>
var button = document.getElementById("debounce");
const debounce = (func, delay) => {
	let debounceTimer
	return function() {
		const context = this
		const args = arguments
			clearTimeout(debounceTimer)
				debounceTimer
			= setTimeout(() => func.apply(context, args), delay)
	}
}
button.addEventListener('click', debounce(function() {
		alert("Hello\nNo matter how many times you" +
			"click the debounce button, I get " +
			"executed once every 3 seconds!!")
						}, 3000));
</script>
</body>
</html>

////// Throttling

<button id="throttle">Click Me</button>
<script>
	const btn=document.querySelector("#throttle");
	
	// Throttling Function
	const throttleFunction=(func, delay)=>{

	// Previously called time of the function
	let prev = 0;
	return (...args) => {
		// Current called time of the function
		let now = new Date().getTime();

		// Logging the difference between previously
		// called and current called timings
		console.log(now-prev, delay);
		
		// If difference is greater than delay call
		// the function again.
		if(now - prev> delay){
		prev = now;

		// "..." is the spread operator here
		// returning the function with the
		// array of arguments
		return func(...args);
		}
	}
	}
	btn.addEventListener("click", throttleFunction(()=>{
	console.log("button is clicked")
	}, 1500));
</script>
</body>
</html>

////////
    Write code, focusing on a single program unit at a time
    Define tests to measure success objectives
    Test each unit of code
    Debug code
    Apply standard formatting
	
	
Focus on the first input element
mandatory one IP address necessary

Adding these rules as part of jQuery
Missing curly braces
Not understanding type coercion
Strict quality checks --> compulsory

Forgetting var
Not understanding how scopes work
Using eval
Misusing event listeners

1.	Manipulating HTML/CSS directly
3.	Employing methods which are not in sync with MVC Angular

There we need to measure UI loading time(page load , navigation etc.)
We tried some tools(page load,Yslow,Live HTTP headers,Pagespeed insight, Page speed monitor) but not able to measure the correct loading time.


//Interview Questions
/*
A good project might be to pull tweets from the Twitter API and display them on a timeline

Can you name two programming paradigms important for JavaScript app developers?
JavaScript is a multi-paradigm language, supporting imperative/procedural programming along with OOP (Object-Oriented Programming) and functional programming. JavaScript supports OOP with prototypal inheritance.
Good to hear:
Prototypal inheritance (also: prototypes, OLOO).
Functional programming (also: closures, first class functions, lambdas).

 What is the difference between classical inheritance and prototypal inheritance?
Class Inheritance: instances inherit from classes (like a blueprint — a description of the class), and create sub-class relationships: hierarchical class taxonomies. Instances are typically instantiated via constructor functions with the `new` keyword. Class inheritance may or may not use the `class` keyword from ES6.
Prototypal Inheritance: instances inherit directly from other objects. Instances are typically instantiated via factory functions or `Object.create()`. Instances may be composed from many different objects, allowing for easy selective inheritance.

Good to hear:
Classes: create tight coupling or hierarchies/taxonomies.
Prototypes: mentions of concatenative inheritance, prototype delegation, functional inheritance, object composition.

Favor object composition over class inheritance

There is more than one type of prototypal inheritance:
Delegation (i.e., the prototype chain).
Concatenative (i.e. mixins, `Object.assign()`).
Functional (Not to be confused with functional programming. A function used to create a closure for private state/encapsulation).
Each type of prototypal inheritance has its own set of use-cases, but all of them are equally useful in their ability to enable composition, which creates has-a or uses-a or can-do relationships as opposed to the is-a relationship created with class inheritance.
Good to hear:
In situations where modules or functional programming don’t provide an obvious solution.
When you need to compose objects from multiple sources.
Any time you need inheritance.

https://app.codility.com/programmers/trainings/5/disappearing_pairs/
https://app.codility.com/programmers/lessons/1-iterations/binary_gap/

Javascript interview questions

console.log(a)
a = 10;

console.log(a)
var a = 10;

const sum = (...args) => args.reduce((sum, number) => sum + number, 0);

console.log(sum(1, 2, 3, 4));
console.log(sum(1, 2, 3, 4, 3, 2, 1));

//Currying 
console.log(sum(1)(2)(3));

//Factorial

function factorial (number) {  
  return number > 1 ? number * factorial (number - 1) : number * 1;
}

factorial(5)

/////

let str = "asdfioweurkjdlksdjfkjdsfkljsdfkjklsdf";

//a2b3c5d8

let str = "asdfioweurkjdlksdjfkjdsfkljsdfkjklsdf";

//a2b3c5d8

const countCharacters = (str = '') => {
  
  //
  const alphabetsCount = {};
  
  if(str.length > 0) {
    for(var index in str) {
      const currentCharacter = str[index];
      
      if(typeof alphabetsCount[currentCharacter] == 'undefined') {
        alphabetsCount[currentCharacter] = 1;
      } else {
        alphabetsCount[currentCharacter] = alphabetsCount[currentCharacter] + 1;
      }
    }
  }
  
  const alphabetCountArr = []
  Object.keys( alphabetsCount).map((k ,v) => {
    alphabetCountArr.push(k+v)
  })  
  
  return alphabetsCount;
  
}

scolling optimization - memoizatiion