import React from 'react'
import './Skills.css'

const skills = () => {
    return (
        <div className='skills'>
            <h2>My Skills</h2>
            <div className='skill-boxes'>
                <div className="skill-box">
                    <span className='title'>Html</span>
                    <div className="skill-bar">
                        <span className='skill-per html'>
                            <span className='tooltip' >95%</span>
                        </span>
                    </div>
                </div>
                <div className="skill-box">
                    <span className='title'>Css</span>
                    <div className="skill-bar">
                        <div className='skill-per css'>
                            <div className='tooltip' >90%</div>
                        </div>
                    </div>
                </div>
                <div className="skill-box">
                    <span className='title'>Javascript</span>
                    <div className="skill-bar">
                        <div className='skill-per javascript'>
                            <div className='tooltip' >90%</div>
                        </div>
                    </div>
                </div>
                <div className="skill-box">
                    <span className='title'>React.js</span>
                    <div className="skill-bar">
                        <div className='skill-per react'>
                            <div className='tooltip' >80%</div>
                        </div>
                    </div>
                </div>
                <div className="skill-box">
                    <span className='title'>Bootstrap</span>
                    <div className="skill-bar">
                        <div className='skill-per bootstrap'>
                            <div className='tooltip' >70%</div>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    )
}

export default skills