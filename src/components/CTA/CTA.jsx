import './CTA.scss';

function CTA({ componentClass, componentText }) {
    return (
        <button
            className={componentClass + ' CTA__button'}> {componentText}
        </button>
    )
}

export default CTA;