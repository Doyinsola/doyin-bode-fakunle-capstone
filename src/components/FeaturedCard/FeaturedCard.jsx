import './FeaturedCard.scss';

function FeaturedCard({ featuredContent }) {
    const serverURL = process.env.REACT_APP_SERVER_URL;

    return (
        <div className="featured-card">
            <div className='featured-card__img-container'>
                <img className="featured-card__img"
                    src={`${serverURL}/${featuredContent.image_URL}`}
                    alt={`image for ${featuredContent.name}`}
                />
            </div>
            <h2 className='featured-card__title'>{featuredContent.name}</h2>
            <p className='featured-card__about'>{featuredContent.about}</p>
        </div>)
}
export default FeaturedCard;