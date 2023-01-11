import styled from "styled-components";
import { theme } from "../../styles/theme";

export const PageLogin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;

  .password{
    width: 100%;
    position: relative;
    span{
      position: absolute;
      right: 20px;
      top: 10px;
      cursor: pointer;
    }
    input{
      width: 100%;
    }
  }

  section {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: ${theme.colors.white};

    padding: 20px 10px;
    margin: 0 auto;

    border-top: 4px solid ${theme.colors.black};
    border-right: 2px solid ${theme.colors.black};
    border-bottom: 2px solid ${theme.colors.black};
    border-left: 4px solid ${theme.colors.black};
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 8px 8px 20px ${theme.colors.primary}, 5px 5px 0px 2px ${theme.colors.primary};

    form {
      display: flex;
      flex-direction: column;

      padding: 5px;
      gap: 15px;

      font-size: ${theme.typography.Heading3.size};

    }

    h2 {
      display: inline-block;
      padding: 0 30px 30px 0;
      align-self: center;
    }
  }

  .background {
    width: 100%;
    height: 100%;
    object-fit: cover;

    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
  }

  a {
    color: ${theme.colors.secundary};
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
  display: none;

  div {
    .dog {
      width: 300px;
    }

    .baloonText {
      width: 200px;
      display: block;

      position: absolute;
      top: 0;
      left: -30px;

      background: ${theme.colors.white};
      padding: 15px;

      font-size: ${theme.typography.Heading1.size};
      text-align: center;

      border-radius: 40px 40px 0px 40px;
      border: solid ${theme.colors.black} 3px;

      a {
        color: ${theme.colors.secundary};
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`;
