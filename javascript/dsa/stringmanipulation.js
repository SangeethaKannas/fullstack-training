
function testForPalindrome(givenWord) {
    //Palindrome Testing

    var rword = "";

    rword.charAt();

    rword.charCodeAt()

    rword.concat()

    rword.endsWith()  
    
    rword.startsWith()

    String.fromCharCode(114)

    rword.includes()

    rword.indexOf(), rword.lastIndexOf()

    rword.match(   )

    rword.repeat()

    rword.replace()

    rword.search()

    rword.slice()

    rword.split()

    rword.substr()

    rword.substring()

    rword.toLowerCase()

    rword.toUpperCase()

    rword.trim()



    //Reverse thee word
    for(let i = 1;i <= givenWord.length;i++) {
        rword += givenWord[givenWord.length - i];
    }

    return rword === givenWord;
}


//Write one Javascript statement on the indicated line that will make the printed number always be between 10 and 20 *
let x = 2;
let y = 8;
const a = function(b) { return function(c) { return x + y + Math.abs(b) + c; } };

// Statement will go here

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));

let x = 2;
let y = 8;
const a = function(b) {
console.log("Random * 10 " + b)
return function(c) {
console.log(x, y, Math.abs(b), c)
return x + y + Math.abs(b) + c; } };

// Statement will go here

const fn = a(x);
x = 4;
console.log(fn(Math.random() * 10));


//Fill in the ? with a Javascript expression to set the scale for an image having a given original height and width so that it can exactly fit inside a maxdim-by-maxdim square area (touching at least two edges). *
function scaleImage(width, height, maxdim) {
  var scale = null;//?
  return [scale * width, scale * height];
}
