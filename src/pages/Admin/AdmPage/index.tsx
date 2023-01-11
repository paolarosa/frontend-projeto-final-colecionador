import StyledAdminPage from "./styles";
import background from "../../../assets/background.png";
import { StyledButton } from "../../../styles/Button";
import LOGO4 from "../../../assets/LOGO4.png";
import AdmColections from "../AdmColections";
import AdmUsers from "../AdmUsers";
import { MdOutlineConstruction } from "react-icons/md";
import { useState } from "react";
import UnderConstruction from "../AdmUnderConstruction";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const AdminPage = () => {
  const [control, setControl] = useState("");

  const navigate = useNavigate();

  return (
    <StyledAdminPage>
      <aside className="admControlMenu">
        <div className="admControlButtonsMenu">
          <div className="upButtons">
            <div className="admControlLogo">
              <Link to={"/dashboard"}>
                <img
                  className="logo"
                  src={LOGO4}
                  alt="logo"
                  onClick={() => {
                    navigate("/dashboard");
                  }}
                />
              </Link>
            </div>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              onClick={() => setControl("Billboard")}
            >
              Edit Billboard
            </StyledButton>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              onClick={() => setControl("Users")}
            >
              Users
            </StyledButton>

            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              onClick={() => setControl("Colections")}
            >
              Colections
            </StyledButton>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              className="textUncerConstruction"
              onClick={() => setControl("Forum")}
            >
              Forum <MdOutlineConstruction className="underConstruction" />
            </StyledButton>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              className="textUncerConstruction"
              onClick={() => setControl("Archivements")}
            >
              Archivements{" "}
              <MdOutlineConstruction className="underConstruction" />
            </StyledButton>
          </div>

          <div className="bottomButtons">
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              onClick={() => {
                localStorage.removeItem("Token");
                navigate("/login");
              }}
            >
              Logout
            </StyledButton>
          </div>
        </div>
      </aside>

      <section className="admBoardMenu">
        <div>
          <img className="background" alt="" src={background} />

          {control == "Users" ? <AdmUsers /> : null}
          {control == "Colections" ? <AdmColections /> : null}
          {control == "Forum" ? <UnderConstruction /> : null}
          {control == "Archivements" ? <UnderConstruction /> : null}
        </div>
      </section>
    </StyledAdminPage>
  );
};

export default AdminPage;
