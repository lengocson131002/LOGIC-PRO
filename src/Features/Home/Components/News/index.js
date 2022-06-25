import React, { useEffect } from 'react';
import Container from '../../../../Components/Container';
import NewsStyled from './News.styled';
import NewsItem from '../../../../Components/NewsItem';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

const newsItem = {
    time: "Oct-25-2021 09:03:48 AM",
    title: "Regional representatives and site improvements",
    quote: "Dear investors, By now many of you have already finished two and even three investment cycles for updated investment plans. A lot of you not only have made a noticeably good profit but also have become active project collaborators, making suggestions on what you would like to see improved. Thanks to your initiative, we are ready to announce a few important changes:"
}

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
                breakpoint: 1445,
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
                        <NewsItem
                            time={newsItem.time}
                            title={newsItem.title}
                            quote={newsItem.quote}
                        />
                        <NewsItem
                            time={newsItem.time}
                            title={newsItem.title}
                            quote={newsItem.quote} />
                        <NewsItem
                            time={newsItem.time}
                            title={newsItem.title}
                            quote={newsItem.quote} />
                        <NewsItem
                            time={newsItem.time}
                            title={newsItem.title}
                            quote={newsItem.quote} />
                    </Slider>
                </NewsStyled>
            </Container>
        </section>
    )
}

export default News
