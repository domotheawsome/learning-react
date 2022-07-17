/* event listeners */
// in react we don't use event listeners like in js, we insert them directly into the html with camel case. i.e. onclick = onClick.

// we can also set the property to a js function. we can define this above the return. 

// react documentation has a full list of the events it can support

//https://reactjs.org/docs/events.html#mouse-events

// how do we update a variable so we can replace what we have on the screen with the new value of the variable-- next screencast


// current conundrum:

    /**
     * Challenge: Map over the thingsArray to generate
     * a <p> element for each item and render them on the page
     * below the button
     */
     const items = thingsArray.map(thing => {
        return(
            <p>{thing}</p>       
        )
    })
    
    return (
        <div>
            <button>Add Item</button>
            {items}
        </div>
    )
}


/**
 * Challenge: Add an event listener to the button so when
 * it is clicked, it adds another thing to our array
 * 
 * Hint: use the array length + 1 to determine the number
 * of the "Thing" being added. Also, have you event listener
 * console.log(thingsArray) after adding the new item to the
 * array
 * 
 * Spoiler: the page won't update when new things get added
 * to the array!
 */

 function App() {
    const thingsArray = ["Thing 1", "Thing 2"]
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    function newThing() {
        const length = `Thing ${thingsArray.length + 1}`
        thingsArray.push(length)
        console.log(thingsArray);
        
    }
    return (
        <div>
            <button onClick={newThing}>Add Item</button>
            {thingsElements}
        </div>
    )
}

/* Props vs State ; props*/

// props = properties that you pass into a component in 
// order for the componenet to work correctly
// just like a function taht recieves parameters, 
// component receives props. just like how component
// is not allowed to modify the props. props
// are immutable. 

function addTwoNumbers(a, b) {
    // assume that function will pass a and b
    // can do check
    if( a === undefined) {
        // throw some error.
    }
    return a + b;

}

addTwoNumbers(1, 2)
// pass values as parameters and let function do its job

// would be weird to modify parameters within the function
// i.e. set the props to different values

function Navbar(props) {
    // you would never want to set props.anything to anything
    // different. incoming props should be immutable, never change manually
    // props should not change within body itself 
    props.image = "something else"
}

<Navbar coverImage="some-image" />
// you can change the values that you pass to the component
// however within the body of the function you do NOT change
// the props
// otherwise will not work correctly
// i.e. properties being passed into a component in order
// to configure it.
// configure prop to display correct image, price, stats, etc.

/* props vs. state ; state */

// state are values that are defined within a component and
// should be changing
// any vvalues that are managed by the component itself
// function that declares its own variables within that function
// if the function has changing values that should be saved/displayed
// you will be using state


// vanilla js challenge

/*
Challenge: complete the function below
Given a name, return "Good <timeOfDay>, <name>!" depending
on the current time of day.

4 am - 11:59 am, timeOfDay = "morning"
12 pm - 4:59 pm: timeOfDay = "afternoon"
5 pm - 7:59 pm: timeOfDay = "evening"
8 pm - 3:59 am: timeOfDay = "night"

E.g. if it's currently 1 pm, greeting("Jane") ==> "Good afternoon, Jane!"

Hint: you can get the current time of day by using: 

const date = new Date()
const hours = date.getHours()
*/

function greeting(name) {
    const date = new Date();
    const hours  = date.getHours();
    if (hours > 12 && hours < 16 ){console.log("good afternoon, " + name )}
}
greeting("Bob")


/* props vs state quiz */

/* 1. How would you describe the concept of "state"?

state are values that are defined within the component and should be changing
they are managed by the component themselves, rather than props which are passed in

"the way things currently are"

"values that a component can maintain between render cycles"

"a way for react to remember saved values from within a component. similar to decalring variables within a component"

2. When would you want to use props instead of state?

when you need something to change per user input, i.e. displaying the correct image,
price, stats, etc. something that isn't changed within the body of the component/function

3. When would you want to use state instead of props?

anytime the function has changing values that should be saved/displayed.

"anytime you need the component to maintain its own values"

4. What does "immutable" mean? Are props immutable? Is state immutable?

it means the variable does not/should not change. props are immutable,
state is not immutable. 
*/


/* useState */

//use state == hooks

    /**
     * Challenge: Replace our hard-coded "Yes" on the page with 
     * some state initiated with React.useState()
     */
     const result = React.useState("Yes")
     console.log(result)
     return (
         <div className="state">
             <h1 className="state--title">Is state important to know?</h1>
             <div className="state--value">
                 <h1>{result[0]}</h1>
             </div>
         </div>
     )
 }

 /* useState array destructuring */

// since useState returns an array, we can destructure it immediately
// after recieving and then provide two values (result, func) to pull out
// the items and save them in their own var

// const [result, func] = React.useState("Yes")
// console.log(result)
// "Yes"

// array destructuring pretty much lets you get values from useState more
// smoothly

/* changing state */

// cannot reassign state value after getting it from useState.

// i.e. [result, func] = useState()
// cannot do: result = "hello"

// func = you can run this func and it will be the new version of state
// func("hello"), this will change result

// set/change the state when something specific happens on the page.

/**
* Challenge: 
* 1. Create a function called `handleClick` that runs
*    setIsImportant("No")
* 2. add a click event listener to the div.state--value
*    that runs `handleClick` when the div is clicked.
*/
    
     function handleClick() {
        setIsImportant("No")
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Is state important to know?</h1>
            <div className="state--value">
                <h1 onClick={handleClick}>{isImportant}</h1>
            </div>
        </div>
    )
}


/* use state counter practice */
import React from "react"

export default function App() {
  /**
     * Challenge: 
     * Add functionality to the minus button
     */
   const [count, setCount] = React.useState(0)
    
   function add() {
       setCount(count + 1)
   }
   
   function subtract() {
       setCount(count - 1)
   }
   
   return (
       <div className="counter">
           <button className="counter--minus" onClick={subtract}>–</button>
           <div className="counter--count">
               <h1>{count}</h1>
           </div>
           <button className="counter--plus" onClick={add}>+</button>
       </div>
   )
}

/* useState -- changing state with callback function */

// better way to use old version of state to determine new version of state
// use setter function to provide callback function inside
// by providing callback func, it returns the value we want state to be
// this is best practice
// react will pass func oldValue as parameter
// use it as our reference to handle state
// whenever you need to use the old value to determine the new value, use a callback func


export default function App() {
    const [count, setCount] = React.useState(0)
    /**
     * Note: if you ever need the old value of state
     * to help you determine the new value of state,
     * you should pass a callback function to your
     * state setter function instead of using
     * state directly. This callback function will
     * receive the old value of state as its parameter,
     * which you can then use to determine your new
     * value of state.
     */
    function add() {
        setCount(prevCount => prevCount + 1)
    }
    // Challenge: update `substract` to use a callback function
    
    function subtract() {
        setCount(prevCount => prevCount - 1)
    }
    
    return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <div className="counter--count">
                <h1>{count}</h1>
            </div>
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

/* changing state quiz */

/*
1. You have 2 options for what you can pass in to a
   state setter function (e.g. `setCount`). What are they?
   
hardcoded value, callback function
-- whatever callback function returns, it would be the new value of state

2. When would you want to pass the first option (from answer
   above) to the state setter function?

when you need something to reset
-- anytime you want to update state and you do not care/do not need the previous value of state

3. When would you want to pass the second option (from answer
   above) to the state setter function?

when you want something to dynamically change
-- anytime you need the previous value of state to determine the new state
*/

/* challenge: ternary practice */

export default function App() {
    /**
     * Challenge: Replace the if/else below with a ternary
     * to determine the text that should display on the page
     */
    const isGoingOut = true
    let answer = isGoingOut === true ? "Yes" : "No"
    
    return (
        <div className="state">
            <h1 className="state--title">Do I feel like going out tonight?</h1>
            <div className="state--value">
                <h1>{answer}</h1>
            </div>
        </div>
    )
}

/* challenge: flipping state back and forth */

import React from "react"

export default function App() {
    /**
     * Challenge: 
     * - Initialize state for `isGoingOut` as a boolean
     * - Make it so clicking the div.state--value flips that
     *   boolean value (true -> false, false -> true)
     * - Display "Yes" if `isGoingOut` is `true`, "No" otherwise
     */
    
    const [isGoingOut, setGoingOut] = React.useState(true)
    
    function flippingState() {
        return setGoingOut(prevState => !prevState)
    }
    
    return (
        <div className="state">
            <h1 className="state--title">Are you going?</h1>
            <div onClick={flippingState} className="state--value">
                <h1>{isGoingOut ? "yes" : "no"}</h1>
            </div>
        </div>
    )
}

/* complex state: arrays */

function App() {
    /**
     * Challenge: See if you can do it all again by yourself :)
     */
    const [thingsArray, setThingsArray] = React.useState(["Thing 1"])
     
    function addItem() {
        return setThingsArray( function prevState(prevState) {
            return [...prevState, `Thing ${prevState.length +1}`]
        }
            
        )
        // Build from scratch :)
        
    }
    
    const thingsElements = thingsArray.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )
}

/* complex state: objects */

import React from "react"

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        console.log("Toggle Favorite")
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img 
                        src={`../images/${starIcon}`} 
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

/* complex state: updating state objects */

function toggleFavorite() {
    // Challenge: Rebuild it :)
    return setContact(function newContact(prevContact) {
       return (
            { ...prevContact, 
            isFavorite: !prevContact.isFavorite
            }
        )
    })
}

/* passing state as props */

    /**
     * Challenge:
     * - Create a new component named Count
     *    - It should receive a prop called `number`, whose value
     *      is the current value of our count
     *    - Have the component render the whole div.counter--count
     *      and display the incoming prop `number`
     * - Replace the div.counter--count below with an instance of
     *   the new Count component
     */
     return (
        <div className="counter">
            <button className="counter--minus" onClick={subtract}>–</button>
            <Count 
                number={count}
            />
            <button className="counter--plus" onClick={add}>+</button>
        </div>
    )
}

// this is my Count.js (component) file

import React from "react"
//import hero from "./images/airbnb-hero.png"
function Count (props) {
    return (
       <div className="counter--count">
              <p>{props.number}</p>
        </div>
    )
}

export default Count;


/* setting state from child components */

// i thought this was mildly stupid since you can pass in a reference
// to the function and it would work just fine


// here essentially i had to back track and pass in the isFavorite directly,
// thus eliminating the toggle mechanism

// app.js 

export default function App() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false
    })
    
    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */
    
    let starIcon = contact.isFavorite ? "star-filled.png" : "star-empty.png"
    
    function toggleFavorite() {
        setContact(prevContact => ({
            ...prevContact,
            isFavorite: !prevContact.isFavorite
        }))
    }
    
    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <Star 
                        isFilled={contact.isFavorite}
                    />
                    
                    <h2 className="card--name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="card--contact">{contact.phone}</p>
                    <p className="card--contact">{contact.email}</p>
                </div>
                
            </article>
        </main>
    )
}

// star.js (component)

import React from "react"
//import hero from "./images/airbnb-hero.png"
function Count (props) {
    let starIcon = props.isFilled ? "star-filled.png" : "star-empty.png"
    return (
        <img 
            src={`../images/${starIcon}`} 
            className="card--favorite"
        />
    )
}

export default Count;


/* passing data around */

// here we recognize that we should populate state from a parent component and let it trickle to the child components. example below:


// header.js (child)

import React from "react"

export default function Header(props) {
    
    /**
     * Challenge:
     * Raise state up a level and pass it down to both the
     * Header and Body components through props.
     */
    
    
    return (
        <header>
            <p>Current user: {props.user}</p>
        </header>
    )
}

// app.js (parent)




/* boxes challenge 1 */

// this is my work for the first part in app.js
// pretty much i imported the data, initialized the state to the data object, mapped over the object using .map() into an array, and rendered it with a separate component.

// i couldn't figure out styling so it has a bunch of stuff in it, but it is initialized and mapped correctly

* Challenge part 1:
* 1. Initialize state with the default value of the
*    array pulled in from boxes.js
* 2. Map over that state array and display each one
*    as an empty square (black border, transparent bg color)
*    (Don't worry about using the "on" property yet)
*/

const [box, setBox] = React.useState(boxes)

const renderBox = box.map(box=>{
   return (
       <Box 
           key={box.id}
           id={box.id}
           on={box.on}   
       />
   )
})

return (
   <main>
       <h1>Boxes will go here</h1>
       {renderBox}
   </main>
)
}

// idk what was wrong with the styles but according to scrimba i did everything correctly

/* dynamic styles */

// style prop

// concept: add an atribute called style and add css code in html

// because its javascript, you can change style dynamically depending on state

// first set of curly braces = entering into js outisde of jsx
// second set of curly braces = represents js object as a style, putting style inside of object
<div style={{}}></div>
// create separate variables (styles) and set it equal to the object
// you can put styles directly in the markup
// styles need to be camel case

// background-color = no
// backgroundColor = yes

// this is primarily good for changing style with state


// here is the challenge
// pretty much i just added the ternary, if its true then its set to dark, if its false its set to true

// i set the style equal to the js object and the style is already passed into the component

// it works as expected

// according to scrimba, it was easier just to put what my var directly in styles, no need to separate it out using let. 

/* boxes challenge part 2 */

// did everything correctly, just forgot to import the box component in apps, and thus it was a little broken. everything works fine now though

// app.js
export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    const squareElements = squares.map(square => (
        <Box 
            key={square.id}
            on={square.on}
        />
    ))
    /**
     * Challenge part 2:
     * 1. Create a separate component called "Box" and
     *    replace the `div` above with our <Box /> components
     * 2. Pass the Box component a prop called `on` with the
     *    value of the same name from the `boxes` objects
     * 3. In the Box component, apply dynamic styles to determine
     *    the backgroundColor of the box. If it's `on`, set the
     *    backgroundColor to "#222222". If off, set it to "none"
     */
    
    return (
        <main>
            {squareElements}
        </main>
    )
}


// box.js

import React from "react"


export default function Box(props) {
    let style = {
        backgroundColor: props.on ? "#222222" : "none"
    }
    
    return (
        <div className="box" key={props.id} style={style} />
    )
}

/* boxes challenge part 3.1 */

// we have no way of changing the data in the props
// we do not want to change the props directly once its passed into the component, this defeats the purpose of props.
// therefore we can change it using state within the component to update it and use state
// we add local state to change the value of the box instead of changing the prop pretty much


// here is the challenge
// this one did take me a second as i do not fully grasp state just yet. it was a very good practice in understanding
// essentially i was trying to reassign the state object instead of just returning the new state in the setter function
// now i know to just return my new state
// no need to try and mess around with the current state


* Challenge: Create state controlling whether
* this box is "on" or "off". Use the incoming
* `props.on` to determine the initial state.
* 
* Create an event listener so when the box is clicked,
* it toggles from "on" to "off".
* 
* Goal: clicking each box should toggle it on and off.
*/
// here we declare the state (state object and setter function)
// we initalize it with the props.on object
// it is either true or false depending on what was passed in
const [box, setBox] = React.useState(props.on)
function changeBox() {
  return setBox(function newBox(prevBox) {
      return(
           !prevBox   
      )
  })
}
console.log(box)
const styles = {
   backgroundColor: box ? "#222222" : "transparent"
}

return (
   <div style={styles} onClick={changeBox} className="box"></div>
)
}

// a better practice in writing short functions:

function toggle() {
    setBox(prevBox=> !prevBox)
}

// this actually isnt good practice
// if we find ourselves using state in the child components based on props, theres probably a better way to do it in the parent components
// this is what i mean by passing in the state, as i did way back in the prev examples

// adding state in the child components is called "derived state"

// we created state in the app and state in the box
// thus we have "two sources of truth"

// this state only updates the local state and not the app (parent) state
// it only updated based on the incoming props, thus "deriving" state


// the challenge was very easy, just passing the function down. its as easy as passing in the function declaration as a prop and calling it inside the function as props.toggle. this is what i did before. 

// app.js

    /**
     * Challenge: Create a toggle() function that logs
     * "clicked!" to the console
     * 
     * Pass that function down to each of the Box components
     * and set it up so when they get clicked it runs the function
     */
    
     function toggle() {
        return console.log("clicked!")
    }
// box.js

return (
    <div 
        style={styles} 
        className="box"
        onClick={props.toggle}
    >
    </div>
)
}
    



/* boxes challenge part 4 */

// this took me a LONG time to figure out
// the main issue i had was updating the array correctly and not mutating the current state array
// which is what i was doing previously
// after looking at the react docs (god bless the react docs) i learned i needed to copy the state array and mutate the item at the copied index
// and now it works
// its also 1-indexed, so i had to subtract id-1 to get it to toggle correctly
// here is my function, it differs from how scrimba teaches it but this makes sense to me 


export default function App() {
    const [squares, setSquares] = React.useState(boxes)
    
    function toggle(id) {
        /**
         * Challenge: use setSquares to update the
         * correct square in the array.
         * 
         * Make sure not to directly modify state!
         * 
         * Hint: look back at the lesson on updating arrays
         * in state if you need a reminder on how to do this
         */
        
        setSquares(squares.map((s, i) => {
            
            if(i === id-1) {
                return {...s, on: !s.on}
            } else {
                return s
            }
        }))
    }

    const squareElements = squares.map(square => (
        <Box 
            key={square.id} 
            on={square.on} 
            toggle={() => toggle(square.id)}
        />
    ))
    
    return (
        <main>
            {squareElements}
        </main>
    )
}

/* conditional rendering && */

// i got the hang of state for the most part, so this wasnt too difficult. and i remember conditional rendering from the airbnb clone, so i just implemented the conditional rendering part so the punchline only shows when clicked.

// i did get mixed up on the arrow functions again, but i looked back in the notes and resolved it. 

// i think it was an issue with the ternary conditional? i was essentially evaluating if the opposite was true or false, then return that value. it was way easier just to return the ! operator and it made more sense

// overall it works well and i think i solved the next challenge with this

export default function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */
    
    const [isShown, setIsShown] = React.useState(false)
    
    function toggleIsShown() {
        console.log(isShown)
        return setIsShown(prevShown => !prevShown)
    }
    
    return (
        
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            <button onClick={toggleIsShown}> Show Punchline </button>
            {isShown && <p>{props.punchline}</p>}
            <hr />
        </div>
    )
}

// update: i was correct

/* conditional rendering: && practice */

// this was very simple, just adding the conditional rendering and the number of messages.

export default function App() {
    const [messages, setMessages] = React.useState(["a", "b"])
    /**
     * Challenge:
     * - Only display the <h1> below if there are unread messages
     */
    return (
        <div>
            {messages.length > 0 && <h1>You have {messages.length} unread messages!</h1>}
        </div>
    )
}

/* conditional rendering: ternary */

// how to toggle the button text? simply use a ternary. if isShown is true, it displays "show punchline" otherwise it displays "hide punchline"


<button onClick={toggleShown}>{isShown ? "Hide Punchline" : "Show Punchline"}</button>

/* conditional rendering practice */

// i think theres a more concise way to do this, but this makes the most sense and is the most readable
// i could condense it to one line of code, but it would get a bit packed and defeat the purpose of readability

const [messages, setMessages] = React.useState(["a", "b"])
/**
 * Challenge:
 * - If there are no unread messages, display "You're all caught up!"
 * - If there are > 0 unread messages, display "You have <n> unread
 *   message(s)"
 *      - If there's exactly 1 unread message, it should read "message"
 *        (singular)
 * 
 */
return (
    <div>
        {messages.length == 0 && <p>You're all caught up!</p>}
        {messages.length > 0 && <p>You have {messages.length} unread message{messages.length == 1 ? "" : "s"}</p>}
    </div>
)
}

// this was a portion of scrimbas solution, it is more intuitive by using only one ternary. i like it.

<div>
{
    messages.length === 0 ?
    <h1>You're all caught up!</h1> :
    <h1>
        You have {messages.length} unread {messages.length > 1 ? "messages" : "message"}
    </h1>
}
</div>

/* conditional rendering quiz */

/*
1. What is "conditional rendering"?

conditional rendering is when you render an item based on its truthiness

2. When would you use &&?

if you want to show an item if its true


3. When would you use a ternary?

if you want to select between two options, usually true or false

4. What if you need to decide between > 2 options on
   what to display?

i would use an if statement or break into a separate toggle function
*/

/* forms */

/* watch for input changes in react */

// maintain up-to-date state for any change for any input in the form

// create state to hold input

const [firstName, setFirstName] = React.useState("")

// listen to changes in input
// "onChange", set it equal to function "handleChage"

function handleChange() {
    console.log("Changed!")
}

/* form inputs practice */

export default function Form() {
    const [firstName, setFirstName] = React.useState("")
    const [lastName, setLastName] = React.useState("")
    /**
     * Challenge: Track the applicant's last name as well
     */
    
    function handleChange(event) {
        setFirstName(event.target.value)
    }
    
    function handleChange2(event) {
        setLastName(event.target.value)
    }
    console.log(firstName, lastName)
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange2}
            />
        </form>
    )
}

/* form state object */

// use an object to store the form input fields
const [formData, setFormData] = React.useState({ firstName: ""
, lastName: ""})

// handle the change with a callback function (you need to remember the previous states to store in the input field)

function handleChange(event) {
    setFormData(prevFormData => {
        return {
            ...prevFormData, [event.target.name]: event.target.value
        }
    })
}

/* form state object practice */

// adding the email was very easy, just made a new input element and added the email to the state object list

export default function Form() {
    const [formData, setFormData] = React.useState(
        {firstName: "", lastName: "", email: ""}
    )
    
    /**
     * Challenge: add an email field/state to the form
     */
    
    console.log(formData)
    
    function handleChange(event) {
        setFormData(prevFormData => {
            return {
                ...prevFormData,
                [event.target.name]: event.target.value
            }
        })
    }
    
    return (
        <form>
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="text"
                placeholder="email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
        </form>
    )
}

// another note: you need to set the value of the input to the name of the state object


// textarea for react
// very similar to html just a selfclosing element
// you declare it:

<textarea value={} />

// everything else is the same thing as inputs. 

    
    /**
     * Challenge: Add a textarea for "comments" to the form
     * Make sure to update state when it changes.
     */

// same thing as above, here is my textarea element



// ----->  <textarea placeholder="comments" onChange={handleChange} name="comments" value={formData.comments}/>


//erewr
// htmlFor property, use with label
// point label element to input element id with htmlFor

// use checked prop

// ----> <input checked={}/>

// with checkbox, look at event.target.checked not event.target.value


// you can make the handleChange function more efficient using ternary operator

const {type, checked} = event.target

[name]: type === "checkbox" ? checked : value


// when a change happens, it will set the state to the value
// to associate input with correct piece of state & not click inputs with each state
// add name to inputs, same name to all radio button inputs

// updating only one property of radio button when only one input is selected

// id is different, name is the same
// hooked up correctly to state

// specify what value state should take on based on state
// can't use controlled components. radio buttons are controlled same way check boxes are controlled.

// use checked prop to show the checked in the input element


/* select box */

// use it to select options in drop down

// add value prop with function

// add onChange handler

// mirror name to state


<select 
    id="favColor"
    value={formData.favColor}
    onChange={handleChange}
    name="favColor"
>
    <option value="red">Red</option>
</select>

/* submit */

// either use type="submit" or use the buttom element in the form element

// create handleSubmit function

// take the current state
// submitToApi(), pass in the formData State Object and do whatever as its nice and updated

// run event.preventDefault()
// this will stop page from rerendering
// this is appropriate for saving the state object

/* forms quiz */

/* 
1. In a vanilla JS app, at what point in the form submission
   process do you gather all the data from the filled-out form?
   

it mentioned something about the php and post

answer: right before the form is submitted



2. In a React app, when do you gather all the data from
   the filled-out form?

you gather it at the end when you hit the submit button. the form is continually updated with state changes

3. Which attribute in the form elements (value, name, onChange, etc.)
   should match the property name being held in state for that input?
   
the name prop

4. What's different about a saving the data from a checkbox element
   vs. other form elements?

checkbox needs to use the checked prop to actually change. other elements use the value prop

5. How do you watch for a form submit? How can you trigger
   a form submit?
   
if the submit button is clicked, it will trigger a state function that 1. prevents the page from rerendering 2. saves the final state object. you don't necessarily watch for it, its wrapped in the same input tag but with a type of "submit" or a button.

answer: onSubmit handler on the `form` element. can trigger form submit with a button click.
*/

/* sign up form practice */

// this is quite alot but here is the completed form/challenge

 /**
     * Challenge: Connect the form to local state
     * 
     * 1. Create a state object to store the 4 values we need to save.
     * 2. Create a single handleChange function that can
     *    manage the state of all the inputs and set it up
     *    correctly
     * 3. When the user clicks "Sign up", check if the 
     *    password & confirmation match each other. If
     *    so, log "Successfully signed up" to the console.
     *    If not, log "passwords to not match" to the console.
     * 4. Also when submitting the form, if the person checked
     *    the "newsletter" checkbox, log "Thanks for signing
     *    up for our newsletter!" to the console.
     */
    
  const [formData, setFormData] = React.useState({email: "", password: "", confirmPassword: "", newsletter: ""})
    
  console.log(formData.email, formData.password, formData.newsletter)
  
  function handleChange(event) {
      const {name, value, type, checked} = event.target
      setFormData(prevFormData =>  { return {
          ...prevFormData, [name]: type==="checkbox" ? checked : value
      }})
  }
  
  function handleSubmit(event) {
    event.preventDefault()
    const {checked} = event.target
    formData.password === formData.confirmPassword ? console.log("successfully signed up") : console.log("passwords do not match")
    if(formData.newsletter === true) {
        console.log("thanks for signing up for newsletter!")
    }
}
  
  return (
      <div className="form-container">
          <form className="form" onSubmit={handleSubmit}>
              <input 
                  type="email" 
                  placeholder="Email address"
                  className="form--input"
                  value={formData.email}
                  name="email"
                  onChange={handleChange}
              />
              <input 
                  type="password" 
                  placeholder="Password"
                  className="form--input"
                  name="password"
                  onChange={handleChange}
                  value={formData.password}
              />
              <input 
                  type="password" 
                  placeholder="Confirm password"
                  className="form--input"
                  name="confirmPassword"
                  onChange={handleChange}
                  value={formData.confirmPassword}
              />
              
              <div className="form--marketing">
                  <input
                      id="okayToEmail"
                      type="checkbox"
                      name="newsletter"
                      onChange={handleChange}
                      value={formData.newsletter}
                      
                  />
                  <label htmlFor="okayToEmail">I want to join the newsletter</label>
              </div>
              <button 
                  className="form--submit"
              >
                  Sign up
              </button>
          </form>
      </div>
  )
}

// pretty much it does what it is supposed to
// creates a state object
// has a field for each input
// updates on key change
// once you hit submit the page doesn't rerender

/* project: add text to image */

// this wasn't too hard, especially with all the forms work
// i think i did it correctly, it updates with state