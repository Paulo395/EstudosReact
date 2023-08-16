import { useState } from "react"

export default function ButtonEvent() {
    const [cont,setCont] = useState(0);

    function handleClick(){
        console.log("Opaaaa")
    }

    return (
        <button onClick={handleClick}>Clique Aqui!!</button>
    )
}