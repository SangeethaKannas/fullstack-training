/**
 * Breath first search for graphs
 */

 function bfs (graph, root){
     var nodesLen = {};

     for(var i=0;i<nodesLen.length;i++){
         nodesLen[i] = Infinity;
     }

     nodesLen[root] = 0;
     var queue = [root];
     var current;

     while(queue.length != 0) {
         current = queue.shift();

         var curConnected = graph[current];
         var neighborIndex = [];

         var index = curConnected.indexOf(1);
         while(idx != -1) {
             neighborIndex.push(index);
             index = curConnected.indexOf(1, idx + 1);
         }

         for(var j =0;j < neighborIndex.length; j++) {
             if(nodesLen[neighborIndex[j]] === Infinity) {
                 nodesLen[neighborIndex[j]] = nodesLen[current] + 1;
                 queue.push(neighborIndex[j]);
             }
         }
         return nodesLen;
     }

     
 }