import React from 'react';
import './Profile.css';

const Profile = () =>{
    return (
      <div className='profile-container'>

        <div className='header-name'>
          <h4>Manage Your Account Settings</h4>
        </div>

        <div className='card'>
          <div className='card-header'>
            <h2>
              Personal Settings
            </h2>
          </div>

          <form className='card-content'>
            <div className='content-one'>
              <h3>Full Name:</h3>
              <input type="text" name=""  />
            </div>

            <div className='content-two'>
              <h3>Email Address:</h3>
              <input type="email" name="" />
            </div>

            <div className='content-three'>
              <h3>Your Timezone:</h3>
              <input type="time" name=""  />
            </div>

            <div>
              <input type="submit" value="Save Details" className='save-button'/>
            </div>

          </form>

      </div>
      </div>
      )
}

export default Profile