import styled from "styled-components";
import LinkButton from '../../../UI/LinkButton';

const HeaderStyled = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin: 0 auto; 
    padding: 25px 70px;
    background-color: rgba(0, 0,0, 0.3);
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;

    & ${LinkButton} {
      text-transform: uppercase;
      font-size: 14px;
      flex-grow: 1;
   }

   .actions {
      display: flex;
      font-size: 14px;
      font-weight: 600;

      gap: 10px;
      width: 280px;
      justify-content: stretch;

      margin-left: 2rem;
    }
    .header-top,
    .header-bottom {
      position: relative;
      display: flex;
      gap: 20px;
      justify-content: flex-end;
      align-items: center;
    }

    //heder-top

    .logo {
      flex-grow: 1;
    }
    .logo-image {
      display: block;
      position: absolute;
      width: 180px;
      height: auto;
    }


    //header bottom
    .nav-bottom {
      display: flex;
      gap: 3rem;
    
      text-transform: uppercase;
      color: #fff;
      font-size: 19px;
      font-weight: bold;
      letter-spacing: 0px;
      transition: all 0.5s;
      
      .nav-link,
      .nav-link:active {
        text-decoration: none;
        color: #fff;
      }

      .nav-link:hover,
      .activated {
        color: #ffe7bc;
      }
    }

      @media (max-width: 1444px) {
          .header-bottom {
            flex-direction: column-reverse;
            justify-content: flex-end;
            align-items: flex-end;
          }
      }
      @media (max-width: 1023px) {
        width: fit-content;
        padding: 20px 40px;

        .logo {
          flex: 1;
        }

        .actions {
          margin-left: 1rem;
        }
        .nav-link {
          gap: 2rem;
        }
      }
  `
export default HeaderStyled;