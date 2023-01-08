import Header from "../../components/Header";
import { StyledForum } from "./styles";
import { FaPencilAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { Input } from "../../styles/Input";
import { TextareaStyled } from "../../styles/textarea/style";
import { StyledButton } from "../../styles/Button";
import { User } from "../../types";

const Forum = () => {
  const { forumMessagesRequest, posts, user, getAllUsersRequest, allUsers } =
    useContext(LoginRegisterContext);

  useEffect(() => {
    forumMessagesRequest();
    getAllUsersRequest();
  }, []);

  return (
    <div>
      <Header />
      <StyledForum>
        <div className="headerForumPage">
          <div className="avatarImg">
            <img src={user?.avatar} alt="user avatar" />
          </div>
          <div className="userCard">
            <div className="userCardInfo">
              <div>
                <h2>Nome:</h2>
                <h3>{user?.name}</h3>
              </div>
              <div>
                <h2>Email:</h2>
                <h3>{user?.email}</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="forumUserMessageDiv">
          <form>
            <Input className="input" label="Title" type="text" placeholder="" />
            <div className="textareaDiv">
              <label className="label">Message</label>
              <textarea
                className="userTextarea"
                name="message"
                id="message"
                cols={30}
                rows={14}
              ></textarea>
              {/* <TextareaStyled id="message" cols="30" rows="10" /> */}
            </div>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="submit"
            >
              Enviar
            </StyledButton>
          </form>
        </div>

        <div className="forumMessagePostsDiv">
          <h2>Posts</h2>
          <div className="forumContainer">
            <div>
              <ul>
                {posts?.map((post, index) => (
                  <li key={index}>
                    <div className="divPostMessage">
                      <img src={user?.avatar} alt="" />
                      <h2>{user?.name}</h2>
                    </div>
                    <div>
                      <h2>{post.title}</h2>
                      <p>{post.message}</p>
                    </div>
                    
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <ul>
                {allUsers?.map((all, index) => (
                  <li key={index}>
                    <img src={all.avatar} alt="user avatar" />
                    <div className="aboutAll">
                      <h2>{all.name}</h2>
                      {/* <p>{all.email}</p> */}
                      <StyledButton buttonSize="small" buttonStyle="primary">
                        Add
                      </StyledButton>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </StyledForum>
    </div>
  );
};

export default Forum;
