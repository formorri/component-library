import styles from './CarouselVertical.module.scss';
import React from 'react';
import Slider from 'react-slick';

const ArrowPosition = '48vw';
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

const CarouselVertical = ({ children }) => {
    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        vertical: true,
        verticalSwiping: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        // autoplay: true,
        // autoplaySpeed: 3000,
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
            <Slider {...settings} className={styles.margin}>
                {children}
            </Slider>
        </div>
    );
}

export default CarouselVertical