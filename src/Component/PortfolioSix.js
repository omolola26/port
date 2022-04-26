import React from 'react';
import "./portfolio.css"
import { Code } from '@material-ui/icons'
import  hangman from "../picture/hangman.png"

function PortfolioSix(){
    return (
        <div className="Portcontainer">
<div className="port porter">
           <div className="portone">
   <h1>Hangman</h1>
   <p>This is a game project were the player get to guess the next word in the english dictionary that is the same as what the game picks which is anonymous </p>
           </div>
           <div className="oneImg">
           <div className="folio">
           <img className="port_img" src={hangman} alt="three"/>
           </div> 
          <div className="port_button">
           <button type="submit"><a href="https://quizzical-hamilton-19c330.netlify.app" rel="noreferrer" target="_blank" className="imgIcon">LIVE</a></button>
           <button type="submit" className="life"><a href="https://github.com/omolola26/Hangman" rel="noreferrer" target="_blank"><Code/></a></button>
           </div>
          </div>
          </div>
        </div>
    )
}
export default PortfolioSix;