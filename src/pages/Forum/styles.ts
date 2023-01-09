import styled from "styled-components";
import { theme } from "../../styles/theme";

export const StyledForum = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 40px;

  .headerForumPage {
    display: flex;
    flex-direction: row;
    gap: 20px;
  }

  .avatarImg {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 100px;
      width: 100px;
      border: 2px solid ${theme.colors.primary};
      border-radius: 50px;
    }
  }

  .userCard {
    display: flex;
    justify-content: space-between;
    gap: 20px;
    padding: 10px;
    border: 1px solid red;
    border-radius: 30px;
    width: 100%;
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

  .forumMessagePostsDiv {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
    height: 100%;
    max-height: fit-content;
    gap: 30px;
  }

  .forumContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;

    .ulForumDiv {
      width: 65%;
      color: white;
      background-color: ${theme.colors.grey1};
      border-radius: 10px;
      padding: 20px;

      ul {
        display: flex;
        flex-direction: column;
        gap: 10px;
        max-height: 200px;
        overflow-y: auto;
      }

      li {
        display: flex;
        flex-direction: column;
        background-color: ${theme.colors.grey2};
        border-radius: 10px;
        padding: 10px;
        gap: 10px;

        .headerPostMessageDiv {
          display: flex;
          justify-content: space-between;
          min-width: 100%;
          align-items: center;
          background-color: ${theme.colors.grey2};
          font-size: ${theme.typography.Caption.size};
          font-weight: ${theme.typography.Caption.weight};
          /* border: 1px solid blue; */

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
              /* border: 1px solid red; */
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
        }
      }
    }

    .listAllUsers {
      width: 30%;

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
    }
  }

  .uncoloredHeart {
    color: black;
  }

  .coloredHeart {
    color: red;
  }
`;
