/** Binary Search Tree 

A Tree with just two childrens per parent and the tree is also ordered

****/

class Node {
    constructor(data, left =null, right = null) {
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class BST {
    constructor() {
        this.root = null;
    }

    print() {        
        const printTree = function(node){
            console.log(node.data);
            if(node.left !== null) {
                printTree(node.left)
            }

            if(node.right !== null) {
                printTree(node.right);            
            }            
        }
        console.log("Printing the Tree");
        printTree(this.root);        
    }

    add(data) {
        
        const node = this.root;
        
        if(node === null) {
            this.root = new Node(data);

        } else {
            const searchTree = function(node) {
                
                if(data < node.data) {
                    
                    if(node.left === null) {
                        node.left = new Node(data);
                        return;

                    } else if(node.left !== null ) {
                        return searchTree(node.left);
                    }

                } else {
                    if(node.right === null ) {                        
                        node.right = new Node(data);
                        return;

                    } else if(node.right !== null) {
                        return searchTree(node.right);
                    }                    
                }
            };

            return searchTree(node);
        }
    }

    findMin(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }

    findMax(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }

    find(data){
        let current = root;
        while(current.data !== data){
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
            if(current === null) {
                return null;
            }
        }
        return current;
    }

    isPresent(data){
        let current = this.root;
        while(current){
            if(data === current.data) {
                return true;
            }
            if(data < current.data) {
                current = current.left;
            } else {
                current = current.right;
            }
        }
        return false;
    }

    remove(data) {
        const removeNode = function(node, data) {
            if(node === null) {
                return null;
            }
            if(data === node.data) {
                //If node is a leaf
                if(node.left === null && node.right === null){
                    return null;
                }

                //If node has no left child
                if(node.left === null){
                    return node.left;
                }

                //If node has no right child
                if(node.right === null) {
                    return node.right;
                }

                //If node has both children
                var tempNode = node.right;
                while(tempNode.left !== null) {
                    tempNode = tempNode.left;
                }

                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;

            } else if (data < node.data) {
                //Go left
                node.left = removeNode (node.left, data);
                return node;
            } else if (data > node.data) {
                //Go right
                node.right = removeNode (node.right, data);
                return node;
            }             
        }
        this.root = removeNode(this.root, data);
    }

    isBalanced() {
        return (this.findMinHeight() >= this.findMaxHeight() - 1);
    }

    findMinHeight(node = this.root){
        if(node === null) {
            return -1;
        }
        let left = this.findMinHeight(node.left);
        let right = this.findMinHeight(node.right);
        return ( (left < right) ? left : right ) + 1;
    }

    findMaxHeight(node = this.root){
        if(node === null) {
            return -1;
        }
        let left = this.findMaxHeight(node.left);
        let right = this.findMaxHeight(node.right);
        return ( (left > right) ? left : right ) + 1;
    }

    inOrder() {
        if(this.root === null){
            return null;
        } else {
            var result = [];
            var traverseInOrder = function(node){
                node.left && traverseInOrder(node.left);
                result.push(node.data);
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    preOrder() {
        if(this.root === null){
            return null;
        } else {
            var result = [];
            var traverseInOrder = function(node){
                result.push(node.data);
                node.left && traverseInOrder(node.left);                
                node.right && traverseInOrder(node.right);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    postOrder() {
        if(this.root === null){
            return null;
        } else {
            var result = [];
            var traverseInOrder = function(node){        
                node.left && traverseInOrder(node.left);                
                node.right && traverseInOrder(node.right);
                result.push(node.data);
            }
            traverseInOrder(this.root);
            return result;
        }
    }

    levelOrder() {
        if(this.root === null){
            return null;
        } else {
            let result = [];
            let q = new Queue();
            q.enqueue(this.root);
            while( q.size() > 0 ) {
                let node = q.dequeue();
                result.push(node.data);
                if(node.left !== null) {
                    q.enqueue(node.left);
                }
                if(node.right !== null) {
                    q.enqueue(node.right);
                }
            }
            return result;
        }
    }

}