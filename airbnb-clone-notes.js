/*
Challenge: Build the Navbar component.
Check the Figma file for the design specifics.
*/

/*
Challenge: Build the Card component.
Check the Figma file for the design specifics.
*/

// issue with card component == hardcoded data is NOT reusable

// won't have same experience with all of the same data

// repeated components: amazon, imdb, apple

// components are Data Driven; website updates after data is given

// this is where prop comes in......

//

/*
understanding the concept of props pt 1
*/

// what is wrong with the elements?
    // the only thing i might see as wrong is that they are not using components? rather individual html tags?
    // href tag is not specified
    // src property is not specified
    // placeholder or type input property should be specified
//what is wrong with the javascript function?
    // its not really going anywhere, very static
    // "useless function"
    // add parameters, dynamically add and return result
    // now can add whatever two numbers you want

// adding additional information to elements/functions allows us to reuse elements/functions in different ways

/* 
reusable components pt 2
 */

// developer has created "video tile" component and made it flexible enough to take in video data to produce on the website
// elements can be nested inside of each other. 
// video list can have a parent-child relationsho

/*
aside
*/

    /**
     * Challenge: finish off the h1 below so it says
     * "Hello Joe Schmoe!"
     */

const firstName = "joe"
const lastName = "schmoe"

return (
    <h1>Hello {firstName} {lastName}!</h1>
)
//whatever is inside of the curly braces is considered javascript
// you enter the js, its taking in the const as an object
// props essentially allow you to break jsx and do js within react
// typically you don't do js within the return statement


// in react, you can pass in properties/attributes to manipulate the data
// similar to parameters in a function
// hence why they are called "props" as opposed to parameters, because you pass them into the custom components like props
// we define the properties/atttributes to pass into the component

// custom contact component prop data (hardcoded):

<Contact 
                img="./images/mr-whiskerson.png"
                name_="Mr. Whiskerson"
                number="(212) 555-1234"
                email="mr.whiskaz@catnap.meow"
/>

/* part 4: recieving props in a component */

    /**
     * Challenge: Fix the code below to use the `props`
     * object values in place of the hardcoded values below
     */

     export default function Contact(props) {
        /**
         * Challenge: Fix the code below to use the `props`
         * object values in place of the hardcoded values below
         */
        return (
            <div className="contact-card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <div className="info-group">
                    <img src="./images/phone-icon.png" />
                    <p>{props.phone}</p>
                </div>
                <div className="info-group">
                    <img src="./images/mail-icon.png" />
                    <p>{props.email}</p>
                </div>
            </div>
        )
    }

// if you define custom components, pass in the properties as a parameter
// to the js function. then make sure to do props.whatever to access that 
// prop. also make sure to use curly braces. 

/* prop quiz */

/* 

1. What do props help us accomplish?

allow us to pass data dynamically rather than hard code data. also makes components more reusable
i.e. hardcoded data breaks reusability.
just like parameters in a function

2. How do you pass a prop into a component?

you define it within the component tag in your main file (in this case app.js), pass into the 
js function like a parameter, and reference it using {props.xyz}

3. Can I pass a custom prop (e.g. `blahblahblah={true}`) to a native
   DOM element? (e.g. <div blahblahblah={true}>) Why or why not?

you can if you define a js const before it. the {} allow you to break the jsx and use js, if you
only state "true" without defining anything outisde of it, then it will throw an error

i read this wrong, this is only for a native DOM element. in this case,
no, the DOM does not use jsx. therefore any props that do not correspond
to the predefined html elements  is incorrect, and using {} will throw an 
error.

class definition:
                No, because the JSX we use to describe native DOM elements will
                be turned into REAL DOM elements by React. And real DOM elements
                only have the prooperties/attributes specified in the HTML specification.
                (Which doesn't include properties like `blahblahblah`)          

4. How do I receive props in a component?
function Navbar(props) {
    return (
        <header>
           <p>{props.xyz}</p>
        </header>
    )
}


5. What data type is `props` when the component receives it?

it depends on what is inside of the prop -- the prop itself is just a js object. it can be string,
int, bool, whatever, it depends on the value inside of it.  

props itself is an object. therefore to access props you use the dot syntax

*/





/* destructing props */

// say you have an object called person. you can destruct this object to 
// get simpler to use variable names.

// e.g., if i wanted to console log phone, i could simply do 
console.log(person.phone)

// but it can be better to destruct the object to pull out the property
// names

const = person = {
    img: ..
    name: ..
    phone: ..
    email: ..
}


const {img, name} = person

// object synstx. set it equal to person.
// declares two new variables that you can use to console log the name.

// thus, 

console.log(name)

// common to do this in react with incoming props

// parameter you pass into your component will be an object that 
// represents all of the component will recieve

// thus we can destructure the object as we recieve it into the function:

export default function Contact({img, name, phone, email}) {
    <img src={img} /> // as opposed to {props.img}
}

// its way better to just put the props object and reference the 
// img, name, etc. as opposed to destructuring




/* props practice */

/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/




// im too lazy to make a new create-react-app so i'll just post 
// my work i did in the scrimba environment


//                  APP.JS               //

import React from "react"
import Joke from "./joke.js"

export default function App() {
    return (
        <div>
            <Joke 
                setup= "I got my daughter a fridge for her birthday."
                punchline= "I can't wait to see her face light up when she opens it."
            />
            <Joke 
                setup= "How did the hacker escape the police?"
                punchline= "He just ransomware!"
            />
            <Joke 
                setup= "Why don't pirates travel on mountain roads?"
                punchline= "Scurvy."
            />
            <Joke 
                setup= "Why do bees stay in the hive in the winter?"
                punchline= "Swarm."
            />
            <Joke
                punchline= "It’s hard to explain puns to kleptomaniacs because they always take things literally." 
            />
        </div>
    )
}


//                JOKE.JS                //

import React from "react"

export default function Joke(props) {
    return(
        <div>
            <h1>Wanna hear something funny?</h1>
            <p>{props.setup}</p>
            <p>{props.punchline}</p>
        </div>
    )
}



//              INDEX.JS                    //


import React from "react"
import ReactDOM from "react-dom"
import App from "./app.js"

ReactDOM.render(
    <App />,
    document.getElementById("root")
)


// the rest of the files, index.html and styles.css, are given. i
// could've done more with the styles but i decided this was good enough
// and works as it should. 

// in regards to the extra credit, it is a practice in conditional
// rendering. i.e. only render the setup if it exists. 

// surround the jsx in curly braces, declare {prop.setup && <h3></h3>}

// this is saying if props.setup is a truthy value, render <h3>
// if it is a falsy value, do not render. 

export default function Joke(props) {
  return (
      <div>
          {props.setup && <h3>Setup: {props.setup}</h3>}
          <p>Punchline: {props.punchline}</p>
          <hr />
      </div>
  )
}

// another way of implementing: 
// style of h3 has a display of none of it does not exist.

export default function Joke(props) {
  return (
      <div>
          <h3 style={{display: props.setup ? "block" : "none"}}>Setup: {props.setup}</h3>
          <p>Punchline: {props.punchline}</p>
          <hr />
      </div>
  )
}

/* pass non-string props */

// pass in any js data type into props



export default function Joke(props) {
  return (
      <div>
          {props.setup && <h3>Setup: {props.setup}</h3>}
          <p>Punchline: {props.punchline}</p>
          {props.upvotes && <p>Upvotes: {props.upvotes}</p>}
          {props.comments && <p>Array: {props.comments.join('\r\n')}</p>}
          {props.isPun && <p>Is it a Pun?: {(props.isPun) ? " True" : " False"}</p>}
          <hr />
      </div>
  )
}

// i pretty much added various props to accommodate this.
// i got around it by adding constants and passing the constant into
// the prop. below are my constant defintions. and one example of 
// how i passed it into the prop

const data = 20
    
const array = ["bla", "bloo", "blee"]

const isPun = true


<Joke 
                punchline="It’s hard to explain puns to kleptomaniacs because they always take things literally."
                upvotes= {data}
/>

// for all i am concerned it prints correctly

// i pretty much did it correct, i didn't need to declare the const 
// prior to passing it to the prop. 


/* pass prop to card component */

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/


// ezpz, reference the project in the actual folder for this


/* review-- array.map() */

// notes from: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map 

// map() creates a new array populated with the results of calling a
// provided function on every element in the calling array.

// syntax:
// arrow function
map((element) => { ... })
map((element, index) => { ... })
map((element, index, array) => { ... })

// callback function
map(callbackfn)
map(callbackfn, thisArg)

// inline callback function
map(function(element) { ... })
map(function(element, index, array) { ... }, thisArg)

// callbackfn = function that is called for every element of arr. each 
// time the callback function is called, the return value is added to the
// new array

// map calls the callback function once for each element in order and 
// constructs a new array from the results. it is only invoked for indexes
// of the array that has assigned values, inlcudes undefined

// does not call for missing elements; indexes that have never been set,
// indexes that have been deleted.

// thisArg = value to use as this when calling callbackfn


// don't use map when you don't use the returned array. use forEach or
// for ... of instead

// also don't use map when you don't return a value from the callback

// map does not inherently mutate the array (callback may mutate)

// examples:

// mapping array of numbers to array of square roots

const numbers = [1, 4, 9];

const squareRoots = numbers.map((num) => Math.sqrt(num))

console.log(squareRoots)

// using map to reformat objects in an array

const keyvalueArray = [{key: 1, value: 10}, {key:2, value: 20,}, {key:3, value: 30}] 

const reformatted = keyvalueArray.map(({key, value}) => ({[key]: value}))

console.log(reformatted)

// mapping an array of numbers using a function containing an argument

const arr = [1,2,3]

const newArr = arr.map((num) => num * 2)

// num is the argument
// num => num * 2 is the function

console.log(newArr)


// using map generically

const string = Array.prototype.map;

const asciiArr = string.call("hello world", (x) => x.charCodeAt(0));

console.log(asciiArr)

// " use map generically " = using Array.prototype.map() on something that is not an array.
// using "hello world" works because it returns a length and can be iterated like an array

// prototype = things that are built in to the class
// in this case, map is a method of the array prototype

// the string "hello world" is not being passed to the function, rather
// map is being called on the string. hence .call()


// using map generically querySelectorAll

const elements = document.querySelectorAll("select option: ")

const newArr = Array.prototype.map.call(elements, ({value}) => value);

const newArr = Array.from(elements)


// back to scrimba:

/*
Challenge 1:
Given an array of numbers, return an array of each number, squared
*/
const nums = [1, 2, 3, 4, 5]
// -->       [1, 4, 9, 16, 25]
// Your code here

const newArr = nums.map((elem) => elem ** 2);

console.log(newArr)

/*
Challenge 2:
Given an array of strings, return an array where 
the first letter of each string is capitalized
*/

const names = ["alice", "bob", "charlie", "danielle"]
// -->        ["Alice", "Bob", "Charlie", "Danielle"]
// Your code here

const capital = names.map((name) => {
    return name[0].toUpperCase() + name.slice(1)
})


console.log(capital)


/*
Challenge 3:
Given an array of strings, return an array of strings that wraps each
of the original strings in an HTML-like <p></p> tag.

E.g. given: ["Bulbasaur", "Charmander", "Squirtle"]
return: ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
*/

const pokemon = ["Bulbasaur", "Charmander", "Squirtle"]
// -->          ["<p>Bulbasaur</p>", "<p>Charmander</p>", "<p>Squirtle</p>"]
// Your code here

const newArr = pokemon.map((name) => "<p>" + name.slice(0) + "</p>")

console.log(newArr)

// other way to do it via templating (template string)

const newArr = pokemon.map((name) => `<p>${name}</p>`)

console.log(newArr)


