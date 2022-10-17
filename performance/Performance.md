A Sneak Peak into Super Optimized Code in JS Frameworks

React - Fibernode
Angular- ViewNode

Locating value of a property in memory is a complicated process

V8 engines maintains shapes
Transition Chains

Optimization through inline cache
function getX(0){

}

feedbackVector - state shape prop offset
Monomorphic access to objects - single shape will be intenally cached in

Frameworks enforce same shape for fiber and view nodes

Bit Fields for classification React enforces side effects in bit fields

Bloom Filters- NO or May be filters ( Probailitistic filters)

Angular Hiearchial injectors

http://bit.ly/reverse-engineering
http://bit.ly/change-detection-in-angular
http://bit.ly/react-inside-fiber

Chrome Dev Tools
chrome://version
Chrome Dev Tools -> Audits ->

Oppurtunities Diagnostics Passed Audits

Audit your Page
Use Report to find Improvements
Introduce Changes one by one
Audit after each change

const compression = require('compression')
app.use(comporession)

Eliminiate third party dependencies

Memory Leaks
Heap --?
Profiles CPU Profile

Heap Allocatins and Heap Snapshots\

codeschool.com/courses/discover-devtools
developers.google.com/web/tools/chrome-devtools


Crank Shaft - Optimizing compiler in v8

Ignition + TurboFan

Microbench marks

.1 Content Delivery Network  CloundFare and Akamai  DNS Requests
.2 Images
.3 Priorotize Critical Rendering Pat Render Tree, DOM Tree, CSSOM Tree
.4 Asset Caching Cache-Control: max-age
.5 Optimize Animations

const animate = timestamp
requestAnimationFrame(animate)

el.animate( )

Promise.all(
    el.getAnimationas().map()
)

WeAnimationsAPI

Top 5 tips for front end optimizations


performance
     .measure
	 .mark
	 .getEntriesByName


if (PerformanceObserver.supportedEntryTypes.includes(e)) {
    var r = new PerformanceObserver((function(e) {
        return e.getEntries().map(t)
    }
    ));
    return r.observe({
        type: e,
        buffered: !0
    }),
    r
}

addEventListener("pagehide", c),
addEventListener("beforeunload", (function() {}

return ["scroll", "keydown", "pointerdown"]
.map((function(t) {
addEventListener(t, e, {
    once: !0,
    passive: !0,
    capture: !0
})


### Detecting memory leaks
Black box VS code extension

iscover JavaScript memory leaks in real-time with the Chrome DevTools Performance Monitor. Three dot menu > More tools > Performance monitor.

Some resources on memory I'm happy to recommend:

Fixing memory leaks in web applications by Nolan Lawson: https://lnkd.in/gkqcMe4g ~ a great guide to common causes of JavaScript memory leaks, how to identify and fix them using DevTools > Memory > Heap Snapshots.

Find and fix tricky memory leaks caused by detached windows by Jason Miller and Bartek Nowierski: https://lnkd.in/gPnB5hiq - a great primer filled with practical code examples and solutions related to leaks from popups (and more).

If you're looking for a demo with JavaScript memory leaks to try out with the Performance Monitor, here's a good one: https://lnkd.in/g48Y8pKE and this one's good for Heap Snapshots: https://lnkd.in/gDAGzCus

If you're into a quick video tutorial, egghead.io have a good quick video on how to detect memory leaks using the DevTools -> Memory -> Allocation Instrumentation tools: https://lnkd.in/g23A4m3x

Debugging JavaScript memory leaks by DebugBear is also good and includes practical examples: https://lnkd.in/gFUtvbf7

JavaScript Memory Management Masterclass by me: https://lnkd.in/g4fP6bZn - this is on the dated side (~2014) but gives you a deep dive into how to think about memory management with coverage of the sawtooth pattern and GMail's "three snapshot" technique.

In terms of state-of-the-art tooling, Glenn Conner at Meta just released MemLab https://lnkd.in/gSrRbr2H - a testing framework for automatically finding memory leaks.

### Advanced JS
1/ Get TopK Elements At Scale: https://lnkd.in/ek8-fD6E

2/ Designing A Distributed Cache:
https://lnkd.in/eyygJjJ4

3/ Designing An Auto-Complete Engine From Scratch:
https://lnkd.in/eGQdADCN

4/ Blockchain Fundamentals & Smart Contracts:
https://lnkd.in/eh2Nu9UE

5/ Bitcoin: Proof Of Work:
https://lnkd.in/ebY-G3D4

6/ Bitcoin Fundamentals: Proof Of Stake
https://lnkd.in/e3P3b2bD

7/ Principles Of Microservice Architecture:
https://lnkd.in/eRTN3qfN

8/ System Design Fundamentals:
https://lnkd.in/e9NDYept


1) https://datalemur.com/
2) https://lnkd.in/eiXDF7ms
3) https://lnkd.in/esvbzk-M
https://www.youtube.com/watch?v=4BranN3qnDU&feature=youtu.be
