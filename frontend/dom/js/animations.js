function smoothScroll(target, duration, startPosition) {
    
    var targetPosition = target.getBoundingClientRect().top;    
    var distance = targetPosition - startPosition;

    var startTime = null;

    function animation(currentTime) {
        if( startTime === null) { 
            startTime = currentTime
        } else {

        }
        var timeElapsed = currentTime - startTime;
        var run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if(timeElapsed < duration) {
            requestAnimationFrame(animation);
        } else {
            
        }
    }

    function ease(t, b, c, d) {
        t /= d/2;
        if( t < 1) {
            return c/2 * t * t + b;
        } else {
            t--;
            return -c / 2 * ( t * ( t -2 ) -1) + b;
        }
    }

    requestAnimationFrame(animation);
}

function animateFontAwesome() {    
    let faElement = document.getElementById("chain");
    faElement.innerHTML = '&#xf0c1'

    setTimeout(function () {
        faElement.innerHTML = '&#xf127'
    }, 1000)
}

animateFontAwesome();

setInterval(animateFontAwesome, 2000)