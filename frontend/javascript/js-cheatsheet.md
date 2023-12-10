METHODS
Number()

s .toExponential(dec) exp. notation
n
s .toFixed(dec) fixed-point notation
s .toPrecision(p) change precision
 .POSITIVE_INFINITY +∞ equivalent
 .NEGATIVE_INFINITY -∞ equivalent
 .MAX_VALUE largest positive value
 .MIN_VALUE smallest positive value
n .NaN not-a-number value
n
n
n
n
n .EPSILON diff between 1 & smallest >1
b .isFinite(n) check if number is finite
b .isInteger(n) check if number is int.
b .isNaN(n) check if number is NaN
n .parseInt(s, radix) string to integer 
n .parseFloat(s, radix) string to float


Regexp()   = /.+/ig
METHODS
a.exec(str) exec search for a match
b .test(str) check if regexp match w/str

PROPERTIES
n .lastIndex index to start global regexp
s .flags active flags of current regexp
b .global flag g (search all matches)
b .ignoreCase flag i (match lower/upper)
b .multiline flag m (match multiple lines)
s .source current regexp (w/o slashs)
b .sticky flag y (search from lastIndex)
b .unicode flag u (enable unicode feat.)

CLASSES

. any character
\d digit [0-9]
\D no digit [^0-9]
\w any alphanumeric char [A-Za-z0-9_]
\W no alphanumeric char [^A-Za-z0-9_]
\s any space char (space, tab, enter...)
\S no space char (space, tab, enter...)
\t tabulator
\r carriage return
\n line feed
xN char with code N
\uN char with unicode N \0 NUL char


CHARACTER SETS OR ALTERNATION
[abc] match any character set

[^abc] match any char. set not enclosed
a|b match a or b

BOUNDARIES
^ begin of input    $ end of input
\b zero-width word boundary
\B zero-width non-word boundary

GROUPING
(x) capture group    (?:x) no capture group
\n reference to group n captured

QUANTIFIERS
x* preceding x 0 or more times {0,}

x+ preceding x 1 or more times {1,}
x? preceding x 0 or 1 times {0,1}
x{n} n ocurrences of x
x{n,} at least n ocurrences of x
x{n,m} between n & m ocurrences of x


