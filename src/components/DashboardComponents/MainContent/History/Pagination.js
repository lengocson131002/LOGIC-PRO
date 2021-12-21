import styled from "styled-components";
import { NavLink } from "react-router-dom";
import { BsArrowLeft } from 'react-icons/bs';
import { BsArrowRight } from 'react-icons/bs';

const PaginationStyled = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   margin: 5rem 0;
   gap: 1rem;
   .page-index {
        display: flex;
        color: #000;
        text-decoration: none;
        justify-content: center;
        align-items: center;
        width: 3rem;
        height: 3rem;
        border-radius: 50%;
        background: ${({ theme }) => theme.colors.primary};

        &.active {
            background: ${({ theme }) => theme.colors.secondaryLight};
        }
   }

    .previous, 
    .next {
        background: transparent;
        color: #fff;
        transition: all 0.3s;
        cursor: pointer;
        &:hover {
            color: #000;            
            background: ${({ theme }) => theme.colors.primary};
        }
    }
   .previous {
       margin-right: 3rem;
   }
   .next {
       margin-left: 3rem;
   }

   
`;

const Pagination = (props) => {
    const { numOfPages } = props;
    let pageIndexes = [];

    for (let i = 0; i < numOfPages; i++) {
        pageIndexes.push(<NavLink
            to={i + ''}
            className={({ isActive }) => isActive ? 'active page-index' : 'page-index'}
        >{i + 1}</NavLink>);
    }

    return (
        <PaginationStyled>
            <div display className="previous page-index">
                <BsArrowLeft />
            </div>
            {pageIndexes}
            <div display className="next page-index">
                <BsArrowRight />
            </div>

        </PaginationStyled>
    )
};

export default Pagination;
