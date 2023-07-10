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

