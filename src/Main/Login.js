import React,{useState} from 'react'

import './Login.css';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate= useNavigate()
    const [UserData, setUserData] = useState({
        
        email: '',
        password: ''
      })
      const [error, setError] = useState(null);
    
      const handleChange = (e) => {
        const {name, value} = e.target;
       
        setUserData({
            ...UserData, [name] : value
        })
        
      }
    
      const handleLoginSubmit = (e) => {
        e.preventDefault()
        const loguser = JSON.parse(localStorage.getItem("user"))
        if(UserData.email === loguser.email && UserData.password === loguser.password)
        {
          alert("Loggedin successfully")
          setError(null)
          setUserData({
            
            email: '',
            password: ''
          });
          navigate('/home')
        }
        else{
          setError('Sorry, your email or password was incorrect.')
          alert("wrong email or password")
        }
      }
  return (
    <div className='container login '>
      
    <form className='loginform mt-5 mx-auto text-center' onSubmit={handleLoginSubmit}>
      <img className='mb-4'  src='../images/instagram.png' alt='instagram-logo'/>
    <div >
     
      <input className='  mb-2'
        type="email"
        name="email"
        value={UserData.email}
        placeholder='Email'
        autoComplete='off' 
        required
        onChange={handleChange} 
      />
        
    </div>
    <div>
     
      <input className='mb-2'
        type="password"
        name="password"
        placeholder='Password'
        required
        value={UserData.password }
        onChange={handleChange} 
      />
         
    </div>
    <div className="text-center mb-4">
      <button className='btn btn-primary'  type="submit">Login</button>
    </div>
    <p style={{color: 'red'}}>{error}</p>
    </form>
    <div className='linktospage mt-2 mx-auto text-center '>
       <span>
        Don't have an account? 
        <button className='btn text-primary outline-none fw-bold ' >
        <Link to = '/signup'>Signup</Link></button> 
       </span>
       </div>
    </div>
  )
}

export default Login