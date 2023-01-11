import { useContext, useEffect } from "react";
import { LoginRegisterContext } from "../../../contexts/contexLoginRegister";
import { DashboardContext } from "../../../contexts/contextDashboard";
import StyledAdmUsers from "./styles";

const AdmUsers = () => {
  const { forumMessagesRequest, posts, user, getAllUsersRequest, allUsers } =
    useContext(LoginRegisterContext);
  
    const { cards } =
      useContext(DashboardContext);
  
  console.log(cards);
  

  useEffect(() => {
    getAllUsersRequest();
  }, []);

  return (
    <StyledAdmUsers>
      <div>
        <ul>
          <div>
            <h1>Collectors List</h1>
            counter:
          </div>
          {allUsers?.map((singleUser, index) => (
            <li key={index}>
              <div className="mainAdmUserDiv">
                <div>
                  <img src={singleUser.avatar} alt="user avatar" />
                </div>
                <div className="aboutAll">
                  <div>
                    <h3>userID:</h3>
                    <h3>{singleUser.id}</h3>
                  </div>
                  <div>
                    <h3>userName:</h3>
                    <h3>{singleUser.name}</h3>
                  </div>
                  <div>
                    <h3>Email:</h3>
                    <h3>{singleUser.email}</h3>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </StyledAdmUsers>
  );
};

export default AdmUsers;
