import { Link } from "react-router-dom";
import '../styles/Home.css'

function Home() {
    return (
        <div className="home-container">
            <h1 className="home-title">Welcome to Therapist.AI</h1>
            <p className="home-description">
                Your personal AI-powered mental wellness companion.
            </p>
            <Link to="/login" className="home-button">
                Login / Register
            </Link>
        </div>
    );
}

export default Home;
