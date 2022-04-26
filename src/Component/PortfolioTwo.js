import React from 'react'
import "./portfolio.css"
import { Code } from '@material-ui/icons'
import two from "../picture/two.png"

const PortfolioTwo = () => {
    return (
        <div className="Portcontainer">
<div className="port porter">

           <div className="portone">
   <h1>E-commerce Website</h1>
   <p>This is a e-commerce website where users can signup, login, purchase goods. It an online shopping website.</p>
           </div>

           <div className="oneImg">
           <div className="folio">
           <img className="port_img" src={two} alt="two"/>
           </div> 
           <div className="port_button">
           <button type="submit"><a href="https://stupefied-shockley-6302ad.netlify.app" rel="noreferrer"target="_blank" className="imgIcon">LIVE</a></button>
           <button type="submit" className="life"><a href="https://github.com/omolola26/e-commerce" rel="noreferrer" target="_blank"><Code/></a></button>
           </div>
          </div>

          </div>
        </div>
    )
}
export default PortfolioTwo