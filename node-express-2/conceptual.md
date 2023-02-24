### Conceptual Exercise

Answer the following questions below:

- What is a JWT?

JWTs are an open standard and are implemented across technology stacks, making it simple to share tokens across different services.
is used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued

- What is the signature portion of the JWT?  What does it do?

The signature ensures that the token hasn’t been altered. The party that creates the JWT signs the header and payload with a secret that is known to both the issuer and receiver, or with a private key known only to the sender. When the token is used, the receiving party verifies that the header and payload match the signature. 

- If a JWT is intercepted, can the attacker see what's inside the payload?
There are no restrictions on the content of the payload, but it's important to know that a JWT is not encrypted. So any information that we put in the token is still readable to anyone who intercepts the token. Therefore it's important not to put in the Payload any user information that an attacker could leverage directly.

- How can you implement authentication with a JWT?  Describe how it works at a high level.

  Authentication server verifies the credentials and issues a jwt signed using either a secret salt or a private key. User’s Client uses the JWT to access protected resources by passing the JWT in HTTP Authorization header. Resource server then verifies the authenticity of the token using the secret salt/ public key.

- Compare and contrast unit, integration and end-to-end tests.

Integration testing :
  
  -Testing to make sure app components work well together 


  -The scope could span multiple components but won’t span the entire stack most of the time.

  -Done to discover connectivity issues between components when they are working together.

  -Less expensive to implement.

  -Higher-level than unit testing and faster
End-to-end:
  -Testing the product as a user would experience it.
  -Testing scope is wider and spans the entire application technology stack.
  -Done to have a feel of the user experience of the app.
  -More expensive to implement, both in terms of hardware and software.
  -Higher-level than integration testing and slower 


- What is a mock? What are some things you would mock?
    
    Mocking is primarily used in unit testing
    an object under test may have depenencies on other (complex) objects 
    In short, mocking is creating objects that simulate the behaviour of real objects.

    roll() => return a random number using Math.random()

		describe("roll", ()=> {
		   Math.random to return 0.5 
 			Math.random = jest.fn(() => 0.5);

			test("Mock of roll", ()=> {
    		expect(random(6)).toEqual(6);
			expect(random(2)).toEqual(1);
  			});
		});

- What is continuous integration?

 Continuous integration (CI) is the process of automatically building and testing code every time a team member commits code changes to version control


- What is an environment variable and what are they used for?
  An environment variable is a dynamic "object" on a computer, containing an editable value, which may be used by one or more software programs in Windows. Environment variables help programs know what directory to install files in, where to store temporary files, and where to find user profile settings.

- What is TDD? What are some benefits and drawbacks?

    TDD is a technique in which you first write a test case, then develop the smallest portion of code needed to pass that test. 

- What is the value of using JSONSchema for validation?
  
  Testing and validating JSON APIs is an important aspect of running a quality web service, but managing checks for large and diverse response bodies can be difficult. Using JSON Schema to construct a model of your API response makes it easier to validate your API is returning the data is should.


- What are some ways to decide which code to test?

The software of the app that have a greater incidence in the user interface 

Test to check functionality of the app 

- What does `RETURNING` do in SQL? When would you use it?

When inserting new information.
I would use it when new data is been added , to make sure is added correctly 

- What are some differences between Web Sockets and HTTP?

HTTP protocol: HTTP is unidirectional where the client sends the request and the server sends the response

WebSocket is bidirectional, a full-duplex protocol that is used in the same scenario of client-server communication, unlike HTTP it starts from ws:// or wss://. It is a stateful protocol, which means the connection between client and server will keep alive until it is terminated by either party (client or server)

- Did you prefer using Flask over Express? Why or why not (there is no right
  answer here --- we want to see how you think about technology)?

  i did prefer Flask because it felt more easier to work with  
    