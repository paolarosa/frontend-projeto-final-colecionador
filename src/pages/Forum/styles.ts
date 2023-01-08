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

    div:nth-child(1) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }

    div:nth-child(2) {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 20px;
    }
  }

  .forumUserMessageDiv {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
    /* border: 1px solid blue; */
    height: 100%;
    gap: 30px;
  }

  .textareaDiv {
    position: relative;
    margin-bottom: 9px;
    height: 100%;

    .label {
      color: ${theme.colors.grey2};
      font-size: 16px;
      font-weight: normal;
      position: absolute;
      pointer-events: none;
      left: 15px;
      top: 11px;
      padding: 0 5px;
      background: ${theme.colors.grey0};
      transition: 0.2s ease all;
      -moz-transition: 0.2s ease all;
      -webkit-transition: 0.2s ease all;
    }

    .userTextarea {
      /* position: relative; */
      font-size: 16px;
      display: block;
      width: 100%;
      height: 140px;
      padding: 20px;
      background: ${theme.colors.grey0};
      color: ${theme.colors.grey4};
      border: 1px solid ${theme.colors.grey0};
      border-radius: 30px;
      box-sizing: border-box;
      &:focus {
        outline: none;
        ~ .label {
          background-color: ${theme.colors.white};
          /* position: relative; */
          top: -8px;
          font-size: 12px;
        }
        background: ${theme.colors.white};
        color: ${theme.colors.grey4};
        border: 1px solid ${theme.colors.grey4};
      }
    }
  }

  .userTextarea {
    border-radius: 30px;
    padding: 20px;
  }

  .forumMessagePostsDiv {
    display: flex;
    flex-direction: column;
    justify-content: left;
    padding: 20px;
    /* border: 1px solid red; */
    height: 100%;
    max-height: fit-content;
    gap: 30px;
  }

  .forumContainer {
    display: flex;
    justify-content: space-between;
    height: 100%;

    div:nth-child(1) {
      /* border: 1px solid blue; */
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

        div:nth-child(1) {
          display: flex;
          align-items: center;
          background-color: ${theme.colors.grey2};
          font-size: ${theme.typography.Caption.size};
          font-weight: ${theme.typography.Caption.weight};
          padding: 0;

          img {
            height: 50px;
            width: 50px;
            border-radius: 30px;
            padding: 5px;
          }
        }

        div:nth-child(2) {
          display: flex;
          flex-direction: column;
          gap: 10px;
          padding: 0 10px;
        }

      }
    }
    div:nth-child(2) {
      /* border: 1px solid green; */
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
        /* border: 1px solid red; */
        background-color: ${theme.colors.grey1};
        border-radius: 10px;

        .aboutAll {
          display: flex;
          align-items: center;
          /* flex-direction: column; */
          justify-content: space-between;
          width: 100%;
          padding: 10px;
          gap: 10px;
        }
      }
    }
  }
`;
