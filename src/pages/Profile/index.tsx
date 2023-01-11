import { useContext } from "react";
import Header from "../../components/Header";
import { LoginRegisterContext } from "../../contexts/contexLoginRegister";
import { ProfileContainer, ProfileItemsCard, UserInfo } from "./styles";

const Profile = () => {
  const { user } = useContext(LoginRegisterContext);

  console.log(user);

  return (
    <div>
      <Header />
      <ProfileContainer>
        <UserInfo>
          <img src={user?.avatar} alt="user avatar" />
          <div>
            <section>
              <p>Nome: {user?.name}</p>
              <p>Email: {user?.email}</p>
              <p>Idade: {user?.age}</p>
            </section>
            <button>Botão editar</button>
          </div>
        </UserInfo>
        <section>
          <div>
            <h2>Coleção</h2>
            <ul>
              {user?.myCollection?.map((collection, index) => (
                <ProfileItemsCard>
                  {" "}
                  <img src={collection.image} alt="avatar collection" />{" "}
                  <div>
                    <h2>{collection.title}</h2> <div className="divDescriptionCollection"><p>{collection.description}</p></div>
                  </div>
                </ProfileItemsCard>
              ))}
            </ul>
          </div>
          <div>
            <h2>Seguidores</h2>
            <ul>
              {user?.followed?.map((post, index) => (
                <ProfileItemsCard>
                  {" "}
                  <img src={post.avatar} alt="avatar collection" />{" "}
                  <div>
                    <h2>{post.name}</h2> <p>{post.email}</p>
                  </div>
                </ProfileItemsCard>
              ))}
            </ul>
          </div>
        </section>
      </ProfileContainer>
    </div>
  );
};

export default Profile;
