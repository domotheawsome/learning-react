import React from "react";
import memesData from "../memesData.js"

export default function Meme() {
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const url = memesArray[randomNumber].url
        return url;
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" placeholder="top" type="text"/>
                <input className="form--input" placeholder="bottom" type="text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>

            </div>
        </main>
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