JSM YT
Table of Content
 Variables
 Operators
 Functions
 Conditional Statements
 Truthy / Falsy Values 
 String Escape Characters
JavaScript Basics
 String Methods
 Array Methods
 Looping
 Array methods for looping
String & Array Methods 
	 Val
e vs Reference
	 Math Object Methods
	 Date Object Methods
Math & Date Metho+s 
	 Window Object Methods
	 Window Object Groperties
Win+ow Object 
	 Inp
t Events
	 Mo
se Events
	 HTML DOM Events
	 HTML DOM Event Groperties & Methods
DOM Events & Properties

Variables
var variableName = value
Can be reassigned and are only available inside the 
function they're created in. Its function scoped.
const variableName = value 
Cannot be reassigned and not accessible before 
they appear within the code. Its block scoped.
let variableName = value 
It can be reassigned but its similar to const i.e. block 
scoped.
A block is a set of opening and closing curly brackets.
What is the block? 
If variables are not created inside a function or block 
they are globally scoped.
Variables
Primitive Data Types:
Number 
String
Boolean
Null
Undefined
Symbol
5, 6.5, 7 etc
“Hello everyone” etc
true or false
represents null i.e. no value at all
A variable that has not been 
assigned a value is undefined.
5, 6.5, 7 etc
“Hello everyone” etc
true or false
represents null i.e. no value at all
A variable that has not been 
assigned a value is undefined.
used as an identifier for object 
properties.
Variables
Object
Array
RegExp
Non-Primitive Data Types:
instance through which we can 
access members
group of similar values
represents regular expression
Operators
Basic Operators
+ Addition
- Subtraction
* Multiplication
/ Division
() Grouping operator
% Modulus (remainder)
++ Increment numbers
-- Decrement numbers 
Operators
Comparison Operators
== Equal to
=== Equal value and equal type
!= Not equal
!== Not equal value or not equal type
> Greater than
< Less than
>= Greater than or equal to
<= Less than or equal to
Operators
Logical Operators
&& Logical and
|| Logical or
! Logical not
Bitwise operators in Javascript are mostly used for 
numerical conversions/computations, because 
sometimes they're much faster than their Math or 
parseInt equivalents
Bitwise Operators
Operators
Bitwise Operators
& AND statement
| OR statement
~ NOT
^ XOR
<< Zero fill left shift
>> Signed right shift
>>> Zero Fill right shift 
Functions
Normal Function Declaration
function name (parameter) {

 
}
// statements

Function stored in a variable
let name = function (parameter) {

 
}
// statements

Arrow Function
const name = (parameter) => {

 
}
// statements

Conditional Statements
If - Else Statements
if (condition) { 

 
} else { 

 
}
// code to be executed if the 

 condition is true

// code to be executed if the 

 condition is false

S Use to specify a block of code to be executed, if 
a specified condition is true
iT
S Use to specify a block of code to be 
executed, if the same condition is false
else
S Use to specify a new condition to test, if the 
first condition is false
else iT
S Use to specify many alternative blocks of 
code to be executed
switc
Conditional Statements
If - Else If - Else Statements
if (condition1) { 

 
} else if (condition2) { 

 
} else { 

 
}
// code to be executed if the 

 condition is true


// code to be executed if the 

 condition1 is false and 

 condition2 is true


// code to be executed if 

 condition1 is false and 

 condition2 is false

Conditional Statements
Switch Statement
switch(expression) {

 case x:

 
 break;

 case y:

 
 break;

 default:

 
} 
// code block

// code block

// code block

P The switch expression is evaluated once.
P The value of the expression is compared with the 
values of each case.
P If there is a match, the associated block of code is 
executed.
P If there is no match, the default code block is 
executed.
Conditional Statements
Ternary Operator
condition ? exprIfTrue : exprIfFalse
An expression whose value is used as a condition.
condition
An expression which is executed if the condition is 
truthy.
exprIfTrue
An expression which is executed if the condition is 
falsy.
exprIfFalse
Truthy / Falsy Values 
FALSY Values
TRUTHY Values
+ false
+ 0 (zero)
+ "", '', `` (empty strings)
+ null
+ undefined
+ NaN (not a number)
+ Everything that is not FALSY
Note : Empty array ([]) is not falsy
Strings
Escape Characters
let variableName = “Hello world” 
\' Single quote
\" Double quote
\\ Backslash
\b Backspace
\f Form feed
\n New line
\r Carriage return 
\t Horizontal tabulator
\v Vertical Tabulator

String Methods 
string[index]
get a certain character of a string
string.length
return the number of characters in a string
string.split(' ')
returns an array of words of a string
string.split('')
returns an array of characters of a string
string.toLowerCase()
returns a lowercased string
string.toUpperCase()
returns an uppercased string
String Methods 
string.charAt(index)
returns a new string consisting of the single 
character located at the specified offset into the 
string. 
string.replace(substr, newSubstr)
returns a new string with a substring (substr) 
replaced by a new one (newSubstr).
string.includes(searchString)
performs a case-sensitive search to determine 
whether one string may be found within another 
string, returns true or false.
string.substr(start, length)
returns a portion of the string, starting at the 
specified index and extending for a given number.
String Methods 
string.includes('subtring')
checks whether a substring exists inside of a string 

[check the character case]
string.indexOf(searchValue)
returns the index of the first occurrence of the 
specified value, starting the search at fromIndex. 
Returns -1 if the value is not found. 
string.lastIndexOf(searchValue)
returns the index of the last occurrence of the 
specified value, searching backwards from 
fromIndex. Returns -1 if the value is not found. 
string.slice(beginIndex, endIndex)
extracts a section of a string and returns it as a new 
string, without modifying the original string. 
Array Methods 
array[index]
returns a certain value from an array
push(value)
adds the value to the end of the array
pop()
removes the value from the end of the array
shift()
removes the value from the start of the array
unshift(value)
adds the value to the start of the array
splice(fromIndex, no_of_elements)
removes the number_of_elements, starting from 
fromIndex from the array
Array Methods 
slice(fromIndex, toIndex)
copies a certain part of the array
concat()
Join several arrays into one
join('')
returns a string of array values
array.length
returns the number of elements in the array
reverse()
reverse the order of the elements in an array
toString()
returns a string representing the specified array 

and its elements. 
Array Methods 
toString()
returns a string representing the specified array 

and its elements. 
includes(searchElement)
determines whether an array includes a certain 
value among its entries, returning true or false as 
appropriate. 
sort()
It sorts the elements of an array in place and returns 
the sorted array. It sorts an array alphabetically.
indexOf(searchElement)
returns the index of the first occurance of that value
lastIndexOf(searchElement)
returns the index of the last occurance of that value
Looping
while (condition) {

 
}
// code block to be executed

While Loop
for (st 1; st 2; st 3) {

 
}
// code block to be executed

For Loop
st 1 is executed (one time) before the 
execution of the code block.
st 2 defines the condition for executing the 
code block.
st 3 is executed (every time) after the code 
block has been executed.
Looping
for (key in object) {

 
}
// code block to be executed

For In Loop
for (variable of iterable) {

 
}
// code block to be executed

For Of Loop
do {

}

while (condition);
 // code block to be executed

Do While Loop
Array methods for looping
array.forEach()
array.forEach((element, index) => {

 
})
// code block to be executed

It executes a provided function once for each array 
element. 
array.map()
array.map((element, index) => {

 
})
// code block to be executed

It creates a new array populated with the results of 
calling a provided function on every element in the 
calling array. 
Array method for looping
array.filter()
array.filter((element, index) => {

 
})
// code block to be executed

It creates a new array with all elements that pass the 
test implemented by the provided function.
array.findIndex()
array.findIndex((el, idx, arr) => {

 
})
// code block to be executed

It returns the index of the first element in the array that 
satisfies the provided testing function
Array method for looping
array.some()
array.some((el, index, array)) => {

 
})
// code block to be executed

It tests whether at least one element in the array 
passes the test implemented by the provided function
array.every()
array.every((element, index) => {

 
})
// code block to be executed

It tests whether all elements in the array pass the test 
implemented by the provided function. It returns a 
Boolean value.
Array method for looping
array.reduce()
array.reduce((
)) => {

 
})
prevValue,currentValue,

currentIndex, array
// code block to be executed

It runs a function on each array element to produce 
(reduce it to) a single value. It works from left-to-right.
array.reduceRight()
array.reduceRight((
)) => {

 
})
accumulator, 

currentValue, index, array
// code block to be executed

It runs a function on each array element to produce 
(reduce it to) a single value. It works from right-to-left.
VALUE VS REFERENCE
Arrays
Objects
VALUE VS REFERENCE
Cloning Array
One Level Deep
VALUE VS REFERENCE
Cloning Array
Two Level Deep

Math Object
abs(x)
Returns the absolute value of x
acos(x)
Returns the arccosine of x, in radians
acosh(x)
Returns the hyperbolic arccosine of x
asin(x)
Returns the arcsine of x, in radians
asinh(x)
Returns the hyperbolic arcsine of x
atan(x)
Returns the arctangent of x as a numeric value 
between -PI/2 and PI/2 radians
Math Object
atan2(y, x)
Returns the arctangent of the quotient of its arguments
atanh(x)
Returns the hyperbolic arctangent of x
cbrt(x)
Returns the cubic root of x
ceil(x)
Returns x, rounded upwards to the nearest integer
cos(x)
Returns the cosine of x (x is in radians)
cosh(x)
Returns the hyperbolic cosine of x
Math Object
exp(x)
Returns the value of Ex
floor(x)
Returns x, rounded downwards to the nearest integer
log(x)
Returns the natural logarithm (base E) of x
max(x, y, z, ..., n)
Returns the number with the highest value
min(x, y, z, ..., n)
Returns the number with the lowest value
pow(x, y)
Returns the value of x to the power of y
Math Object
random()
Returns a random number between 0 and 1
round(x)
Rounds x to the nearest integer
sign(x)
Returns if x is negative, null or positive (-1, 0, 1)
sin(x)
Returns the sine of x (x is in radians)
sinh(x)
Returns the square root of x
sqrt(x)
Returns the square root of x
Math Object
tan(x)
Returns the tangent of an angle
tanh(x)
Returns the hyperbolic tangent of a number
trunc(x)
Returns the integer part of a number (x)
Date Objects
getFullYear()
Get the year as a four digit number (yyyy)
getMonth()
Get the month as a number (0-11)
getDate()
Get the day as a number (1-31)
getHours()
Get the hour (0-23)
getMinutes()
Get the minute (0-59)
Get Date Methods
Date Objects
getTime()
Get the time (milliseconds since January 1, 1970)
getDay()
Get the weekday as a number (0-6)
Date.now()
Get the time. ECMAScript 5.
getSeconds()
Get the second (0-59)
getMilliseconds()
Get the millisecond (0-999)
Date Objects
getUTCDate()
Same as getDate(), but returns the UTC date
getUTCDay()
Same as getDay(), but returns the UTC day
getUTCFullYear()
Same as getFullYear(), but returns the UTC year
getUTCMonth()
Same as getMonth(), but returns the UTC month
getUTCHours()
Same as getHours(), but returns the UTC hour
UTC Date Methods
Date Objects
getUTCMinutes()
Same as getMinutes(), but returns the UTC minutes
getUTCSeconds()
Same as getSeconds(), but returns the UTC seconds
getUTCMilliseconds()
Same as getMilliseconds(), but returns the UTC 
milliseconds
Date Objects
setDate()
Set the day as a number (1-31)
setFullYear()
Set the year (optionally month and day)
setMonth()
Set the month (0-11)
setHours()
Set the hour (0-23)
setMinutes()
Set the minutes (0-59)
Set Date Methods
Date Objects
setSeconds()
Set the seconds (0-59)
setMilliseconds()
Set the milliseconds (0-999)
setTime()
Set the time (milliseconds since January 1, 1970)
Date Objects
new Date()
Creates a new date object with the current date and 
time
new Date(year, month, ...)
creates a new date object with a specified date and 
time
new Date(dateString)
creates a new date object from a date string
new Date(milliseconds)
creates a new date object as zero time plus 
milliseconds

Window Object Methods
alert()
Displays an alert box with a message & an OK button
atob()
Decodes a base-64 encoded string
blur()
Removes focus from the current window
btoa()
Encodes a string in base-64
clearInterval()
Clears a timer set with setInterval()
clearTimeout()
Clears a timer set with setTimeout()
Window Object Methods
close()
Closes the current window
confirm()
Displays a dialog box with a message and an OK and 
a Cancel button
getComputedStyle()
Gets the current computed CSS styles applied to an 
element
getSelection()
Returns a Selection object representing the range of 
text selected by the user
matchMedia()
Returns a MediaQueryList object representing the 
specified CSS media query string
Window Object Methods
focus()
Sets focus to the current window
moveBy()
Moves a window relative to its current position
moveTo()
Moves a window to the specified position
open()
Opens a new browser window
print()
Prints the content of the current window
prompt()
Displays a dialog box that prompts the visitor for 
input
Window Object Methods
requestAnimationFrame()
Requests the browser to call a function to update an 
animation before the next repaint
resizeBy()
Resizes the window by the specified pixels
resizeTo()
Resizes the window to the specified width and height
scrollBy()
Scrolls the document by the number of pixels
scrollTo()
Scrolls the document to the specified coordinates
stop()
Stops the window from loading
Window Object Methods
setInterval()
Calls a function or evaluates an expression at 
specified intervals (in milliseconds)
setTimeout()
Calls a function or evaluates an expression after a 
specified number of milliseconds
Window Object Properties
closed
Returns a Boolean value indicating whether a window 
has been closed or not
console
Returns a reference to the Console object, which 
provides methods for logging information to the 
browser's console
defaultStatus
Sets or returns the default text in the statusbar of a 
window
document
Returns the Document object for the window (See 
Document object)
frames
Returns all <iframe> elements in the current window
Window Object Properties
history
Returns the History object for the window
innerHeight
Returns the height of the window's content area 
(viewport) including scrollbars
innerWidth
Returns the width of a window's content area 
(viewport) including scrollbars
length
Returns the number of <iframe> elements in the 
current window
localStorage
Allows to save key/value pairs in a web browser. 
Stores the data with no expiration date
Window Object Properties
location
Returns the Location object for the window
name
Sets or returns the name of a window
navigator
Returns the Navigator object for the window 
opener
Returns a reference to the window that created the 
window
parent
Returns the parent window of the current window
self
Returns the current window
Window Object Properties
outerHeight
Returns the height of the browser window, including 
toolbars/scrollbars
outerWidth
Returns the width of the browser window, including 
toolbars/scrollbars
pageXOffset
Returns the pixels the current document has been 
scrolled (horizontally) from the upper left corner of 
the window
pageYOffset
Returns the pixels the current document has been 
scrolled (vertically) from the upper left corner of the 
window
Window Object Properties
screen
Returns the Screen object for the window 
screenLeft
Returns the horizontal coordinate of the window 
relative to the screen
screenTop
Returns the vertical coordinate of the window relative 
to the screen
screenX
Returns the horizontal coordinate of the window 
relative to the screen
screenY
Returns the vertical coordinate of the window relative 
to the screen
Window Object Properties
sessionStorage
Allows to save key/value pairs in a web browser. 
Stores the data for one session
scrollX
An alias of pageXOffset
scrollY
An alias of pageYOffset
status
Sets or returns the text in the statusbar of a window
top
Returns the topmost browser window

Input Events
onblur
When a user leaves an input field
onchange
When a user changes the content of an input field
onfocus
When an input field gets focus
onselect
When input text is selected
onsubmit
When a user clicks the submit button
onreset
When a user clicks the reset button
Input Events
onkeydown
When a user is pressing/holding down a key
onkeypress
When a user is pressing/holding down a key
onkeyup
When the user releases a key
onkeydown
When the user is pressing a key
Mouse Events
onclick
When the user clicks on an element
oncontextmenu
When the user right-clicks on an element to open a 
context menu
ondblclick
When the user double-clicks on an element
onmouseenter
When the pointer is moved onto an element
onmouseleave
When the pointer is moved out of an element
onmousemove
when the pointer is moving while it is over an element
Mouse Events
onmousedown
When the user presses a mouse button over an 
element
onmouseout
When a user moves the mouse pointer out of an 
element, or out of one of its children
onmouseover
When the pointer is moved onto an element, or onto 
one of its children
onmouseup
when a user releases a mouse button over an 
element
HTML DOM Events
abort
The event occurs when the loading of a media is 
aborted
afterprint
The event occurs when a page has started printing, 
or if the print dialogue box has been closed
animationend
The event occurs when a CSS animation has 
completed
animationiteration
The event occurs when a CSS animation is repeated
animationstart
The event occurs when a CSS animation has started
HTML DOM Events
beforeprint
The event occurs when a page is about to be printed
beforeunload
The event occurs before the document is about to be 
unloaded
blur
The event occurs when an element loses focus
canplay
The event occurs when the browser can start playing 
the media (when it has buffered enough to begin)
canplaythrough
The event occurs when the browser can play through 
the media without stopping for buffering
HTML DOM Events
change
The event occurs when the content of a form 
element, or the checked state have changed 
click
The event occurs when the user clicks on an element
contextmenu
The event occurs when the user right-clicks on an 
element to open a context menu
copy
The event occurs when the user copies the content of 
an element
cut
The event occurs when the user cuts the content of 
an element
HTML DOM Events
dblclick
The event occurs when the user double-clicks on an 
element
drag
The event occurs when an element is being dragged
dragend
The event occurs when the user has finished 
dragging an element
dragenter
The event occurs when the dragged element enters 
the drop target
dragleave
The event occurs when the dragged element leaves 
the drop target
HTML DOM Events
dragover
The event occurs when the dragged element is over 
the drop target
dragstart
The event occurs when the user starts to drag an 
element
drop
The event occurs when the dragged element is 
dropped on the drop target
durationchange
The event occurs when the duration of the media is 
changed
ended
The event occurs when the media has reach the end 
(useful for messages like "thanks for listening")
HTML DOM Events
error
The event occurs when an error occurs while loading 
an external file 
focus
The event occurs when an element gets focus
focusin
The event occurs when an element is about to get 
focus
focusout
The event occurs when an element is about to lose 
focus
fullscreenchange
The event occurs when an element is displayed in 
fullscreen mode
HTML DOM Events
fullscreenerror
The event occurs when an element can not be 
displayed in fullscreen mode
input
The event occurs when an element gets user input
invalid
The event occurs when an element is invalid
keydown
The event occurs when the user is pressing a key
keypress
The event occurs when the user presses a key
keyup
The event occurs when the user releases a key
HTML DOM Events
load
The event occurs when an object has loaded
loadeddata
The event occurs when media data is loaded
loadedmetadata
The event occurs when meta data (like dimensions 
and duration) are loaded
loadstart
The event occurs when the browser starts looking for 
the specified media
message
The event occurs when a message is received 
through the event source
HTML DOM Events
mousedown
The event occurs when the user presses a mouse 
button over an element
mouseenter
The event occurs when the pointer is moved onto an 
element
mouseleave
The event occurs when the pointer is moved out of 
an element
mousemove
The event occurs when the pointer is moving while it 
is over an element
mouseover
The event occurs when the pointer is moved onto an 
element, or onto one of its children
HTML DOM Events
mouseout
The event occurs when a user moves the mouse 
pointer out of an element, or out of one of its children
mouseup
The event occurs when a user releases a mouse 
button over an element
offline
The event occurs when the browser starts to work 
offline
online
The event occurs when the browser starts to work 
online
open
The event occurs when a connection with the event 
source is opened
HTML DOM Events
pagehide
The event occurs when the user navigates away from 
a webpage
pageshow
The event occurs when the user navigates to a 
webpage
paste
The event occurs when the user pastes some content 
in an element
pause
The event occurs when the media is paused either by 
the user or programmatically
play
The event occurs when the media has been started 
or is no longer paused
HTML DOM Events
playing
The event occurs when the media is playing after 
having been paused or stopped for buffering
popstate
The event occurs when the window's history changes
progress
The event occurs when the browser is in the process 
of getting the media data (downloading the media)
ratechange
The event occurs when the playing speed of the 
media is changed
resize
The event occurs when the document view is resized
HTML DOM Events
reset
The event occurs when a form is reset
scroll
The event occurs when an element's scrollbar is 
being scrolled
search
The event occurs when the user writes something in 
a search field (for <input="search">)
seeked
The event occurs when the user is finished moving/
skipping to a new position in the media
seeking
The event occurs when the user starts moving/
skipping to a new position in the media
HTML DOM Events
select
The event occurs after the user selects some text (for 
<input> and <textarea>)
show
The event occurs when a <menu> element is shown 
as a context menu
stalled
The event occurs when the browser is trying to get 
media data, but data is not available
storage
The event occurs when a Web Storage area is 
updated
submit
The event occurs when a form is submitted
HTML DOM Events
suspend
The event occurs when the browser is intentionally 
not getting media data
timeupdate
The event occurs when the playing position has 
changed (like when the user fast forwards to a 
different point in the media)
toggle
The event occurs when the user opens or closes the 
<details> element
touchcancel
The event occurs when the touch is interrupted
touchend
The event occurs when a finger is removed from a 
touch screen
HTML DOM Events
touchmove
The event occurs when a finger is dragged across 
the screen
touchstart
The event occurs when a finger is placed on a touch 
screen
transitionend
The event occurs when a CSS transition has 
completed
unload
The event occurs once a page has unloaded (for 
<body>)
volumechange
The event occurs when the volume of the media has 
changed (includes setting the volume to "mute")
HTML DOM Events
waiting
The event occurs when the media has paused but is 
expected to resume (like when the media pauses to 
buffer more data)
wheel
The event occurs when the mouse wheel rolls up or 
down over an element
hashchange
The event occurs when there has been changes to 
the anchor part of a URL
HTML DOM Event 
Properties and Methods
altKey
Returns whether the "ALT" key was pressed when the 
mouse event was triggered
animationName
Returns the name of the animation
bubbles
Returns whether or not a specific event is a bubbling 
event
button
Returns which mouse button was pressed when the 
mouse event was triggered
HTML DOM Event 
Properties and Methods
cancelable
Returns whether or not an event can have its default 
action prevented
charCode
Returns the Unicode character code of the key that 
triggered the onkeypress event
changeTouches
Returns a list of all the touch objects whose state 
changed between the previous touch and this touch
clientX
Returns the horizontal coordinate of the mouse 
pointer, relative to the current window, when the 
mouse event was triggered
HTML DOM Event 
Properties and Methods
clientY
Returns the vertical coordinate of the mouse pointer, 
relative to the current window, when the mouse event 
was triggered
clipboardData
Returns an object containing the data affected by 
the clipboard operation
code
Returns the code of the key that triggered the event
composed
Returns whether the event is composed or not 
createEvent()
Creates a new event
HTML DOM Event 
Properties and Methods
ctrlKey
Returns whether the "CTRL" key was pressed when the 
mouse event was triggered
currentTarget
Returns the element whose event listeners triggered 
the event
dataTransfer
Returns an object containing the data being 
dragged/dropped, or inserted/deleted
defaultPrevented
Returns whether or not the preventDefault() method 
was called for the event
HTML DOM Event 
Properties and Methods
deltaX
Returns the horizontal scroll amount of a mouse 
wheel (x-axis)
deltaY
Returns the vertical scroll amount of a mouse wheel 
(y-axis)
deltaZ
Returns the scroll amount of a mouse wheel for the zaxis
deltaMode
Returns a number that represents the unit of 
measurements for delta values (pixels, lines or 
pages)
HTML DOM Event 
Properties and Methods
detail
Returns a number that indicates how many times the 
mouse was clicked
elapsedTime
Returns the number of seconds an animation or 
transition has been running
eventPhase
Returns which phase of the event flow is currently 
being evaluated
getTargetRanges()
Returns an array containing target ranges that will be 
affected by the insertion/deletion
HTML DOM Event 
Properties and Methods
getModifierState()
Returns an array containing target ranges that will be 
affected by the insertion/deletion
inputType
Returns the type of the change (i.e "inserting" or 
"deleting")
isComposing
Returns whether the state of the event is composing 
or not
isTrusted
Returns whether or not an event is trusted
HTML DOM Event 
Properties and Methods
data
Returns the inserted characters
key
Returns the key value of the key represented by the 
event or returns the key of the changed storage item
keyCode
Returns the Unicode character code of the key that 
triggered the onkeypress event, or the Unicode key 
code of the key that triggered the onkeydown or 
onkeyup event
location
Returns the location of a key on the keyboard or 
device
HTML DOM Event 
Properties and Methods
lengthComputable
Returns whether the length of the progress can be 
computable or not
loaded
Returns how much work has been loaded
metaKey
Returns whether the "META" key was pressed when an 
event was triggered
MovementX
Returns the horizontal coordinate of the mouse 
pointer relative to the position of the last mousemove 
event
HTML DOM Event 
Properties and Methods
MovementY
Returns the vertical coordinate of the mouse pointer 
relative to the position of the last mousemove event
newValue
Returns the new value of the changed storage item
newURL
Returns the URL of the document, after the hash has 
been changed
offsetX
Returns the horizontal coordinate of the mouse 
pointer relative to the position of the edge of the 
target element
HTML DOM Event 
Properties and Methods
offsetY
Returns the vertical coordinate of the mouse pointer 
relative to the position of the edge of the target 
element
oldValue
Returns the old value of the changed storage item
oldURL
Returns the URL of the document, before the hash 
was changed
onemptied
The event occurs when something bad happens and 
the media file is suddenly unavailable (like 
unexpectedly disconnects)
HTML DOM Event 
Properties and Methods
pageX
Returns the horizontal coordinate of the mouse 
pointer, relative to the document, when the mouse 
event was triggered
pageY
Returns the vertical coordinate of the mouse pointer, 
relative to the document, when the mouse event was 
triggered
persisted
Returns whether the webpage was cached by the 
browser
propertyName
Returns the name of the CSS property associated 
with the animation or transition
HTML DOM Event 
Properties and Methods
preventDefault()
Cancels the event if it is cancelable, meaning that 
the default action that belongs to the event will not 
occur
pseudoElement
Returns the name of the pseudo-element of the 
animation or transition
relatedTarget
Returns the element related to the element that 
triggered the mouse event
repeat
Returns whether a key is being hold down repeatedly, 
or not
HTML DOM Event 
Properties and Methods
screenX
Returns the horizontal coordinate of the mouse 
pointer, relative to the screen, when an event was 
triggered
screenY
Returns the vertical coordinate of the mouse pointer, 
relative to the screen, when an event was triggered
shiftKey
Returns whether the "SHIFT" key was pressed when an 
event was triggered
state
Returns an object containing a copy of the history 
entries
HTML DOM Event 
Properties and Methods
stopImmediatePropagation()
Prevents other listeners of the same event from being 
called
stopPropagation()
Prevents further propagation of an event during 
event flow
storageArea
Returns an object representing the affected storage 
object
target
Returns the element that triggered the event
total
Returns the total amount of work that will be loaded
HTML DOM Event 
Properties and Methods
targetTouches
Returns a list of all the touch objects that are in 
contact with the surface and where the touchstart 
event occured on the same target element as the 
current target element
timeStamp
Returns the time (in milliseconds relative to the 
epoch) at which the event was created
touches
Returns a list of all the touch objects that are 
currently in contact with the surface
transitionend
The event occurs when a CSS transition has 
completed
HTML DOM Event 
Properties and Methods
type
Returns the name of the event
url
Returns the URL of the changed item's document
which
Returns which mouse button was pressed when the 
mouse event was triggered
which
Returns the Unicode character code of the key that 
triggered the onkeypress event, or onkeyup / down
view
Returns a reference to the Window object where the 
event occurred


Curated by tutort academy
IMPORTANT
FOR INTERVIEWS
JavaScript

concepts
Curated by tutort academy
New features in ES6 version.
The new features introduced in ES6 version of JavaScript 
are:
Arrow functions.
Multi-line Strings.
The destructuring assignment.
Enhanced object literals.
Promises.
Let and const keywords.
1
Curated by tutort academy
2 Is javascript a statically typed or 
a dynamically typed language?
JavaScript is a dynamically typed language. In a 
dynamically typed language, the type of a variable is 
checked during run-time in contrast to a statically 
typed language, where the type of a variable is 
checked during compile-time.
Sayan
From To 10+ year 

experience
Static Typing Dynamic Typing
Variables have types
Variables cannot 
change type
Variables have no types
Variables can change type
Curated by tutort academy
Explain scope and scope chain 
JavaScript
JavaScript has the following kinds of scopes:
Global Scope: A variable with global scope is one 
that can be accessed from anywhere in the 
application. It is the default scope for all code 
running in script mode.
Local Scope: Any declared variable inside of a 
function is referred to as having local scope. Within 
a function, a local variable can be accessed. It 
throws an error if you attempt to access any 
variables specified inside a function from the 
outside or another function.The scope for code 
running in module mode.
3
{

var x = 2;

}

console.log(x) //global scope
Example :
Curated by tutort academy
Function Scope: In JavaScript, every new function 
results in the generation of a fresh scope. Variables 
declared inside a function cannot be accessed 
from outside the function or from another function. 
When used inside of a function, var, let, and const 
all act similarly. The scope created with a function.
Scope Chain refers to the situation when one variable, 
which may have a global, local, function, or block scope, is 
used by another variable, function, or block, which may 
also have a global, local, function, or block scope. This 
entire chain construction continues till the user decides to 
halt it in accordance with the need.
// This part of code cannot use x

function myFunction() {

let x = 1;

// This part of code can use x

}

This part of code cannot use x
function myFunction() {

const firstName = "Krishna"; // Function Scope

}
Example :
Example :
Curated by tutort academy
What are the differences between 
var, const & let in JavaScript?
var let const
The scope of a var 
variable is functional 
scope.
It can be updated 
and redeclared into 
the scope.
It can be declared 
without initialization.
It can be accessed 
without initialization 
as its default value is 
“undefined”.
Hoisting done, with 
initializing as ‘default’ 
value
The scope of a let 
variable is block scope.
It can be updated but 
cannot be re-declared 
into the scope.
It can be declared 
without initialization.
It cannot be accessed without 
initialization otherwise it will 
give ‘referenceError’.
Hoisting is done, but not 
initialized (this is the reason 
for the error when we access 
the let variable before

declaration/initialization
The scope of a let 
variable is block scope.
It cannot be updated 
or redeclared into the 
scope.
It cannot be declared 
without initialization.
It cannot be accessed

without initialization, as 
it cannot be declared 
without initialization.
Hoisting is done, but not 
initialized (this is the 
reason for the error 
when we access the 
const variable before

declaration/
initialization
4
Curated by tutort academy
What is hoisting in JavaScript?
Hoisting is the default behaviour of javascript where all 
the variable and function declarations are moved on top.
This means that irrespective of where the variables and 
functions are declared, they are moved on top of the 
scope. The scope can be both local and global.
5
Declaration
a=1:

alert(a=’+a);

var a;
Move on top
Curated by tutort academy
Explain temporal dead zone.
Temporal Dead Zone is a behaviour that occurs with 
variables declared using let and const keywords. It is 
a behaviour where we try to access a variable before 
it is initialized.
6
num = 23; // Gives reference error

let num;

function func(){

greeting = "Hi"; // Throws a reference error

let greeting;

}

func();
Examples of temporal dead zone:
Curated by tutort academy
What is closure in JavaScript?
A closure consists of references to the surrounding 
state (the lexical environment) and a function that 
has been wrapped (contained). In other words, a 
closure enables inner functions to access the scope 
of an outside function. Closures are formed whenever 
a function is created in JavaScript, during function 
creation time.
7
What are differences between “==” 
& “===”?
The == operator performs a loose equality comparison 
that, if necessary to enable the comparison, applies 
type coercion. 

On the other hand, the === operator conducts a strict 
equality comparison without type coercion and 
necessitates that the operands be of the same type 
(as well as the same value).
8
Curated by tutort academy
What is NaN property?
The NaN property is a global property that represents 
"Not-a-Number" value. i.e, It indicates that a value is 
not a legal number. It is very rare to use NaN in a 
program but it can be used as return value for few 
cases
For E.g.:
Math.sqrt(-1);

parseInt("Hello");
Courses Offered by Tutort Academy
Full Stack with 
MERN
Learn more
DSA with System 
Design
Learn more
9
Curated by tutort academy
What is the difference between 
null and undefined?
null undefined
It is an assignment value which 
indicates that variable points to 
no object.
Type of null is object
The null value is a primitive value 
that represents the null, empty, or 
non-existent reference.
Indicates the absence of a 
value for a variable
Converted to zero (0) while 
performing primitive operations
It is not an assignment value where 
a variable has been declared but 
has not yet been assigned a value.
Type of undefined is undefined
The undefined value is a primitive 
value used when a variable has 
not been assigned a value.
Indicates absence of variable itself
Converted to NaN while 
performing primitive operations
10
Curated by tutort academy
11 What are the terms BOM and DOM in 
JavaScript?
DOM stands for and BOM for 
.

DOM: An element may be added, changed, or removed 
from a document using the Document Object Model 
(DOM), a programming interface for HTML and XML 
documents. It specifies how a document is accessed 
and handled, as well as its logical structure. The DOM 
allows the webpage to be represented as a structured 
hierarchy, making it simple to access and modify HTML 
tags, IDs, classes, attributes, and elements using the 
Document object's provided commands and methods. 
This makes it easier for programmers and users to 
understand the document.

DOM provides several methods to find & manipulate the 
behavior of the HTML element:
Document Object Model
Browser Object Model
getElementById() Method
getElementsByClassName() Method
getElementsByName() Method
getElementsByTagName() Method
querySelector() Method
querySelectorAll() Method
Curated by tutort academy
BOM: is a browser-specific 
convention referring to all the objects exposed by the 
web browser. The BOM allows JavaScript to “interact 
with” the browser. The window object represents a 
browser window and all its corresponding features. A 
window object is created automatically by the browser 
itself. JavaScript’s window.screen object contains 
information about the user’s screen.


Window properties of BOM are:
Browser Object Model (BOM)
Window methods of BOM are:
screen.width
screen.height
window.open() Method
screen.availWidth
window.close() Method
screen.availHeight
window.moveTo() Method
screen.colorDepth
window moveBy() Method
screen.pixelDepth
window.resizeTo() Method
Curated by tutort academy
What is Critical Rendering Path?
The Critical Rendering Path is the sequence of 
steps the browser goes through to convert the 
HTML, CSS, and JavaScript into pixels on the screen. 
Optimizing the critical render path improves render 
performance. The critical rendering path includes 
the Document Object Model (DOM), CSS Object 
Model (CSSOM), render tree and layout.
12
Tutort Benefits 
24x7 Live 1:1 Video based

doubt support
1:1 Mentorship from

Industry experts
Resume building & Mock

Interview Preparations
Special support for

foreign students
Curated by tutort academy
What are basic JavaScript array 
methods?
Some of the basic JavaScript methods are:
push() method: adding a new element to an array. 
Since JavaScript arrays are changeable objects, 
adding and removing elements from an array is 
simple. Additionally, it alters itself when we change 
the array's elements.
pop() method: This method is used to remove 
elements from the end of an array.
Syntax: Array.push(item1, item2 …)
Syntax: Array.pop()
13
Curated by tutort academy
slice() method: This method returns a new array 
containing a portion of the original array, based on 
the start and end index provided as arguments
map() method: The map() method in JavaScript 
creates an array by calling a specific function on 
each element present in the parent array. It is a nonmutating method. Generally, the map() method is 
used to iterate over an array and call the function on 
every element of an array.
reduce() method: The array reduce() method in 
JavaScript is used to reduce the array to a single 
value and executes a provided function for each 
value of the array (from left to right) and the return 
value of the function is stored in an accumulator. 
Syntax: Array.slice (startIndex , endIndex);
Syntax: Array.map(function(currentValue, 
index, arr), thisValue)
Syntax: Array.reduce(function(total, 
currentValue, currentIndex, arr), initialValue)
Curated by tutort academy
What is the rest parameter and 
spread operator? 14
Rest parameter ( … ):
It offers a better method of managing a function's 
parameters.
We can write functions that accept a variable 
number of arguments using the rest parameter 
syntax.
The remainder parameter will turn any number of 
inputs into an array.
Additionally, it assists in extracting all or some of 
the arguments.
Applying three dots (...) before the parameters 
enables the use of rest parameters.
Curated by tutort academy
Syntax:

function extractingArgs(...args){

return args[1];

}

// extractingArgs(8,9,1); // Returns 9

function addAllArgs(...args){

let sumOfArgs = 0;

let i = 0;

while(i < args.length){

sumOfArgs += args[i];

i++;

}

return sumOfArgs;

}

addAllArgs(6, 5, 7, 99); // Returns 117

addAllArgs(1, 3, 4); // Returns 8
Note- Rest parameter should always be used at the 
last parameter of a function.
Curated by tutort academy
Syntax:

function addFourNumbers(num1,num2,num3,num4){

return num1 + num2 + num3 + num4;

}

let fourNumbers = [5, 6, 7, 8];

addFourNumbers(...fourNumbers);

// Spreads [5,6,7,8] as 5,6,7,8

let array1 = [3, 4, 5, 6];

let clonedArray1 = [...array1];

// Spreads the array into 3,4,5,6

console.log(clonedArray1); // Outputs [3,4,5,6]

let obj1 = {x:'Hello', y:'Bye'};

let clonedObj1 = {...obj1}; // Spreads and clones obj1

console.log(obj1);

let obj2 = {z:'Yes', a:'No'};

let mergedObj = {...obj1, ...obj2}; // Spreads both the 
objects and merges it

console.log(mergedObj);

// Outputs {x:'Hello', y:'Bye',z:'Yes',a:'No'};
Spread operator(…): Although the spread operator's syntax 
is identical to that of the rest parameter, it is used to spread 
object literals and arrays. Spread operators are also used 
when a function call expects one or more arguments.
Curated by tutort academy
15 Explain this keyword
In JavaScript, the this keyword always refers to an 
object. The thing about it is that the object it refers to 
will vary depending on how and where this is being 
called. If we call this by itself, meaning not within a 
function, object, or whatever, it will refer to the global 
window object. The majority of the time, the value of 
this depends on the runtime binding used to call a 
function. It may change every time the function is 
called and cannot be changed by assignment while 
the function is being executed. Although arrow 
functions don't give their own this binding (it keeps 
the this value of the enclosing lexical context), the 
bind() method can set the value of a function's this 
regardless of how it's called
Sayan
From To 10+ year 

experience
Curated by tutort academy
Explain call(), apply() and, bind() 
methods.
We use call, bind and apply methods to set the this 
keyword independent of how the function is called. This is 
especially useful for the callbacks.Every function object is 
also given a few unique methods and attributes by 
JavaScript. These are the methods that every JavaScript 
function inherits. Every function inherits certain methods, 
such as call, bind, and apply.


bind(): The bind method creates a new function and sets 
the this keyword to the specified object.

Syntax:

function.bind(thisArg, optionalArguments)
Mohit Jain
From To 10+ year 

experience
With
16
Curated by tutort academy
const john = {

name: 'John',

age: 24,

};

const jane = {

name: 'Jane',

age: 22,

};
function greeting() {

console.log(`Hi, I am ${this.name} and I am 
${this.age} years old`);

}
For example:


Let’s suppose we have two person objects.
Let’s add a greeting function:
Curated by tutort academy
const greetingJohn = greeting.bind(john);

// Hi, I am John and I am 24 years old

greetingJohn();

const greetingJane = greeting.bind(jane);

// Hi, I am Jane and I am 22 years old

greetingJane();
We can use the bind method on the greeting function to 
bind the this keyword to john and jane objects. 


For example:
Here greeting.bind(john) creates a new function with this 
set to john object, which we then assign to greetingJohn 
variable. Similarly for greetingJane.
call(): The call method initializes the this inside the 
function and launches it right away. 

In contrast to bind(), which produces a copy of the 
function and sets the this keyword, call() sets the this 
keyword, executes the function instantly, and does not 
create a new copy of the function.
Curated by tutort academy
function greeting() {

console.log(`Hi, I am ${this.name} and I am 
${this.age} years old`);

}

const john = {

name: 'John',

age: 24,

};

const jane = {

name: 'Jane',

age: 22,

};

// Hi, I am John and I am 24 years old

greeting.call(john);

// Hi, I am Jane and I am 22 years old

greeting.call(jane);
Syntax: function.call(thisArg, arg1, agr2, ...)


For example:
Above example is similar to the bind() example except that 
call() does not create a new function. We are directly setting the 
this keyword using call().
Curated by tutort academy
function greet(greeting, lang) {

console.log(lang);

console.log(`${greeting}, I am ${this.name} 
and I am ${this.age} years old`);

}

const john = {

name: 'John',

age: 24,

};

const jane = {

name: 'Jane',

age: 22,

};

// Hi, I am John and I am 24 years old

greet.apply(john, ['Hi', 'en']);

// Hi, I am Jane and I am 22 years old

greet.apply(jane, ['Hola', 'es']);
apply(): The apply() method is similar to call(). The 
difference is that the apply() method accepts an array 
of arguments instead of comma separated values.


Syntax: function.apply(thisArg, [argumentsArr])


For example:
Curated by tutort academy
Is JavaScript single-threaded, if yes then how 
it works as an multi-threaded language? OR 
What is event loop in javascript?
JavaScript is a single-threaded asynchronous 
programming language. But what does it mean? What 
is this event loop in JavaScript that we all keep talking 
about? To know more click here
17
Courses Offered by Tutort Academy
Full Stack with 
MERN
Learn more
DSA with System 
Design
Learn more
Curated by tutort academy
What are promises, async-await 
and callback?
A Promise is a proxy for a value not necessarily known 
when the promise is created. It allows you to 
associate handlers with an asynchronous action's 
eventual success value or failure reason.
18
This lets asynchronous methods return values like 
synchronous methods: instead of immediately 
returning the final value, the asynchronous method 
returns a promise to supply the value at some point 
in the future.
Curated by tutort academy
A Promise is in one of these states:
Async simply allows us to write promises-based 
code as if it was synchronous and it checks that we 
are not breaking the execution thread. It operates 
asynchronously via the event loop. Async functions 
will always return a value. It makes sure that a 
promise is returned and if it is not returned then 
JavaScript automatically wraps it in a promise 
which is resolved with its value.
pending: initial state, neither fulfilled nor rejected.
fulfilled: meaning that the operation was completed 
successfully.
rejected: meaning that the operation failed.
A promise is said to be settled if it is either fulfilled or 
rejected, but not pending.
Syntax: 
const func1 = async() => {

return “Hello World!”;

}
Curated by tutort academy
Await function is used to wait for the promise. It 
could be used within the async block only. It makes 
the code wait until the promise returns a result. It 
only makes the async block wait.
Syntax:

const func2 = async () = {

let x= await func1();

console.log(x);

}
Tutort Provides 24x7 Live 1:1 Video based doubt support
Curated by tutort academy
What is callback hell?
Callback Hell is an anti-pattern with multiple nested 
callbacks which makes code hard to read and debug 
when dealing with asynchronous logic. 



The callback hell looks like below,
Syntax:

async1(function(){

async2(function(){

async3(function(){

async4(function(){

....

});

});

});

});
19
Curated by tutort academy
What are observables?
Observables in JavaScript are a way to handle 
asynchronous events. They are functions that return a 
stream of values, which can be used to represent data 
streams such as DOM events, mouse events, or HTTP 
requests.

Observables work by providing a way to subscribe to a 
stream of values, and then receiving those values as they 
become available. This allows you to respond to events in 
a more reactive way, without having to wait for the entire 
event stream to complete before processing it.

To use observables in JavaScript, you can use the RxJS 
library.
20
import { Observable } from 'rxjs';

const observable = new Observable(subscriber => {

subscriber.next(1);

subscriber.next(2);

subscriber.next(3);

subscriber.complete();

});

observable.subscribe(value => {

console.log(value);

});
Curated by tutort academy
What are the differences between 
promises and observables?
Promises Observables
Emits only a single value at 
a time
Eager in nature; they are going 
to be called immediately
Promise is always 
asynchronous even though it 
resolved immediately
Doesn't provide any 
operators
Cannot be cancelled
Emits multiple values over a 
period of time(stream of values 
ranging from 0 to multiple)
Lazy in nature; they require 
subscription to be invoked
Observable can be either 
synchronous or asynchronous
Provides operators such as 
map, forEach, filter, reduce, 
retry, and retryWhen etc
Cancelled by using 
unsubscribe() method
21
Curated by tutort academy
What is the difference between 
setTimeout, setImmediate and 
process.nextTick?
setTimeout(): Using the setTimeout() method, a 
callback function can be scheduled to run once after a 
millisecond delay.


: Use the setImmediate function to run 
a function immediately following the conclusion of the 
current event loop.


: If process.nextTick() is invoked in a 
given phase, all the callbacks passed to 
process.nextTick() will be resolved before the event 
loop continues. This will block the event loop and create 
I/O Starvation if process.nextTick() is called recursively.
setImmediate()
process.nextTick()
21
Uzeen 
Chhabra
From Switch from 
Service Based 
Company
To
Curated by tutort academy
What is microtask in JavaScript?
A microtask is a short function which is executed 
after the function or program which created it exits 
and only if the JavaScript execution stack is empty, 
but before returning control to the event loop being 
used by the user agent to drive the script's 
execution environment.
23
What Pure Functions in JavaScript?
A function or section of code that always yields the same 
outcome when the same arguments are supplied is 
known as a pure function. It is independent of any state or 
data changes that occur while a program is running. 
Instead, it just relies on the arguments it is given.



Additionally, a pure function does not result in any side 
effects that can be seen, such as network queries, data 
alteration, etc.
24
Curated by tutort academy
What is an error object and its 
different error name object?
When an error happens, an error object—a built-in error 
object—provides error information. There are two 
attributes: name and message. For instance, the following 
function records error information,
Error name Description
EvalError
SyntaxError
RangeError
TypeError
ReferenceError
URIError
An error has occurred in the 
eval() function
An error due to syntax
An error has occurred with a 
number "out of range"
An error due to a type error
An error due to an illegal reference
An error due to encodeURI()
Syntax:

try {

greeting("Welcome");

} catch (err) {

console.log(err.name + "<br>" + err.message);

}
25
There are 6 different types of error names returned from error object,
Curated by tutort academy
What are the various statements in 
error handling?
Below are the list of statements used in an error handling,
try: This statement is used to test a block of code for errors
catch: This statement is used to handle the error
throw: This statement is used to create custom errors.
finally: This statement is used to execute code after try and 
catch regardless of the result.
26
Guaranteed 

Job Referrals Highest 
 100% CTC
Hiring
 250+ Partners 2.1CR
Why Tutort Academy?
Curated by tutort academy
What do you mean by strict mode in 
javascript and characteristics of 
javascript strict-mode?
27
In ECMAScript 5, a new feature called JavaScript Strict 
Mode allows you to write a code or a function in a "strict" 
operational environment. When it comes to throwing 
errors, javascript is often 'not extremely severe'. However, 
in "Strict mode," all errors, even silent faults, will result in a 
throw. Debugging hence becomes more easier. Thus, the 
chance of a coder committing a mistake is decreased.


Characteristics of strict mode in javascript:
Duplicate arguments are not allowed by developers.
Use of javascript’s keyword as parameter or 
function name is not allowed.
The 'use strict' keyword is used to define strict 
mode at the start of the script. Strict mode is 
supported by all browsers
Creating of global variables is not allowed.
Curated by tutort academy
What are the differences between 
cookie, local storage and session 
storage?
Cookie Local storage Session
Can be accessed on 
both server- side & 
client side
As configured using 
expires option
SSL is supported
Maximum size is 4 
KB
Can be accessed on 
client- side only
Lifetime is until deleted
SSL is not supported
Maximum size is 5 MB
Can be accessed on 
client- side only
Lifetime is until tab is 
closed
SSL is not supported
Maximum size is 5 MB
Subhadip 
Chowdhury
From To Placed with
100% Hike
28
Curated by tutort academy
Explain prototype chaining
Prototype chaining is used to build new types of objects 
based on existing ones. It is similar to inheritance in a 
class based language.

The prototype on object instance is available through 
Object.getPrototypeOf(object) or __proto__ property 
whereas prototype on constructors function is available 
through Object.prototype.
29
I got rejected in the Amazon interview. After that, I joined Tutort Academy 
for DSA concepts as a working professional. They fulfilled my all 
requirements and that is why I am in Microsoft right now. I highly 
recommend Tutort Academy for professionals. Nikesh Bisen
Curated by tutort academy
30 What are generators and what are 
its different kinds?
Introduced in the ES6 version, generator functions are a special 
class of functions.


They can be stopped midway and then continue from where 
they had stopped.


Generator functions are declared with the function* keyword 
instead of the normal function keyword.


There are five kinds of generators,
Generator function declaration
Generator function expressions
Generator method definitions in object literals
Generator method definitions in class
Generator as a computed property
Curated by tutort academy
Difference between Debouncing and 
Throttling.
Debouncing Throttling
An error has occurred in the 
eval() function
Debouncing waits for a certain 
time before invoking the function 
again.
An error due to syntax
Eg. You can debounce an async API 
request function that is called every 
time the user types in an input field.
An error has occurred with a 
number "out of range"
Ensures that the function is called 
only once, even if the event is 
triggered multiple times.
Syntax:

function throttle(callback, delay = 
1000) {

let shouldWait = false;

return (...args) => {

if (shouldWait) return;

callback(...args);

shouldWait = true;

setTimeout(() => {

shouldWait = false;

}, delay);

};

}
Syntax:

function debounce(func, delay) {

let timerId;

return function () {

const context = this;

const args = arguments;

clearTimeout(timerId);

timerId = setTimeout(function () {

func.apply(context, args);

}, delay);

};

}
An error due to an illegal reference
Useful when you want to delay the 
invocation of a function until a certain 
period of inactivity has passed.
