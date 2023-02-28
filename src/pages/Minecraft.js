import React from 'react';
import './Minecraft.css';
import TexturePack from "./files/coomv2.zip"

function Minecraft(){
    return(
        <div class="Minecraft">
        <div class="header">
    <nav>
      <a href="/about">About</a>
      <a href="/minecraft">Minecraft</a>
      <a href="/theboys">The Boys</a>
    </nav>
    </div>
    <div>
        <h1>the boys certified painting texture pack</h1>
        <h2>(use above all other packs)</h2>
        <div class="download-button">
        <a href={TexturePack} download={'coomv2.zip'}> click to download</a>
        </div>
        <div>
        </div>
        <div class="images">
        <img src="https://iili.io/H1XS2gj.png"></img>
        </div>
        </div>
        <div class="footer">
        <footer>
        ©cumsocks.wtf 2023
        </footer>
        </div>
    </div>


    )
}


export default Minecraft;