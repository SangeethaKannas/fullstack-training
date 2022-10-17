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
