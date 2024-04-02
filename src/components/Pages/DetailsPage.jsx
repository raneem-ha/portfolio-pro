


import NavBar from './../NavBar/NavBar'
import Hero from './../Hero/Hero'
import img from './../../assets/images/WhatsApp_Image.png'
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
import Details from './../details/Details.jsx'
import Data from './../data/Data.json'

import { ThemeContext } from '../../App'
import { useContext } from 'react'
import { useParams } from 'react-router-dom'
import Footer from '../footer/Footer.jsx'


const DetailsPage = () => {
    const { val } = useContext(ThemeContext)
    let { id } = useParams();


    const menu = [{ title: "Home", path: "/", }, { title: "About Me", path: "/about" }, { title: "Portfolio", class: "home", path: "/portfolio" },
    { title: "Contact", path: "/contact" }]
    const images = { img1, img2, img3, img4, img5, img6, img7, img8, img9 }


    return (
        <div className={(val) ? "light-mode " : "dark-mode"}>
            <NavBar menu={menu} />
            <Hero img={img} cv={cv}></Hero>
            <Swip images={images}></Swip>
            {Data?.map((element, index) => {
                if (element.id == id) {
                    return (
                        <div key={element.id}>
                            <Details title={Data[id - 1].title} description={Data[id - 1].description} languages={Data[id - 1].languages} github={Data[id - 1].github}
                                photo1={Data[id - 1].image1} ></Details>
                        </div>
                    );
                }
            })}
            <Footer></Footer>

        </div >
    )
}

export default DetailsPage