import React from 'react'
import './About.css'

const About = (props) => {
    return (
        <div className='about'>
            <h1>About Me</h1>
            <p>I am Raneem Hamzah ,a frontend Engineer , I builds the frontend portion of websites </p>
            <div className='about-container'>{props.children}</div>


        </div>
    )
}

export default About