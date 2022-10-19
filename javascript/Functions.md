## Types of functions

1. Lambda | arrow functions
    shorter syntax for function expression
    doesnot have own this, arguments, super or new.target
    cannot be used as constructors
    best-suited for non-method functions

2. First Class function
    functions in a language are treated as variable
    - can be passed as an argument to another function
    - returned by another function
    - assigned as a value to a variable

3. First Order Function
   - a func that does'nt accept another function as argument and does'nt return function
   as its return value

4. Higher Order Function (HOF)
   - a func that accepts another function as argument and returns function
   as its return value

   4.1 Closures
  - a higher-order-function that returns a function which has access to its parent function


5. Unary function (monadic) - accepts exactly one argument; stands for a single argument accepted by a function

6. Currying Function
   currying = process of taking a function with multiple arguments and turning into sequence of functions each with only a single argument
   currying = converting n-array function into a unary function

   - great in improving readability and functional composition

7. Pure function
  a function where the return values is determined only by its arguments without any side effects
  - calling this function any number of times in any place will return the same value


