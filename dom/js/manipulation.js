//Create Element

var newDiv = document.createElement('div')
console.log(newDiv)

insertBeore

insertAter


unction addItem(e) {
    e.preventDeault()

    var newItem = document.getElementById('item')

    var li = oument.createElement('li')
    li.className='list-item'
    li.appendChild(document.createTextNode(newItem))

    //create like button
    var likeBtn = document.createElement('button')

    itemList.appendChild(li)

}