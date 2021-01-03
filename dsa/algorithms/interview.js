/**
 * 
 * Interview based preparation for javascripts
 * 
 * 1. Hoisting
 * 2. Callstack
 */

 //1. Hoisting

//After hoisting this will be like
/**
 *   function simpleFunction(){
       ....
     }

     var variableFunction() {
         ...
     }

     try {
         ...
     }
     ....
 * 
 */


try {
    simpleFunction();
} catch(err) {
    console.log(err);
}

try {
    variableFunction();
} catch(err) {    
    console.error("Error while calling variableFunction : " + err.message);
}

function simpleFunction() {
    console.log(" I am a plain function");
}

//This is a function variable and here the variable declaration is hoisted above 
var variableFunction = function() {
     console.log("I am a function and stored in a variable");
}


//2. Callback and IIFE
function Callback() {
    console.log("I am in a callback");
}

(function MainFunction(Parameter1, callback){
    console.log('I am in Function ' + Parameter1);
    callback && callback();
})("Hi", Callback);
