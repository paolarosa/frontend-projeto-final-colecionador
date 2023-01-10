import StyledAdminPage from "./styles";
import background from "../../assets/background.png";
import { StyledButton } from "../../styles/Button";
import LOGO4 from "../../assets/LOGO4.png";
import AdmColections from "./AdmColections";
import AdmUsers from "./AdmUsers";
import { MdOutlineConstruction } from 'react-icons/md';

const AdminPage = () => {

  return (
    <StyledAdminPage>
      <aside className="admControlMenu">
        <div className="admControlButtonsMenu">
          <div className="upButtons">
            <div className="admControlLogo">
              <img className="logo" src={LOGO4} alt="logo" />
            </div>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
            >
              Edit Billboard
            </StyledButton>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
            >
              Users
            </StyledButton>

            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
            >
              Colections
            </StyledButton>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              className="textUncerConstruction"
            >
              Forum <MdOutlineConstruction className="underConstruction"/>
            </StyledButton>
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
              className="textUncerConstruction"
            >
              Archivements <MdOutlineConstruction className="underConstruction"/>
            </StyledButton>
          </div>

          <div className="bottomButtons">
            <StyledButton
              buttonSize="default"
              buttonStyle="primary"
              type="button"
            >
              Logout
            </StyledButton>
          </div>
        </div>
      </aside>

      <section className="admBoardMenu">
        <div>
          <img className="background" alt="" src={background} />

          {/* <AdmUsers /> */}
          <AdmColections />

        </div>
      </section>
    </StyledAdminPage>
  );
};

export default AdminPage;
