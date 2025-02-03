import styles from "./main.module.scss";
import globalStyles from "../global.module.scss";
import adaptiveStyles from "../adaptive.module.scss";
import * as React from "react";

// Import images
import fireInRound from "/src/images/vector/fire_in_round.svg";
import fireInRectangular from "/src/images/vector/fire_in_rectangular.svg";
import productCardBackground from "/src/images/medium/product_card_background.png";
import productPhoto1 from "../../images/medium/product_card_photo_1_medium.png";
import productPhoto2 from "../../images/medium/product_card_photo_2_medium.png";
import productPhoto3 from "../../images/medium/product_card_photo_3_medium.png";
import productPhotoLarge1 from "../../images/large/product_card_photo_1_large.png";
import productPhotoLarge2 from "../../images/large/product_card_photo_2_large.png";
import productPhotoLarge3 from "../../images/large/product_card_photo_3_large.png";
import {useEffect, useState} from "react";

export const Catalog: React.FC = () => {
    const products = [
        { info: "tangy and tingly", name: "LIGHT ROAST BLEND", image: productPhoto1, largeImage: productPhotoLarge1 },
        { info: "light & dark roast", name: "UJJO SAMPLER PACK", image: productPhoto2, largeImage: productPhotoLarge2 },
        { info: "tangy and tingly", name: "DARK ROAST BLEND", image: productPhoto3, largeImage: productPhotoLarge3 }
    ];

    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <section className={`${isMobile ? adaptiveStyles.sectionCatalog : styles.sectionCatalog} ${globalStyles.border}`}>
            <div className={isMobile ? adaptiveStyles.catalog : styles.catalog}>
                <div className={isMobile ? adaptiveStyles.fireContainer : styles.fireContainer}>
                    <img className={`${globalStyles.img} ${styles.fire} ${styles.fire1}`} src={fireInRound} alt="Fire"/>
                    <img className={`${globalStyles.img} ${styles.fire} ${styles.fire2}`} src={fireInRectangular} alt="Fire"/>
                    <img className={`${globalStyles.img} ${styles.fire} ${styles.fire3}`} src={fireInRectangular} alt="Fire"/>
                    <img className={`${globalStyles.img} ${styles.fire} ${styles.fire4}`} src={fireInRound} alt="Fire"/>
                </div>
                {products.map((product, index) => (
                    <div className={isMobile ? adaptiveStyles.productCard : styles.productCard} key={index}>
                        <div className={styles.background}>
                            <img className={`${globalStyles.img} ${styles.backgroundImage}`} src={productCardBackground} alt="Background"/>
                        </div>
                        <div className={styles.product}>
                            <p className={styles.productInfo}>{product.info}</p>
                            <p className={styles.productName}>{product.name}</p>
                            <picture className={styles.productPhoto}>
                                <source media="(max-width: 1000px)" srcSet={product.image}/>
                                <img className={styles.img} src={product.largeImage} alt={product.name}/>
                            </picture>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};
