import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

function SignOut() {
    const navigate = useNavigate()

    const handleSignOut = async() => {
        try {
            await signOut(auth)
            navigate('/login')
        } catch (err){
            alert("error signing out")
            console.error(err)
        }
    };
    return (
        <button onClick={handleSignOut}>
            Sign Out
        </button>
    )
}

export default SignOut