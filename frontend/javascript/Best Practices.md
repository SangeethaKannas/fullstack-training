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




1. Learn to use all recent es6 utilities, for example, If I ask you to check if the array [1, 3, 6, 8, 10, 15, 17] contains any element greater than 10, then you'll probably write a for loop and individually check each element. But If you had known about Array.some() then probably you'll solve this question in one line, mind-blowing isn't it 😎 ?

2. Have a clear understanding of how a util function treats your input data. For example, Array.prototype.splice() mutates your original array, on the other hand, Array.prototype.slice() does not mutate the array.

3. Learn about Shallow copy and Deep copy, this concept is really important when you are dealing with nested data. All methods like slice, concat, Object.create, etc perform a shallow copy. While JSON.parse(JSON.stringify()) will do a deep copy. This will avoid a lot of bugs.

4. Ditch for loop and use reduce. I have found reduce really amazing! Whenever you encounter a case where you have to populate an output(array or any single value) from iterable (array or Objects) then reduce should be your first choice.

5. Know the time complexities of each JavaScript function, for example
a) Array.prototype.every() -> O(n)
b) Array.prototype.push() -> O(1)
c) Array.prototype.reduce() -> O(n)