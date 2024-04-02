import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
        <div className='footer-container'>

            <div className='logo align center'>

                RH portfolio

            </div>


            <div className='social-media align center'>
                <div className='out-circle'><a href='https://www.facebook.com/raneem.hamzah'>

                    <i className="fa-brands fa-facebook"></i> </a></div>
                <div className='out-circle'><a href="https://api.whatsapp.com/send?phone=966542956307" target='_blank'>
                    <i className="fa-brands fa-whatsapp"></i>
                </a></div>
                <div className='out-circle'><a href="https://www.linkedin.com/in/raneem-hamzah-948b91113/" target='_blank'>
                    <i className="fa-brands fa-linkedin-in"></i>
                </a></div>
                <div className='out-circle'><a href="https://t.me/raneem_ham" target='_blank'>
                    <i className="fa-brands fa-telegram"></i></a>

                </div>


            </div>

        </div>

    )
}

export default Footer