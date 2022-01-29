 import React from 'react';
import "./footer.css"
import  { useState } from "react";


 function Footer() {
     const [message, setMessage] = useState("Send Message")

     function handleClick(){ 
       setMessage("Thank you") 
     }
   return (
<div className="contain">
        <h1>Contact Me</h1>
        <div className="contents">
    <div className="left">
                    <h1>Get in Touch</h1>
                    <p>You can get in touch with me on Linkedin and other social media platforms.</p>
                    <div className="icons">
                        <div className="row">
                            <i class="fa fa-user" aria-hidden="true"></i>
                            <div className="info">
                                <div className="head">Name</div>
                                <div className="sub-title">Lawal Omolola</div>
                            </div>
                        </div>

                        <div className="row">
                            <i class="fa fa-map-marker" aria-hidden="true"></i>
                            <div className="info">
                                <div className="head">Address</div>
                                <div className="sub-title">Lagos, Nigeria</div>
                            </div>
                        </div>

                        <div class="row">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <div className="info">
                                <div className="head">Email</div>
                                <div className="sub-title">omololaalimat22@gmail.com
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <i class="fa fa-envelope" aria-hidden="true"></i>
                            <div className="info">
                                <div className="head">Linkedin</div>
                                <div className="sub-title"><a href="https://www.linkedin.com/in/omolola2/">Link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

    <div className="right">
<form action="mailto:omololaalimat22@gmail.com">
         <div className="field name">
         <input type="text"  placeholder="Name" required /> 
            </div>
            <div className="field email">
                 <input type="email" placeholder="Email" required/>
                </div>

                <div className="field">
                  <input  type="text"  placeholder="Subject" required />
                    </div>

                        <div className="field textarea">
                            <textarea  cols="30" rows="10" placeholder="Describe project.." required></textarea>
                        </div>
                        
                        <div className="button">
                            <button type="submit"  onClick={handleClick}>{message}</button>
                        </div>
                    </form>
    </div>
    </div>
    </div>
 
)
   }
 export default Footer;
