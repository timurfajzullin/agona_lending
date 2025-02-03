import { Header } from './Header/Header';
import { Banner } from './Main/Banner';
import { Catalog } from './Main/Catalog';
import { History } from './Main/History';
import { PreFooter } from './Main/PreFooter';
import { Footer } from './Footer/Footer';
import globalStyles from './global.module.scss';
import mainStyles from './Main/main.module.scss';
import adaptiveStyles from './adaptive.module.scss';

// Импорт изображений
import scorpionSmall from '/src/images/small/scorpion.svg';
import scorpionVector from '/src/images/vector/scorpion.svg';
import pepperVector from '/src/images/vector/pepper.svg';
import syrupInCupLarge from '/src/images/large/syrup_in_cup_large.jpg';
import syrupInCupMedium from '/src/images/medium/syrup_in_cup_medium.jpg';
import syrupInCupSmall from '/src/images/small/syrup_in_cup_small.jpg';
import {useEffect, useState} from "react";

export function App() {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <div className={globalStyles.container}>
            <Header />
            <main className={isMobile ? adaptiveStyles.main : globalStyles.main}>
                <Banner />
                <div className={`${isMobile ? adaptiveStyles.textScorpion : mainStyles.textScorpion} ${globalStyles.border} ${globalStyles.flex}`}>
                    <picture className={mainStyles.scorpion}>
                        <source media="(max-width: 768px)" srcSet={scorpionSmall} />
                        <img className={globalStyles.img} src={scorpionVector} alt="Scorpion" />
                    </picture>
                    <h2 className={mainStyles.h2}>THROW SOME LAVA IN YOUR JAVA</h2>
                    <picture className={`${mainStyles.scorpion} ${mainStyles.scaleX}`}>
                        <source media="(max-width: 768px)" srcSet={scorpionSmall} />
                        <img className={globalStyles.img} src={scorpionVector} alt="Scorpion" />
                    </picture>
                </div>
                <Catalog />
                <div className={`${mainStyles.runningLine} ${globalStyles.border}`}>
                    {[...Array(8)].map((_, i) => (
                        <div className={mainStyles.runningLineElement} key={i}>
                            <span className={mainStyles.runningLineText}>put some fire in your belly</span>
                            <img className={`${globalStyles.img} ${mainStyles.runningLineImg}`} src={pepperVector} alt="Pepper" />
                        </div>
                    ))}
                </div>
                <div className={`${mainStyles.bigPhoto} ${globalStyles.border}`}>
                    <picture className={mainStyles.bigPhotoPicture}>
                        <source media="(min-width: 1440px)" srcSet={syrupInCupLarge} />
                        <source media="(min-width: 1024px)" srcSet={syrupInCupMedium} />
                        <img className={mainStyles.img} src={syrupInCupSmall} alt="Syrup in cup" />
                    </picture>
                </div>
                <History />
                <PreFooter />
            </main>
            <Footer />
        </div>
    );
}