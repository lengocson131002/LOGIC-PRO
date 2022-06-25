import NewsItemStyled from './NewsItem.styled';
import React from 'react';
import { LinkButton } from '../Buttons';
import { FaArrowRight } from 'react-icons/fa';
import { useTheme } from 'styled-components'


const NewsItem = (props) => {
    const theme = useTheme();

    return (
        <NewsItemStyled {...props} >
            <div>{props.time}</div>
            <span>{props.title}</span>
            <p>{props.quote}</p>
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
