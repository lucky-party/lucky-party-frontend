import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './views/Mainpage';
import Signup from './views/Sign/Signup';
import Signin from './views/Sign/Signin';
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/sginup" element={<Signup />} />
          <Route path="/sginin" element={<Signin />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
