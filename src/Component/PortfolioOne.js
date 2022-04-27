import React from 'react'
import "./portfolio.css"
import  pro from "../picture/pro.png"
import { Code } from '@material-ui/icons'

const PortfolioOne = () => {
    return (
    <div className="Portcontainer">
      <div className="port porter">
        <div className="portone">
          <h1>Portfolio Website</h1>
             <p>This  portfolio website,that  talk about me,
              what i do and what i have worked on and where you can reach me.
                  </p>
           </div>
           <div className="oneImg">
           <div className="folio">
           <img className="port_img" src={pro} alt="pro"/>
           </div>
           <div className="port_button">
           <button type="submit"><a href="https://laughing-curie-5a5a64.netlify.app" rel="noreferrer" target="_blank" className="imgIcon">LIFE</a></button>
           <button type="submit" className="life"><a href="https://github.com/omolola26/Portfolio" rel="noreferrer" target="_blank"><Code/></a></button>
           </div>
          </div>

          </div>
        </div>
    )
}

export default PortfolioOne;
