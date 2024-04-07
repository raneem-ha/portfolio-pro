
import NavBar from '../NavBar/NavBar'
import Hero from '../Hero/Hero'
import img from './../../assets/images/aboutt.jpg'
import cv from './../../assets/cv/Raneem.pdf'
import Swip from '../swip/Swip'
import img1 from './../../assets/images/png-transparent-logo-css-css3-thumbnail-removebg-preview.png'
import img2 from './../../assets/images/logo-2582748_1280.png'
import img3 from './../../assets/images/javascript.png'
import img4 from './../../assets/images/vs.webp'
import img5 from './../../assets/images/2944870.webp'
import img6 from './../../assets/images/ps.png'
import img7 from './../../assets/images/reactt.png'
import img8 from './../../assets/images/github.png'
import img9 from './../../assets/images/bootstrap.png'
import ContactMe from '../Contact-me/ContactMe'


import { ThemeContext } from '../../App'
import { useContext } from 'react'
import Footer from '../footer/Footer'


const ContantPage = () => {

    const { val } = useContext(ThemeContext)



    const menu = [{ title: "Home", path: "/", }, { title: "About Me", path: "/about" }, { title: "Portfolio", path: "/portfolio" },
    { title: "Contact", class: "home", path: "/contact" }]
    const images = { img1, img2, img3, img4, img5, img6, img7, img8, img9 }



    return (
        <div className={(val) ? "light-mode " : "dark-mode"}>
            <NavBar menu={menu} />
            <Hero image={img} cv={cv} value={true} descriprion="Drop me a line.
I would like to hear from you."></Hero>
            <Swip images={images}></Swip>
            <ContactMe></ContactMe>
            <Footer></Footer>

        </div >
    )
}



export default ContantPage