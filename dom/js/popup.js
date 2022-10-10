/**
 * Popup js
 */

 var isShowing = false;
 
function btnClickHandler() {
    let popup = document.querySelector('.status-popup');
    popup.style.display = false;
    isShowing = !isShowing;
    
    if(isShowing) {
        popup.style.display = 'block';
    } else {
        popup.style.display = 'none';
    }
}

 document.querySelector('.btn').addEventListener('click', btnClickHandler);