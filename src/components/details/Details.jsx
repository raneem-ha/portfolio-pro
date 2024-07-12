import React from 'react'
import './Details.css'
import { ThemeContext } from '../../App'
import { useContext, useState } from 'react'







const Details = ({ description, github, languages, title, photo1 }) => {


    return (
        <div className='details-container'>
            <div className="left-d">

                <h2>{title}</h2>
                <div style={{ marginTop: "30px" }}>
                    <div className='about-project'>
                        <div className='title-box' ><h3>About Project</h3>
                        </div>
                        <p className='content' >{description}</p></div>
                    <div className='about-project'>
                        <div className='title-box' ><h3>Github url</h3>
                        </div>
                        <p className='content' ><a href={github}>{github}</a></p></div>
                    <div className='about-project'>
                        <div className='title-box' >
                            <h3>languages and techniqes</h3>
                        </div>
                        <p className='content' >{languages}</p></div>




                </div>
            </div>
            <div className="right-d">
                <img src={photo1} alt="" />

            </div>

        </div >
    )
}

export default Details 