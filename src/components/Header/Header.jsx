import "./Header.scss";
import logo from '../../assets/logo/logo.png';
import searchIcon from '../../assets/icons/search.svg';
import FormField from "../FormField/FormField";
import CTA from "../CTA/CTA";
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from 'react';

function Header() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const token = localStorage.getItem("token")

    useEffect(() => {
        if (token !== null) {
            setIsLoggedIn(true)
        }
    }, [token]);

    const logout = () => {
        localStorage.removeItem("token");
        setIsLoggedIn(false);
        setTimeout(() => navigate('/login'), 1500);
    };

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
                {!isLoggedIn ? (<div className="header__btn-container">
                    <Link to='/login'>
                        <CTA componentClass="header__login-btn" componentText="Log in" />
                    </Link>
                    <Link to='/signup'>
                        <CTA componentClass="header__signin-btn" componentText="Sign up" />
                    </Link>
                </div>) : (<div className="header__btn-container">
                    <CTA eventHandler={logout}
                        componentClass="header__logout-btn"
                        componentText="Log out" />

                </div>)}

            </div>
        </header>
    );
}

export default Header;