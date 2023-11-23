import { Avatar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './profile.css';
import Sidenavbar from '../Sidenavbar';

const Profile = () => {
  const navigate = useNavigate();
  const loguser = JSON.parse(localStorage.getItem("user"));

  const handleLogout = () => {
    navigate("/login");
  };

  return (
    <div className="profile-container">
      <div className="row">
        <div className="col-lg-2">
          <div className='home-navigation'>
            <Sidenavbar />
          </div>
        </div>
        <div className="col-lg-10">
          <div className="profile-content">
            <div className="profile-header">
              <Avatar className='m-4' />
              <div className="profile-info">
                <p className="usernameProfile m-4 fs-4">{loguser.username}</p>
                <div>
                  <button className=' btn btn-danger m-4' onClick={handleLogout}>Logout</button>
                </div>
              </div>
            </div>
            <div className="profile-stats mt-1 m-5 d-flex flex-row align-items-center justify-content-start">
              <div className="stats-item">
                <p className="fw-bold fs-4 text-center">0</p>
                <p className="fs-4">posts</p>
              </div>
              <div className="stats-item">
                <p className="fw-bold fs-4 text-center">12</p>
                <p className="fs-4">followers</p>
              </div>
              <div className="stats-item">
                <p className="fw-bold fs-4 text-center">30</p>
                <p className="fs-4">following</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
