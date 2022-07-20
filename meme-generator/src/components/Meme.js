import React from "react";

export default function Meme() {
    const [meme, setMeme] = React.useState({
        randomImage: "http://i.imgflip.com/1bij.jpg",
        topText: "",
        bottomText: ""

    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
         fetch("https://api.imgflip.com/get_memes")
            .then(res=>res.json())
            .then(d=> setAllMemes(d.data.memes))
    }, [])

    function getMeme() {
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        const newImage = allMemes[randomNumber].url
        setMeme(prevMeme=> ({...prevMeme, randomImage: newImage}))
    }

    function changeText(e) {
        const {name, value} = e.target
        setMeme( prevMeme => { return {
            ...prevMeme, [name]: value
        }})
    }
    return(
        <main>
            <div className="form">
                <input 
                    className="form--input" 
                    placeholder="top" 
                    type="text"
                    value={meme.topText}
                    onChange={changeText}
                    name="topText"
                />
                <input 
                    className="form--input" 
                    placeholder="bottom" 
                    type="text"
                    value={meme.bottomText}
                    onChange={changeText}
                    name="bottomText"
                />
                <button onClick={getMeme} className="form--button">Get a new meme image 🖼</button>

            </div>
            <div className="meme">
                <img src={meme.randomImage} className="meme--image" alt="meme"/>
                <p className="meme--text top">{meme.topText}</p>
                <p className="meme--text bottom">{meme.bottomText}</p>
            </div>
        </main>
    )    

}

