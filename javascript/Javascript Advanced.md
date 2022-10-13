## Javascript Advanced


### Javascript Engine


- Javascript Runtime
- Interpreter/Compiler /JIT Compiler
- Writing Optimized Code
- Call stack + memory Heap
- Stack overflow + Memory Leaks
- Garbage Collection

#### Enginers - JS engines | Virtual Machines
   - Chrome - V8 engine
   - Safari - JavaScriptCore engine
   - Firefox - SpiderMonkey (except iOS)
   - Edge - Chakra -> Chromium

## Node.js
- Single Threaded Model

## Others

- Execution Context
- Lexical Environment
- Scope Chain
- Hoisting
- Function Invocation
- Function Scope Vs Block Scope
- Dynamic Vs Lexical Scope
- this - call, apply and bind
- IIFE

## Types
- Static Vs Dynamically Typed
- Primitive Types

## Pass by Reference and Pass By Value
- Type Coercion
- Arrays, Functions and Objects

## The 2 Pillars
- Closures
- Prototypical Inheritance

## Higher order functions
- Functions Vs Objects
- Schme + Java

## OOP Vs FP
### OOP
- this keyword
- new keyword
 - Prototype
  ES 6 classes
  Java
  Inheritance
  Object.create
  Private Vs Public
  4 principles of OOP

### FP
  Composition vs inheritance
  Curry
  Partial Application
  Pure Functions
  Referential Transparency
  Compose
  Pipe

 ## Extras+
 ###  Asynchronous Javascript
      Web APIs
      Async / Await
      Callbacks
      Microtask Queue ( Job Queue )
      Task Queue (callback Queue )
      Promises
      Event loop

  ### Error handling

  ### Modules
      Native ES Modules
      CommonJS
      UMD
      AMD
      IIFE

### Others
Deep copy : structuredClone (obj0)

### Check if online or offline

window.addEventListener('online', () => {})
window.addEventListener('offline', () => {})


window.navigator.onLine


### Structure clode

_.cloneDeep

structuredClone(object);


### Send Beacon

const body = {events}
const headers = {type: 'application/json' }
const blob = new Blob([JSON.stringify(body)], headers)

//Executes when user closes or switches tab or closes session

document.addEventListener('visibilityChange', () => {
  if(document.visibilityState === 'hidden') {
     navigator.sendBeacon('/events', btob)
     //Guaranteed to send event even when session ends
  }
});
