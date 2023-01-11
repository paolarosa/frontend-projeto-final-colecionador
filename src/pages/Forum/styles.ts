import styled from "styled-components";
import { theme } from "../../styles/theme";
import image from "../../assets/background.png";

export const StyledForum = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100%;

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
      width: 50%;
      display: flex;
      flex-direction: column;

      .headerForumPage {
        display: flex;
        flex-direction: row;
        gap: 20px;
        font-size: ${theme.typography.Caption.size};

        .avatarImg {
          display: flex;
          align-items: center;
          justify-content: center;

          img {
            height: 100px;
            width: 100px;
            border: 6px solid ${theme.colors.primary};
            border-radius: 50px;
            background: white;
          }
        }
        .userCard {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          padding: 10px;
          border: 2px solid ${theme.colors.black};
          width: 100%;
          background: white;
          box-shadow: 2px 2px 5px #868e96, 0px 2px 5px 0px #868e96;
        }
      }
      .inputsStyles {
        width: 100%;
      }
    }

    .listAllUsers {
      width: 35%;
      height: 360px;
      overflow-y: auto;
      background: ${theme.colors.grey0};
      border: 2px solid black;
      box-shadow: 2px -2px 5px #868e96, -2px 0px 5px 0px #868e96;

      ul {
        width: 100%;
        font-size: 10px;
        display: flex;
        flex-direction: column;
        gap: 10px;
      }
      li {
        display: flex;
        margin: 10px 0 0 10px;
        gap: 20px;
        align-items: center;
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

    .userCardName {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

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

    .ulForumDiv {
      width: 100%;
      height: 100%;
      min-height: 400px;
      color: white;
      /* background-color: ${theme.colors.black}; */
      border-radius: 10px;
      /* padding: 20px; */

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        height: 100%;
        min-height: 400px;
        overflow-y: auto;
      }

      li {
        display: flex;
        flex-direction: column;
        background-color: #d0ebff;
        border-radius: 10px;
        padding: 10px;
        gap: 10px;
        border-left: 2px solid black;
        border-right: 2px solid black;

        .headerPostMessageDiv {
          display: flex;
          justify-content: space-between;
          min-width: 100%;
          align-items: center;
          /* background-color: ${theme.colors.grey1}; */
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
              padding: 5px;
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
  }
  /* .listAllUsers {
    width: 300px;
    height: 300px;
    background: blue;

    li {
      height: 50px;
      width: 50px;
    }
    img {
      height: 50px;
      width: 50px;
      border-radius: 30px;
      padding: 5px;
    }

    ul {
      display: flex;
      flex-direction: column;
      gap: 10px;
      width: 200px;
      max-height: 250px;
      overflow-y: auto;
    }

    li {
      display: flex;
      flex-direction: row;
      font-size: ${theme.typography.Caption.size};
      font-weight: ${theme.typography.Caption.weight};
      background-color: ${theme.colors.grey1};
      border-radius: 10px;

      .aboutAll {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 100%;
        padding: 10px;
        gap: 10px;
      }
    }
  } */

  .uncoloredHeart {
    color: black;
  }

  .coloredHeart {
    color: red;
  }
`;
export const BackgroundDash = styled.div`
  width: 100vw;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: -1;
  background-image: url(${image});
  background-size: cover;
  background-repeat: no-repeat;
  opacity: 30%;
`;
