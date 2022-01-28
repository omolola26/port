import React from 'react'
import "./about.css"
const About = () => {
    return (
        <div className="about">
        <div className="aboutAll">
            <div className="about_me">
                <h2>about me</h2>
                <p>Helping you reach your full potenial</p>
            </div>

           <div className="intro">
                    <h5 className='header'>who i am</h5>
                    <p> 
                        A passionate, self-driven, and result-oriented software developer
                        in pursuit of opportunities in growing organizations that is willing
                        to offer opportunities for career development, facilitate continuous
                        learning, growth, and create a positive impact. Highly energetic and
                        passionate to apply all my skills and professional experiences to
                        achieve organizational goals and also attain a successful.
                    </p>
                    <h5 className='header'>What are my Skills</h5>
                    <ul>
                        <li>HTML5</li>
                        <li>CSS3</li>
                        <li>Javascript</li>
                        <li>React.js</li>
                        <li>Bootstrap & Tawind</li>
                        <li>Nodejs(Mongoose, SQL, Express) 1year</li>
                        
                    </ul>
                </div>
            </div>
            </div>
    )
}

export default About;
