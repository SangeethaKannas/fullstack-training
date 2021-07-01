Conditional Statements
   if-else
   Switch-break
   Ternary operator
   
Truthy / Falsy
  type- coerced to boolean
  
Loop statements

   For loop
    for (initial-expression; condition; second-expression){
      // run this code in block
    }
    
   While loop
   
   while(condition) {
   
   }
   
   Do while loop
   do {
   
   
   } while(condition)
   
   Event Loop
   
     Javascript engine
     Execution context
     Call stack
     Last-in First out
     Message queue
     Third party processes
       HTTP process
       Timer process
       DOM Events
       
    
    Browser
    Window
    Document - view port or the section where the website is displayed
    Navigator
    HTML/CSS preprocessor
    JS enginer
    Dev tools
   
   Query/Get Elements
// Preferred way:
document.querySelector('css-selectors')
document.querySelectorAll('css-selectors', ...)
// Old ways, and still work:
document.getElementsByTagName('element-name')
document.getElementsByClassName('class-name')
document.getElementById('id')
Create / clone Element
document.createElement('div')
document.createTextNode('some text here')
node.cloneNode()
node.textContent = 'some text here'
Modify Element
node.style.color = 'red'
node.style.padding = '10px',
node.style.fontSize = '200%'
node.setAttribute('attr-name', 'attr-value')
node.removeAttribute('attr-name')
Get and Modify Element Class
node.classList
node.classList.add('class-name', ...)
node.classList.remove('class-name', ...)
node.classList.toggle('class-name')
node.classList.contains('class-name')
node.classList.replace('old', 'new')
Add node to document
parentNode.appendChild(nodeToAdd)
parentNode.insertBefore(nodeToAdd, childNode)
Remove Node
parentNode.removeChild(nodeToRemove)
// Hack to remove self
nodeToRemove.parentNode.removeChild(nodeToRemove)

Get Element Details
node.nextSibling
node.firstChild
node.lastChild
node.parentNode
node.childNodes
node.children

Events
node.addEventListener('event-name', callback-function)
node.removeEventListener('event-name', callback-function)  
   
  Node 
    Text Node
    Element Node
    
    
  Child Node
  Parent Node
  Descendent Node
  Siblings
  
  
  Auto Inherited properties
  constructor --> with a special property called prototype
  
  String
    concat
    charAt
    split
    indexOf
    startsWith
    endsWith
    slice
    
 Array
    sort
    slice
    splice
    map
    filter
    forEach
    find
    every
    some
    reduce
    
Number
   toFixed
   toString
   toPrecision
   
Boolean
   toString
   
Built In objects   Date Math

