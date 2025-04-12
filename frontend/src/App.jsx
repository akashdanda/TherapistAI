import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import RegisterUser  from './components/Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './components/SignIn';


function App() {

  return (
    <div>
      <BrowserRouter>
      <Routes>
      <Route path = "/register" element ={<RegisterUser />} />
      <Route path = "/signIn" element ={<SignIn />} />
      </Routes>
    </BrowserRouter>
 
    </div>
    
  );
}

export default App
