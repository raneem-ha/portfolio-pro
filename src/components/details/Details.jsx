import React from 'react'
import './Details.css'
import { ThemeContext } from '../../App'
import { useContext, useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-cards';

import { Autoplay, Pagination } from 'swiper/modules';



const Details = ({ description, github, languages, title, photo1 }) => {
    const [isOpen, setisOpen] = useState(false)
    const [isOpen1, setisOpen1] = useState(false)
    const [isOpen2, setisOpen2] = useState(false)
    const { val } = useContext(ThemeContext)
    return (
        <div className='details-container'>
            <div className="left-d">

                <h2>{title}</h2>
                <div style={{ marginTop: "30px" }}>
                    <div className='about-project'>
                        <div className='title-box' onClick={() => {
                            setisOpen(!isOpen)
                        }}><h3>About Project</h3>
                            <i id="arrow-1" class="fas fa-chevron-down arrow" style={{ rotate: (isOpen) ? "180deg" : "0deg" }}></i></div>
                        <p className='content' style={{ display: (isOpen) ? "block" : "none" }}>{description}</p></div>
                    <div className='about-project'>
                        <div className='title-box' onClick={() => {
                            setisOpen1(!isOpen1)
                        }}><h3>Github url</h3>
                            <i id="arrow-1" class="fas fa-chevron-down arrow" style={{ rotate: (isOpen1) ? "180deg" : "0deg" }}></i></div>
                        <p className='content' style={{ display: (isOpen1) ? "block" : "none" }}><a href={github}>{github}</a></p></div>
                    <div className='about-project'>
                        <div className='title-box' onClick={() => {
                            setisOpen2(!isOpen2)
                        }}> <h3>languages and techniqes</h3>
                            <i id="arrow-1" class="fas fa-chevron-down arrow" style={{ rotate: (isOpen2) ? "180deg" : "0deg" }}></i></div>
                        <p className='content' style={{ display: (isOpen2) ? "block" : "none" }}>{languages}</p></div>




                </div>
            </div>
            <div className="right-d">
                <img src={photo1} alt="" />

            </div>

        </div >
    )
}

export default Details 