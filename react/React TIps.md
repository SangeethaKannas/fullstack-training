Error boundaries are REact components that catch Javascripts errors anywhere in their child component tree, log those errors and display a fallback UI instead of the component tree that crashed

Error boundaries make it quite easy to handle  errors in the server side rendering 
Error boundaries catch errors during rendering in lifecyle methods and in constructors of the whole tree below them
Error boundaries do not catch errors for Event


Where we can use React : 

1. React supports any environment that can write its own custom renderer and run react code 
2. Only on Web and React Native applications
only browsr based environments

After using useEffect you find that it does not satisfy our requirements, you realize that ou need a hook with some signature, but synchronously after all DOM mutations, in such a situation, whic of the following?

Custom Hook   useImperativeHandle    useSynchronousEffect    useLayoutEffect

import PropTypes from 'prop-types';

class MyComponents extends React.Component {
  render () {
     const children = this.props.children;
	 return <div>{children}</div>
  }
}

MyComponent.propTypes = {
  children: PropTypes.element.isRequired

}

ensures a prop named children is passed with the component

A Button clicking on which trigges a call to setState() that changes the data ouput. While testing your app, you noticed that clicking on the button continously doesnot give you different outputs but one output at the end of the last click

setState() is asynchronous and batched together
//////////
As your component starts updating this.componentDidUpdate() is invoked. You call set state() immediately in componentDidUpdate() without wrapping it in a condition, --> 
 1. An infinte loop
 2. An extra re-rendering
 3. undefined passed as a third "snapshot" parameter to componentDidUpdate


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
