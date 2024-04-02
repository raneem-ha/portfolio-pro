import React from 'react'
import './Certificate.css'

const Certificate = () => {
    return (
        <div className='certificate-cont'>
            <div className="lang">
                <h2>Languages</h2>
                <div className="lang-box">
                    <span className='title'>Arabic</span>
                    <div className="lang-bar">

                        <span className='grade' >Fluent</span>

                    </div>
                </div>

                <div className="lang-box english">
                    <span className='title'>English</span>
                    <div className="lang-bar english">

                        <span className='grade' >Advanced</span>

                    </div>
                </div>
            </div>
            <div className="cert">
                <h2>Studies</h2>
                <div className="study">
                    <span className='circl'></span>
                    <p> Faculty of Information Technology Engineering
                        -AlBaath University </p>
                </div>
                <div className="study">
                    <span className='circl '></span>
                    <p >
                        Certificate of Frontend development from Vica company
                    </p>
                </div>
            </div >

        </div >
    )
}

export default Certificate