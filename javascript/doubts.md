Difference between viewState and sessionState

media queries

responsive web designate
react redux

jsx  - write html without JSX

React.fragment vs <>

lazyloading

scolling optimization - memoizatiion

debouncing

setState - can you change the state without setState? is it asynchronous


Node js
concurrency-node-js/
callstack
libuv-in-node-js/express js
app vs server
angular lifecycle hooksprioritize the application

view state vs session state
depreceated react methods
dangerous setDate

useCall

useMemo

services in nodejs
cluster mongodb and nodejs

remove event handlers - useEffect
postgres

rabbitmq

viewstate



SVG vs canvas
Websockets
Synthetic events
	Nodejs modules - you have used
	
	Node JS architecture

Pop vs push
map - return value
shift vs pop
map vs filtering-todos
useEffect - returns an anonymous function vs useWrap
useDispatch 
API - redux-simplifying-the-arrow-functions 
how many reducer and stored
logger?

event driven languageanti pattern
	
Questions
	middleware - syntax to create a middle ware
	event loop in nodejs
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
 
 If I use a jQuery calendar control in an Angular app and it has an event selectDate. Can I use these selectDate with Angular event binding? if yes then why and if no then why.
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


NPM Dependencies types
	https://estebansastre.com/posts/types-of-dependencies-in-npm/
	https://nodejs.org/en/blog/npm/peer-dependencies/
	peerdependencies
	optionaldependencies
	devDependencies
	dependencies


Array methods
	unshift Shift
	Push and Pop
	slice and splice
	concat
	
	
	
	
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


debouncing

throttling


functional  vs class programming



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

	https://tsh.io/blog/simple-guide-concurrency-node-js/
	https://stackoverflow.com/questions/26114749/assign-priority-to-nodejs-tasks-in-a-event-loop#26119807	
	https://www.geeksforgeeks.org/libuv-in-node-js/	
	https://stackoverflow.com/questions/542938/how-do-i-get-the-number-of-days-between-two-dates-in-javascript
	https://strongloop.com/strongblog/node-js-event-loop/
	

	
Why sync requests shouldn't be used:
https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Synchronous_and_Asynchronous_Requests#Synchronous_request

JQuery Ajax (the default behavior is async unless explicitly specified; examples at the bottom of thee page): 
https://api.jquery.com/jQuery.ajax/
  
Async Redux Actions:
https://redux.js.org/advanced/async-actions
https://code.google.com/p/domxsswiki/wiki/jQuery
http://shebang.brandonmintern.com/foolproof-html-escaping-in-javascript/\

npm config set http-proxy 
npm config set https-proxy 

https://eloquentjavascript.net/
https://boards.greenhouse.io/gitlab/jobs/4224948002
https://codeburst.io/build-a-blog-using-gatsby-js-react-8561bfe8fc91
http://2ality.com/2012/09/expressions-vs-statements.html
https://medium.com/dailyjs/the-why-behind-the-wat-an-explanation-of-javascripts-weird-type-system-83b92879a8db

Comments: 
https://medium.freecodecamp.org/code-comments-the-good-the-bad-and-the-ugly-be9cc65fbf83
https://dzone.com/articles/5-best-practices-commenting
https://blog.codinghorror.com/code-tells-you-how-comments-tell-you-why/
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/block
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
https://culttt.com/2012/10/29/javascript-control-flow-structures/
http://2ality.com/2013/09/types.html
https://medium.com/dailyjs/the-why-behind-the-wat-an-explanation-of-javascripts-weird-type-system-83b92879a8db
http://www.javascripttutorial.net/javascript-primitive-vs-reference-values/
http://adripofjavascript.com/blog/drips/the-difference-between-boolean-objects-and-boolean-primitives-in-javascript.html
https://codeburst.io/using-javascript-bitwise-operators-in-real-life-f551a731ff5
http://speakingjs.com/es5/ch24.html
https://www.linkedin.com/learning/react-managing-complex-interactions/initialize-a-new-project
https://www.webmantras.com/blog/inspiration/amazing-free-stock-photos-websites/
http://speakingjs.com/es5/index.html#toc_pt01
http://benalman.com/news/2010/11/immediately-invoked-function-expression/
https://frontendmasters.com/courses/javascript-foundations/compiling-function-scope/

https://medium.freecodecamp.org/the-css-handbook-a-handy-guide-to-css-for-developers-b56695917d11
https://www.youtube.com/watch?v=n1mdAPFq2Os
https://www.youtube.com/watch?v=m_u6P5k0vP0
https://pazzing.talentlyft.com/jobs/full-stack-software-engineer-iYF/new
https://www.remote-developer-jobs.com/job/sticker-mule-javascript-engineer-2/?utm_medium=blog&utm_source=NoiceJobs
https://www.remote-developer-jobs.com/job/494539/?utm_medium=blog&utm_source=NoiceJobs
https://stackoverflow.com/jobs/493275/javascript-developer-arative-technologies?utm_source=remoteok.io&ref=remoteok.io
