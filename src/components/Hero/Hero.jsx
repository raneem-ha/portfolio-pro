import './Hero.css'


const Hero = ({ image, cv, value, descriprion }) => {
    return (

        <div className={(value) ? 'container position b-position' : 'container '} style={{ backgroundImage: `url(${image})` }}>

            <div className='left'>
                <p >Hi I am </p>
                <p className='name'>Raneem hamzah</p>
                <h2>Frontend </h2>
                <h2 className='eng'> Engineer</h2>
                <p className='description'>{descriprion} </p>
                <button className='cv' >
                    <a href={cv} download={cv}>
                        download cv
                    </a>
                </button>

            </div>

            {/*  <div className='photo'>
                <img src={image}></img>
            </div> */}




        </div >



    )
}

export default Hero