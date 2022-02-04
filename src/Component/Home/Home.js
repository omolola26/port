import React from 'react'
import "./home.css";
import Moji from "../../picture/Moji.png"

function Home(){
  return (
    <div className="home">
      <div className="home_container centerHome">
        <div className="nameDetails">
        <span className="hello">Hello!<br/>My name is</span>
          <h1 className="title">LAWAL <br/> OMOLOLA</h1>
          <p>I Am A Frontend Developer</p>
        </div>
        <div className="img_cont">
          <div className='img_cover'>
            <img  className="home_img" src={Moji} alt="moji"/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
