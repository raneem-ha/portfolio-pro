import './Hero.css'


const Hero = ({ img, cv }) => {
    return (

        <div className='container'>

            <div className='left'>
                <p>Hi I am </p>
                <p className='name'>Raneem hamzah</p>
                <h2>Frontend </h2>
                <h2 className='eng'> Engineer</h2>
                <p className='description'>I am software engineer lived in Riyadh ,saudi arabia.
                    I improve and develope websites in line with needs of the organizations </p>
                <button className='cv' >
                    <a href={cv} download={cv}>
                        download cv
                    </a>
                </button>

            </div>

            <div className='photo'>
                <img src={img}></img>
            </div>




        </div >



    )
}

export default Hero