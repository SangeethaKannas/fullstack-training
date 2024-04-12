##   Best Practices
### General rules
- Follow Standard conventions
- KISS: Keep it simple silly. Reduce complexity as much as possible
- Boy scout rule: Keep the campaign clound cleaner than you found it.
- Always find root cause: Always find the root cause of a problem

- Remove duplicate code
- Remove unused code
- Dont write to global functions like Arrays etc., instead extend them
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

### Design Rules
- Keep configurable data at higher levels
- Prefer polymorphism to if/else or switch/case
- Separate multi threading code
- Prevent over configurability
- Use dependency injection
- Follow law of Demeter: A class should know only its direct dependencies

### Understandability tips
- Consistent: Do all similar things in same way
- Use Explanatory variables
- Encapsulate boundary conditions: 
    - Boundary conditions are hard to keep track
    - Put processing for them in same place
- Prefer dedicate value object to a primitive type
- Avoid logical dependency: Dont write methods which works correctly depending on something else in same class
- Avoid negative conditionals


### Names rules
- Choose descriptive and unambigious names
- Make meaningful distinction
- Use pronounceable names
- Use Searchable names
- Replace magic numbers with named constants
- Avoid encodings. Dont append prefixes or type information

### Functions rules
- Small
- Do one thing
- Use descriptive names.
- Prefer fewer agreements
- Have no side effects
- Dont use flag arguments. Split method into several independent methods that can be called from client without the flag

### Comments Rules
- Always try to explain yourself in code
- Don't be redundant
- Dont add obvious noise
- Dont use closing brace comments
- Dont comment out code. Just remove
- Use as explanation of intent
- Use as clarification of code
- Use as warning of consequences

### Source code structure
- Seperate concepts vertically
- Related code should appear vertically dense
- Declare variables close to their usage
- Dependent functions should be close
- Similar functions should be close
- Place functions in the downward directions
- Keep lines short
- Dont use horizontal alignment
- Use whitespace to associate related things and disassociate weakly related
- Dont break indentation

### Objects and Data structures
- Hide internal structure
- Prefer data structures
- Avoid hybrid structures ( half object and half data)
- Should be small
- Do one thing
- Small number of instance variables
- Base class should know nothing about its derivatives
- Better to have many functions than to pass some code into a function to select a behaviour
- Prefer non-static methods to static methods

### Tests
- One assert per test
- Readable
- Fast
- Independent
- Repetable

### Code smells
- Rigidity. Software is difficult to change. A small change causes a cascade of subsequent changes
- Fragility. Software breaks in multiple places due to a single change
- Immobility. You cannot reuse parts of code in other projects because of involved risks and high effort.
- Needless complexity
- Needless Repetition
- Opacity. Code is hard to understand

