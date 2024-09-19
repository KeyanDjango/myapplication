import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home';
import NavBar from './Navbar/NavBar';
import Profile from './Pages/Profile'

const App = () => {
  return (
    <div>
      <BrowserRouter>
         <NavBar />
        <Routes>
          <Route  path="/" element={<Home/>}/>
          <Route path="/Profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;