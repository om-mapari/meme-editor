import React from "react"
import img1 from "../troll-face.png"
export default function Header() {
    return (
        <header className="header">
            <img 
                src={img1}
                className="header--image"
                alt="troll-face"
            />
            <h2 className="header--title">Meme Editor</h2>
            <p className="header--project">
                <h4 >Made With ❤️ Using React Js <span > <a style={{ color: 'blue',  textDecoration: 'none'  }} href="https://github.com/om-mapari/meme-editor">🔗Github</a> </span> </h4>
            </p>

        </header>
    )
}