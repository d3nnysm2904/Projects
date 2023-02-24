### Conceptual Exercise

Answer the following questions below:

- What is React? When and why would you use it?

    Make it easy to make reusable “view components”
    These “encapsulate” logic and HTML into a class
    Often make it easier to build modular applications

- What is Babel?
    Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments

- What is JSX?
    Is a react extension to javascript language that helps to write functions and return HTML inside of it 

- How is a Component created in React?

    By creating a function that return a jsx element 

- What are some difference between state and props?
    State :
        can change values(mutable)
        It can be passed to another component 


    Props:
     cannot change the value (inmutable)   
     can't be passed down to another component 

- What does "downward data flow" refer to in React?
    Passing data from a parent component to a child component 

- What is a controlled component?
    A component that is predictable , that can be controlled by cahnging the code ,state ,etc.

- What is an uncontrolled component?
     A component that can only be access thru the DOM 

- What is the purpose of the `key` prop when rendering a list of components?

    To identify what data is been changed,eliminated or added 

- Why is using an array index a poor choice for a `key` prop when rendering a list of components?
    Because if the array changes the index will change and could cause problems in the app

- Describe useEffect.  What use cases is it used for in React components?

    useEffect runs everytime the app renders , and help us handle what elements we want to change after every render,
    A use cases is to empty a form after is submitted, to set state back the 'inital_state', to change or control data each render  

- What does useRef do?  Does a change to a ref value cause a rerender of a component?

    It returns a mutable object with a key of current, whose value is equal to the initial value passed into the hook.The object persists across renders (so it’s like a local variable, but independent of state).Mutating the object does not trigger a re-render.


- When would you use a ref? When wouldn't you use one?

    Accessing an underlying DOM element
    Setting up / clearing timers

    The general rule of thumb is to avoid using useRef as much as possible.

- What is a custom hook in React? When would you want to write one?
    A custom hook is acomponent that can be reausable
    We would write a hook for a component that could be used several time in our app to avoid repetition 