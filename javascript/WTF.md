### WTF.md
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

/**
 * 
 * Good and misunderstood parts
 */

 console.log( [] == ![] )

 //Why? 
 //In javascript all comparison are done after converting data types to numbers
 // Empty Stack [] = 0  Numerical value
 // ![] = false = 0     
 // So  0 == 0 ==> true

 console.log( [] + {} );

 console.log( {} + [] );

 console.log( - 0);

 console.log(Number( "- 0"));

 console.log(Number(""));
 console.log(Number(" "));
 console.log(Number("\r\n\t"));

 console.log(Number("0"));
 console.log(Number("-0"));
 JSON.parse("-0");

 console.log(JSON.stringify(-0));
 console.log(String(-0));
 console.log(-0 + "");
 
