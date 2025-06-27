import { Link } from "react-router-dom";
import SignOut from '../components/SignOut';

function Dashboard() {
    return (
        <>
    <h1>Welcome to the Dashboard</h1>
    <Link to = "/chat">Chat</Link>
      <SignOut />  
    </>
    )
}

export default Dashboard;