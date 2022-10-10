**ECMA - European Computer Manufacturer Association**
ECMA Script 
JS: ECMA-262

**Technical Committe TC 39**
  Standardization of the general purpose, cross platform vender-neutral programming language ECMAScript
  Key principle: "*Don't break the web*"

Who: All important stakeholders
How: Meetings : Six per year for three days

Other standards
  JSON Syntax specification ECMA 404
  ECMA I19n API spec ECMA 402

History

1.    ES 4 Abandoned
2.    ES 5 = 5th Edition / Dec 2009 : ECMAScript Language Spec
3.    ES 6 = 6th Edition / Jun 2015 : ECMAScript 2015 Language Spec

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

# ES 2015
## New Features
-  Opt-in block scope
-  Arrow functions
-  Classes
-  "Spread" syntax
-  "Rest" syntax
-  Destructuring
-  Asynchronous programming improvements
-  Template literals
-  Typed Arrays
-  Set
-  Map
-  Generators

## Enhancements
- Function Parameters: Default Parameters
- Iterable objects: for-of, for-await-of
- New String methods
- New Object methods

# ES 2016
- Array.prototype.includes()
- Exponentiation operator

# ES 2017
- String padding
- Object: values(), entries(), getOwnPropertyDescriptors()
- Trailing Commas
- Async functions
- Shared memory and Atomics

# ES 2018




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


# ES 2019

String.prototype.trimStart and trimEnd
Symbol.prototype.description

Optional catch binding

Array.sort()
Array.{flat, flatMap}

Object.fromEntries - opposite of object.entries