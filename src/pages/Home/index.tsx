import { Link } from "react-router-dom"
// import Header from "../../components/Header"

const Home = () => {

    return (
        <>
        {/* <Header /> */}
        <p>Home</p>
        <Link to="/login">Login Page</Link>

        <Link to="/register">Page Register</Link>
        </>
    )
}

export default Home