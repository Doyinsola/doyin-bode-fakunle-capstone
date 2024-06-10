import './DetailsContainer.scss';
import likesIcon from '../../assets/icons/likes.svg';
import CTA from '../CTA/CTA';
import { Link } from 'react-router-dom';
import ApoImoApi from '../../classes/apo-imo-api';

function DetailsContainer({
    contentDetails,
    clickHandler
}) {

    return (
        <section className="details__container">
            <h2 className='details__name'>Name: {contentDetails.name}</h2>
            <p className='details__about'>About: {contentDetails.about}</p>
            <a href={contentDetails.external_URL} target="_blank"
                className='details__link'>Link to {contentDetails.name}</a>
            <p className='details__description'>Description: {contentDetails.description}</p>
            <div className='details__categories'>
                {contentDetails.Categories.map((category, index) => (
                    <CTA key={index} componentClass="details__category"
                        componentText={category} />
                ))}
            </div>
            <div className="details__likes-container">
                <img
                    src={likesIcon}
                    alt="like content icon"
                    className="details__likes-icon"
                    onClick={clickHandler} />
                <p className="details__likes-count">{contentDetails.likes}</p>
            </div>
        </section>
    )
}

export default DetailsContainer;