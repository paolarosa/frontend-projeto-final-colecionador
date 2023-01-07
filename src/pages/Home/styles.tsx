import styled from "styled-components";

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
        height: 80px;
        width: 300px;
        border: none;
        border-radius: 30px;
        background-color: #f9f41f;
        box-shadow: 4px 4px 0px #000, 4px 4px 0px 1px #000;
        margin-bottom: 30px;

        font-size: 35px;

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
  background-color: grey;
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

  background: white;
  padding: 15px;

  font-size: 24px;
  text-align: center;

  border-radius: 40px 40px 0px 40px;
  border: solid black 3px;

}

@media (min-width: 1024px) {
    display: flex;
    position: relative;
  }
`;