import NewsItemStyled from './NewsItem.styled';
import React from 'react';
import LinkButton from '../../UI/LinkButton';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components'

const newsItem = {
    time: "Oct-25-2021 09:03:48 AM",
    title: "Regional representatives and site improvements",
    quote: "Dear investors, By now many of you have already finished two and even three investment cycles for updated investment plans. A lot of you not only have made a noticeably good profit but also have become active project collaborators, making suggestions on what you would like to see improved. Thanks to your initiative, we are ready to announce a few important changes:"
}
const NewsItem = (props) => {
    const theme = useTheme();

    return (
        <NewsItemStyled>
            <div>{newsItem.time}</div>
            <span>{newsItem.title}</span>
            <p>{newsItem.quote}</p>
            <LinkButton
                color={theme.colors.primary}
                clickcolor={theme.colors.secondaryLight}
            >READ MORE
                <FaArrowRight style={{
                    marginLeft: "1rem"
                }} />
            </LinkButton>
        </NewsItemStyled>
    )
}

export default NewsItem
