// create your App component here

import React from "react"
import { useState, useEffect } from "react"

function App(){

    const [dogsShown, setDogsShown] = useState("")

    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random")
            .then(res => res.json())
            .then(res => {
                setDogsShown(res.message)
            });
        }, []);
       
        return (

            dogsShown ? <img src={dogsShown} alt="A Random Dog"/> : <p>Loading...</p>
        )
}

export default App; 