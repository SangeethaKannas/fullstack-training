/**

Simple Calculator

*/
const NUMBER_PATTERN = /[0-9]*/i

const EXPR_PATTERN = /[0-9]*[+-/*/][0-9]/i

const OPERATORS_PATTERN = /[+-/*/]/i;

/**
 * Expression that needs to be arrafied
 * @param {string} expression 
 */
function getValueArrays(expression) {    
    let result = [];
    while(expression.length > 0) {
        let searchString = expression.match(NUMBER_PATTERN);
        result.push(Number(searchString[0]));
        expression = expression.replace(searchString[0], '')
        if(expression.length > 0) {
            result.push(expression[0]);
            expression = expression.substr(1, expression.length);
        } else {
            break;
        }
    }
    
    //If array .contains 

    return result;
}

function calci(inputexpr) {

    const OPERATORS_PATTERN = /[+-/*/]/i;

    //Remove white spaces
    inputexpr = inputexpr.replace(/\s/g, '');    
    let currentValue = 0;

    //Iterate until all brackets are removed
    while( inputexpr.match(OPERATORS_PATTERN).length > 0 ) {

        if(inputexpr.indexOf('(') > - 1 ) {

            //Get the innermost brackets
            let startOfExpr = inputexpr.lastIndexOf('(') + 1;
            
            //Get the enclosing brackets
            let endOfExpr = inputexpr.indexOf(')', startOfExpr);

            //calculate current expression
            let currentExpression = inputexpr.substr( startOfExpr, endOfExpr - startOfExpr ) 
            currentValue = calculateValue( currentExpression );
            console.log("SubString " + currentExpression );
            
            //Replace current expression with corresponding value
            inputexpr = inputexpr.replace( inputexpr.substr(startOfExpr - 1, endOfExpr - startOfExpr + 2), currentValue );
            
            console.log("Input Expression", inputexpr);            

        } else {

            //Evaluvate current expression without brackets
            let startOfExpr = inputexpr.lastIndexOf('/') + 1;
            
            //Get the enclosing brackets
            let endOfExpr = inputexpr.indexOf('/', startOfExpr);
            console.log(getValueArrays(inputexpr));

            break;

        }        
    }    

    return currentValue;
    
    // //Check if 
    // if( inputexpr.match(EXPR_PATTERN) ) {
    //     return calculateValue(inputexpr);
    // } else { // Invalid expression
    //     return undefined;
    // }    
 
}

console.log(calci('1*(2+4)+(3*2)'));

/**
 * Calculates the value of given expression
 * Expected : String is a valid expression
 * @param {string} expression 
 */
function calculateValue(expression) {
    const NUMBER_PATTERN = /[0-9]*/i    

    let firstNumber = expression.match(NUMBER_PATTERN)[0];
    let operator = expression.charAt(firstNumber.length);
    let secondNumber = expression.substring(firstNumber.length + 1, expression.length);
    let value = 0;
    switch(operator){
        case '+': value = Number(firstNumber) + Number(secondNumber);break;
        case '-': value = Number(firstNumber) - Number(secondNumber);break;
        case '*': value = Number(firstNumber) * Number(secondNumber);break;
        case '/': value = Number(firstNumber) / Number(secondNumber);break;
    }
    
    return value;
}
