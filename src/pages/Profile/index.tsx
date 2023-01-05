import Header from "../../components/Header"
import { ProfileContainer, ProfileItemsCard, UserInfo } from "./styles"

{/* <p>{userData?.name ? userData.name : "Erro: nome"}</p>
<p>{userData?.email ? userData.email : "Erro: email"}</p>
<p>{userData?.age ? userData.age : "Erro: age"}</p> */}


const Profile = () => {

    return (
        <div>
        <Header />
        <ProfileContainer>
            <UserInfo>
                <img />
                <div>
                    <section>
                        <p>Nome: placeholder</p>
                        <p>Email: placeholder</p>
                        <p>Idade: placeholder</p>
                    </section>
                    <button>Botão editar</button>
                </div>
            </UserInfo>
            <section>
                <div>
                    <h2>Coleção</h2>
                    <ul>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                    </ul>
                </div>
                <div>
                    <h2>Conquista</h2>
                    <ul>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard> 
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                        <ProfileItemsCard><img /><div><h2>Nome Template</h2> <p>Descrição template</p></div></ProfileItemsCard>
                    </ul>
                </div>
            </section>
        </ProfileContainer>
        </div>
    )
}

export default Profile

