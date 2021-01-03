/**

WTF *



*/


console.log( Number.MAX_VALUE > 0 );

console.log( Number.MIN_VALUE < 0 );

//Left - Right Associativity of operators
console.log(1 < 2 < 3);

console.log(3 > 2 > 1);

//Rules around period
//Syntax Errors
//console.log(42.toFixed(2))
//console.log(42. toFixed(2))
console.log(42 .toFixed(2));
console.log(42 .toFixed(2));
console.log(42.0.toFixed(2));
console.log(42..toFixed(2));

//Coercion


//Array becomes an empty string, which finally becomes zero