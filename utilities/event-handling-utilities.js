"onCopy", (function(e) {
      e.preventDefault()
  }


  "onPaste", (function(e) {
                    e.preventDefault()
                }

 "onKeyUp", (function(e) {
                    return 13 === e.keyCode ? //Enter
                    !1) : 8 !== e.keyCode // Bakcspace
                    !1))

//Send events to backend
const eventsToSend = []
let isRequestIdleCallbackScheduled = false;

const onButtonClick = () => {
    eventsToSend.push({
        category: 'button',
        action: 'click',
        label: 'cta',
        value: 'mainCta'
    })

    schedulePendingEvents();
}

const schedulePendingEvents() {
    if(isRequestIdleCallbackScheduled) return;

    isRequestIdleCallbackScheduled = true;

   if('requestIdleCallback' in window) {
        requestIdleCallback(processPendingAnalyticsEvents, {timeout: 2000})
   } else {
        processPendingAnalyticsEvents()
   }


}


//didTimeout
//timeRemaining
const processPendingAnalyticsEvents = (deadline) => {
    isRequestIdleCallbackScheduled = false;

    while(deadline.timeRemaining() > 0 && eventsToSend.length > 0) {
        const event = eventsToSend.pop();
        sendDataToAnalyticsServer(event);
    }

    if(eventsToSend.length > 0) {
        schedulePendingEvents();
    }
}


// Draggable
let prevX, prevY

function drag(e) {
    let el = e.currentTarget
    let [x, y] = [e.clientX, e.clientY];
    let [dx, dy] = [x - e.clientX, y - e.clientY];
    el.style.top = el.offsetTop + dy + "px";
    el.style.left = el.offsetLeft + dx + "px";
    [prevX, prevY] = [x, y];
}

function makeStatic(e) {
    e.currentTarget.onmousemove = null;
    e.currentTarget.onmouseup = null
}

function make_draggable(e) {
    [prevX, prevY] = [e.clientX, e.clientY];
    e.currentTarget.onmousemove = drag;
    e.currentTarget.onmouseup = make_static;
}

const draggable = document.querySelector('#draggable');
draggable.onmousedown = make_draggable;
