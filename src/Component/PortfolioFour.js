import React from 'react'
import "./portfolio.css"
import { Code } from '@material-ui/icons' 
import Four from "../picture/Four.png"

const PortfolioFour = () => {
    return (
        <div className="Portcontainer">
<div className="port porter">

           <div className="portone">
   <h1>Sheo Website</h1>
   <p>This is a shoes website where user can order for shoes of their choices. This website sells all brands of shoes, be it nike or anyother brand.</p>
           </div>

           <div className="oneImg">
           <div className="folio">
           <img className="port_img" src={Four} alt="four"/>
           </div> 
           <div className="port_button">
           <button type="submit"><a href="https://jovial-allen-84cd22.netlify.app" target="_blank" className="imgIcon">LIFE</a></button>
           <button type="submit" className="life"><a href="https://github.com/omolola26/Nikeshoes" target="_blank"><Code/></a></button>
           </div>
          </div>

          </div>
        </div>
    )
}
export default PortfolioFour;