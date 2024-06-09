import { useState } from "react";
import "./FormField.scss";

function FormField({ componentClass, type, name, placeholder, eventHandler }) {
    const [isActive, setIsActive] = useState(null);

    const clickHandler = () => setIsActive(true);

    return (
        <input
            type={type}
            name={name}
            placeholder={placeholder}
            className={componentClass + ` form__fields`}
            onClick={clickHandler}
            onChange={eventHandler}
        ></input>
    );
}

export default FormField;