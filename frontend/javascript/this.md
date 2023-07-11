## 'this' keyword

### What?
- Fundamental thing to understand is : Where a function is invoked?
- Type of binding in JS
  1. Default Binding
  2. Implicit Binding
  3. Explicit Binding
  4. Constructor Call Binding

#### Default Binding
  Rule 1 : If a function housing a this reference is a standalone function, then that function is bound to global object

  `
  function logName() {
  console.log('Name : ' + this.name);
  }

  const name = 'Testing';
  logName();

  //Output
  Name : Testing
  `

  // Since logName is unattached standalone function
 // In 'use strict' mode - this will result in Type Error

#### Implicit Binding
 Binding Rule: A function can use an object as its context, only if that object is bound to it at call site

 `
 function log() {
    console.log(this.age + ' years')
 }

 const obj = {age: 22};

 obj.log();   // 22 years

 const newObj = {age; 22, log:log, nestedObj : { age: 26}}
 obj.nestedObj.log() // 26 years
 `

//Calling a function using dot (.) notation, 'this' is implicitly bound to the object the function is being called from

#### Explicit Binding

- to force a function to use an object as its context without putting a property function reference object

- Utility Methods available to all function [[prototype]]
1. call()
2. apply()

log.call(obj); // 22 years

#### Currying
- Pass around the function multiple times, to new variables, every invocation use same context, because it has been locked to that object
- Hard Binding
   -- a way to lock a context into a function call and truly make that function into a method

const curryFunction = function () {
  log.call(myObj);
}

curryFunction(); // 22 years
setTimeout( curryFunction, 0);  //22 years

curryFunction.call(window)   // 22 years

// hard-bound curry function can no longer have 'this' context overrides

#### Constructor Call Binding

When a function is invoked with new keyword in front of it, known as constructor call

1. A brand new object is created
2. newly constructed object is linked


-------------------------------------------------------------
const obj = {
  name: 'this demo',
  show: function(){ console.log(this); return this.name }

}

obj.show();

Vs

const obj = {
  name: 'this demo',
  show: () => { console.log(this); return this.name }
}

obj.show();
