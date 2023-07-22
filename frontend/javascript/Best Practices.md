##   Best Practices


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
- Always declare variables
- Use === instead of ==

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


### Performance
#### Debounce
export const debounce = (func, wait) => {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      // eslint-disable-next-line prefer-spread
      func.apply(null, args);
    }, wait);
  };
};


### Variable names
1. Use proper variable names
  - concise, descriptive and pronouncable, explains the purpose
2. Be careful with loose equality operator
3. Use spread operator to add an proeprty conditionally

const ob = {
  property1: 'a',
  property2: 'b',
  ...(includeProperty3 && {property3: 'c' })
}

4. Avoid delete keyword