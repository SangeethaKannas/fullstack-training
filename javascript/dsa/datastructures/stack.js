/*  Stacks 

This module will just define a basic stack functionality with following functions
LIFO  Last In First Out
1. Push 
2. Pop
3. Peek
4. Print
5. Seek | Search

**/


//Creats a stack
var Stack = function () {

    this.count = 0;
    this.storage = {};

    //Add a value to stack
    this.push = function(value) {
        this.storage[this.count] = value;
        this.count++;
    }

    //Deletes a value and returns the deleted value, If stack is not empty
    this.pop = function() {
        if(this.count === 0) {
            return undefined;
        }
        this.count--;
        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //Returns the lastly added value
    this.peek = function() {
        return this.storage[this.count - 1];
    }

    //Returns the size of the stack
    this.size = function() {
        return this.count;
    }

    //Searches for a particular record
    this.search = function(i) {
        return this.storage[i];
    }
}