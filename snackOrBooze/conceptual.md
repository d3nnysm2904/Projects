### Conceptual Exercise

Answer the following questions below:

- What is the purpose of the React Router?
 Is a library that enables routing in our React apps. 

- What is a single page application?
 Is a apllication that interacts with the web browser and rewrites the current page with new data from the server 

- What are some differences between client side and server side routing?

A server-side request causes the whole page to refresh. This is because a new GET request is sent to the server which responds with a new document, completely discarding the old page altogether.

A client-side route happens when the route is handled internally by the JavaScript that is loaded on the page. When a user clicks on a link, the URL changes but the request to the server is prevented.

- What are two ways of handling redirects with React Router? When would you use each?

  Using the <Redirect> component 
    Useful for redirecting client that went to a page that doesnt exist to a page you wish to redirect
  The history Object
  Calling .push method on the 'history' object wich adds URL to the session history. React Router will update the view accordingly

- What are two different ways to handle page-not-found user experiences using React Router? 

  Redirecting a user to a desire page 

  Adding a <route> component inside a <switch> in the bottom with a 404 page component 

- How do you grab URL parameters from within a component using React Router?
  To get the url parameter from a current route, we can use the useParams () hook in react router 

- What is context in React? When would you use it?
    React context helps us avoid the problem of props drilling. Props drilling is a term to describe when you pass props down multiple levels to a nested component, through components that don't need it.
    
    When we need to make some of the data global in our app, or we would like to use them in a few components on a different deeply nested levels in the app structure

- Describe some differences between class-based components and function
  components in React.
    
    Functional components are basic JavaScript functions. These are typically arrow functions but can also be created with the regular function keyword.

    Class components make use of ES6 class and extend the Component class in React.
    Sometimes called “smart” or “stateful” components as they tend to implement logic and state.

- What are some of the problems that hooks were designed to solve?

  Duplication 
  Allows to rehuse code 