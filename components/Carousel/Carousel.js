import styles from './Carousel.module.scss';
import React, { useRef } from "react";
import Slider from "react-slick";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Carousel = ({ children }) => {
    const slider = useRef(null);
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                // desktop
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                // tablet
                breakpoint: 960,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                // phone
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <div>
            <h2>Horizontal Carousel</h2>
            <div className={styles.wrapper}>

                <ArrowBackIcon className={styles.arrow} onClick={() => slider?.current?.slickPrev()}></ArrowBackIcon>
                <Slider ref={slider} {...settings} className={styles.slider}>
                    {children}
                </Slider>
                <ArrowForwardIcon className={styles.arrow} onClick={() => slider?.current?.slickNext()}></ArrowForwardIcon>
            </div>
        </div>
    );
}

export default Carousel