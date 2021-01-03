
function testForPalindrome(givenWord) {
    //Palindrome Testing

    var rword = "";

    rword.charAt();

    rword.charCodeAt()

    rword.concat()

    rword.endsWith()   rword.startsWith()

    String.fromCharCode(114)

    rword.includes()

    rword.indexOf(), rword.lastIndexOf()

    rword.match(   )

    rword.repeat()

    rword.replace()

    rword.search()

    rword.slice()

    rword.split()

    rword.substr()

    rword.substring()

    rword.toLowerCase()

    rword.toUpperCase()

    rword.trim()



    //Reverse thee word
    for(let i = 1;i <= givenWord.length;i++) {
        rword += givenWord[givenWord.length - i];
    }

    return rword === givenWord;
}


Write one Javascript statement on the indicated line that will make the printed number always be between 10 and 20 *
let x = 2;
let y = 8;
const a = function(b) { return function(c) { return x + y + Math.abs(b) + c; } };

// Statement will go here

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));


let x = 2;
let y = 8;
const a = function(b) {
console.log("Random * 10 " + b)
return function(c) {
console.log(x, y, Math.abs(b), c)
return x + y + Math.abs(b) + c; } };

// Statement will go here

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));


Fill in the ? with a Javascript expression to set the scale for an image having a given original height and width so that it can exactly fit inside a maxdim-by-maxdim square area (touching at least two edges). *
function scaleImage(width, height, maxdim) {
  var scale = ?;
  return [scale * width, scale * height];
}




Interview Questions

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
