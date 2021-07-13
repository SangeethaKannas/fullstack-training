/***

Priority Queue - Queues with priority

*/

function PriorityQueue() {
    collection = [];

    this.print = function() {
        console.log(collection);
    }

    this.enqueue = function(element) {
        if(this.isEmpty()) {
            collection.push(element);
        } else {
            var added =false;
            for(var i=0;i< collection.length;i++) {

                //Check elements and collections current elements priority
                //Adds if priority of element is lower
                if(element[1] < collection[i][1]) {
                    collection.split(i,0,element);
                    added = true;
                    break;
                }
            }

            if(added === false) {
                collection.push(element);
            }
        }
    }

    this.dequeue = function() {
        return collection.shift()[0];
    }
}