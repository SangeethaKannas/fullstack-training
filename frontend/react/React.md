# React
## About React

1. It's just a View library
2. Keep your components Small
3. Write functional component
4. Write stateless components
5. Use Redux.js
6. Always use prop Types
7. Use JSX, ES6
8. Use React and Redux Developer tools


Memoization | shouldComponentUpdate | may result in buggy code as it may create issues in Code Maintainability | PureComponent

Purity = No Side affects

Default React is impure

React is basically a state machine

Declarative system Performance improvements ShallowComparison

Every child of pure component should also be pure

# Getting Started

## Pre Requistes

Install latest version of create-react-app

   npm i -g create-react-app@latest

## Installing react

### Installing the project

   create-react-app <projectname>

### Dependencies

   npm install bootstrap redux react-redux react-router-dom axios graphql apollo-boost react-apollo @fortawesome/fortawesome-free@5.6.1

### Dev-Dependencies

   npm install --save-dev json-server jsonwebtoken express express-graphql cors faker chokidar npm-run-all connect-history-api-fallback

### Adding CSS

Append the following lines in index.js

   import "bootstrap/dist/css/bootstrap.css";
   import "@fortawesome/fontawesome-free/css/all.min.css";

## Core concepts
- Components
    have state: set of data that is managed by the component.
        State: owns
        props: Recieve data from other components

   HoC : dynamically provided children

- JSX
   Build a components output
   React processes JSX into Javascript
   HTML vs JSX
   forgiving, embed javascript,

   {} - one statement for every JS block

- State
- Props
- Object destructuring

## Development

# React Hooks

## Basic Hooks

- useState : Creates state resources and assigns initial value
  const [var, setVar] = useState(<initialValue>)
   var : holds the state value
   setVar : updates state value

- useEffect
  used to run side effects in the component such as fetching data or adding listeners.

    useEffect(() => {
      addListeners()  // Runs after initial render
      return () => {
         removeListeners()   // Runs after component unmounts
       }
    })

    useEffect(() =>  fetchUserInfo(userId), [userId])
     // Runs after first render and every time userId updates

- useContext

   Accepts a context object that is created using React.createContext and returns current value of that context
   const value = useContext(ThemeContext < ContextObject>);


## Additional Hooks

- useReducer
    -- similar to useState
    -- use own update state logic

    const [state, dispatch] = useReducer(updateCount, { count: 0})
     //contians state value and a function to update state

    // A callback takes current state and action object and returns new state
    const updateCount = (state, action) => {
      switch(action.type) {
         case 'increment': return {count: state.count + 1}
         case 'decrement': return {count: state.count - 1}
         default: return { count }
      }
    }

    dispatch({type: 'increment})  // Calls updateCount
              <Action Object: // May include payload also>

- useCallback : Returns a memoized version of a callback that only changes when dependencies change

   cosnt handleRenderArea = useCallback(() => { updateSurfaceArea(size) }, [])
   a memoized version of updateSurfaceArea

   updates when size changes value

- useMemo : Returns a memoized value, which only gets recalculated  only when the value of dependencies change
   const area = useMemo(() => { return calcSurfArea(size) }, ]size])
    
    area is updated only when size changes

- useRef
- useImerativeHandle
- useLayoutEffect
- useDebugValue

### Class Vs functional components
   There are still 3 lifecycle methods available in class components for which there is no
equivalent react hook.

- getSnapshotBeforeUpdate
- getDerivedStateFromError
- componentDidCatch

So to use these lifecyle methods, then you need to use class components instead of
react hooks(functional components).

### Libraries
- For routing: React router, react navigation or reach router?
- For state management: Redux, context api, recoil or zustand?
- For async actions: Redux saga or thunk?
- For data fetching: Axios, native fetch or use query?
- For styling: Styled-Components, makeStyle, SASS, or plain CSS?
- For UI : Material UI, React Bootstrap, Ant Design
- Form validation: Yup, React Hook form,

## React Advanced
1. Composition in React
2. Separation of concerns (view, integration, service)
3. Abstraction around external libraries
4. Dependency injection (IoC)
5. Lazy loading
6. When to DRY and when to keep the code wet
7. How to test what
8. Test-driven Development

## React 18 Hooks
1. useTransition
   Used to mark some state updates as not urgent. 
   While other state updates are considered urgent by default.

   Transition

   Suspense adds the ability to have a component notify React at render time that it’s waiting for
asynchronous data - this is called suspending.
• The component throws a promise which is caught by <Suspense/>, awaiting its resolution.
• While waiting, React will decline to render the pending state and <Suspense/> renders a
fallback component.
• When the promise is settled, the component is rendered again and fallback is removed.

Suspense + Transition
Until React 17, every time the component suspended, Suspense used to show a fallback.
• However, from the user's perspective, this can be disorienting if there are frequent switches
between fallback and content.

• In particular, it is sometimes better to show the “old” UI while the “new” UI is being prepared.
• From React 18, if component suspends during a transition (non-urgent update), React will
prevent already-visible content from being replaced by a fallback.
• React will keep the old UI in place and interactive, and will switch to showing new content when
it is ready i.e. when the transition update is completed.
• Demo: https://isha-11.github.io/react-18-features/#/suspense


2. useDeferredValue()
   Used to defer the re-rendering of a non-urgent part of the tree.
   similar to debouncing.

3. useId()
   For generating uniqueIds()
   to avoid hydration mismatches

4. useSyncExternalStore()
   allows external stores to support concurrent reads by forcing updates to the store to be synchronous.

5. useInsertionEffect()
   allows CSS-in-JS libraries to address performance issue of injecting styles in render


# React 18

1. Concurrent React
   Before React 18, rendering was a single, uninterrupted, synchronous transaction. Once rendering started, it couldn’t be interrupted.
   With concurrent rendering, React can interrupt, pause, resume, or abandon a render. This allows React to respond to the user interaction quickly even if it is in the middle of a heavy rendering task.

• This unlocks new possibilities to improve both real and perceived performance of apps.

Migration

   /* Until react 17 */
   import ReactDOM from 'react-dom';
   import { App } from './App';
   ReactDOM.render(<App />, document.getElementById('root'));

   /* React 18 onwards */
   import ReactDOM from 'react-dom/client';
   import { App } from './App';
   const rootElement = document.getElementById('root');
   const root = ReactDOM.createRoot(rootElement!);
   root.render(<App />);
   
   
Automatic Batching

   Grouping/Batching multiple state updates into a single re-render produces better performance.
• Updates are said to be batched in a function if the Component re-renders only once at the end of the function and applies all state updates at once instead of re-rendering after every statement which updates state.
• Until React 17, updates only inside React event handlers were batched.
• React 18 onwards updates inside of promises, setTimeout, native event handlers or any other event are also batched by default.
• Opting out of automatic batching can be done using flushSync.
• Demo: https://isha-11.github.io/react-18-features/#/batching


Strict Mode

In future, React may add a feature that allows to add and remove sections of the UI while preserving state.
• To do this, React will support remounting trees using the same component state used before unmounting.
• This feature requires components to be resilient to effects being mounted and destroyed multiple times.
• Most effects will work without any changes, but if some effects do not properly clean up subscriptions in the destroy callback, or implicitly assume they are only mounted or destroyed once – those would cause errors.
• This new check will automatically unmount and remount every component, whenever a component mounts for the first time, restoring the previous state on the second mount.

