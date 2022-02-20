/* composability */

// practice in composability
// creating components 

function MainContent() {
    return(
        <h1>I'm learning React!</h1>
    )
}

ReactDOM.render(
    <div>
        <MainContent />
    </div>
    //document.getElementById("root")
)

/* declarativity */

// declarative = tell program "what should be done"
// imperative = tell program "how it should be done"
    // vanilla JS

// ReactDOM.render(<h1>Hello, React!</h1>, document.getElementById("root"))

/* 
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

const h1 = document.createElement("h1")
h1.textContent = "Hello, React!"
h1.className = "header"
document.getElementById("root").append(h1)

// this gets old quickly
// we get to write js as if it were html
// relying on react on how to turn declarative text int js code to append to the DOM
// 4 lines of code vs 1 line


/* JSX */

// JSX == javascript XML. flavor of JS that looks like html
// makes it declarative

const element = <h1 className="header">this is JSX</h1>
console.log(element)

// jsx makes js objects that describe dom elements that react puts on the page

ReactDOM.render(element, document.getElementById("root"))

// only return a single parent element w jsx
// no sibling elements
// wrap multiple children elements in a parent element

const page = ( 
    <div>
        <h1 className="header">This is JSX</h1>
        <p>This is a paragraph</p>
    </div>
)

// getting back a js object

console.log(page)

ReactDOM.render(
    page, // JSX being saved under page. place page and react will render
    document.getElementById("root")
)

/* 
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

const navBar = (
    <nav>
        <h1>Website</h1>
        <ul>
            <li>Pricing</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
)

ReactDOM.render(
    navBar,
    document.getElementById("root")
)

// dependencies = package.json

import React from "react"

//when using reactDOM

import ReactDOM from "react-dom"


/* .append() vs ReactDOM.render() */

/**
Challenge: find out what happens if we try to append JSX
to our div#root using .append() instead of ReactDOM

1. Create a sample page in JSX (≥ 4 elements) and save them in a variable
2. Select the div with the ID of "root" and use `.append()` to append
   your JSX
3. See if you can guess what will show up in the browser before running
   the code
4. See if you can explain what actually shows up in the browser
 */

const page = (
    <div>
        <h1>Hello, React!</h1>
        <ol>
            <li>Here's a list!</li>
        </ol>
    </div>
)

document.getElementById("root").append(page)

// string represenation of a js object
// stringify using json. 
// puts json on the page and we get a java script object
// jsx only returns plain js objects and is not recognized by the browser.
// only when we render it, react turns it into dom elements that the browser can interpret.

import ReactDOM from "react-dom"

ReactDOM.render(page, document.getElementById("root"))

// changing so it renders on the page


/* project part 1  - markup */

/*
Challenge: Starting from scratch, build and render the 
HTML for our section project. Check the Google slide for 
what you're trying to build.

We'll be adding styling to it later.

Hints:
* The React logo is a file in the project tree, so you can
  access it by using `src="./react-logo.png" in your image
  element
* You can also set the `width` attribute of the image element
  just like in HTML. In the slide, I have it set to 40px
 */

  import React from "react"
  import ReactDOM from "react-dom"
  
  const page = (
      <div>
          <img src="react-logo.png" alt="none" width ="40"></img>
          <h1>Fun facts about React</h1>
          <ul>
              <li>Was first released in 2013</li>
              <li>Was originally created by Jordan Walker</li>
              <li>Has well over 100K stars on Github</li>
              <li>Is maintained by Facebook</li>
              <li>Powers thousands of enterprises, including mobile apps</li>
          </ul>
      </div>
      
  )
  
  ReactDOM.render(
      page,
      document.getElementById("root")
  )


/* pop quiz */


/*1. Why do we need to `import React from "react"` in our files?

if you want to use JSX, you need to import for the compiler to understand JSX objects.

ANS: jsx syntax is defined in react. 

2. If I were to console.log(page) in index.js, what would show up?

The JS object string representations. 

ANS: A JS object. 

3. What's wrong with this code:
```
const page = (
    <h1>Hello</h1>
    <p>This is my website!</p>
)
```

You are not wrapping it within a parent element. It is not possible to have two sibling elements.

ANS: it needs to be nested under a single parent element.

4. What does it mean for something to be "declarative" instead of "imperative"?

Declarative is telling the compiler how something is done, while imperative is telling the compiler what to do. Vanilla JS is imperative, React is declarative. 

React takes the declared code and performs all of the imperative steps (JS/DOM) to render onto the page.

ANS: declarative tells what to do, imperative tells how to do.

5. What does it mean for something to be "composable"?

You can build components to reuse them in order sections of your project.

ANS: create small pieces to make something larger/greater than the individual peices. 


*/