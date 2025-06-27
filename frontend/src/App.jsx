import { useState, useEffect } from 'react'
import Auth from './components/Auth'
import {Routes, Route, useNavigate, Navigate, BrowserRouter} from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import TherapyChat from './components/TherapyChat';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './firebase';
function App() {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, setUser);
    return () => unsubscribe();
  }, []);
  const handleAuth = (user) => {
    console.log(user);
  }
  return (
    <>
    <Routes>
      <Route path = "/" element = {<Home />} />
      <Route path ="/login" element = {<Auth />}/>
      <Route path="/chat" element={
          user ? <TherapyChat /> : <Navigate to="/login" replace />
        } />
        <Route path="/dashboard" element={
          user ? <Dashboard /> : <Navigate to="/login" replace />
        } />
    </Routes>
    
    </>
  )
}

export default App
