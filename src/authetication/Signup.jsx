// Signup.jsx
import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom'; 

const Signup = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    mobileNumber:''
  });
const navigate=useNavigate();
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem('email',formData.email);
    localStorage.setItem('password',formData.password);
    localStorage.setItem('username',formData.username);
    navigate('/');
    console.log('Signup form submitted:', formData);
  };

  return (
    
    <div className="auth-container mb-5 mt-5">
      <form className="auth-form" onSubmit={handleSubmit}>
      <img
          src="/images/instagram_font.png"
          alt="instagram"
          className="mb-0 img-fluid font-img"/>
        <h5 className="mb-4 mt-3 text-muted">Sign up to see photos and videos from your friends.</h5>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">
            Username
          </label>
          <input
            type="text"
            className="form-control"
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
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
        <div className="mb-3">
          <label htmlFor="mobileNumber" className="form-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="form-control"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          Sign Up
        </button>
        <p className="mt-3">
          Already have an account? <Link to="/">Log in</Link>
        </p>
      </form>
    </div>
    
  );
};

export default Signup;
