import { Link } from "react-router-dom"

const Home = () => {

    return (
        <>
        <p>Home</p>
        <Link to="/login">Login Page</Link>

        <Link to="/register">Page Register</Link>
        </>
    )
}

export default Home