Modules

CommonJS standards
   require - module

   eg

    http.createServer(function (req, res) {
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.end('Hello World!');
    }).listen(8080);

    var http = require('http');

var app = http.createServer(function(req,res){
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ a: 1 }, null, 3));
});
app.listen(3000);


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

### Simple node
(function() {

'use strict';

const
  http  = require('http'),
  url   = require('url'),
  path  = require('path'),
  fs    = require('fs'),
  httpProxy = require('http-proxy'),
  port  = parseInt(process.argv[2] || 8888, 10),
  apiProxy = httpProxy.createProxyServer(),
  mime  = {
    '.html' : ['text/html', 86400],
    '.htm'  : ['text/html', 86400],
    '.css'  : ['text/css', 86400],
    '.js'   : ['application/javascript', 86400],
    '.json' : ['application/json', 86400],
    '.jpg'  : ['image/jpeg', 0],
    '.jpeg' : ['image/jpeg', 0],
    '.png'  : ['image/png', 0],
    '.gif'  : ['image/gif', 0],
    '.ico'  : ['image/x-icon', 0],
    '.svg'  : ['image/svg+xml', 0],
    '.txt'  : ['text/plain', 86400],
    'err'   : ['text/plain', 30]
  };

// new server
http.createServer(function(req, res) {

  let
    uri = url.parse(req.url).pathname,
    filename = path.join(process.cwd(), uri);

  // file available?
  fs.access(filename, fs.constants.R_OK, (err) => {

    // not found
    if (err) {
      serve(404, '404 Not Found\n');
      return;
    }

    // index.html default
    if (fs.statSync(filename).isDirectory()) filename += '/index.html';

    // read file
    fs.readFile(filename, (err, file) => {

      if (err) {
        // error reading
        serve(500, err + '\n');
      }
      else {
        // return file
        serve(200, file, path.extname(filename));
      }

    });
  });

  // serve content
  function serve(code, content, type) {

    let head = mime[type] || mime['err'];

    res.writeHead(code, {
      'Content-Type'    : head[0],
      'Cache-Control'   : 'must-revalidate, max-age=' + (head[1] || 2419200),
      'Content-Length'  : Buffer.byteLength(content)
    });
    res.write(content);
    res.end();

  }

}).listen(port);

console.log('Server running at http://localhost:' + port);

}());


Is Node.js single-threaded? What happens when I run "node myscript.js"?

No, Node.js is not single-threaded, it has never been. This is a very common misunderstanding among the dev community.

Javascript indeed is single-threaded and the Node.js event loop runs into a single thread. But that’s not all about the runtime.

A key component of the runtime, responsible for managing the event loop and async operations, is libuv. Libuv itself has a thread pool, composed by default of 4 threads (you can change this number by setting the process.env.UV_THREADPOOL_SIZE value), that is started every time you run the node command.

For some functions from the std lib, libuv decides to run computationally intensive tasks outside the event loop and uses its thread pool to do so.

Some tasks don’t even follow the thread pool avenue and are delegated to the underlying OS, like the network requests using the https module, for example.

How Node.js manages the event loop, its thread pool and OS async helpers is what makes this runtime so powerful. 🚀

To answer the second question, keep in mind that:

1️⃣ First of all, the javascript synchronous code is executed into the thread's call stack, one step after another.

2️⃣ All the callbacks (for example setTimeout(callback1, 0), process.nextTick(callback2), Promise.then(callback3), etc) are sent to the libuv event loop queues.

3️⃣ The event loop will start picking these callbacks from its queues and executing them into the call stack after the js sync execution finishes.

The event loop steps/queues are the following, in order of priority and execution:

Microtask Queues
Composed of two queues: the process.nextTick() callbacks queue and the Promise callbacks queue. The Microtask Queues have the highest priority when it comes to executing asynchronous code in Node.js.

Timers Queue
Holds callbacks associated with setTimeout and setInterval. The callbacks are executed in the first-in-first-out order (FIFO). When there are multiple setTimeout executed with different delays, the event loop queues up the one with the shortest delay first and executes it before the others.

I/O Queue
To add callbacks to the I/O Queue we can use most of the async methods from the std lib, for example fs.readFile().

I/O Pooling
In the previous example, libuv will delegate the readFile operation to its thread pool and the callback will be queued to the I/O Queue by the I/O Pooling step only after the I/O operation completed.

Check Queue
Contains the callbacks associated with the setImmediate() function.

Close Queue
Holds the callbacks of close events, for example, readableStream.on('close', callback).

The event loop continues running until there is no pending task being executed by the thread pool and the OS sync helpers, and all the queues are empty.

ℹ️ The Microtask queues are executed in between each queue and in between each callback of the Timer and Check queues.

Single Signon

What is SSO (Single Sign-On)?

Basically, Single Sign-On (SSO) is an authentication scheme. It allows a user to log in to different systems using a single ID.

The diagram below illustrates how SSO works.

Step 1: A user visits Gmail, or any email service. Gmail finds the user is not logged in and so redirects them to the SSO authentication server, which also finds the user is not logged in. As a result, the user is redirected to the SSO login page, where they enter their login credentials.

Steps 2-3: The SSO authentication server validates the credentials, creates the global session for the user, and creates a token.

Steps 4-7: Gmail validates the token in the SSO authentication server. The authentication server registers the Gmail system, and returns “valid.” Gmail returns the protected resource to the user.

Step 8: From Gmail, the user navigates to another Google-owned website, for example, YouTube.

Steps 9-10: YouTube finds the user is not logged in, and then requests authentication. The SSO authentication server finds the user is already logged in and returns the token.

Step 11-14: YouTube validates the token in the SSO authentication server. The authentication server registers the YouTube system, and returns “valid.” YouTube returns the protected resource to the user.

The process is complete and the user gets back access to their account.

Over to you: 
Question 1: have you implemented SSO in your projects? What is the most difficult part?
Question 2: what’s your favorite sign-in method and why?


serpapi.com

shutterstock.com/developers
mapbox.com
fakestoreapi.com
randomeuser.me	


let mysql = require('mysql')

let connection = mysql.createConnection({
  host: '',
  user: '',
  password: '',
  database: ''
})

connection.connect((err) => {
  if(err) {

  } else {
    if(connection.query('SELECT * FROM EMPLOYEE", (err, result) => {
        console.log(result)
    }))
  }
  connection.end();
});


router.post('/createDevice', authenticate, createDevice, DeviceController.createDevice);

### Node js notes

1. What is an event loop & how NodeJS achieves concurrency?
2. How you can improve performance of NodeJS app?
3. How to avoid memory leaks in NodeJS app?
4. What are Streams & Buffers in NodeJS?
5. What are four types of streams in NodeJS?
6. Difference between Cluster / Child Processes / Worker Threads?
7. How you can communicate between two child processes in NodeJS?
8. What do you understand about Event Emitter?
9. How NodeJS can utilise all resources of the processor?
10. What is the reactor pattern in NodeJS?
11. Difference between process.nextTick() & setImmediate()?
12. What does promisify method of util module do?
13. What are stubs in NodeJS?
14. Difference between spawn() and fork() methods in NodeJS?
15. Explain libuv?