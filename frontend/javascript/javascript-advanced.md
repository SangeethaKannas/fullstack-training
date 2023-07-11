## Javascript Advanced

 <!--[if lt IE 9]>
    <link rel="stylesheet" href="<ie8.css>">
    <script src="<ie8>"></script>
  <![endif]-->


### Javascript Engine

- Javascript Runtime
- Interpreter/Compiler /JIT Compiler
- Writing Optimized Code
- Call stack + memory Heap
- Stack overflow + Memory Leaks
- Garbage Collection

#### Enginers - JS engines | Virtual Machines
   - Chrome - V8 engine
   - Safari - JavaScriptCore engine
   - Firefox - SpiderMonkey (except iOS)
   - Edge - Chakra -> Chromium

## Node.js
- Single Threaded Model

## Others

- Execution Context
- Lexical Environment
- Scope Chain
- Hoisting
- Function Invocation
- Function Scope Vs Block Scope
- Dynamic Vs Lexical Scope
- this - call, apply and bind
- IIFE

## Types
- Static Vs Dynamically Typed
- Primitive Types

## Pass by Reference and Pass By Value
- Type Coercion
- Arrays, Functions and Objects

## The 2 Pillars
- Closures
- Prototypical Inheritance

## Higher order functions
- Functions Vs Objects
- Schme + Java

## OOP Vs FP
### OOP
- this keyword
- new keyword
 - Prototype
  ES 6 classes
  Java
  Inheritance
  Object.create
  Private Vs Public
  4 principles of OOP

### FP
  Composition vs inheritance
  Curry
  Partial Application
  Pure Functions
  Referential Transparency
  Compose
  Pipe

 ## Extras+
 ###  Asynchronous Javascript
      Web APIs
      Async / Await
      Callbacks
      Microtask Queue ( Job Queue )
      Task Queue (callback Queue )
      Promises
      Event loop

  ### Error handling

  ### Modules
      Native ES Modules
      CommonJS
      UMD
      AMD
      IIFE

### Others
Deep copy : structuredClone (obj0)

### Check if online or offline

window.addEventListener('online', () => {})
window.addEventListener('offline', () => {})

window.navigator.onLine

### Structure clode

_.cloneDeep

structuredClone(object);


### Send Beacon

const body = {events}
const headers = {type: 'application/json' }
const blob = new Blob([JSON.stringify(body)], headers)

//Executes when user closes or switches tab or closes session

document.addEventListener('visibilityChange', () => {
  if(document.visibilityState === 'hidden') {
     navigator.sendBeacon('/events', btob)
     //Guaranteed to send event even when session ends
  }
});

### Get battery status

navigator.getBattery().then((battery) => {
  console.log(battery);
})

### Console utilities API
copy()              -  copies string representation of parameter as string in clipboard
inspect()           -  opens and selects the specified element or object in appropriate method
monitor()           -  logs in the console when specified function is called and lists its parameters
getEventListeners() -  returns the event listeners registered on specific object
$$(selector)        -  returns an array of elements that match given CSS selectors. = document.querySelectorAll()

### Performance
let supported, perf;
function isPerformanceSupported() {
    var c;
    return supported !== void 0 || (typeof window != "undefined" && window.performance ? (supported = !0,
    perf = window.performance) : typeof global != "undefined" && ((c = global.perf_hooks) === null || c === void 0 ? void 0 : c.performance) ? (supported = !0,
    perf = global.perf_hooks.performance) : supported = !1),
    supported
}

function now() {
    return isPerformanceSupported() ? perf.now() : Date.now()
}

### Scroll Positions

const computeScrollPosition = ()=>({
    left: window.pageXOffset,
    top: window.pageYOffset
});


function getScrollKey(c, d) {
    return (history.state ? history.state.position - d : -1) + c
}
const scrollPositions = new Map;

function saveScrollPosition(c, d) {
    scrollPositions.set(c, d)
}

	$(document).ready(function() {
		var content = $('#div1');
		var top = $('#div2');

		$(window).on('scroll', function() {
			if(content.offset().top <= 100) {
				top.css({'opacity': 0.8});
			}else{
				top.css({'opacity': 1});
			}
		});
	});

	$(document).ready(function() {
		var top = $("#menu");
		$(window).on('scroll', function(){
			if(($('#content').offset().top - $(window).scrollTop()) <= 100){
				top.css({'opacity': 0.4});
			}else{
				top.css({'opacity': 1});
			}
		});
	});

////////////////////////////// Scroll to Top

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };


### Regular expressions

const HASH_RE = /#/g
  , AMPERSAND_RE = /&/g
  , SLASH_RE = /\//g
  , EQUAL_RE = /=/g
  , IM_RE = /\?/g
  , PLUS_RE = /\+/g
  , ENC_BRACKET_OPEN_RE = /%5B/g
  , ENC_BRACKET_CLOSE_RE = /%5D/g
  , ENC_CARET_RE = /%5E/g
  , ENC_BACKTICK_RE = /%60/g
  , ENC_CURLY_OPEN_RE = /%7B/g
  , ENC_PIPE_RE = /%7C/g
  , ENC_CURLY_CLOSE_RE = /%7D/g
  , ENC_SPACE_RE = /%20/g;


###   const ClickApp = () => {
    let isMobile = {
      Android: function () {
        return navigator.userAgent.match(/windows|Android/i);
      },
      iOS: function () {
        return navigator.userAgent.match(/mac|iPhone|iPad|iPod/i);
      },
    };
    if (isMobile.Android()) {
      window.open(
        "https://play.google.com/store/apps/details?id=com.stashfin.android","_blank");
    }

    if (isMobile.iOS()) {
      window.open(
        "https://apps.apple.com/us/app/stashfin/id1276990457","_blank");
    }
  };


#### Random Notes
if (!yaa.test(a))
return a;
-1 != a.indexOf("&") && (a = a.replace(zaa, "&amp;"));
-1 != a.indexOf("<") && (a = a.replace(Aaa, "&lt;"));
-1 != a.indexOf(">") && (a = a.replace(Baa, "&gt;"));
-1 != a.indexOf('"') && (a = a.replace(Caa, "&quot;"));
-1 != a.indexOf("'") && (a = a.replace(Daa, "&#39;"));
-1 != a.indexOf("\x00") && (a = a.replace(Eaa, "&#0;"));
return a

var d = new Uint8Array(c)

return e !== c ? d.subarray(0, e) : d

for (var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""), b = ["+/=", "+/", "-_=", "-_.",

void 0


element.classList.toggle("sub-menu-item-active")
element.classList.toggle("show")

### Polyfils
String
  "trimStart"in String.prototype || (String.prototype.trimStart = String.prototype.trimLeft),
        "trimEnd"in String.prototype || (String.prototype.trimEnd = String.prototype.trimRight),
        "description"in Symbol.prototype || Object.defineProperty(Symbol.prototype, "description", {
            configurable: !0,
            get: function() {
                var e = /\((.*)\)/.exec(this.toString());
                return e ? e[1] : void 0
            }
        }),


Array
        Array.prototype.flat || (Array.prototype.flat = function(e, t) {
            return t = this.concat.apply([], this),
            e > 1 && t.some(Array.isArray) ? t.flat(e - 1) : t
        }
        ,
        Array.prototype.flatMap = function(e, t) {
            return this.map(e, t).flat()
        }
        ),

Promise - finally
        Promise.prototype.finally || (Promise.prototype.finally = function(e) {
            if ("function" != typeof e)
                return this.then(e, e);
            var t = this.constructor || Promise;
            return this.then((function(r) {
                return t.resolve(e()).then((function() {
                    return r
                }
                ))
            }
            ), (function(r) {
                return t.resolve(e()).then((function() {
                    throw r
                }
                ))
            }
            ))
        }
        )


### Decode encode URI component
 encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent),
 encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
 return t.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)

### Devtools
Dev tools : unused code
Tip: DevTools can measure how much unused JavaScript is on your page. Helpful to identify code to remove or lazy-load.

DevTools > three-right menu > More tools > Coverage

Ideally, only load code users need when they need it (or soon before they need it). The Coverage tab in Chrome DevTools can help you find unused JavaScript and CSS. Removing unused code or lazy-loading non-critical code can improve how quickly pages load and render for users. Learn more: https://bit.ly/unused-js.

I usually like to pair usage of Coverage with Lighthouse Treemap or Webpack Bundle Analyzer. Lighthouse also includes audits for discovering unused JavaScript and identifying specific opportunities to optimize or remove less necessary things in your bundles (e.g. duplicate modules).

Is all unused JavaScript bad? Not quite. Some of it might be needed right away, but may not be executed on page load as it requires a user interaction. For a more accurate picture of what to lazy-load, here's how I tend to use it:

I do an initial run (which may say 50% of my code is unused) and then I click around on key actions the user is most likely to immediately perform on the page (e.g. clicking on tabs, focusing on Search) - this might take the number down to 40%. You can eagerly load this code or prefetch chunks for this work if you want, lazy-loading most of the rest.

The key part is to load what's actually important to the user when they need it most, while not delaying their ability to perform early interactions.

Advanced: We've been talking about code-splitting and lazy-loading for a number of years now. If you're interested in how this pertains to modern frameworks, partial hydration etc you may be interested in "is 0KB of JavaScript your future?": https://lnkd.in/g4ZYR4Dq. You might also be interested in reading up about the value of reducing unused code as it relates to newer performance metrics like INP: https://web.dev/inp/

### Websites to ask Questions

1. Stack overflow
2. Quora
3. Reddit
4. Stack Exchange
5. CodeProject
6. Google Groups
7. Google Ranch
8. Programmers Haven
9. findNerd
10. Chegg


1. Let's start from the basics. When we browse any website, we are connected via multiple HTTP requests which are sent over a TCP connection maintained between the client and the server. We also know, that for real-time systems like chat applications, we use Web Sockets instead of HTTP connections. Now, the question comes, what type of connection is maintained during streaming and how is the data actually transferred?

2. Answering the first question, the type of connection that is maintained while streaming is called the HTTP streaming connection.

3. The "HTTP streaming" mechanism keeps a request open indefinitely. It never terminates the request or closes the connection, even after the server pushes data to the client. This mechanism significantly reduces the network latency because the client and the server do not need to open and close the connection.

4. The basic life cycle of an application using "HTTP streaming" is as follows:1) The client makes an initial request and then waits for a response.2) The server defers the response to a poll request until an update is available, or until a particular status or timeout has occurred.3) Whenever an update is available, the server sends it back to the client as a part of the response.4) The data sent by the server does not terminate the request or the connection. The server returns to step 3.

5. Now we know the connection type used for streaming, as HTTP depends on TCP, the underlying connection is TCP. Now let's discuss how the data actually travels.

6. For this, HTTP live streaming (HLS) protocol is used. An HLS stream originates from a server where (in on-demand streaming) the media file is stored, or where (in live streaming) the stream is created.

7. Two main processes take place on the server:1) Encoding: The video data is reformatted so that any device can recognize and interpret the data. HLS must use H.264 or H.265 encoding.2) Segmenting: The video is divided up into segments a few seconds in length. In addition to dividing the video into segments, HLS creates an index file of the video segments to record the order they belong in.HLS will also create several duplicate sets of segments at different quality levels: 480p, 720p, 1080p, and so on.

8. Then these segments are supplied over CDN which then makes these available to the client which is your device- laptop or mobile on which you are streaming contents.

9. One of the advantages HLS has over some other streaming protocols is adaptive bitrate streaming.

There are some other streaming protocols too like DASH. A lot of people prefer DASH over HLS.

I also created a detailed video on the topic explaining video streaming in detail:
https://lnkd.in/d2fP53du


https://lnkd.in/dX8nuf5D


### Key Codes
          Esc: "Escape",
            Spacebar: " ",
            Left: "ArrowLeft",
            Up: "ArrowUp",
            Right: "ArrowRight",
            Down: "ArrowDown",
            Del: "Delete",
            Win: "OS",
            Menu: "ContextMenu",
            Apps: "ContextMenu",
            Scroll: "ScrollLock",
            MozPrintableKey: "Unidentified"
        }
          , Xr = {
            8: "Backspace",
            9: "Tab",
            12: "Clear",
            13: "Enter",
            16: "Shift",
            17: "Control",
            18: "Alt",
            19: "Pause",
            20: "CapsLock",
            27: "Escape",
            32: " ",
            33: "PageUp",
            34: "PageDown",
            35: "End",
            36: "Home",
            37: "ArrowLeft",
            38: "ArrowUp",
            39: "ArrowRight",
            40: "ArrowDown",
            45: "Insert",
            46: "Delete",
            112: "F1",
            113: "F2",
            114: "F3",
            115: "F4",
            116: "F5",
            117: "F6",
            118: "F7",
            119: "F8",
            120: "F9",
            121: "F10",
            122: "F11",
            123: "F12",
            144: "NumLock",
            145: "ScrollLock",
            224: "Meta"
        }
Other events
        At("blur blur cancel cancel click click close close contextmenu contextMenu copy copy cut cut auxclick auxClick dblclick doubleClick dragend dragEnd dragstart dragStart drop drop focus focus input input invalid invalid keydown keyDown keypress keyPress keyup keyUp mousedown mouseDown mouseup mouseUp paste paste pause pause play play pointercancel pointerCancel pointerdown pointerDown pointerup pointerUp ratechange rateChange reset reset seeked seeked submit submit touchcancel touchCancel touchend touchEnd touchstart touchStart volumechange volumeChange".split(" "), 0),


        At("drag drag dragenter dragEnter dragexit dragExit dragleave dragLeave dragover dragOver mousemove mouseMove mouseout mouseOut mouseover mouseOver pointermove pointerMove pointerout pointerOut pointerover pointerOver scroll scroll toggle toggle touchmove touchMove wheel wheel".split(" "), 1),
        At(Lt, 2);
        for (var Ut = "change selectionchange textInput compositionstart compositionend compositionupdate".split(" "), Vt = 0; Vt < Ut.length; Vt++)

### Video Events
  Lt = ["abort", "abort", je, "animationEnd", He, "animationIteration", $e, "animationStart", "canplay", "canPlay", "canplaythrough", "canPlayThrough", "durationchange", "durationChange", "emptied", "emptied", "encrypted", "encrypted", "ended", "ended", "error", "error", "gotpointercapture", "gotPointerCapture", "load", "load", "loadeddata", "loadedData", "loadedmetadata", "loadedMetadata", "loadstart", "loadStart", "lostpointercapture", "lostPointerCapture", "playing", "playing", "progress", "progress", "seeking", "seeking", "stalled", "stalled", "suspend", "suspend", "timeupdate", "timeUpdate", Be, "transitionEnd", "waiting", "waiting"];


### Pointer events

case "focus":
case "blur":
case "dragenter":
case "dragleave":
case "mouseover":
case "mouseout":
case "pointerover":
case "pointerout":
case "gotpointercapture":
case "lostpointercapture":


### Cookies
1. Cookies are small pieces of text sent to your browser by a website you visit. They help that website remember information about your visit, which can both make it easier to visit the site again and make the site more useful to you. Cookies are also of two types: first-party cookies and third-party cookies.

2. First-party cookies are the cookies that the website you are on stores to help populate the information when you again come back on the website like username etc. Third-Party cookies are the cookies that are stored by the ad servers - Meta.

3. Every eCommerce website generally has an integration with Meta to record the things you search for. A part of the code of these ad-servers gets executed whenever you shop for an item or click on it.
These websites generally do this so that they can re-target you in the future using Facebook/Instagram Ads.

4. The new Apple IOS update disabled Third-party cookies which became a big issue for Meta and also eCommerce websites that depend on this data to sell your products.

5. eCommerce websites started seeing bad results with their Facebook ads. They started losing money for ads and not getting good impressions or click-through rates.

6. This caused them to move away from Meta which in turn led to declining in revenue of Meta and hence the stock dip.

### Javascript Advanced
//Create generator
function *myGenerator() {
  console.log('Invoked 1st time');
  yield 1

  console.log('Invoked 2nd time');
  yield 2

  console.log('Invoked 3rd time');
  yield 3
}

//Assign generator a variable
const myGeneratorValue = myGenerator();

console.log(myGeneratorValue.next());

console.log(myGeneratorValue.next());

console.log(myGeneratorValue.next());

// This call does'nt return any yield, since there is no other yield the generator is done
console.log(myGeneratorValue.next());


