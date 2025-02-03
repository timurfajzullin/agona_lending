import styles from './footer.module.scss'
import globalStyles from "../global.module.scss";
import * as React from "react";

export const Footer: React.FC = () => {
    return (
        <footer className={`${styles.footer} ${globalStyles.border}`}>
            <a href="#">privacy</a>
            <address>
                <p>ujjo llc, columbus oh, 43219</p>
                <a href="#"></a>
            </address>
            <a href="#">instagram</a>
        </footer>
    );
};