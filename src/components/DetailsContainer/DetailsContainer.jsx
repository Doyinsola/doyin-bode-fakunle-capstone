import './DetailsContainer.scss';
import likesIcon from '../../assets/icons/likes.svg';
import CTA from '../CTA/CTA';
import { Link } from 'react-router-dom';

function DetailsContainer({ contentDetails }) {
    return (
        <section className="details__container">
            <h2 className='details__name'>Name: {contentDetails.name}</h2>
            <p className='details__about'>About: {contentDetails.about}</p>
            <a href={contentDetails.external_URL} target="_blank"
                className='details__link'>Link to {contentDetails.name}</a>
            <p className='details__description'>Description: {contentDetails.description}</p>
            <div className='details__categories'>
                {contentDetails.Categories.map((category, index) => (
                    <Link to={`/categories/${category}`}
                        className='details__link'
                        key={index}>
                        <CTA componentClass="details__category"
                            componentText={category} />
                    </Link>
                ))}
            </div>
            <div className="details__likes-container">
                <img
                    src={likesIcon}
                    alt="like content icon"
                    className="details__likes-icon" />
                <p className="details__likes-count">{contentDetails.likes}</p>
            </div>
        </section>
    )
}

export default DetailsContainer;