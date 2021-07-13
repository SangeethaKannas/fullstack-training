/**Given two strings A and B of lowercase letters,
 *  return true if and only if we can swap two letters in A so that the result equals **/

function checkIfSwapWorks(newStringA, newStringB) { 
    

}

function buddyStrings(stringA, stringB, cb) {
    let result = true;
    console.log(stringA + ' ' + stringB)
    if(stringA.length === 0 || stringB.length === 0 || stringA.length !== stringB.length) {
        result = false;
    } else {
        if(stringA === stringB) {
            result = true;
        } else {
            let newStringA = [], newStringB = []
            for(let index = 0;index < stringA.length;index++) {
                
                if(stringA.charAt(index) === stringB.charAt(index) ) {
                    // stringA = stringA.slice(index + 1, stringA.length);
                    // stringB = stringB.slice(index + 1, stringB.length);                    
                }else {                    
                    newStringA.push(stringA.charAt(index))
                    newStringB.push(stringB.charAt(index))
                }                
                
            }
            
            if(newStringA.length > 0 && newStringA.length === newStringB.length) {
                result = checkIfSwapWorks(newStringB, newStringB);
            }
        }
    }    

    return result;
}

