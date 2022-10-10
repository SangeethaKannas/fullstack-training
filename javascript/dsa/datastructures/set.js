/*** 

Sets 

Sets are data structures with unique elements

Reference for Sets

Functions
  1. Push
  2. Delete
  3. 

*/

function Set() {
    this.collection = [];

    this.has = function(element) {
        return this.collection.indexOf(element) !== -1;
    }

    this.values = function () {
        return this.collection;
    }

    this.add = function(element) {
        
        if(this.has(element) === false ) {
            this.collection.push(element);
        }

        return false;
    }

    this.remove = function(element) {
        
        if(this.has(element) === true) {
            this.collection.remove(element);
            return true;
        }

        return false;
    }


    // this.createSetFromCollection = function(collection){
    //     this.collection = [];
    //     for(var i =0;i< collection.length;i++) {
    //         this.collection.push(collection[i]);
    //     }
    // }

    //Merges two sets and updates the first set with elements of second set
    this.union = function(otherSet) {

        var secondSet = otherSet.values();
        var unionSet = new Set();

        this.collection.forEach(function(e){
            unionSet.add(e);
        });

        secondSet.forEach(function(e) {    
            unionSet.add(e);            
        });

        return unionSet;
    }

    //Creates a new set by merging the common elements of two given sets
    this.intersection = function (otherSet) {
        var secondSet = otherSet.values();
        var interSet = new Set();

        this.collection.forEach(function(e){
            if(otherSet.has(e)) {
                interSet.add(e);
            }            
        });
        
        return interSet;
    }

    //Returns difference between two sets | just the opposite of intersection
    this.difference = function (otherSet) {
        var secondSet = otherSet.values();
        
        var diffSet = new Set();
        this.collection.forEach(function(e){
            if(!otherSet.has(e)) {
                diffSet.add(e);
            }            
        });
        
        return diffSet;
    }

    //Checks if the current set is a subset of current set
    this.isSubSet = function (otherSet) {
        return this.collection.every(function(value) {
            return otherSet.has(value);
        });
    }
 
}

