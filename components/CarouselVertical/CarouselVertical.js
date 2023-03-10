import styles from './CarouselVertical.module.scss';
import React, { useRef } from 'react';
import Slider from 'react-slick';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

const CarouselVertical = ({ children }) => {
    const slider = useRef(null);
    const settings = {
        dots: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        arrow: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
        beforeChange: function (currentSlide, nextSlide) {
            console.log('before change', currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log('after change', currentSlide);
        },
    };

    return (
        <div>
            <h2>Vertical Carousel</h2>
            <div className={styles.wrapper}>
                <ArrowUpwardIcon className={styles.arrow} onClick={() => slider?.current?.slickPrev()}></ArrowUpwardIcon>
                <Slider ref={slider} {...settings} className={styles.slider}>
                    {children}
                </Slider>
                <ArrowDownwardIcon className={styles.arrow} onClick={() => slider?.current?.slickNext()}></ArrowDownwardIcon>
            </div>
        </div>
    );
}

export default CarouselVertical