import Header from "../../components/Header";
import { StyledForum } from "./styles";
import { useContext, useEffect, useState } from "react";
import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { StyledButton } from "../../styles/Button";
import { AiFillHeart } from "react-icons/ai";
import { PostForm } from "../../components/Forms/ForumMessage";
// import ExpenseDate, { ShowDate, ShowNewDate } from "../../styles/Date";

const Forum = () => {
  // const [favorites, setFavorites] = useState([]);
  const [heart, setHeart] = useState(false)

  const { forumMessagesRequest, posts, user, getAllUsersRequest, allUsers } =
    useContext(LoginRegisterContext);

  useEffect(() => {
    forumMessagesRequest();
    getAllUsersRequest();
  }, []);

  // const updateFavorites = (name) => {
  //   const updateFavorites = [...favorites];
  //   const favoriteIndex = favorites.indexOf(name);
  //   if (favoriteIndex > 0) {
  //     updateFavorites.slice(favoriteIndex, 1);
  //   } else {
  //     updateFavorites.push(name);
  //   }
  //   setFavorites(updateFavorites);
  // };


  // const updateHeart = () => {
  //   const updateHeart = [...heart];
  //   const heartIndex = favorites.indexOf
  // }

  const onHeartClick = () => {
    // updateFavorites(post?.title)
    console.log("favorita esse aqui!");
    setHeart(true)
    
  };



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
              <div className="userCardName">
                <h2>Nome:</h2>
                <h3>{user?.name}</h3>
              </div>
              <div className="userCardMail">
                <h2>Email:</h2>
                <h3>{user?.email}</h3>
              </div>
            </div>
            {/* <p>following: {updateFavorites.length}</p> */}
          </div>
        </div>

        <div>
          <PostForm />
        </div>

        <div className="forumMessagePostsDiv">
          <h2>Posts</h2>
          <div className="forumContainer">
            <div className="ulForumDiv">
              <ul>
                {posts?.map((post, index) => (
                  <li key={index}>
                    <div className="headerPostMessageDiv">
                      <div className="divPostMessage">
                        {/* {allUsers.filter((user) => user.id === userId )} */}
                        <img src={user?.avatar} alt="" />
                        <h2>{user?.name}</h2>

                          {/* <ShowNewDate /> */}

                      </div>
                      <div className="divLikeButton">
                        <button className="likeButton" onClick={onHeartClick}>
                          {!heart ? <AiFillHeart className="uncoloredHeart"/> : <AiFillHeart className="coloredHeart"/> }
                        </button>
                      </div>
                    </div>
                    <div className="bottomPostMessageDiv">
                      <h2>{post.title}</h2>
                      <p>{post.message}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="listAllUsers">
              <ul>
                {allUsers?.map((all, index) => (
                  <li key={index}>
                    <img src={all.avatar} alt="user avatar" />
                    <div className="aboutAll">
                      <h2>{all.name}</h2>
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
