import { Link } from "react-router-dom";
import SignOut from '../components/SignOut';
import '../styles/Dashboard.css';

function Dashboard() {
    return (
       <div className="dashboard-container">
  <h1>Welcome to the Dashboard</h1>

  <div className="dashboard-buttons">
    <Link to="/chat" className="chat-link">Chat</Link>
    <SignOut />
  </div>

  <div className="about-section">
    <h2>About This App</h2>
    <p>
      This platform offers AI-powered therapy chat, secure authentication, and a seamless user experience.
      You can access real-time conversations, manage your profile, and interact with intelligent agents to support mental health.
    </p>
  </div>
</div>

    );
}

export default Dashboard;
