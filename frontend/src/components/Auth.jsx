import React, {useState} from 'react'
import {auth} from '../firebase'
import {signInWithEmailAndPassword, createUserWithEmailAndPassword} from 'firebase/auth'
import {getAuth, signInWithPopup, GoogleAuthProvider, signOut} from "firebase/auth";
const provider = new GoogleAuthProvider();
import {useNavigate} from 'react-router-dom';

function Auth({onAuth}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isLogin, setIsLogin] = useState(true)
    const navigate = useNavigate();
    const handleSubmit = () => {
        try {
            let userCredential;
            if(isLogin) {
                userCredential = signInWithEmailAndPassword(auth, email, password);
            
            } else {
                userCredential = createUserWithEmailAndPassword(auth, email, password);
            }
            if (typeof onAuth === 'function') onAuth(userCredential.user);
            navigate('/dashboard');
        } catch(err) {
            alert(err.message);
        }
    }

    const handleGoogleSign = async() => {
        try {
            const result = await signInWithPopup(auth, provider);
            if (typeof onAuth === 'function') onAuth(result.user);
            navigate('/dashboard');
        } catch (err) {
            alert(err.message);
        }
    }
    return (
        <div>
            <h2>{isLogin ? 'Login' : 'Register'}</h2>
            <input type="email"
                    placeholder='Email'
                    onChange={e => setEmail(e.target.value)}/>
            <br />
            <input type = 'password'
                    placeholder='Password'
                    onChange ={e => setPassword(e.target.value)}/>
            <button onClick={handleSubmit}>
                {isLogin ? 'Login' : 'Register'}
            </button>
            <button onClick = {handleGoogleSign}> Sign In With Google</button>
            <br />
            <p onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Click here to create an account' : 'Already have an account? Click here to Login'}
    </p>
        </div>
    )

}



export default Auth;