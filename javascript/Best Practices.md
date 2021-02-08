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

