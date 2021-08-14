# About React

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
  Object destructuring


## Development

# React Hooks

## Basic Hooks

- useState :
- useEffect
- useContext

## Additional Hooks

- useReducer
- useCallback
- useMemo
- useRef
- useImerativeHandle
- useLayoutEffect
- useDebugValue


React-window is a very popular library that helps us in reducing the DOM size of the web page.
To know more about this,
- How to implement react-window?
- Where should we use react-window?
- How to calculate the DOM size of the application?

Server side rendering

Difference between viewState and sessionState

media queries

responsive web designate
react redux

jsx  - write html without JSX

React.fragment vs <>

lazyloading

scolling optimization - memoizatiion

debouncing

setState - can you change the state without setState? is it asynchronous
useCall
useMemo
remove event handlers - useEffect
Synthetic events

useEffect - returns an anonymous function vs useWrap
useDispatch 
API - redux-simplifying-the-arrow-functions 
how many reducer and stored
logger?

	shadow dom
	components
	state vs props
	useEffect - how man 
	setState(
	key props ?

  Memoization | shouldComponentUpdate | may result in buggy code as it may create issues in Code Maintainability | PureComponent

Purity = No Side affects
Default React is impure
React is basically a state machine
Declarative system Performance improvements ShallowComparison
Every child of pure component should also be pure

jsx  - write html without JSX

React.fragment vs <>

lazyloading

setState - can you change the state without setState? is it asynchronous


useEffect - returns an anonymous function vs useWrap
useDispatch 
API - redux-simplifying-the-arrow-functions 
how many reducer and stored
logger?

Error boundaries in react