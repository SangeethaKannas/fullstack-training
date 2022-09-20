ECMA - European Computer Manufacturer Association 
ECMA Script 
JS: ECMA-262

Technical Committe TC 39
  Standardization of the general purpose, cross platform vender-neutral programming language ECMAScript
  Key principle: "Don't break the web"

Who: All important stakeholders
How: Meetings : Six per year for three days

Other standars
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
   
Support for constants or immutable variables
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
