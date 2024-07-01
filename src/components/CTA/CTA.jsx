import './CTA.scss';

function CTA({
    componentClass,
    componentText,
    eventHandler,
}) {
    return (
        <button
            onClick={eventHandler}
            className={componentClass + ' CTA__button'}> {componentText}
        </button>
    )
}

export default CTA;