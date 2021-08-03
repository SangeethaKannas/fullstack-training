ECMA - European Computer Manufacturer Association 
ECMA Script 
JS: ECMA-262

Technical Committe TC 39
  Standardization of the general purpose, cross platform vender-neutral programming language ECMAScript
  Key principle: "Don't break the web"

Who: All important stakeholders
How: Meetings : Six per year for three days

Other standards
  JSON Syntax spec'n ECMA 404
  ECMA I19n API spec ECMA 402

History

   ES 4 Abandoned
   ES 5 = 5th Edition / Dec 2009 : ECMAScript Language Spec  
   ES 6 = 6th Edition / Jun 2015 : ECMAScript 2015 Language Spec

Propsal process
  Stage 0  Strawperson
  Stage 1  Proposal: Champion
  Stage 2  Draft
  Stage 3  Candidate
  Stage 4  Finished

How to : https://timothygu.me/es-howto/

Repository
https://github.com/tc39/notes.

JS engines | Virtual Machines
   
   Chrome - V8 engine
   Safari - JavaScriptCore engine
   Firefox - SpiderMonkey (except iOS)
   Edge - Chakra -> Chromium

Tips
Module scope: node script.js
Global Scope: node < script.js

New Features
   Opt-in block scope
   Arrow functions
   Iterable objects: for-of, for-await-of
   "Spread" syntax
   "Rest" syntax
   Destructuring
   Asynchronous programming improvements
   Template literals
   Typed Arrays

Enhancements
   Function Parameters : Default Parameters, Destructuring
   
Transpiling: Babel  

let

const - cannot be reassigned; Assignment to constant  variable is not possible

String literals  `` and pass variables ${...}

Block Scoping

Arrow functions  default parameters

Spread Operators    Object Destructuring       Array functions - map reduce filter  


class <Name>  {extends}
 constructor()

Promises
async await

generators 
yield operator


ES 2019

String.prototype.trimStart and trimEnd
Symbol.prototype.description

Optional catch binding

Array.sort()
Array.{flat, flatMap}

Object.fromEntries - opposite of object.entries

### Versions
- ES 3
- Es 5
- ES 6
- ES 7
- ES 8
- ES 2015
- ES 2016
- ES 2017
- ECMAScript 2016
- ECMAScript 2015

ES 2015
Defining variables
let and const
Scope = portion of code where the variable is visible

local variables inside function - similar to function parameters
Local variables take precedence over global variables with same name

let and const
const doesnot provide immutability to objects, excpet the reference cannot be changed

Arrow functions
  encourage use of smaller functions

  returning an objecte --> Return object to be wrapped in parantheses

  tihs scope in arrow functions is inherited from execution context

  An arrow funtion does not bind this at all, so its value will be looked up at the call stack

  CANNOT be used for :

  1. constructors
  2. when dynamic context is not needed
  3. for event handling, DOM event listeners set this to the target element

Classes
   Do not have explicit class variable declaration ==> Initialize a variable in constructor
   Static methods executed on class

   Getter and Setters
   get variableName
   set variableName

Default Parameters

   ( { color = 'yellow'})

   ( { color = 'yellow'} = {})

Template Literals

  Multiine string  `dsfsdfds sdfsdf`.trim()
  interpolate variables and expressions in strings  const interpolated = interpolate`I paid ${10}€`
           function interpolate(literals, ...expressions) {
              let string = ``
              for (const [i, val] of expressions) {
              string += literals[i] + val
              }
              string += literals[literals.length - 1]
              return string
            }

  create DSL with template tags  Domain Specific Lanauge eg., styled components in React


Destructuring
 const {firstName: name, age} = person;
 const [first, second] = array

Enhanced Object literals 

Shorter Syntax
 {
  variable
 }

 A prototype can be specified with 
 const x = {
   ___proto___ : anObject
 }

 super() {

 }

 Dynamic properties 
   const a = {
     ['b' + ':" + 'c']: 'z'
   }
   a.b_c

Loops
  for-of loop - iterates of property values
  for-in loop - iterates the property names

Promise
  Proxy for a value that will eventu
  Async functions : uses promises API as building blocks

  Other APIS : Battery API, Fetch API and Service Workers

