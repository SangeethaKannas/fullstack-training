- What is React?
- limitations of React?
- advantages of using React?
- Explain Strict Mode in React
- Can React Hook replace Redux?
- useState() and useEffect() in React?
- How to prevent re-renders in React?
- Form-Handing & Validation techniques?
- What is the application of lazy loading?
- What is the benefit of error boundaries?
- SSR and its benefits in React applications
- different ways to style a React component?
- Use cases of useEffect() in different scenarios
- differences between functional & class components?
- differences b/w useMemo() and useCallback() in React
- differences b/w controlled & uncontrolled components?
- How to re-render the view when the browser is resized?
- asynchronous operations with async/await and Promises?
- How to pass data b/w sibling components using React router?


1.About React components

2. About Authorisation and authentication

3. Which cloud you have worked on and explain….. if used then how did you do authentication and authorisation?

4. Have you done react project from scratch

5.  Previous project roles and challenges

	Code split 
    Reducing the performance times and initial load time

6. React basic questions like VDOM , types of components etc

const message = 'Hello world' // Try edit me

let array = [1, 5, 100, 120, 1034, 5, 100, 20]

//Sort ascending order
for (var i = 0; i < array.length - 2; i++) {  //O(n - 1)
  for (var k = 0; k < array.length - 1; k++) { //O(n - 1 * n - 2)
    if (array[i] < array[k]) {
      // console.log("Before ",array[i], array[k]);
      let temp = array[i];
      array[i] = array[k]
      array[k] = temp;
      // console.log(array[i], array[k]);
    }
  }
}

for ( i = 0; i < array.length - 2; i++) {  //O(n - 1)
  for (k = 0; k < array.length - 1; k++) { //O(n - 1 * n - 2)
    if(array[i] === array[k]) {
      array.splice()
    }
  }
}

console.log("Output", array);
// Update header text
document.querySelector('#header').innerHTML = message

// Log to console
console.log(message)

