//Traversing the DOM

const itemList = document.querySelector('span')
console.log(itemList.parentNode)

console.log(itemList.parentElement)

//Child Nodes
console.log(itemList.childNodes)
//Child nodes may contains empty texts like line breaks also

console.log(itemList.children)

itemList.firstChild

itemList.firstElementChild

itemList.nextSibling

itemList.nextElementSibling

itemList.previousSibling

itemList.previousElementSibling