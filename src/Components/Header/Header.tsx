import React, { useState, useEffect } from "react";
import headerStyles from "./header.module.scss";
import globalStyles from "../global.module.scss";
import adaptiveStyles from "../adaptive.module.scss";

import openIcon from "../../images/vector/open_icon.svg";
import logo from "../../images/vector/logo.svg";
import minLogo from "../../images/vector/min-logo.svg";
import accountIcon from "../../images/vector/accaunt_icon.svg";

export const Header: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <header className={`${globalStyles.container} ${globalStyles.border} ${headerStyles.header}`}>
            <nav className={headerStyles.nav}>
                {isMobile ? (
                    <ul className={`${adaptiveStyles.ulHeaderAdaptive} ${globalStyles.flex} ${headerStyles.ulHeaderAdaptive}`}>
                        <li className={headerStyles.dropButton}>
                            <input type="checkbox" id="toggle" className={`${headerStyles.toggleInput} ${adaptiveStyles.toggleInput}`} />
                            <label htmlFor="toggle" className={`${adaptiveStyles.headerIcon}`}>
                                <img src={openIcon} alt="Menu" />
                            </label>
                            <div className={`${headerStyles.dropdownContent} ${adaptiveStyles.dropdownContent}`}>
                                <a className={headerStyles.dropdownText} href="#"><p>story</p></a>
                                <a className={headerStyles.dropdownText} href="#"><p>shop</p></a>
                                <a className={headerStyles.dropdownText} href="#"><p>contact</p></a>
                                <a className={headerStyles.dropdownText} href="#"><p>wholesale</p></a>
                            </div>
                        </li>
                        <li>
                            <a className={`${headerStyles.a} ${headerStyles.navLink}`}>
                                <img className={globalStyles.img} src={minLogo} alt="Logo" />
                            </a>
                        </li>
                        <li>
                            <a className={`${adaptiveStyles.headerIcon}`}>
                                <img className={globalStyles.img} src={accountIcon} alt="Account" />
                            </a>
                        </li>
                    </ul>
                ) : (
                    <ul className={`${headerStyles.ulHeader} ${globalStyles.flex}`}>
                        <li className={`${headerStyles.ulHeaderLeft} ${globalStyles.flex}`}>
                            <button className={headerStyles.buttonPrimary}>GO BACK</button>
                            <a className={`${headerStyles.a} ${headerStyles.navLink}`}><p>story</p></a>
                            <a className={`${headerStyles.a} ${headerStyles.navLink}`}><p>shop</p></a>
                        </li>

                        <li className={`${headerStyles.ulHeaderCenter}`}>
                            <a className={`${headerStyles.a} ${headerStyles.navLink}`}>
                                <img className={`${headerStyles.img}`} src={logo} alt="Logo" />
                            </a>
                        </li>

                        <li className={`${headerStyles.ulHeaderRight} ${globalStyles.flex}`}>
                            <a className={`${headerStyles.a} ${headerStyles.navLink}`}><p>contact</p></a>
                            <a className={`${headerStyles.a} ${headerStyles.navLink}`}><p>wholesale</p></a>
                            <button className={headerStyles.buttonPrimary}>CLONE</button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};
