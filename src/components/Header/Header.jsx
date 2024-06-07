import "./Header.scss";
import logo from '../../assets/logo/logo.png';
import searchIcon from '../../assets/icons/search.svg';
import FormField from "../FormField/FormField";
import CTA from "../CTA/CTA";
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="header">
            <Link to={"/"} className="header__logo-link">
                <img src={logo} alt="Apó imọ logo" className="header__logo" />
            </Link>
            <div className="header__container">
                <div className="header__search-container">
                    <img
                        src={searchIcon}
                        alt="search icon"
                        className="header__search-icon"
                    />
                    <FormField
                        componentClass="header__search-field"
                        name="search"
                        type="search"
                        placeholder="Search"
                    />
                </div>
                <div className="header__btn-container">
                    <CTA componentClass="header__login-btn" componentText="Log in" />
                    <CTA componentClass="header__signin-btn" componentText="Sign up" />
                </div>
            </div>
        </header>
    );
}

export default Header;