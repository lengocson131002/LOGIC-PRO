import styled from "styled-components";

const InfoStyled = styled.div`  
   display: inline-block;
   
   & h4{
       font-size: 1.6rem;
        font-weight: 600;
    }

    & p{
        font-size: 1.6rem;
        font-weight: lighter;
        color: ${props => props.theme.colors.primaryLight};

        @media (max-width: 1300px) {
            font-size: 1.4rem;
        }
       
    }
`;


const Info = (props) => {
    return (
        <InfoStyled className={props.className}>
            <h4>{props.title}</h4>
            <p>{props.info}</p>
        </InfoStyled>
    )
}
export default Info;