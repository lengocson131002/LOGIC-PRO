import styled from "styled-components";

const Container = styled.div`
  max-width: 1450px;
  padding: 0 15px;
  margin: 0 auto;

  @media (max-width : 1455px) {
      max-width: 1200px;
      padding: 0 30px;
  }
  @media (max-width : 1199px) {
     max-width: 1024px;
      padding: 0 15px;
  }

  @media (max-width : 1023px) {
    max-width: 800px;
     padding: 0 15px;
  }
`

export default Container;