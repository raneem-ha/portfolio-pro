
import NavBar from './../NavBar/NavBar'
import Hero from './../Hero/Hero'
import img from './../../assets/images/Computer_Science.jpg'
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
import photo from './../../assets/images/contact.jpg'
import About from '../home/aboutContainer/About'
import AboutInfo from '../home/aboutinfo/AboutInfo'
import Skills from '../home/skills/Skills'
import Certificate from '../home/lang-certificats/Certificate'
import CardContainer from './../home/cardsContainer/CardContainer'
import Cards from './../home/cards/Cards'
import Data from './../data/Data.json'
import Contact from '../home/contact-section/Contact'
import Footer from '../footer/Footer'








import { ThemeContext } from '../../App'
import { useContext, useEffect, useState } from 'react'



const Home = () => {
    const { val } = useContext(ThemeContext)
    const menu = [{ title: "Home", path: "/", class: "home" }, { title: "About Me", path: "/about" }, { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", path: "/contact" }]
    const images = { img1, img2, img3, img4, img5, img6, img7, img8, img9 }








    return (
        <div className={(val) ? "light-mode " : "dark-mode"}>
            <NavBar menu={menu} />
            <Hero value={true} image={img} cv={cv} descriprion="I am software engineer lived in Riyadh ,saudi arabia.
                    I improve and develope websites in line with needs of the organizations
"></Hero>
            <Swip images={images}></Swip>
            <About>

                <Skills />
                <AboutInfo />
            </About>
            <Certificate />
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
            <Contact image={photo}></Contact>
            <Footer />
        </div>
    )
}

export default Home