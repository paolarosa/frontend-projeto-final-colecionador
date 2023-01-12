import styled from "styled-components";
import { theme } from "../../styles/theme";
import image from "../../assets/background.png";

export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;

  section:nth-child(2) {
    display: flex;
    flex-direction: column;
    gap: 40px;

    .divDescriptionCollection {
      overflow-y: scroll;
    }

    div {
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;

      ul {
        display: flex;
        gap: 10px;
        overflow-x: scroll;
      }
      *::-webkit-scrollbar {
        width: 15px;
      }
      *::-webkit-scrollbar-track {
        background: ${theme.colors.grey0};
      }
      *::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.black};
        border-radius: 10px;
        border: 3px solid ${theme.colors.white};
      }
    }
  }

  @media (min-width: 1024px) {
    width: 968px;
    justify-content: center;
    margin: 0 auto;

    section:nth-child(2) {
      flex-direction: row;
      justify-content: space-between;
      div {
        ul {
          display: flex;
          flex-direction: column;
          height: 450px;

          overflow-x: hidden;
          overflow-y: scroll;
        }
      }
    }
  }
`;
export const UserInfo = styled.div`
  max-width: 600px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  @media (min-width: 767px) {
    flex-direction: row;
  }

  padding: 20px;
  gap: 10px;

  div {
    width: 100%;
    max-width: 450px;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;

    section {
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 10px;
      height: 100%;
      border: 2px solid black;
      border-left: none;
      padding: 0 20px;

      p {
        font-size: ${theme.typography.Heading3.size};
      }
    }
    div {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      width: 100px;

      button {
      }
    }
  }

  img {
    min-width: 100px;
    min-height: 100px;
    background-color: black;
    border-radius: 200px;
    border: 8px solid ${theme.colors.primary};
  }

  @media (min-width: 1024px) {
    max-width: none;

    div {
      max-width: none;
    }
  }
`;

export const ProfileItemsCard = styled.li`
  display: block;
  min-width: 150px;
  min-height: 200px;
  background-color: #e0f2ff;
  border-top: 5px solid black;
  border-bottom: 5px solid black;
  border-left: 1px solid black;
  border-right: 1px solid black;
  border-radius: 10px;

  img {
    width: 100%;
    height: 130px;
    max-height: 200px;
    object-fit: contain;
    padding-left: 20px;
  }

  div > p {
    display: -webkit-box;
    text-overflow: ellipsis;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }

  @media (min-width: 1024px) {
    width: 400px;
    min-width: unset;
    min-height: 100px;

    display: flex;

    img {
      width: 100px;
      height: 100%;
      max-height: unset;
    }
  }
`;
export const BackgroundDash = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 40%;
`;
