import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './App.css'
import Signup from './authetication/Signup';
import Login from './authetication/Login';

function App() {


  return (
    <div className='App'>
    <Router>
      
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
        
      </Routes>
    </Router>
    </div>
  )
}

export default App
