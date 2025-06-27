import { Link } from "react-router-dom";

function Home() {
    return (
        <>
        <h1>This is the Home Page</h1>
        <Link to = "/login">Login/Register</Link>
        </>
    );
}

export default Home;