import React from 'react'
import "./portfolio.css"
import Five from "../picture/Five.png";
import { Code } from '@material-ui/icons';

const PortfolioFive = () => {
    return (
        <div className="Portcontainer">
<div className="port porter">

           <div className="portone">
   <h1>Gmy Website</h1>
   <p>This is a websites where one can book an online gmy instructor, and also one can can book an appiontment with before going to the gmy.</p>
           </div>

           <div className="oneImg"> 
           <div className="folio">
           <img className="port_img" src={Five} alt="five"/>
           </div>
           <div className="port_button">
           <button type="submit"><a href="https://elated-sinoussi-b2073f.netlify.app/" target="_blank" className="imgIcon">LIFE</a></button>
           <button type="submit" className="life"><a href="https://github.com/omolola26/gmy" target="_blank"><Code/></a></button>
           </div>
          </div>

          </div>
        </div>
    )
}
export default PortfolioFive;