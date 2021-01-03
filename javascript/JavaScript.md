/***
Best Practices
****/

//Always declare variables

Use === instead of ==

Use delete properly

//Function arguments - 2 or feweer ideally

//Functions should do only one thing

//Function names should say what they do

//Functions should have single level of abstraction

//Remove duplicate code

//Don't use flag as function parameters

//Avoid Side effects - Use pure functions whenever necessary
// Dont write to global functions like Arrays etc., instead extend them

const SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray)
    return this.filter(elem => hash.has(elem) === false )
 }

}

//Favor functional programming instead of imperative programming

//Encapsulate conditionals

//Avoid negative conditionals

//Avoid conditionals

//Remove unused code

Javascript concepts

1. Coercion

2. Scope - Function Scope
  ES 6   Blocked scope - with let and const

3. True nature of objects  - Prototype and prototypical inheritance

4. this - occurs with every function invocation - how the function is invoked

5.  Functions - Functions are firstclass objects - very powerful feature
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