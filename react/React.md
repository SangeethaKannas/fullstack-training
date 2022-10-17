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


### Class Vs functional components
there are still 3 lifecycle methods available in class components for which there is no
equivalent react hook.
These lifecycle methods are:
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

### React 16+
? Good knowledge of server side rendering (SSR)
? Knowledge of react tools like ? hooks, webpack, nodejs, JSX, babel
? Knowledge of unit testing frameworks like jest, karma, jasmine
? TypeScript
? ES6 JavaScript
? SCSS, LESS, CSS3
? HTML5
? Understanding of version control tools like BitBucket, git or svn.
? SEO best practices
? Object oriented design principles and MV* patterns
? Interfacing with REST APIs
? Object-oriented & Functional Programming
Experience with the following is also desirable:
? Bootstrap
? Server Side coding experience like ExpressJS, Node etc.
? Micro Front End Pattern (Single SPA, Module Federation, etc)
? Mobile frameworks like Ionic, Cordova etc.
? Build tools like npm, yarn etc.
? Accessibility
? Jenkins pipelines
? Scrum methodologies
? Deployment strategies for react based projects


### React Advanced
1. Composition in React
2. Separation of concerns (view, integration, service)
3. Abstraction around external libraries
4. Dependency injection (IoC)
5. Lazy loading
6. When to DRY and when to keep the code wet
7. How to test what
8. Test-driven Development
