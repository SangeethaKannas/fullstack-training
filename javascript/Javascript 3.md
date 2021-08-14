### Promise - object - async tasks ( third party process doing the task )

Creating a promise

Using a promise

this - is always  used inside a function - merely a reference to another object

this inside a function, inside a method, function run with call, apply and bind

const promise = new Promise((resolve, reject) => {
  console.log(1);
  setTimeout(() => {
    console.log("timerStart");
    resolve("success");
    console.log("timerEnd");
  }, 0);
  console.log(2);
});
promise.then((res) => {
  console.log(res);
});
console.log(4);

promise.AllAny
promiseAllsettled

## Objects
### Constructor 

 special function acts as mold to create new objects
 
 Defining a constructor 
 using a constructor
 
 
 Set properties inside a constructor
 set methods in prototype property


### Array Methods

Pop vs push
map - return value
shift vs pop
map vs filtering-todos

Array methods
	unshift Shift
	Push and Pop
	slice and splice
	concat


Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

//To make a DISTINCT values in array
Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i]) && this[i]!=null) {
            arr.push(this[i]);
        }
    }
    return arr; 
} 

rest operato
object destructuring vs array destructuring
