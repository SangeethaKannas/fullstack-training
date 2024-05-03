### Javascript
1. Write a program for the following: add(4)(3)(4)
2. Write a fibonacci series program by limt input?
3. What are JavaScript Data Types?
4. What are all the methods in array & object?
5. What is the use of isNaN function?
6. What is negative infinity?

#### Function
What is ‘this’ keyword in JavaScript?
	console.log(this); - window
	function() {
		console.log(this);
	}

	function eventHandler(event) {
		console.log(this);
	}

Explain the working of timers in JavaScript? Also elucidate the drawbacks of using the timer, if any?
	setTimeout() {}
	setInterval() {}

Explain the difference between “==” and “===”?
What is the ‘Strict’ mode in JavaScript and how can it be enabled?
How will you explain closures in JavaScript? When are they used?
What is the difference between .call() and .apply()?
.call() --> simply calling
sending arguments normally
.apply() -->
sending argument normally, events can be changed
NO ?

Define event bubbling? -No
What is Variable hoisting? explain?
What is Call back functions? explain?
What is the difference between Call by value and call by reference?
Method overriding and overloading.  Does JavaScript support?
What is Prototyping in JavaScript? write an example? explain?
What is the difference between stopImmediatePropagation() VS stopPropagation Vs preventDefault() methods?
AJAX

What are the difference between GET and PUT request?
What are the decodeURI() and encodeURI()?
How are JavaScript and ECMA Script related?
What is JavaScript Namespace?

CSS :
What is box model?
Quickly explain 30 css properties with values?
What is CSS Image Sprites?
What is the use of cal() function is css3?
Explain what elements will match each of the following CSS selectors:
div, p ->  group
div p -> inside all children
div > p ->  parent inside child
div + p -> immediate or direct children
div ~ p -> every paragraph element that are placed by a div element ( siblings )

Explain why we use css3 properties? explain some of them?
Explain “Atrribute Selector” in CSS?
What is the use of position peroperties? what are the values we can use and explain them?
What are pseudo classes?
What is LESS and SASS?
How to wrap text. What is the difference between break all and word break?

HTML5:
What are some of the key new features in HTML5?
What are “web workers”?
What is HTML5 Web Storage? Explain localStorage and sessionStorage.
What’s the difference between the <svg> and <canvas> elements?
What is the difference between span and div?
width, height dont apply for inline elements

inline elements

CSS Latest version
Css Specificity
!important 
box-model
span vs div
z-index
position : fixed vs absolute
display : inline-blocck vs block
:pseudoclasses
:nth, :first-child, :disabled, : hover
	find if a element is visible or checked
Transformations
Cross Browser Css
 -types browsers families
Attribute selectors
Modal


HTML 5
Canvas Vs SVG

1. Difference between var and let (Asked 90% times)
2. What are promises and how are they better than callbacks ? (Asked 90% times)
3. Polyfill for promise all
4. Polyfill for bind
5. What is async/await and how is it different from promises ?
6. What are the different types of browser storage ?
7. Difference between function expression and function declaration.
8. Difference between null and undefined
9. Difference between '==' and '==='
10. Difference between spread and rest operator
11. Difference between arrow function and normal function.
12. What is prototype and prototype chain ?
13. Check if these arrays are equal
Input 1 - A = [4,2,7,8] B = [8,4,2,7] Output - True (If the arrays contains same element they are considered irrespective pf their positions)
Input 2 - A = [6,2,5,0] B = [6,2,2,5] Output - False
14. Reverse a string
15. What are closures
16. What are some practical usage of closures -
 Answer: Memoisation, data hiding/encapsulation, currying..

Some output based questions-
 // Code 1:
	function foo(){
	 setTimeout(()=>{
	  console.log(a);
	  console.log(b);
	 },100);
	 var a = 2;
	 let b = 12;
	}
	foo();

// Code 2:
	function foo(){
	 for(var i = 0; i < 3; i++){
	  setTimeout(()=> console.log(i),2000);
	 }
	}
	foo();


### Design level questions
  Cross Browsers – Challenges – faced in safari MAC
 What is time line in chrome debugger?
Latest technologies introduction – Gulp Grunt etc..
 Standards and Best practices – Was able to say two or three
Performance trouble shooting in UI Side
 Common code refactoring tools in jshint and jslint ? have you integrated this with any build tools ?
HTML 5
What are the main reason we are moving to HTML 5?
JavaScript
Design patterns in javascript – Only prototypical Design pattern
Require JS – exposure –Very minimal exposures
What is a CORS request?  -
Datatype of null ?
File Upload button – how to prevent upload when filesize is too large ?
Operators
== and ===
Object Oriented JS
Prototypical inheritance - explain
Instanceof
Functional JS
Methods available in function object prototype ?


### Output of following code
+true
!'A Text'

// 1 and false

Which of the below is a truth value in JS?
''    []    NaN, null    undefined   None of the above

var User = function() {}
User.prototype.attributes = {
  isAdmin: false
}

var admin = new User("User")
guest = new User('Guest')

admin.attributes.isAdmin = true

console.log(admin.attributes.isAdmin)
console.log(guest.attributes.isAdmin)
// true true


////////////////////////////////////////

const add = x=> y=> z => {

  console.log(x, y, z);

  return x+y+z'
}

add(7)(8)(10);

function multiply(x) {
  return function(y) {
    return function(z) {
      return function (w) {
        return function (p) {
          return x * y * z * w * p;
        }
      }
    }
  }
}

console.log(mul (6)(7)(8)(9)(10))
///////////////////////////////////////
which of the following are true
   null == undefined
   typeof alert === 'function'
   Number(undefined) is NaN
   null >= 0

////////////////////////////////////////


(() => {
  let x,y;
  try {

    throw new Error()
  }catch(e) {
    (x=1), (y=2)
    console.log(e)
  }
  console.log(x)
  console.log(y)

})()

/////////////////////////////////////////////////

let info = {

  name: 'Test',
  rollNo: '012',
  Section: 'A',
  dispInfo: function() {
    console.log(this);
  }
}

let info2 = {

  name: 'Test',
  rollNo: '012',
  Section: 'A',
  dispInfo: function() {
    console.log(this);
  }
}


info.dispInfo();
info2.dispInfo();

//////////////////////////////////////////////////////

.example { color: 'yellow'; }
ul li a {color: blue; }
ul a { color: green; }
a { color: red; }

<ul>
   <li><a href='#' class="example">Test</a></li>
   <li>item 1</li>
   <li>item 2</li>
</ul>

////////////////////////////////////////

	let person = 'A'
	if(true) {
	  let person = 'B';
	  if(true) {
	    console.log(person);
	  }
	}

	console.log(person);

////////////////////////////////////////

	function sum(a, b)  {
	  return a + b;
	}
	sumn(1, '2');


let names = ["Helen", "Joe", "Sara"];
let ages = [24, 32, 34];
let profession = ["Marketer", "Teacher", "Nurse"];
let hobbies = {
  Helen: ["Karate", "Reading"],
  Joe: ["Soccer"],
  Sara: ["Hiking", "Swimming", "Calligraphy"],
};

const getCombinedData = (
  names = [],
  ages = [],
  profession = [],
  hobbies = {}
) => {
  let combinedObject = {};

  if (names.length > 0 && ages.length > 0 && profession.length > 0) {
    let reducer = (accumulator, currentValue, index) => {
      accumulator[currentValue] = {
        age: ages[index],
        profession: profession[index],
        hobbies: [...hobbies[currentValue]],
      };
      return accumulator;
    };
    combinedObject = names.reduce(reducer, {});
  }

  return combinedObject;
};

console.log(getCombinedData(names, ages, profession, hobbies)["Joe"]);


Question 2

 First I would partition the data ( large file ) based on the usage and the sensitive nature of the data. Once that is done I will create separate microservices for accessing the partitioned data. Here I would be using node-js and mongodb for accessing the data. I would use service bus for inter-container communication

 I assume the data does not follow a rigid schema definition


# Question 1
let x = {
  flag: 1,
  toString:  function() {
    return this.flag++;
  }
}

if (x ==1 && x ==2 && x==3) {
  console.log("Hello")
} else {
  console.log("Bye ")
}

# Question 2
let x = {
  name: 1
}

if (x ==1 && x ==2 && x==3) {
  console.log("Hello")
} else {
  console.log("Bye ")
}

"Hello"
"Hello"

# Question 3
let x = {
  flag: 1
}

if (x ==1 && x ==2 && x==3) {
  console.log("Hello")
} else {
  console.log("Bye ")
}

"Hello"

# Question 4
Case 1: 
function show () {
 {
   (function () {
     var x = 9;
     var y = 10;
   })();
 } 
  console.log(x, y)
}
show();


Case 2: 

function show () {
 {
   var x = 9;
  var y = 10;
 } 
  console.log(x, y)
}
show();


Case 3: 
function show () {
 {
   let x = 9;
  let y = 10;
 } 
  console.log(x, y)
}
show();

Case 1: undefined, undefined, case 2: 9, 10, case 3: undefined, undefined or reference error

# Question 5
console.log( 4 + + + "4");
9
# Question 6
let b = "4";

console.log(b +++ 3, b);

7, "4"

# Question 7
function ArrayBoolean(){
  if([] && [1])
    return [true, true];
  else if([] && ![1])
    return [true,false];
  else if(![] && [1])
    return [false,true];
  else
    return [false,false];
}
ArrayBoolean();

[false, true]

# Question 8
let array = [1, 2]

(array).push(3)

console.log(array)
[1, 2, 3]

# Question 9
let a = 9;
let b = 10;
let c = 0;

console.log(a && b && c)

false

# Question 10
let a = 9;
let b = 10;
let c = 0;

console.log(a && c && b)

0

# Question 11
function Greetings(name) {
  return
    "Good morning, " + name
}

console.log(Greetings("Giovanni"))

undefined


1. Arrow function and what is the difference apart from syntax?
2. Call, apply bind (write down the code for one of them)
3. Generator Function and write a range Generator functions
4. Real time example of Generator Functions?
5. ES6 features
6. Write down the code for spread operator, rest operator and Object destructuring?
7. Difference between forEach and map?
8. Difference between Object.assign(), Object.create()? Which one mutates the data ?
9. What is a Promise ?
10. Write a function component in react which returns a lazy loaded Button Component and add the Suspense with fallback UI?
11. What is Error Boundary, How can we write a separate Error Boundary Component?
12. What is Redux, Why Redux, Core principles of redux?
13. Write down a basic sum function using Typescript and how do you accept params in either string or number?
14. What are Generics functions (inside Typescript), can you write down types?
15. Abstract function means?
16. Software Principles (DRY, KISS) how do you implemented in your codebase
17. Git hook (pre commit, husky)
18. SOLID Principles
19. Write down test cases? What does beforeEach and beforeAll do?
20. Difference between mock vs spy in testing?
21. Explain Testing Pyramid?
22. Differences between Integration Testing vs End to End testing?
23. Which tool you have used for above of them?
24. What do we mean by code coverage? How do you measure code coverage?
25. What is meant by OWASP top 10?
26. What is meant by CSP, XSS (where do we set these CSP headers? In Client or Server)
27. What is meant by CORS? (Where do we set them)
28. DDD?
29. Explain me the various ways of Performance Optimization that you can do at any level (ex: CSS, JS, HTML)
30.What is CRP?
31. What are memory leaks in react? Why do they happen?
32. Promise.all vs Promise.any vs Promise.race?
33. How do you configure typescript in your project?
34. How many ways you can create an object?
35. What does we have in.tsconfig.json? can you explain them?


