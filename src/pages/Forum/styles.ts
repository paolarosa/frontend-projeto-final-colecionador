import styled from "styled-components";
import { theme } from "../../styles/theme";
import image from "../../assets/background.png";

export const StyledForum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  .userCard {
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    gap: 20px;
    padding: 50px 10px;
    border: none;

    width: 100%;
    max-width: 1024px;
    margin-top: 80px;
    height: 200px;
    background-color: transparent;
    border-radius: 15px;
    .banner {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 80%;
      z-index: -1;
      img {
        width: 100%;
      }
    }
    .avatarImg {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: -50px;

      img {
        height: 100px;
        width: 100px;
        border: 4px solid ${theme.colors.primary};
        border-radius: 50px;
        background: white;
        -webkit-box-shadow: 0px 4px 5px 4px rgba(0, 0, 0, 0.24);
        box-shadow: 0px 4px 5px 4px rgba(0, 0, 0, 0.16);
      }
    }

    .userCardName {
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      top: 60px;
      font-weight: 600;
      text-shadow: 1px 1px 0px white;
    }
  }

  .container {
    width: 100%;
    max-width: 1024px;
    display: flex;
    flex-direction: column;
  }

  .infosInputChat {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .divInfosInput {
      width: 60%;
      display: flex;
      flex-direction: column;

      .headerForumPage {
        display: flex;
        flex-direction: row;
        gap: 30px;
        font-size: ${theme.typography.Caption.size};
      }
      .inputsStyles {
        width: 100%;
      }
    }

    .listAllUsers {
      width: 35%;
      height: 360px;
      background: ${theme.colors.grey0};
      border: 2px solid black;
      margin-top: 20px;

      ul {
        height: 100%;
        overflow-y: auto;
        width: 100%;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        /* gap: 10px; */
      }
      *::-webkit-scrollbar {
        width: 12px;
      }
      *::-webkit-scrollbar-track {
        background: ${theme.colors.grey0};
      }
      *::-webkit-scrollbar-thumb {
        background-color: ${theme.colors.black};
        border-radius: 10px;
        border: 3px solid ${theme.colors.white};
      }

      li {
        display: flex;
        /* margin-top: 10px; */
        gap: 20px;
        align-items: center;
        width: 100%;
        padding: 12px 10px;

        background: ${theme.colors.grey0};
      }
      img {
        height: 50px;
        width: 50px;
        border: 2px solid ${theme.colors.secundary};
        border-radius: 50px;
        background: white;
      }
      .aboutAll {
        width: 100%;
        display: flex;
        gap: 10px;
        align-items: center;
        justify-content: space-between;
        margin-right: 10px;
      }
    }

    .inputsStyles {
      margin-top: 20px;
    }
  }

  .userCardInfo {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    .userCardMail {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }

  .avatar {
    width: 40px;
    height: 40px;
  }

  .forumMessagePostsDiv {
    display: flex;
    flex-direction: column;
    justify-content: left;
    max-height: fit-content;
    gap: 10px;
    min-height: 400px;
    margin-top: 40px;
  }

  .forumContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;
    min-height: 400px;
    width: 100%;
    margin-bottom: 200px;

    .ulForumDiv {
      width: 100%;
      height: 100%;
      min-height: 400px;
      color: white;
      border-radius: 10px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
        min-height: 400px;
        overflow-y: auto;
        border-top: 4px solid black;
        border-bottom: 4px solid black;
        border-radius: 10px;
      }

      li {
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.secondary3};
        border-radius: 10px;
        padding: 10px;
        gap: 10px;
        border-left: 1px solid black;
        border-right: 1px solid black;

        /* border-top: 1px solid black; */

        .headerPostMessageDiv {
          display: flex;
          justify-content: space-between;
          min-width: 100%;
          align-items: center;
          font-size: ${theme.typography.Caption.size};
          font-weight: ${theme.typography.Caption.weight};
          color: ${theme.colors.black};

          .divPostMessage {
            display: flex;
            align-items: center;

            img {
              height: 50px;
              width: 50px;
              border-radius: 30px;
              border: 2px solid ${theme.colors.primary};
              margin-right: 20px;
            }
          }

          .divLikeButton {
            width: 60px;

            button {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 40px;
              height: 40px;
              font-size: 20px;
            }
          }
        }
        .bottomPostMessageDiv {
          display: flex;
          flex-direction: column;
          width: 100%;
          gap: 10px;
          padding: 0 10px;
          color: ${theme.colors.black};
          font-size: ${theme.typography.Reduced.size};
        }
      }
    }
  }
  @media (max-width: 1024px) {
    .infosInputChat {
      display: flex;
      flex-direction: column;
      width: 100%;
      .divInfosInput {
        width: 95%;
      }
      .userCard {
        width: 95%;
      }
      .listAllUsers {
        width: 98%;
        margin-top: 20px;
        height: 200px;
      }
    }
    .userCard {
      background-color: ${theme.colors.white};
      height: 50px;
      border: 2px solid;
      .banner {
        display: none;
      }
    }
  }

  .uncoloredHeart {
    color: black;
  }

  .coloredHeart {
    color: red;
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
  opacity: 50%;
`;
