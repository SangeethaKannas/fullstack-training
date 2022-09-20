## /***  Best Practices   ****/

- Always declare variables
- Use === instead of ==

### Objects
- Use delete properly
- User object lookup instead of Switch statements

### Functions
- Function arguments - 2 or feweer ideally
- Functions should do only one thing
- -  Avoid Side effects - Use pure functions whenever necessary
- Function names should say what they do
- Functions should have single level of abstraction
- Don't use flag as function parameters
- Favor functional programming instead of imperative programming

### General
- Remove duplicate code
- Remove unused code
- Dont write to global functions like Arrays etc., instead extend them
`
const SuperArray extends Array {
  diff(comparisonArray) {
    const hash = new Set(comparisonArray)
    return this.filter(elem => hash.has(elem) === false )
 }

}
`

### Conditionals 
- Encapsulate conditionals
- Avoid negative conditionals

