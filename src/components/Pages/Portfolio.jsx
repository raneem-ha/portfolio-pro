import React from 'react'
import NavBar from './../NavBar/NavBar'
import Hero from './../Hero/Hero'
import img from './../../assets/images/aboutt.jpg'
import cv from './../../assets/cv/Raneem.pdf'
import Swip from './../swip/Swip'
import img1 from './../../assets/images/png-transparent-logo-css-css3-thumbnail-removebg-preview.png'
import img2 from './../../assets/images/logo-2582748_1280.png'
import img3 from './../../assets/images/javascript.png'
import img4 from './../../assets/images/vs.webp'
import img5 from './../../assets/images/2944870.webp'
import img6 from './../../assets/images/ps.png'
import img7 from './../../assets/images/reactt.png'
import img8 from './../../assets/images/github.png'
import img9 from './../../assets/images/bootstrap.png'
import CardContainer from './../home/cardsContainer/CardContainer'
import Cards from './../home/cards/Cards'
import Data from './../data/Data.json'
import Footer from '../footer/Footer'
import { ThemeContext } from '../../App'
import { useContext, useEffect, useState } from 'react'

const Portfolio = () => {
    const { val } = useContext(ThemeContext)
    const menu = [{ title: "Home", path: "/" }, { title: "About Me", path: "/about" }, { title: "Portfolio", path: "/contact", class: "home" },
    { title: "Contact", path: "/contact" }]
    const images = { img1, img2, img3, img4, img5, img6, img7, img8, img9 }




    return (
        <div className={(val) ? "light-mode " : "dark-mode"}>
            <NavBar menu={menu} />
            <Hero value={true} image={img} cv={cv} descriprion='I have selected and mentioned here some of my latest projects to share with you.
'></Hero>
            <Swip images={images}></Swip>
            <CardContainer>
                {Data?.map((element, index) => {
                    return (
                        <div key={element.id}>
                            <Cards
                                id={element.id}
                                title={element.title}
                                desc={element.desc}
                                image1={element.image1}
                                image2={element.image2}


                            />
                        </div>
                    );
                })}



            </CardContainer>
            <Footer></Footer>
        </div>
    )
}

export default Portfolio