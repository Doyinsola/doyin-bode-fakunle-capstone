import './DetailsImage.scss';

function DetailsImage({
    imgSrc,
    title
}) {
    return (
        <section className="details-image">
            <img className="details-image__img"
                src={imgSrc}
                alt={`image for ${title}`}
            />
        </section>
    )
}

export default DetailsImage;