import React, { useState, useEffect } from 'react';
import './CarouseBanner.scss';

const banners = [
    /* 배너 디자인 완료되면 다른 png로 바꿀 것*/
    {
        src: require('./icons/banner1.png'),
        alt: '재도약 프로그램 배너 1',
    },
    {
        src: require('./icons/banner1.png'),
        alt: '재도약 프로그램 배너 2',
    },
    {
        src: require('./icons/banner1.png'),
        alt: '재도약 프로그램 배너 3',
    },
];

const CarouselBanner = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextBanner = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % banners.length);
    };

    const prevBanner = () => {
        setCurrentIndex((prevIndex) => 
            (prevIndex - 1 + banners.length) % banners.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextBanner, 5000); 
        return () => clearInterval(interval); 
    }, []);

    return (
        <div className="carousel-banner">
            <div className="banner-content">
                <button className="arrow left-arrow" onClick={prevBanner}>
                    <img src={require('./icons/left-arrow.png')} alt="왼쪽 화살표" />
                </button>
                <button className="arrow right-arrow" onClick={nextBanner}>
                    <img src={require('./icons/right-arrow.png')} alt="오른쪽 화살표" />
                </button>
                <img src={banners[currentIndex].src} alt={banners[currentIndex].alt} className="banner-image" />
            </div>
        </div>
    );
};

export default CarouselBanner;