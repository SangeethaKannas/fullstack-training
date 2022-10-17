### HoC Sample
const HoCSample = ( {value, ...props})   => {

	return (
	    {
			value ?  <Tooltip> {props.chidren} </Tooltip> :  {props.children}
		}

	)

}


### If you have more than 3 useState in a component you are doing it wrong!


### Resources
- React Lifecycle Methods – A Deep Dive ► https://technicalsuneja.com/react-lifecycle-methods/

start working in a React component:

- do I need to set the state or can I derive it?
- is this function necessary in the component or can I outsource it?
- do I need to trigger at re-render on this specific situation?


{!!!obj.id && <UserLogin />}

Asynchronous functions do not return meaningful values: we give them a callback so that the result of the async operation can be communicated back to us.

React is made from components. It behaves in a dual way. That means: a component may be rendered because �something� happened to it. And a component may trigger a render because it does �something�, like for example setting state.

The life cycle methods are the �tools� which manage that �something�.

By ex:

A component is rendered and it may show �something� pulled from back-end. Then is when componentDidMount happens. It is translated to useEffect hook with an empty array of dependency (useEffect fires when first the component is rendered).

A component may update because there is new data coming in from somewhere (back-end or another component). Then is when componentDidUpdate happens. It is the same useEffect as in case here up, with the difference that now the array of dependency is filled with the variable (props) on which it needs to be triggered.

When a component unmount, there may be side effects left inside it. By ex a asynchronous operation going on which has not finished yet. The component need to be unmounted with componentWillUnmount. This is achieved with useEffect hook which returns a cleanup function where it is told that the asynchronous operation is over.

<React.Fragment>

### Anti Patterns in React

1. Mutable variables - Avoid it
   eg., Accumulator Pattern - replace with Functional and declarative programming

2. Procedural Patterns
   eg., for, while ... --> replace with map, reduce, filter and other array methods

3. String Literals
    -Change it to Enum Constants

4. Direct Dom Manipulation
   Hooks API reference - useRef

5. Large component files
- Too many UI elements in a single component. In this case, simply abstract some of the UI into smaller components and then reference them in a parent component
 - Putting a lot of business logic in components. Business logic that is written in the body of a functional component tends to be harder to test
 -- Minimize business logic in your presentation layer
   ---- pull any business logic out of the component entirely and put them in utility files or as part of state management logic (like Redux, for example)
   ---- The only real way to test business logic if it’s sitting in your functional component is to mount the component in your test file and mimic user interaction to see if you get the desired UI result. Alternatively, you can


Import { useId } from 'react'

### Memory Leaks

Memory Leak in React
You may encounter the following warning message in React application when working with
asynchronous calls:
"Can't perform a React state update on an unmounted component. This is a no-op, but it
indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous
tasks in a useEffect cleanup function."
Let say we are fetching data from an API when component mounts and we navigate to some
other page before the request gets fulfilled and now when our browser would be expecting a
response and which when received , will update the state of a component which is no longer
mounted, which cause memory leak issue.
So, How to avoid this issue?
1. Using a flag which will only setState if our component is mounted. This only removes the
console warning, but we want something which will cancel our in progress fetch request.
Here Abort Controllers come to the rescue.
According to MDN :
"The AbortController interface represents a controller object that allows you to abort one or
more Web requests as and when desired."
We'll cancel the request if our component unmounts and our request is in progress.
Initializing abort controllers :
const abortController = new AbortController();
It has a read-only property named signal which is passed in the fetch request's option object.
This allow us to abort the fetch request by calling abortController.abort().
PS : Calling abortController.abort() after the request has been completed doesn't throw any
errors. The abortController simply does not take any action on an already complete request.



### React performance

Use React? Render large lists efficiently with react-window: https://lnkd.in/etNN94TH ~ a small library for virtualizing lists & grids. Renders what users can see vs. all your items at once.

If you've used React Virtualized for this before, it's by the same author Brian Vaughn, (but is far smaller) and a better fit if targeting mobile web given the smaller library size. A quick Movies demo using react-window can be found here: https://lnkd.in/edAK3HR8

I've enjoyed using react-window on a few projects where list virtualization was a better fit for the UX. There are of course trade-offs with infinite scrolling patterns like this (e.g. with CLS, Load More) and I've written about them here: https://lnkd.in/eQc8mGQy

In case you're interested in learning more about list virtualization in React with plenty of examples, there's a great guide over on web(dot)dev too by Houssein Djirdeh and Jason Miller: https://lnkd.in/erqqabkV :)

React Performance Optimisation techniques
---------------------------------------------------------------
1. Lazy loading
2. Usecallback and Use Memo
3. Use Pure Pipes
4. Use Typescript export for exporting common reusable functions (Pipes is better for looping than export)
5. Use differnt key other than map index option with For loops
6. Avoid any calculation in template (html) files. Should take place in TS files
7. onPush changeDetection strategy (situation dependent)
8. Use dynamic components for custom modal, date picker, accordion
9. Use Dyanmic imports only when needed
10. Use Service-workers, Web workers
11. Use local storage & cookie
