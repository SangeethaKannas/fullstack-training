//Getting Element By Id
//Returns a single element
const headerTitle = document.getElementById('title')

headerTitle.textContent = 'Text Content'
headerTitle.innerHTML = 'Inner HTML Modified'
headerTitle.innerText = 'Inner Text Modified'

headerTitle.style = 'white'

//Getting Element By classname
//Returns an array of html elements
const itemsByClasses = document.getElementsByClassName('list-item')

const itemsByTags = document.getElementsByTag('li')

const head = document.querySelector('head') // Returns first element
console.log(head)

const head = document.querySelectorAll('head')  // REturns nth element

