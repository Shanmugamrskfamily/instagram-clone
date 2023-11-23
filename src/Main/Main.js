import React, { useState } from 'react'
import Login from './Login'
import './Main.css';
import Signup from './Signup';


const Main = () => {
    const [action,setAction]= useState("login")

    const handleClick = () => {
        setAction(action === 'login' ? 'signup' : 'login')

    }
  return (
    <div className='main'>
        <div className="row gx-0">
            <div className="col-md-6  main-img d-flex align-items-start justify-content-center">
                <img className='instaimage w-50 m-4' src='../images/logo192.png' alt='insta-image' />
            </div>
            <div className="col-md-6  main-page ms-auto" >
                
                   
                {action === 'login' ? <Login/> : <Signup/> }
               
               
            </div>
        </div>
    </div>
  )
}

export default Main