## Why Javascript
1. High Demand
2. Beginner Friendly - Easy to learn
3. Frameworks
4. Huge Communinity
5. FrontEnd and Backend
6. Block Chain
7. Visual Effects
8. Web and Mobile Apps

## Datatypes

### Seven Types

### Primitive Data types
- String String Represents a sequence of characters (text)
- Number - Represents both integer and floating-point numbers.
- Boolean - Represents a logical value, either true or false
- Null - Represents the intentional absence of any value or object
- undefined - Undefined Represents an uninitialized variable or a function that doesn't return a value
- Symbol - Represents a unique and immutable value, often used as object property keys
- BigInt Represents arbitrarily large integers

    1. Null vs Undefined
2. Examples 
    typeof([]) – object
    typeof({}) - object
    typeof(null) - object
    typeof(undefined) – undefined

### Non-Primitive Datatypes

- Object = stores combination of data as key-value pair
  -- key
  -- Value
  -- Method

Represents a collection of key-value pairs or properties

- Array : Represents an ordered collection of values

- Regexp

- Function : Represents a block of code that can be invoked or called
  -- Bunch of code bundled in a section, which runs only when the function is called
  -- allow for organizing code and code reusability

  -- Function declaration
    Name of a function
    Parameters | arguments ( optional )
    Function body - Code block
    Return (optional)

  -- Function invocation
    Name + matching arguments within parantheses

### Basic Vocabulary
- Variables
  -- Variable declartion
  -- Variable initialization
  -- Variable Assignment

- Hoisting

- Scope
    -- Global Scope
    -- Functional Scope

    Lexical Environment (Lexical scope)
        The physical location (scope) where a variable or function is declared is its lexical environment (lexical scope).

Rule:
    (1) Variables in the outer scope can be accessed in a nested scope; But variables inside a nested scope CANNOT be accessed by the outer scope. (a.k.a private variables.)
     (2) Variables are picked up from the lexical environment.
 Scope Chain
    Nested hierarchy of scope --> JS Engine looks for variables in the scope chain upwards ( its ancestors )


### Keyword / reserved word

### Statement

### Expression

### Built in functions


### Array
   - sort
   - slice
   -    Returns new array
   - splice
   - map
   - filter
   - forEach
   - find
   - every
   - some
   - reduce
   - fill
   - join
   - find
   - isArray
   - findIndex
   - Pop
   - Push
   - shift
   - unshift

 Operators
 Spread operator ...
 Destructuring   []

### Number
  - toFixed
  - toString
  - toPrecision

### Boolean
  - toString

###Built In objects
- Date
- Math

### Examples
1. Tab Navigation - https://lnkd.in/g6gw5_eZ
2. Build Autocomplete - https://lnkd.in/gE67dgqD
3. Star Rating - https://lnkd.in/gUpwWXib
4. Design Popover - https://lnkd.in/g2GEAGHg
5. Design Accordion - https://lnkd.in/gxDw647z
6. Design Carousel - https://lnkd.in/guVm7Q3j
7. Infinite Scroll - https://lnkd.in/gUE74vjQ
8. Implement Debounce - https://lnkd.in/gNGarzTq
9. Tic tac toe - https://lnkd.in/gbYHx757
10. Date Picker - https://lnkd.in/grRwzK6V
11. Implement Throttle - https://lnkd.in/gNGarzTq
12. Analog Clock - https://lnkd.in/gtAQwpAc
13. Custom Promises - https://lnkd.in/gtN8Dbq5
14. Nested Comments - https://lnkd.in/gPeGnbCT
15. Build Calculator - https://lnkd.in/g6q-rngU
16. Search & Display Giphy Images - https://lnkd.in/guAfh2ZW
17. Nested Checkboxes - https://lnkd.in/gduBiE59
18. Poll Widget - https://lnkd.in/gttYARkn
19. Event Emitter - https://lnkd.in/gv23NSfM
20. Promise.all - https://lnkd.in/gznirBwY
21. Flatten Array - https://lnkd.in/g_qKu2KJ
22. Connect Four - https://lnkd.in/gtySDMrc
23. Snake Game - https://lnkd.in/gXzsZjpE

Closures and out-of-scope variables

// Memory leak example - 

function createClosure() {
  const data = 'sensitive data';
  return function() {
    console.log(data)
  }

}

const leakedFunction = createClosure()

//Leaked function retains a reference to 'data' even when it is no longer needed

// Closure retains a reference to the data variable, preventing it from being garbage collected 
when leaked function exists

//### Circular references - happens when object reference each other forming a cycle. 
const objA = {}
const objB = {}

objA.ref = objB
objB.ref = objA

// Neither ObjA nor objB can be garbage collected due to circular reference




