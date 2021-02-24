# About React

1. It's just a View library
2. Keep your components Small
3. Write functional component
4. Write stateless components
5. Use Redux.js
6. Always use prop Types
7. Use JSX, ES6
8. Use React and Redux Developer tools

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
