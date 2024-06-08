import './Card.scss';

function Card({
    imgSrc,
    title,
    about
}) {

    return (
        <div className="card">
            <div className='card__img-container'>
                <img className="card__img"
                    src={imgSrc}
                    alt={`image for ${title}`}
                />
            </div>
            <h2 className='card__title'>{title}</h2>
            <p className='card__about'>{about}</p>
        </div>)
}
export default Card;