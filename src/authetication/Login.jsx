// Login.jsx

import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom'; 

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const navigate=useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailChcek=localStorage.getItem('email');
    const passwordCheck=localStorage.getItem('password');
    if(emailChcek==formData.email& passwordCheck==formData.password)
    {
        alert('Successfully Logged in!')
        navigate('/dashboard');
    }
    else
    {
        alert('Invalid Email or Password');
    }
  };

  return (
    <div className="auth-container mt-5">
      <form className="auth-form" onSubmit={handleSubmit}>
      <img
          src="/images/instagram_font.png"
          alt="instagram"
          className="mb-0 img-fluid font-img"/>
        <div className="mb-3 mt-5">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Log In
        </button>
        <p className="mt-3">
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
    
  );
};

export default Login;
