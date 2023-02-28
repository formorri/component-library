import styles from './CarouselVerticalTabs.module.scss';
import React, { useState } from 'react';
import Slider from 'react-slick';

const ArrowPosition = '25vw';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'black',
                top: '100%',
                left: ArrowPosition,
                transform: 'rotate(90deg)',
                zIndex: 10
            }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{
                ...style,
                display: 'block',
                background: 'black',
                top: '0%',
                left: ArrowPosition,
                transform: 'rotate(90deg)',
                zIndex: 10
            }}
            onClick={onClick}
        />
    );
}

const CarouselVerticalTabs = ({ carouselData }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 0,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
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
                    vertical: false,
                    verticalSwiping: false,
                }
            },
        ]
    };

    return (
        <div>
            <h2>Vertical Carousel as Tabs</h2>
            <div className={styles['grid']}>
                <Slider {...settings} className={styles.carousel}>
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
                <div className={styles.tab}>
                    {carouselData[currentIndex].tabContent}
                </div>
            </div>
        </div>
    );
};

export default CarouselVerticalTabs;
