import React, {useState} from 'react'
import {useNavigate,Link} from 'react-router-dom'
import './Signup.css';

const Signup = () => {
  const navigate= useNavigate()
  const [UserData, setUserData] = useState({
    username: '',
    email: '',
    
    password: ''
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    const {name, value} = e.target;
   
    setUserData({
        ...UserData, [name] : value
    })
    
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    const validationErrors = {}
    if(!UserData.username.trim()) {
        validationErrors.username = "username is required"
    }

    if(!UserData.email.trim()) {
        validationErrors.email = "email is required"
    } else if(!/\S+@\S+\.\S+/.test(UserData.email)){
        validationErrors.email = "email is not valid"
    }

    if(!UserData.password.trim()) {
        validationErrors.password = "password is required"
    } else if(UserData.password.length < 6){
        validationErrors.password = "password should be at least 6 char"
    }
    

    

    setErrors(validationErrors)

    if(Object.keys(validationErrors).length === 0) {
        alert("Form Submitted successfully")
        localStorage.setItem("user", JSON.stringify(UserData));
        navigate("/")


        setUserData({
          username: '',
          email: '',
         
          password: ''
        });
        
    }
  }
  return (
    <div className='signup '>
       <form className='signupform mt-5 text-center' onSubmit={handleSubmit}>
        <img className='mb-4'  src='../images/instagram.png' alt='instagram-logo'/>
        <div>
          <input className='mb-2'
          type="email"
          name="email"
          value={UserData.email}
          autoComplete='off' 
          required 
          onChange={handleChange}  
          placeholder='Mobile number or email'
        
          />
          {errors.email && <span>{errors.email}</span>} 
        </div> 
        <div>
          <input className='mb-2'
          type="text"
          name="username"
          placeholder='Username'
          value={UserData.username}
          autoComplete='off'  
          required
          onChange={handleChange} 
          />
          {errors.username && <span>{errors.username}</span>} 
        </div> 
        <div>
          <input className='mb-2'
          type="password"
          name="password"
          placeholder='Password'
          value={UserData.password}
          autoComplete='off' 
          required 
          onChange={handleChange} 
          />
          {errors.password && <span>{errors.password}</span>}  
        </div>
        <div className="text-center mb-4">
          <button className='btn btn-primary'  type="submit">Signup</button>
        </div>
       </form>
       <div className='linktopage mt-2 text-center justify-content-ceter'>
       <span>
        Have an account? 
        <button className='btn text-primary outline-none fw-bold ' >
          <Link to='/'>Login
          </Link></button> 
       </span>
       </div>

    </div>
  )
}

export default Signup