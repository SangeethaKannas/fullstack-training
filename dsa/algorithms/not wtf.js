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
