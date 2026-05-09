import { useState } from "react"

export default function LikeButton() {
    let styleColor = { color: "red" };
    let [click, setClick] = useState(false);
    let clicked = () => {
        setClick(!click);
    }

    return (
        <div>
            <p onClick={clicked}>{click ? (<i class="fa-solid fa-heart" style={styleColor}></i>) : (<i class="fa-regular fa-heart"></i>)} </p>
        </div>
    )
}