import styled from "styled-components";
// import { Link as LinkRouter } from "react-router-dom";

// interface isStyledLink {}

export const PageLogin = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding: 0 15px;

  section {
    width: 100%;
    max-width: 500px;
    display: flex;
    flex-direction: column;
    background-color: #FFFFFF;

    padding: 20px 10px;
    margin: 0 auto;

    border-top: 4px solid #000000;
    border-right: 2px solid #000000;
    border-bottom: 2px solid #000000;
    border-left: 4px solid #000000;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 8px 8px 20px #f9f41f, 5px 5px 0px 2px #f9f41f;

    form {
      display: flex;
      flex-direction: column;

      padding: 5px;
      gap: 15px;

      font-size: 18px;

      input {
        background-color: #dddddd;
        border: none;
        border-radius: 30px;
        height: 40px;
      }

      button {
        height: 50px;
        border: none;
        border-radius: 30px;
        background-color: #f9f41f;
        box-shadow: 4px 4px 0px #000, 4px 4px 0px 1px #000;
      }

   }

   p {
    display: inline-block;
    margin-top: 30px;
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
    color: #49bcf0;
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

  /* section {
    border: 4px solid #000000;
    border-bottom-left-radius: 40px;
    border-top-right-radius: 40px;
    box-shadow: 8px 8px 20px #f9f41f, 5px 5px 0px 2px #f9f41f;
  }

  form {
    height: 100%;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 90%;
    font-size: 18px;
    padding: 15px 10px 10px 20px;
    position: relative;
    top: 50px;
    gap: 15px;
  }
  form div {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  form input {
    background-color: #dddddd;
    border: none;
    border-radius: 30px;
    height: 40px;
    width: 95%;
  }
  form button {
    border: none;
    border-radius: 30px;
    width: 95%;
    height: 50px;
    background-color: #f9f41f;
    box-shadow: 4px 4px 0px #000, 4px 4px 0px 1px #000;
  }
  form p {
    font-size: 16px;
    margin-top: 10px;
  }
  .background {
    position: absolute;
    top: 0;
    z-index: 0;
    object-fit: cover;
    height: 100vh;
    width: 100%;
  }
  .dog {
    display: none;
  }

  @media (min-width: 1024px) {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 120px;

    form {
      width: 500px;
      height: 500px;
      margin-top: 150px;
      padding: 30px;
      gap: 20px;
      /* border-bottom-left-radius: 100px;
      border-top-right-radius: 100px;
      border-top: 4px solid black;
      border-left: 4px solid black;
      border-right: 2px solid black;
      border-bottom: 3px solid black;
    }
    form div h2 {
      margin-top: 30px;
      font-size: 36px;
    }

    form input {
      height: 50px;
    }
    form button {
      margin-top: 20px;
      font-size: 26px;
    }
    form p {
      display: none;
    }
  } */
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

      background: white;
      padding: 15px;

      font-size: 24px;
      text-align: center;

      border-radius: 40px 40px 0px 40px;
      border: solid black 3px;

      a {
        color: #49bcf0;
      }
    }
  }

  @media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`

// export const Link = styled(LinkRouter)<isStyledLink>`
//   color: #49bcf0;
// `;
