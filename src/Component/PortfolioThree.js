import React from 'react';
import "./portfolio.css"
import { Code } from '@material-ui/icons'
import Three from "../picture/Three.png"

function PortfolioThree(){
    return (
        <div className="Portcontainer">
<div className="port porter">
           <div className="portone">
   <h1>Food Website</h1>
   <p>This is a website where user can order food online from the resturant, through their website. For does who are unable to go down to get food from the resturants themselves due to one or two reasons.</p>
           </div>
           <div className="oneImg">
           <div className="folio">
           <img className="port_img" src={Three} alt="three"/>
           </div> 
          <div className="port_button">
           <button type="submit"><a href="https://suspicious-torvalds-50b5fd.netlify.app/" rel="noreferrer" target="_blank" className="imgIcon">LIFE</a></button>
           <button type="submit" className="life"><a href="https://github.com/omolola26/spicy" rel="noreferrer" target="_blank"><Code/></a></button>
           </div>
          </div>
          </div>
        </div>
    )
}
export default PortfolioThree;