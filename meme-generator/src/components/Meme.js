import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage() {
        const memesArray = memesData.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url)
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" placeholder="top" type="text"/>
                <input className="form--input" placeholder="bottom" type="text"/>
                <button onClick={getMemeImage} className="form--button">Get a new meme image 🖼</button>

            </div>
            <img src={memeImage} className="meme--image" alt="meme"/>
        </main>
    )    

}
