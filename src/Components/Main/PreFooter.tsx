import * as React from "react";
import styles from "./main.module.scss";
import globalStyles from "../global.module.scss";

export const PreFooter: React.FC = () => {
    return (
        <div className={styles.preFooter}>
            <div className={`${styles.runningLine} ${globalStyles.border}`}>
                {[...Array(5)].map((_, i) => (
                    <div className={styles.runningLineElement} key={i}>
                        <span className={styles.runningLineText}>download our media kit</span>
                        <img className={`${globalStyles.img} ${styles.runningLineImg}`} src="/src/images/vector/pepper.svg" alt="Pepper"/>
                        <span className={styles.runningLineText}>CONTACT FOR PARTNERSHIP OPPORTUNITIES</span>
                        <img className={`${globalStyles.img} ${styles.runningLineImg}`} src="/src/images/vector/pepper.svg" alt="Pepper"/>
                    </div>
                ))}
            </div>
            <div className={`${styles.bottomBigLogo} ${globalStyles.border}`}>
                <img className={`${globalStyles.img} ${styles.bigFire}`} src="/src/images/vector/big_fire.svg" alt="Big Fire"/>
                <img className={`${globalStyles.img} ${styles.bottomBigLogoFrame}`} src="/src/images/vector/bottom_frame.svg" alt="Bottom Frame"/>
                <img className={`${globalStyles.img} ${styles.ujjo}`} src="/src/images/vector/ujjo.svg" alt="Ujjo"/>
                <img className={`${globalStyles.img} ${styles.whiteLabel}`} src="/src/images/vector/white_label.svg" alt="White Label"/>
            </div>
        </div>
    );
};
