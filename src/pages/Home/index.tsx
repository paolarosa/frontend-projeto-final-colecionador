import { Link } from "react-router-dom"
import { PageHome, DivDogBallon } from "./styles"
import background from "../../assets/background.png"
import collector2 from "../../assets/collector2.png"

const Home = () => {

    return (
        <PageHome>
         {/* <Header /> */}
         <DivDogBallon>
                <div className="billBoard"></div>
                    <div className="baloonText">
                    Bem vindo Colecionador!
                    vamos agora organizar os seus itens especiais! 
                    </div>
                <Link to="/login" className="button">Entrar</Link>
                <img className="collector2" alt="" src={collector2} />
        </DivDogBallon>
            <img className="background" alt="" src={background} />
        </PageHome>
    )
}

export default Home