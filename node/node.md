Modules

CommonJS standards
   require - module
   
   eg
     
    

    
  

|  Module Name |  Functionality |
| ------------ | ------------ |
|http|Makes Node.js behave like a HTTP server.|
|https|Makes Node.js behave like a HTTPS server.|
|fs|Handles the file system.|
|events|Handles events.|
|querystring|Handles URL query strings.|
|url|Parses URL strings.|
|assert|Provides tests for assertions.|
|buffer|Handles binary data.|
|child_process|Helps to run a child process.|
|cluster|Splits a single Node process into multiple processes.|
|crypto|Handles cryptographic functions of OpenSSL.|
|dgram|Provides UDP datagram sockets implementation.|
|dns|Used for DNS lookups and name resolution functions.|
|domain|Handles unhandled errors. Deprecated now.|
|net|Creates servers and clients.|
|os|Provides OS information.|
|path|Handles file paths.|
|readline|Handles readable streams one line at the time.|
|stream|Used for streaming data.|
|string_decoder|Decodes buffer objects into strings.|
|timers|Execute a function after a given number of milliseconds.|
|tls|Implement TLSs and SSL protocols.|
|tty|Provides classes used by a text terminal.|
|util|Used to access utility functions.|
|v8|Used to access information about V8 (the JavaScript engine).|
|vm|Compiles JavaScript code in a virtual machine.|
|zlib|Used for compressing or decompressing files.|

#Event Driven

The difference between an event and a callback function is that callback functions are executed when an asynchronous function returns some result. In contrast, events follow the observer pattern in which the function that listens for an event is called an Observer. When an event is fired, the observer/listener function gets executed.

Methods of the EventEmitter clas

addListener(event, listener)  removeListener(event, listener)  remoeAllListeners({event})   listeners(event)

on(event, listener)

once(event, listener) - handle event only once

emit(event , [arg1, ar2...])

EventEmitter.listenerCount(emitter, event)

Events
  newListener
  removeListener
  error
 
Passing arguments and this (refers to EventEmmitter) to event listeners

listenrs cfalled synchronously
   setImmediate() or process.nextTick()
   
 Handling error events - prevents node termination
 
 other methods
 eventNames
 prependOnceListener
 prependListener
 
    The advantage of using events rather than normal callbacks is that a different reaction can be given to the same signal several times with the help of multiple listeners. In contrast, if callbacks are used for this purpose, more logic needs to be written within a single callback. Events allow multiple actions to be taken based on state change and provide a different functionality each time an event occurs. 
 
 patterns commonly used in Node.js to raise and bind events using EventEmitter are as follows: 
Return EventEmitter from a function 
Extend the EventEmitter class


Design patterns

1. Multiple listeners
2. Using event emitter properties
3. Publisher subscriber scenario
4. Events of built-in modules
5. 


 Symbols are used as an alternative to Strings while setting keys for properties. Symbols are used for hiding properties on Objects. This is because the values can be accessed only by using the same instance of the Symbol. To access a property using Symbol key, use the notation object[symbol] as shown in below example.
 
 
