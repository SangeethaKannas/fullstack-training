/**
 * Get all siblings of current child
 * @param {} elem
 */
var hideOtherSiblings = function (element) {
    var sibling = element.parentNode.children[0];
    var skipMe = element;
    for ( ; sibling; sibling = sibling.nextSibling ) {
       if ( sibling.nodeType == 1 && sibling !== skipMe ) {
            sibling.classList.remove('selected-tab');
            document.getElementsByClassName(sibling.name)[0].style.display = 'none';
        }
    }
}

/**
 * Shows the selected tab
 * @param {} event
 */
function showTab(event) {
    event.preventDefault();
    event.stopPropagation();
    var selectedLink = document.getElementsByName(event.target.name)[0];
    selectedLink.classList.add("selected-tab");
    var currentTab = document.getElementsByClassName(selectedLink.name)[0];
    currentTab.style.display = "block";
    hideOtherSiblings(event.target);
}

/**

Main file which controls other files and also the landing page

*/

function scrollDownHandler() {
    smoothScroll(document.querySelector('.box2'), 500, window.pageYOffset);
}

document.querySelector('.section1').addEventListener('click', scrollDownHandler);

/**
 *
 * A Function which returns current time as an object
 */
function getTimeAsObject() {
    let today = new Date(),
    hour = today.getHours();

    return {
             "amOrPM": hour > 12 ? 'PM' : 'AM',
             "hh": ( hour % 12 || 12 ),
             "mm": today.getMinutes(),
             "ss": today.getSeconds(),
           }
}

//Add leading zeros for single digit numbers
function addZero(n) {
    return (Number(n) < 10 ? '0' : '' )  + n
}

function nameEventListener(event) {
    if(event.type == 'keypress') {
        if(event.which == 13 || event.keyCode === 13) {
            localStorage.setItem('name', event.target.textContent);
            event.target.blur();
        }
    } else {
        localStorage.setItem('name', event.target.textContent);
    }
}

function focusEventListener(event) {
    if(event.type == 'keypress') {
        if(event.which == 13 || event.keyCode === 13) {
            localStorage.setItem('focus', event.target.textContent);
            event.target.blur();
        }
    } else {
        localStorage.setItem('focus', event.target.textContent);
    }
}

(function init() {

    const time = document.getElementById('time'),
        greeting = document.getElementById('greeting'),
        name = document.getElementById('name'),
        focus = document.getElementById('focus')

    if(localStorage.getItem('name') === null ){
        name.textContent = '[Enter Name]';
    } else {
        name.textContent = localStorage.getItem('name')
    }

    if(localStorage.getItem('focus') === null ){
        focus.textContent = '[Focus for today]';
    } else {
        focus.textContent = localStorage.getItem('focus')
    }

    setInterval(function showTime() {
        const t = getTimeAsObject();
        time.innerHTML = `${addZero( t.hh) }<span>:</span>${addZero(t.mm)}<span>:</span>${addZero(t.ss)} ${t.amOrPM}`
    }, 1000);

    //Add Event Listeners
    name.addEventListener('keypress', nameEventListener );
    name.addEventListener('blur', nameEventListener );

    focus.addEventListener('keypress', focusEventListener);
    focus.addEventListener('blue', focusEventListener);

})();
