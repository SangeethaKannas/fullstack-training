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
