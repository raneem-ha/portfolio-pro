import React from 'react'
import './contact.css'
import { Link } from 'react-router-dom'

const Contact = ({ image }) => {
    return (
        <div className='contact-container' style={{ backgroundImage: `url(${image})` }}>
            <h4>Do you have Project Idia?
                Let's discuss your project!</h4>
            <button className='contact' ><Link to={'/contact'} >contact me </Link></button>
        </div>
    )
}

export default Contact