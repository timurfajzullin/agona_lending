import * as React from "react";
import styles from "./main.module.scss";
import adaptiveStyles from "../adaptive.module.scss";
import globalStyles from "../global.module.scss";

// Import images
import womanLarge from "/src/images/large/woman_large.jpg";
import womanMedium from "/src/images/medium/woman_medium.jpg";
import womanSmall from "/src/images/small/woman_small.jpg";
import backgroundForText from "/src/images/vector/background_for_text.svg";
import {useEffect, useState} from "react";

export const History: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={`${isMobile ? adaptiveStyles.sectionHistory : styles.sectionHistory} ${globalStyles.border}`}>
            <div className={styles.historyLeft}>
                <div className={styles.slogan}>
                    <h3 className={styles.h3}>the story behind the sauce</h3>
                </div>
                <div className={styles.womanPhoto}>
                    <picture className={styles.womanPhotoPic}>
                        <source media="(min-width: 1440px)" srcSet={womanLarge}/>
                        <source media="(min-width: 1024px)" srcSet={womanMedium}/>
                        <img className={styles.img} src={womanSmall} alt="Woman"/>
                    </picture>
                </div>
            </div>
            <div className={styles.historyRight}>
                <img className={`${globalStyles.img} ${styles.background}`} src={backgroundForText} alt="Hot pepper"/>
                <div className={`${styles.historyText} ${globalStyles.flex}`}>
                    <p className={styles.p}>HELLO, I’M LAUREN AND AS A LIFELONG ADVENTUROUS EATER, I’VE TRIED A LOT OF CRAZY THINGS, BUT I NEVER THOUGHT HOT SAUCE IN COFFEE WAS A SANE OPTION UNTIL A FRIEND DARED ME TO TRY IT.</p>
                    <p className={styles.p}>AND IT SUCKED.</p>
                    <p className={styles.p}>BUT I WONDERED IF THERE WAS A WAY TO ADD SPICE TO MY COFFEE. WHEN THERE WAS NO EASY SOLUTION, UJJO WAS BORN.</p>
                    <p className={styles.p}>UJJO (OOO-JOE): THE WORD FOR “FIRE” IN KONKANI, SPOKEN ON THE WEST COAST OF INDIA, IS AN HOMAGE AND A LOVE LETTER TO MY DAD, AN INDIAN IMMIGRANT WHO INSTILLED A FIRE IN MY PALATE – AND MY HEART – FROM THE VERY BEGINNING.</p>
                </div>
            </div>
        </section>
    );
};
