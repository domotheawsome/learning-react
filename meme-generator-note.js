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

