### Conceptual Exercise

Answer the following questions below:

- What are some ways of managing asynchronous code in JavaScript?
  Using Callbacks ,promises and async-await

- What is a Promise?
 It represent processes that are yet to be completed 

- What are the differences between an async function and a regular function?

A function can return a value .
A async function return a promise 

- What is the difference between Node.js and Express.js?
  Node.js is an open source and cross-platform runtime environment for executing JavaScript code outside of a browser.

  Express is a framework based on Nodejs to build websites 

- What is the error-first callback pattern?
  Is a function which either returns an error object or any successful data returned by the function.

- What is middleware? 
  software that acts as a bridge between an operating system or database and applications, especially on a network.


- What does the `next` function do?
  The `next` function is used to continue if a error is encountered 

- What are some issues with the following code? (consider all aspects: performance, structure, naming, etc)

```js
async function getUsers() {
  const elie = await $.getJSON('https://api.github.com/users/elie');
  const joel = await $.getJSON('https://api.github.com/users/joelburton');
  const matt = await $.getJSON('https://api.github.com/users/mmmaaatttttt');

  return [elie, matt, joel];
}
```
Is making three different request
If one request is never resolved , then the others will not be resolved 