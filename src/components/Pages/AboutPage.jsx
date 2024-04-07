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
import About from '../home/aboutContainer/About'
import AboutInfo from '../home/aboutinfo/AboutInfo'
import Skills from '../home/skills/Skills'
import Certificate from '../home/lang-certificats/Certificate'
import { ThemeContext } from '../../App'
import { useContext, useEffect, useState } from 'react'
import Footer from '../footer/Footer'


const AboutPage = () => {
    const { val } = useContext(ThemeContext)
    const menu = [{ title: "Home", path: "/" }, { title: "About Me", path: "/about", class: "home" }, { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" }]
    const images = { img1, img2, img3, img4, img5, img6, img7, img8, img9 }


    return (
        <div className={(val) ? "light-mode " : "dark-mode"}>
            <NavBar menu={menu} />
            <Hero value={true} image={img} cv={cv} descriprion="I am a software Engineer , I builds the frontend portion of websites"></Hero>
            <Swip images={images}></Swip>
            <About>

                <Skills></Skills>
                <AboutInfo></AboutInfo>
            </About>
            <Certificate></Certificate>
            <Footer></Footer></div>
    )
}

export default AboutPage