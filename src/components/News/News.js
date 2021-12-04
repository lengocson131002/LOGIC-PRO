import React, { useEffect } from 'react';
import Container from '../../UI/Container';
import NewsStyled from './News.styled';
import NewsItem from './NewsItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const News = () => {
    useEffect(() => {
        AOS.init();
    }, []);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            }
        ]
    };
    return (
        <section>
            <Container>
                <NewsStyled data-aos="zoom-in-up">
                    <Slider {...settings}>
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                        <NewsItem />
                    </Slider>
                </NewsStyled>
            </Container>
        </section>
    )
}

export default News
