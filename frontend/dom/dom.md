# Document Object Model

Trees or Nodes of created by the browsers

Javascript - read/write/manipulate dom

Object Oriented Representation

Nodes Vs Elements

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
