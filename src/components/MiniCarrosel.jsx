import React from 'react'
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module
import styles from "../styles/MiniCarrosel.module.css"

import sugar1 from "../assets/sugar1.jpg"
import sugar2 from "../assets/sugar2.jpg"
import sugar3 from "../assets/sugar3.webp"
import sugar4 from "../assets/sugar4.webp"

import soja1 from "../assets/soja1.jpg"
import soja2 from "../assets/soja2.jpeg"
import soja3 from "../assets/soja3.jpeg"
import soja4 from "../assets/soja4.jpg"

import animal1 from "../assets/animal1.jpg"
import animal2 from "../assets/animal2.jpg"
import animal3 from "../assets/animal3.jpeg"
import animal4 from "../assets/animal4.jpg"

const MiniCarrosel = ({ type }) => {
    const [sliderRef, slider] = useKeenSlider(
        {
            slideChanged() {
            },
            loop: true,
            slides: {
                perView: 'auto',
                origin: "center",
            },

        },
        [
            // add plugins here
        ]
    )

    const images = {
        sugar: [
            sugar1,
            sugar2,
            sugar3,
            sugar4
        ],
        soja: [
            soja1,
            soja2,
            soja3,
            soja4
        ],
        animal: [
            animal1,
            animal2,
            animal3,
            animal4
        ]
    }

    const imgs = images[type]
    
    return (
        <div className={styles.sliderContainer}>
            <div ref={sliderRef} className="keen-slider">
                {imgs.map(image => 
                    <div className="keen-slider__slide">
                        <img className={styles.image} src={image} alt="" />
                    </div>
                )}
            </div>
            
            <button
                className={`${styles.navButton} ${styles.prev}`} 
                onClick={() => slider.current?.prev()}
            >
                ‹
            </button>
            <button
                className={`${styles.navButton} ${styles.next}`} 
                onClick={() => slider.current?.next()}
            >
                ›
            </button>
        </div>
    )
}

export default MiniCarrosel