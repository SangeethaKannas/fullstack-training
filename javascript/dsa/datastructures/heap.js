/***
 * 
 * Heap 
 * 
 * Types : MinHeap or Max Heap
 */

 let MinHeap = function() {
     let heap = null;

     this.heap = function(num) {
         heap.push( num );
         if(heap.length > 2) {
            let index = heap.length - 1;
            let parentIndex = Math.floor(idx/2);
            while(heap[index] < heap[parentIndex]){
                if(index >= 1){
                    [heap[parentIndex, heap[index]]] = [heap[index], heap[parentIndex]] 
                    if(parentIndex > 1) {
                        index = parentIndex;
                    } else {
                        break;
                    }
                }
            }
         }
     }

     this.remove = function() {
         let smallest = heap[1];
         if(heap.length > 2) {

            //copy last node to 1st node
            heap[1] = heap[heap.length - 1];

            //delete last node
            heap.splice(heap.length -1 );

            let i = 1;
            let left = 2 * i;
            let right = 2 * i + 1;
            while( heap[i] >= heap[left] || heap[i] >= heap[right]) {
                if(heap[left] < heap[right]) {
                    [heap[i], heap[left]] = [heap[left], heap[i]];
                    i = 2 * i; // go left
                } else {
                    [heap[i], heap[right]] = [heap[right], heap[i]];
                    i = 2 * i + 1; //go right
                }
                left = 2 * i;
                right = 2 * i + 1;
                if(heap[left] === undefined || heap[right] === undefined) {
                    break;
                }
            }           

         } else if(heap.length == 2) {
             heap.splice(1, 1);
         } else {
            return null;
         }

         return smallest;
     }

     this.remove = function() {
         var result = new Array();
         while(heap.length > 1) {
             result.push(this.remove());
         }
         return result;
     }
 }