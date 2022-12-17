import "../index.scss";
import icon from "../assets/images/logo.svg";
import hamburger from "../assets/images/icon-hamburger.svg";
import arrowdown from "../assets/images/icon-arrow-down.svg";
import { useState } from "react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(true);

    const toggle = () => {
        setIsOpen(!isOpen);
    };
    return (
        <header>
            <div className="nav-wrapper">
                <div className="icon">
                    <a href="/" aria-label="logo">
                        <img src={icon} alt="icon brand" />
                    </a>
                </div>
                <nav className={isOpen ? "" : "show"}>
                    <div className="nav-container">
                        <ul className="nav-list">
                            <li>
                                <a href="/" className="nav-items">
                                    About
                                </a>
                            </li>
                            <li>
                                <a href="#Services" className="nav-items">
                                    Services
                                </a>
                            </li>
                            <li>
                                <a href="#Projects" className="nav-items">
                                    Projects
                                </a>
                            </li>
                            <li>
                                <a href="#Contact" className="nav-items">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <button className="nav-toggle" onClick={toggle} type="button">
                    <img src={hamburger} alt="hamburger nav" />
                </button>
            </div>
            <div className="heading">
                <h1>We are Creatives</h1>
                <div className="image-container">
                    <a href="#main">
                        <img className="arrow-down" src={arrowdown} alt="arrow down" />
                    </a>
                </div>
            </div>
        </header>
    );
};

export default Header;
