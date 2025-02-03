import { useState, useEffect } from "react";
import mainStyles from "./main.module.scss";
import globalStyles from "../global.module.scss";
import adaptiveStyles from "../adaptive.module.scss";
import * as React from "react";

import ujjoLogo from "/src/images/vector/ujjo.svg";
import whiteLabel from "/src/images/vector/white_label.svg";
import pepperImg from "/src/images/vector/pepper.svg";
import syrupAroundCupsSmall from "../../images/small/syrup_around_cups_small.jpg";
import syrupAroundCupsMedium from "../../images/medium/syrup_around_cups_medium.jpg";
import syrupAroundCupsLarge from "../../images/large/syrup_around_cups_large.jpg";
import syrupInHandSmall from "../../images/small/syrup_in_hand_small.jpg";
import syrupInHandMedium from "../../images/medium/syrup_in_hand_medium.jpg";
import syrupInHandLarge from "../../images/large/syrup_in_hand_large.jpg";

export const Banner: React.FC = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={`${globalStyles.border} ${isMobile ? adaptiveStyles.bannerSection : mainStyles.bannerSection}`}>
            <div className={`${mainStyles.bannerLeft} ${isMobile ? adaptiveStyles.bannerLeft : ""}`}>
                <div className={mainStyles.largeLogo}>
                    <img className={`${mainStyles.img} ${mainStyles.ujjo}`} src={ujjoLogo} alt="Ujjo" />
                    <img className={`${mainStyles.img} ${mainStyles.whiteLabel}`} src={whiteLabel} alt="White Label" />
                </div>
                <div className={mainStyles.runningLine}>
                    {[...Array(6)].map((_, i) => (
                        <div className={mainStyles.runningLineElement} key={i}>
                            <span className={mainStyles.runningLineText}>put some fire in your belly</span>
                            <img className={`${globalStyles.img} ${mainStyles.runningLineImg}`} src={pepperImg} alt="Pepper" />
                        </div>
                    ))}
                </div>
                <div className={mainStyles.bigPhoto}>
                    <picture className={mainStyles.bigPhotoPicture}>
                        <source media="(min-width: 1440px)" srcSet={syrupAroundCupsLarge} />
                        <source media="(min-width: 1024px)" srcSet={syrupAroundCupsMedium} />
                        <source media="(max-width: 768px)" srcSet={syrupAroundCupsSmall} />
                        <img className={mainStyles.img} src={syrupAroundCupsSmall} alt="Syrup around cups" />
                    </picture>
                </div>
            </div>
            <div className={`${mainStyles.bannerRight} ${isMobile ? adaptiveStyles.bannerRight : ""}`}>
                <div className={mainStyles.sloganLine}>
                    <h1 className={mainStyles.h1}>THE FIRST HOT SAUCE MADE FOR COFFEE</h1>
                </div>
                <div className={mainStyles.bigPhoto}>
                    <picture className={mainStyles.bigPhotoPicture}>
                        <source media="(min-width: 1440px)" srcSet={syrupInHandLarge} />
                        <source media="(min-width: 1024px)" srcSet={syrupInHandMedium} />
                        <img className={mainStyles.img} src={syrupInHandSmall} alt="Syrup in hand" />
                    </picture>
                </div>
            </div>
        </section>
    );
};
