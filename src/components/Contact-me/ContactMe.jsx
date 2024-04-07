import './ContactMe.css'
import { ThemeContext } from '../../App'
import { useContext } from 'react'
import emailjs from '@emailjs/browser'
import { useRef, useState } from 'react'


const CotnactMe = () => {
    const { val } = useContext(ThemeContext)
    const [valu, setvalu] = useState(true)
    const [input, setinput] = useState('')
    const form = useRef();
    const inputRef1 = useRef()
    const inputRef2 = useRef()
    const inputRef3 = useRef()
    const inputRef4 = useRef()
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_hyk8u1o', 'template_9wleg38', form.current, 'A42p6S08MERO42KjV')
            .then((result) => {
                console.log(result.text);
                console.log("message sent!");

                setvalu(!valu)
                inputRef1.current.value = "";
                inputRef2.current.value = "";
                inputRef3.current.value = "";
                inputRef4.current.value = "";





            }, (error) => {
                console.log(error.text);
                console.log("error sending message, try again!")
            });

    };



    return (

        <div className='contact-me-container'>
            <div className="left-contact">
                <h2>Get in Touch</h2>
                <p>Have a question or a project in mind? I'd love to hear from you. Let's chat and make something amazing together.</p>
                <div className='phone'>
                    <div className='number'><i className="fa fa-volume-control-phone" aria-hidden="true"></i> <span>00966542956307</span></div>
                    <div className='email'><i className="fa fa-envelope" aria-hidden="true"></i><span>raneem.hamzah@gmail.com</span></div>
                    <div className='map'><i className="fa-solid fa-location-dot"></i><span className='location'><a className={(val) ? "light-mode " : "dark-mode"} href='https://www.google.com/maps/place/Riyadh'>https://www.google.com/maps/place/Riyadh</a></span></div>
                </div>
                <div className='social-media'>
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
            <div className="right-contact">
                <form action="" ref={form} onSubmit={sendEmail} >
                    <input type="text" id="name" placeholder="Full Name" name='user_name' ref={inputRef1} required></input>
                    <input type="email" id="email" placeholder="example@yourmail.com " name='user_email' ref={inputRef2} required></input>
                    <input type="number" id="company" placeholder="phone number" name="user_number" ref={inputRef3} required></input>
                    <textarea name="message" id="message" placeholder="hello there,i would like to talk about how to..." ref={inputRef4} required></textarea>
                    <button className='send' type='submit'/*  onSubmit={
                        setvalu(!valu)
                    } */ >Send Message</button>
                </form>
                <div className='success' style={{ display: (valu) ? "none" : "block" }} >
                    <h2 >Message Sent!!</h2></div>
            </div>

        </div>
    )
}

export default CotnactMe