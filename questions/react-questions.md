What is React and how does it differ from other JavaScript frameworks?
What are the key features of React?
What is JSX in React? How does it differ from HTML?
Explain the concept of virtual DOM and its significance in React.
What is the difference between functional components and class components in React?
What are React hooks? Explain some commonly used hooks.
How does state work in React? What is the difference between state and props?
8.What is the purpose of the "key" prop in React?
9.Explain the component lifecycle methods in React and their usage.
10.What are controlled and uncontrolled components in React?
1What is the significance of the "render" method in React?
How can you optimize performance in React applications?
What is React Router? How does it handle routing in React applications?
Explain the concept of higher-order components (HOCs) in React.
What is the purpose of the "setState" method in React? How does it work?
How does React handle forms and form validation?
Explain the concept of context in React and how it is used.
What is Redux? How does it work with React?
What are React props and how are they used?
Explain the concept of React portals and their use cases.
 How does React Fiber improve performance in React applications?
Explain the concept of code splitting and its benefits in React.
 What are the key differences between server-side rendering (SSR) and client-side rendering (CSR) in React?
Describe the concept of render props and its use cases in React.
How can you optimize the rendering of large lists in React?

Explain the concept of memoization and its importance in React.
What is the purpose of the useEffect() hook in React and how does it work?
How does React handle routing and navigation?
How can you handle asynchronous operations in React using async/await?
Explain the concept of the Context API in React and its benefits.

What is the role of higher-order components (HOC) in React and how can you implement them?
 Describe the concept of controlled and uncontrolled components in React forms.
 How does React handle state management in large-scale applications?
 Explain the concept of suspense in React and its use cases.
 What are the different ways to handle side effects in React using hooks?

 Explain the concept of reconciliation in React.
 How can you prevent unnecessary re-renders in React?
 What are the different ways to style components in React?
 What are the key considerations when implementing a scalable React application?
 Describe the concept of reusability, modularity, testablity in React components.
0.What is Lifting State Up in React?
 What is React context?
What are different ways to add CSS in your app?
 What is Hot Module Replacement?
What is the use of Parcel, Vite, Webpack?
How does create-react-app work?

What is Tree Shaking?
Difference b/w dependency and devDependency
8.What is npx and npm?
9.Difference b/w package .json and package-lock .json
10.Difference between console .log(<HeaderComponent/>) and console .log(HeaderComponent());

What is React.Fragment?
What is the purpose of dependency array in useEffect? What is the difference when it is used and  not used?
What if 2 components are given will the state change in one component will effect the other component’s state (child)?
What is the use of return in useEffect ?
Difference b/w client-side routing and server-side routing?

 Explain the concept of code splitting and its benefits in React.
How does React handle routing and navigation?
What are higher-order components (HOC) in React?
What are controlled and uncontrolled components?
Explain the concept of reconciliation in React.
Q1: What are React hooks? Explain the difference between useState and useEffect.

A1: React hooks are functions that allow you to use state and lifecycle features in functional components.useState is used to manage state, while useEffect is used to handle side effects like fetching data or subscribing to events.

💡 Code Example:
const [count, setCount] = useState(0);

useEffect(() => {
 document.title = `Count: ${count}`;
}, [count]);

🧩 Q2: What is the Context API in React? How can it be used to manage global state?

A2: Context API provides a way to share data between components without passing it through props.It's useful for managing global state.You create a context using createContext and provide it at a higher level.Consumers can access the context using useContext.

🌍 Code Example:
const ThemeContext = createContext();

function App() {
 return (
  <ThemeContext.Provider value="dark">
   <Component />
  </ThemeContext.Provider>
 );
}

function Component() {
 const theme = useContext(ThemeContext);
 // Use theme value here
}

⚛️ Q3: What are React render props? How do they enable component composition and code reusability?

A3: Render props is a pattern where a component accepts a function as a prop and calls it to render content.It enables component composition and code reusability by allowing components to share their internal state or behavior with other components.

🔄 Code Example:
function MouseTracker({ render }) {
 const [position, setPosition] = useState({ x: 0, y: 0 });

 useEffect(() => {
  const handleMouseMove = (event) => {
   setPosition({ x: event.clientX, y: event.clientY });
  };

  window.addEventListener('mousemove', handleMouseMove);

  return () => {
   window.removeEventListener('mousemove', handleMouseMove);
  };
 }, []);

 return render(position);
}

🖥️ Q4: How can you optimize performance in a React application? Discuss techniques like memoization, code splitting, and lazy loading.

A4: Performance optimization techniques include memoization with useMemo and useCallback to avoid unnecessary recalculations, code splitting to split the bundle into smaller chunks, and lazy loading to load components or resources only when needed.

⚡️ Code Example:
const memoizedValue = useMemo(() => computeExpensiveValue(a, b), [a, b]);

const handleClick = useCallback(() => {
 // Handle click event
}, []);

🎓 List down more questions that have been asked to you in your interviews, I'll post more new questions & answers tomorrow! 💬

📚 Don't forget to like and share this to help your fellow developers.Let's expand our knowledge in React together! 🚀


DSA Medium question related to Arrays and HashMap.
An in-depth discussion on the following topics -
Security (CORS, Detailed CSP and XSS implementations, CSRF )
Performance optimisations( React and JS)


Current
https://www.toptal.com/react/interview-questions


What needs to be done
https://mindmajix.com/reactjs-interview-questions
https://tekslate.com/reactjs-interview-questions
https://hackr.io/blog/react-interview-questions
https://www.wisdomjobs.com/e-university/reactjs-interview-questions.html
https://medium.com/@vigowebs/frequently-asked-react-js-interview-questions-and-answers-36f3dd99f486
https://itnext.io/reactjs-interview-questions-for-senior-developers-64618f6a0aca
https://www.codementor.io/blog/5-essential-reactjs-interview-questions-du1084ym1
https://tms-outsource.com/blog/posts/react-interview-questions/
https://www.edureka.co/blog/interview-questions/react-interview-questions/
https://career.guru99.com/reactjs-interview-questions/
https://www.knowledgehut.com/interview-questions/reactjs
https://www.javatpoint.com/react-interview-questions
https://www.onlineinterviewquestions.com/react-js-interview-questions/
https://www.besanttechnologies.com/reactjs-interview-questions-and-answers
https://gist.github.com/bvaughn/923dffb2cd9504ee440791fade8db5f9
https://medium.com/@baphemot/understanding-reactjs-component-life-cycle-823a640b3e8d
https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/no-did-update-set-state.md
https://en.wikipedia.org/wiki/WebSocket

    A web store uses the following React component for showing suggestions while users are typing product names:

const ProductSearch = (props) => {

  let [name, setName] = React.useState();

  let [suggestions, setSuggestions] = React.useState([]);


  React.useEffect(() => {

    if(name !== undefined) {

      props.requestSuggestions(name, setSuggestions);

    }

  }, [name]);

 

  const onChange = (event) => {

    setName(event.target.value);

  };


  return (

    <div>

      <label htmlFor={"search"}>Product name</label>

      <input onChange={onChange} id={"search"} list={"suggestions"}></input>

      <datalist id={"suggestions"}>

        { suggestions.map((suggestion) => <option>{ suggestion }</option>) }

      </datalist>

    </div>

  );

};

Select all the correct answers.

(Select all acceptable answers.)

 

1) If the props.requestSuggestions function invokes setSuggestions using [name, suggestions] as the second parameter of React.useEffect, the component will be rerendered after each React.useEffect call.

2) On the first component render, the value of the suggestions variable will be [].

3) If the requestSuggestions function is async and does not call the setSuggestion function immediately, it will throw an error.

4) The function passed to React.useEffect should call ReactDOM.render so that changes to the suggestions variable are visible.

5) If the requestSuggestions function calls setSuggestions with two items, they will be shown in the datalist.

6) Calling setName("10") will make the input field have 10 as its value.










[3:07 PM] Srinivas Kadiyala

The following React component is used as a login form for a website:

function LoginForm(props) {

  let [username, setUsername] = React.useState("");

  let [password, setPassword] = React.useState(null);


  return (<div>

    <input onChange={(event) => setUsername(event.target.value)} name="username"></input>

    <input onChange={(event) => setPassword(event.target.value)} name="password" type="password"></input>

    <button onClick={() => props.login(username, password)}>Login</button>

  </div>);

}

Select all the true statements.

(Select all acceptable answers.)

 

1) When the component is first created, the username variable’s value will be null.

2) Pasting into the input field named "password" will change the value of the password variable to the value of the input field.

3) The call to props.login will always be made with "" as the username and null as the password.

4) LoginForm is a functional component.

5) If the setUsername function and all its references are renamed, calling it will not change the username variable.

6) The parent component should pass a prop function named login to handle the click event on the "Login" button.

















Consider the following React component which is used to validate emails in forms:
class EmailInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { inputValue: '', isValid: false };
  }

  render() {
    let onChange = (event) => {
      this.setState({inputValue: event.target.value}); 
      if(event.target.value.includes("@")) {
        this.setState({isValid: true});
      } else {
        this.setState({isValid: false});
      }
    };

    return <div><input onChange={onChange} /><p>{ this.state.isValid ? '' : this.props.message }</p></div>
  }
}
A new component, Form, was recently added to the app. Form will always be a parent component to EmailInput and make decisions based on data from it.
Select the minimal changes so that the state is lifted up from EmailInput to the Form component.
(Select all acceptable answers.)

 

1) The inputValue state should be kept in the Form component and passed as a prop to the EmailInput component.
2) The Form component should pass a callback as a prop to update the state of isValid and inputValue.
3) The onChange event handler should invoke the callback passed from the Form component to update the values.
4) The render function should be passed as a prop from Form to the EmailInput component.
5) The message props should be changed from props to state inside the EmailInput components.
6) The conditional in JSX should be replaced by this.parent.state.isValid.


[3:15 PM] Srinivas Kadiyala

If you are using the following component for various buttons that can only be clicked once:

class ClickOnceButton extends React.Component {

  constructor(props) {

    super(props);

    this.state = { wasClicked: false };

  }


  onButtonClick(event) {

    if(!this.state.wasClicked) {

      this.props.onClick(event);

    }

    this.setState({ wasClicked: true });

  }


  render() {

    return (<button onClick={ ____________ }>{ this.props.text }</button>);

  }

}

Select all the answers that fill the blank in onClick so that it correctly calls the onButtonClick method. 

(Select all acceptable answers.)

1) this.onButtonClick.bind(this)

2) this.onButtonClick

3) (event) => this.onButtonClick(event)

4) (event) => this.onButtonClick.bind(event)

5) this.onButtonClick(event)





[3:17 PM] Srinivas Kadiyala

Finish the SubscribeButton component so that it renders the following HTML:

<button>Click to subscribe!</button>

After the button is clicked, it should no longer be visible and should render the following:

<p>Thank you for subscribing!</p>

The component should use React Hooks.

HTML5, CSS3, React v18 (available as React and ReactDOM)

 

// React is loaded and is available as React and ReactDOM

// imports should NOT be used

const SubscribeButton = (props) => {

  const [isClicked, setIsClicked] = React.useState(false);

  const handleClick = () => {  setIsClicked(true); }

  return { isClicked ? <button onClick={handleClick} >Click to subscribe!</button>
		      :  <p>Thank you for subscribing!</p>
 };

};

document.body.innerHTML = "<div id='root' />";

ReactDOM.render(<SubscribeButton />, document.getElementById("root"));

 

setTimeout(() => console.log(document.body.innerHTML));













[3:23 PM] Srinivas Kadiyala

A team has created the following package.json for their new Node.js web application:

{

  "name": "webapp",

  "version": "1.0.0",

  "description": "",

  "main": "index_main.js",

  "scripts": {

    "test": "echo \"Error\" && exit 1"

  },

  "author": "",

  "license": "ISC",

  "dependencies": {

    "express": "^4.17.1",

    "random": "~2.1.8"

  }

}

What can be concluded about the project, considering only the package.json declaration?

(Select all acceptable answers.)

 

1) The project could use the 4.18.1 version of the express dependency.

2) The project could use the 4.17.2 version of the express dependency.

3) The project could use the 2.1.9 version of the random dependency.

4) The project could use the 2.2.0 version of the random dependency.

5) Running "npm test" for this project will run a test suite.

6) If this project is in node_modules, "require('webapp')" will return the object from the project's index.js file.










[3:26 PM] Srinivas Kadiyala

Consider the following code:

const fs = require('fs');

const util = require('util');

const readFile = util.promisify(fs.readFile);

 

async function readTwoFiles(newYorkWeatherFile, londonWeatherFile) {

  const options = { encoding: 'utf-8' };

  const nyWeather = await readFile(newYorkWeatherFile, options);

  const londonWeather = await readFile(londonWeatherFile, options);

  return [nyWeather, londonWeather];

};

 

let result = readTwoFiles('weatherFileNewYork', 'weatherFileLondon');

Select all the statements that are correct about readTwoFiles function.

(Select all acceptable answers.)

 

1) The files are read using asynchronous calls.

2) The file read operations are blocking the event-loop.

3) It does not require the async keyword.

4) Variable result is a Promise.

5) Since the nyWeather and londonWeather variables are assigned the result of the await statement, they will both be Promises.

6) Files will be read one by one.






[3:29 PM] Srinivas Kadiyala

The following code models a shopping cart that shows an alert to the user when the last item is removed:

const events = require("events");

const emitter = new events.EventEmitter();

let itemQuantities = [];

 

const cartUpdateHandler = function(itemId, change){

  if(itemQuantities[itemId] === undefined){

    itemQuantities[itemId] = 0;

  }

  if(change + itemQuantities[itemId] >= 0) {

    itemQuantities[itemId] += change;

  }

}

 

const checkHandler = function(){

  if(itemQuantities.every(quantity => quantity == 0))

    showAlert("cart empty");

}

 

emitter.on("cart_updated", cartUpdateHandler);

emitter.on("check_cart", checkHandler);

 

function addToCart(itemId, qty){

  //called each time user adds item to cart

  emitter.emit("cart_updated", itemId, qty);

}

 
function removeFromCart(itemId, qty){

  //called each time user removes item from cart

  emitter.emit("cart_updated", itemId, -1 * qty);

  emitter.emit("check_cart");

}

Select all the true statements.

(Select all acceptable answers.)

 

1) itemQuantites will not contain any negative number.

2) This code will also show an alert correctly if the "check_cart" event is emitted at the end of the cartUpdateHandler function instead of the removeFromCart function.

3) Emitting the "cart_updated" event is not required in the removeFromCart function.

4) The "check_cart" event should also be emitted at the end of the addToCart function.

A project folder contains two files that are listed below. Fill in the blanks in these two files so that, when main.js is invoked with a temperature in Fahrenheit, the same temperature in Celsius is appended to log.txt.


utility.js:

___________________.toCelsius = (fahrenheit) => { 
  return (fahrenheit-32) * 5/9; 
}
main.js:
 

const fs = require('fs');
const utility = require('___________________');

fs.appendFile('log.txt',___________________(process.argv[2]) + "\n",
(err) => { if (err) throw err; });


For example, when "node main.js 68" is executed, "20" should be appended to the log.txt.

https://speckyboy.com/page-transition-effects/


React Js Interview Question
● What is React js
● What is difference between virtual dom and shallow dom, dom in React js
● What is controlled and uncontrolled component in React js
● What is hooks in React js
● What is jsx, babel, webpack
● What is Redux
● What is reducer , action, store in Redux
● What is middleware in Redux
● Explain data flow in Redux
● What is Redux-Thunk
● What is Redux-Saga, Difference between Redux-thunk and Redux-saga
● Difference between class component and function component
● How can we implement componentWillUnmount in function component
● useEffect,UseState,useMemo.useCallback hooks in Details
● Explain lifecycle method in React js
● What is difference between export default and export in React js
● What is portal in React js
● What is reconciliation in React js
● What is useRef in React js
● What is server side render in React js
● What is useStrict in React js
● What is fragment in React js
● What is react router in React js
● What is node module in React js
● What is the default localhost server port in react js.
how can we change the local server port
● What is high order component in React js
● What is pure component in React js
● What is difference state and props in React js
● How to optimize React js app
● What is difference between React js and Angular js
● What is prop drilling in React js how to overcome it
● What is context api in React js
● What is super, constructor , render function in React js
What is Pure component
Explain about Redux architecture
What is props and Can we change props value
How will communicate between parent to child and vice versa



2 | P a g e
Following are frequently asked React interview questions for fresher’s as well as 
experienced React developers.
1) What is Reactjs?
React is a JavaScript library that makes building user interfaces easy. It was developed 
by Facebook.
2) Does React use HTML?
No, It uses JSX, which is similar to HTML.
3) When was React first released?
React was first released on March 2013.
4) Give me two most significant drawbacks of React
 Integrating React with the MVC framework like Rails requires complex 
configuration. 
 React require the users to have knowledge about the integration of user interface 
into MVC framework.
5) State the difference between Real DOM and Virtual DOM
Real DOM Virtual DOM
It is updated slowly. It updates faster.
It allows a direct update from HTML. It cannot be used to update HTML 
directly.
It wastes too much memory. Memory consumption is less
6) What is Flux Concept In React?
Facebook widely uses flux architecture concept for developing client-side web 
applications. It is not a framework or a library. It is simply a new kind of architecture 
that complements React and the concept of Unidirectional Data Flow.
3 | P a g e
7) Define the term Redux in React
Redux is a library used for front end development. It is a state container for JavaScript 
applications which should be used for the applications state management. You can test 
and run an application developed with Redux in different environments.
8) What is the 'Store' feature in Redux?
Redux has a feature called 'Store' which allows you to save the application's entire State 
at one place. Therefore all it's component's State are stored in the Store so that you will 
get regular updates directly from the Store. The single state tree helps you to keep track 
of changes over time and debug or inspect the application.
9) What is an action in Redux?
It is a function which returns an action object. The action-type and the action data are 
always stored in the action object. Actions can send data between the Store and the 
software application. All information retrieved by the Store is produced by the actions.
10) Name the important features of React 
Here, are important features of React.
Allows you to use 3rd party libraries
Time-Saving
Faster Development
Simplicity and Composable 
Fully supported by 
Facebook.
Code Stability with One-directional data binding 
React Components
11) Explain the term stateless components
Stateless components are pure functions that render DOM-based solely on the 
properties provided to them.
12) Explain React Router
React Router is a routing library which allows you to add new screen flows to your 
application, and it also keeps URL in sync with what’s being shown on the page.
4 | P a g e
13) What is dispatcher?
A dispatcher is a central hub of app where you will receive actions and broadcast 
payload to registered callbacks.
14) What is meant by callback function? What is its purpose?
A callback function should be called when setState has finished, and the component is 
retendered. As the setState is asynchronous, which is why it takes in a second callback 
function.
15) Explain the term high order component
A higher-order component also shortly known as HOC is an advanced technique for 
reusing component logic. It is not a part of the React API, but they are a pattern which 
emerges from React’s compositional nature.
16) Explain the Presentational segment
A presentational part is a segment which allows you to renders HTML. The segment’s 
capacity is presentational in markup.
17) What are Props in react js?
Props mean properties, which is a way of passing data from parent to child. We can say 
that props are just a communication channel between components. It is always moving 
from parent to child component.
18) Explain yield catchphrase in JavaScript
The yield catchphrase is utilized to delay and resume a generator work, which is known 
as yield catchphrase.
19) Name two types of React component 
Two types of react Components are:
Function component
Class component
5 | P a g e
20) Explain synthetic event in React js
Synthetic event is a kind of object which acts as a cross-browser wrapper around the 
browser’s native event. It also helps us to combine the behaviors of various browser into 
signal API.
21) What is React State?
It is an object which decides how a specific component renders and how it behaves. The 
state stores the information which can be changed over the lifetime of a React 
component.
22) How can you update state in react js?
A state can be updated on the component directly or indirectly.
23) Explain the use of the arrow function in React
The arrow function helps you to predict the behavior of bugs when passed as a callback. 
Therefore, it prevents bug caused by this all together.
24) State the main difference between Pros and State 
The main difference the two is that the State is mutable and Pros are immutable.
25) Explain pure components in React js
Pure components are the fastest components which can replace any component with 
only a render(). It helps you to enhance the simplicity of the code and performance of the 
application.
26) What kind of information controls a segment in React?
There are mainly two sorts of information that control a segment: State and Props
State: State information that will change, we need to utilize State.
 Props: Props are set by the parent and which are settled all through the lifetime 
of a part.
27) What is 'create-react-app'? 
'create-react-app' is a command-line tool which allows you to create one basic react 
application.
6 | P a g e
28) Explain the use of 'key' in react list
Keys allow you to provide each list element with a stable identity. The keys should be 
unique.
29) What are children prop?
Children props are used to pass component to other components as properties. 
30) Explain error boundaries?
Error boundaries help you to catch Javascript error anywhere in the child components. 
They are most used to log the error and show a fallback UI.
31) What is the use of empty tags ?
Empty tags are used in React for declaring fragments.
32) Explain strict mode
StrictMode allows you to run checks and warnings for react components. It runs only on 
development build. It helps you to highlight the issues without rendering any visible UI.
33) What are reacted portals?
Portal allows you to render children into a DOM node. CreatePortalmethod is used for 
it.
34) What is Context?
React context helps you to pass data using the tree of react components. It helps you to 
share data globally between various react components.
35) What is the use of Webpack?
Webpack in basically is a module builder. It is mainly runs during the development 
process.
36) What is Babel in React js?
Babel, is a JavaScript compiler that converts latest JavaScript like ES6, ES7 into plain 
old ES5 JavaScript that most browsers understand.
7 | P a g e
37) How can a browser read JSX file?
If you want the browser to read JSX, then that JSX file should be replaced using a JSX 
transformer like Babel and then send back to the browser.
38) What are the major issues of using MVC architecture in React?
Here are the major challenges you will face while handling MVC architecture:
 DOM handling is quite expensive
 Most of the time applications were slow and inefficient
 Because of circular functions, a complex model has been created around 
models and ideas
39) What can be done when there is more than one line of expression?
At that time a multi-line JSX expression is the only option left for you.
40) What is the reduction?
The reduction is an application method of handling State.
41) Explain the term synthetic events
It is actually a cross-browser wrapper around the browser’s native event. These events 
have interface stopPropagation() and preventDefault().
42) When should you use the top-class elements for the function element? 
If your element does a stage or lifetime cycle, we should use top-class elements.
43) How can you share an element in the parsing?
Using the State, we can share the data.
44) Explain the term reconciliation
When a component's state or props change then rest will compare the rendered element 
with previously rendered DOM and will update the actual DOM if it is needed. This 
process is known as reconciliation.
8 | P a g e
45) How can you re-render a component without using setState() function?
You can use forceUpdate() function for re-rending any component.
46) Can you update props in react?
You can’t update props in react js because props are read-only. Moreover, you can not 
modify props received from parent to child.
47) Explain the term 'Restructuring.'
Restructuring is extraction process of array objects. Once the process is completed, you 
can separate each object in a separate variable.
48) Can you update the values of props?
It is not possible to update the value of props as it is immutable.
49) Explain the meaning of Mounting and Demounting
 The process of attaching the element to the DCOM is called mounting.
 The process of detaching the element from the DCOM is called the demounting 
process.
50) What is the use of ‘props-types’ liberary?
'Prop-types' library allows you to perform runtime type checking for props and similar 
object in a recent application.
