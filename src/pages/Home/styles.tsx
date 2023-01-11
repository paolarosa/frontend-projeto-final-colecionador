import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageHome = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  .button {
    background: ${theme.colors.primary};
          color: ${theme.colors.black};
          border: 1px solid ${theme.colors.primary};
          -webkit-box-shadow: 1px 3px 3px 3px ${theme.colors.black};
          box-shadow: 1px 3px 3px 3px ${theme.colors.black};
          &:hover {
            background-color: ${theme.colors.primary06};
            border: 1px solid ${theme.colors.primary06};
            color: ${theme.colors.black};
          }
        height: 80px;
        width: 300px;
        border-radius: 30px;
        font-size: ${theme.typography.Heading0.size};

        position: absolute;
        margin-left: 390px;
        margin-top: 300px;

        display: flex;
        align-items: center;
        justify-content: center;
      }

  .image {

  }

  @media (min-width: 1024px) {
    width: 968px;
    justify-content: space-between;
    margin: 0 auto;

    section {
      width: 500px;
      margin: 0;
    }
  }

`;

export const DivDogBallon = styled.div`

  height: 100%;
  display: flex;
  align-items: center;
  gap: 25px;

.billBoard {
  display: block;

  position: relative;
  background-color: ${theme.colors.grey2};
  width: 270px;
  height: 750px;
  
}
.collector2 {
  width: 300px;
  display: block;
  
  position: relative;
  margin-left: 50px;
  margin-top: 150px;
  
}
.baloonText {
  width: 400px;
  display: block;

  position: relative;
  top: -320px;
  left: 120px;

  background: ${theme.colors.white};
  padding: 15px;

  font-size: ${theme.typography.Heading1.size};
  text-align: center;

  border-radius: 40px 40px 0px 40px;
  border: solid ${theme.colors.black} 3px;

}

@media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`;