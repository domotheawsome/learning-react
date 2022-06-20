import React from "react";
import memesData from "../memesData.js";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: ""

    })
    const [allMemeImages, setAllMemeImages] = React.useState(memesData)

    function getMeme() {
        const memesArray = allMemeImages.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        const newImage = memesArray[randomNumber].url
        setMeme(prevMeme=> ({...prevMeme, randomImage: newImage}))
    }
    return(
        <main>
            <div className="form">
                <input className="form--input" placeholder="top" type="text"/>
                <input className="form--input" placeholder="bottom" type="text"/>
                <button onClick={getMeme} className="form--button">Get a new meme image 🖼</button>

            </div>
            <p>{meme.topText}</p>
            <img src={meme.randomImage} className="meme--image" alt="meme"/>
            <p>{meme.bottomText}</p>
        </main>
    )    

}

