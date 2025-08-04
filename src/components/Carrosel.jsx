import React from "react";
import 'keen-slider/keen-slider.min.css'
import { useKeenSlider } from 'keen-slider/react' // import from 'keen-slider/react.es' for to get an ES module

import img1 from "../assets/hero1.jpeg"
import img2 from "../assets/hero_image.jpeg"
import img3 from "../assets/hero2.jpeg"
import img4 from "../assets/hero3.jpeg"
import img5 from "../assets/hero4.jpeg"

import styles from "../styles/Carrosel.module.css"

const Carrosel = () => {
  const [sliderRef, slider] = useKeenSlider(
    {
      slideChanged() {
        console.log('slide changed')
      },
      loop: true,
      slides: {
        perView: 'auto',
        origin: "center"
      },
    },
    [
      // add plugins here
    ]
  )

  React.useEffect(() => {
    if (!slider) return;

    const interval = setInterval(() => {
      slider.current?.next();
    }, 3000); // 3 segundos

    return () => clearInterval(interval);
  }, [slider]);

  return (
    <div ref={sliderRef} className="keen-slider">
      <div className="keen-slider__slide">
        <img className={styles.image} src={img1} alt="" />
      </div>
      <div className="keen-slider__slide">
        <img className={styles.image} src={img2} alt="" />
      </div>
      <div className="keen-slider__slide">
        <img className={styles.image} src={img3} alt="" />
      </div>
      <div className="keen-slider__slide">
        <img className={styles.image} src={img4} alt="" />
      </div>
      <div className="keen-slider__slide">
        <img className={styles.image} src={img5} alt="" />
      </div>
    </div>
  )
}

export default Carrosel;