import { Link } from 'react-router-dom';
import './Card.scss';

function Card({
    imgSrc,
    title,
    about,
    id
}) {

    return (
        <Link to={`/content/${id}`}
            className='card__link'>
            <div className="card">
                <div className='card__img-container'>
                    <img className="card__img"
                        src={imgSrc}
                        alt={`image for ${title}`}
                    />
                </div>
                <h2 className='card__title'>{title}</h2>
                <p className='card__about'>{about}</p>
            </div>
        </Link>
    )
}
export default Card;