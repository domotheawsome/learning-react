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