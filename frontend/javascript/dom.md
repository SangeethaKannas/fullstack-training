### document
- getElementById
- getElementsByClassName('class)
- querySelector('selector')
- querySelectorAll('selector')
- getElementByTagName

### Creating/Appending elements
- document.createElement
- document.createTextNode
- elem.appendChild(child)
- elem.removeChild(child)
- elem.replaceChild(newChild, oldChild)
- createAttribute

### Accessing parent, children, siblings
- elem.children; elem.childNodes
- elem.firstChildElement; elem.firstChild
- elem.lastChildElement; elem.lastChild

- child.parentNode     
- child.nodeName, child.nodeType, child.nodeValue
- child.previousSibling
- child.nextSibling

### node
- appendChild ( node )
- removeChild ( node )
- hadChildNodes
- childNodes
- insertBefore


### Dom Events
- document.addEventListener

#### Mouse
- onclick
- onmouseover
- onmouseout
 
#### Keyboard
- onkeydown
- onkeypress
- onkeyup


#### Form
- onchange
- onfocus
- onblur
- oninput
- 

### Modifying elements
elem.outerHTML = ''
elem.innerHTML = ''
elem.textContent = ''
elem.style = 'color: blue'

### Modifying attributes
elem.getAttribute('title')
elem.setAttribute('title', 'modified title')
elem.hasAttribute('title')
elem.removeAttribute('title')


### Modifying element classes
elem.classList
elem.classList.add ('myclass')
     .remove('classname')
     .toggle('classname')
     .contains('classname')

