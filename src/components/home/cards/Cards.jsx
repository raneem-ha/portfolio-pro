import React from 'react'
import './Cards.css'
import { Link } from 'react-router-dom'



const Cards = ({ image1, image2, title, desc, id }) => {

    return (
        <div className='cards'>
            <div className="image">
                <img className='img1' src={image1}></img>
                <img className='img2' src={image2}></img>
            </div>
            <h3>{title}</h3>
            <p className='desc'>{desc}</p>
            <div className='read-more' > <Link to={`/details/${id}`} >read case study <i className="fa-solid fa-arrow-right"></i></Link></div>

        </div>
    )
}

export default Cards