import styles from './CarouselVerticalTabs.module.scss';
import React, { useState, useRef } from 'react';
import Slider from 'react-slick';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { motion, AnimatePresence } from 'framer-motion';

const CarouselVerticalTabs = ({ carouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slider = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        arrows: false,
        speed: 0,
        initialSlide: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        beforeChange: function (currentSlide, nextSlide) {
            console.log('before change', currentSlide, nextSlide);
        },
        afterChange: function (currentSlide) {
            console.log('after change', currentSlide);
            setCurrentIndex(currentSlide);
        },
        responsive: [
            {
                // tablet
                breakpoint: 960,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    vertical: false, // Set vertical to false explicitly
                    verticalSwiping: false,
                }
            },
        ]
    };

    return (
        <div>
            <h2>Vertical Carousel as Tabs</h2>
            <div className={styles['grid']}>
                <div className={styles.wrapper}>
                    <ArrowUpwardIcon className={`${styles.previous} ${styles.arrow}`} onClick={() => slider?.current?.slickPrev()}></ArrowUpwardIcon>
                    <Slider ref={slider} {...settings} className={styles.carousel}>
                        {carouselData.map((item, index) => (
                            <div key={index}>
                                <div className={styles['carousel-container']}>
                                    <div className={styles['carousel-faded']}>
                                        {carouselData[(index - 1 + carouselData.length) % carouselData.length].content}
                                    </div>
                                    <div className={styles['carousel-active']}>
                                        {item.content}
                                    </div>
                                    <div className={styles['carousel-faded']}>
                                        {carouselData[(index + 1) % carouselData.length].content}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                    <ArrowDownwardIcon className={`${styles.next} ${styles.arrow}`} onClick={() => slider?.current?.slickNext()}></ArrowDownwardIcon>
                </div>
                <div className={styles.tab}>
                    {carouselData[currentIndex].tabContent}
                </div>
            </div>
        </div>
    );
};

export default CarouselVerticalTabs;
