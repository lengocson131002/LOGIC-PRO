import React from 'react';
import Container from '../../UI/Container';
import NewsStyled from './News.styled';
import NewsItem from './NewsItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {
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
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <section>
            <Container>
                <NewsStyled>
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
