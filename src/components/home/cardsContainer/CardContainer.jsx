
import './CardContainer.css'

const CardContainer = (props) => {
    return (
        <div className='portfolio'>
            <h1>My Portfolio</h1>
            <p className='port'>Lets have a look at my Portfolio</p>
            <div className="portfolio-container">
                {props.children}


            </div>
        </div>
    )
}

export default CardContainer