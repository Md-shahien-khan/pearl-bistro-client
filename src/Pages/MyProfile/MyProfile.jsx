import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import profileBg from '../../assets/menu/myProfile.jpg';

const MyProfile = () => {
  const { user } = useContext(AuthContext); 
  const navigate = useNavigate();

  if (!user) {
    return <p>Loading user profile...</p>;  
  }
  
  const handleUpdateClick = () => {
    navigate('/');  
  };

  return (
    <div
      className="min-h-screen flex justify-center items-center"
      style={{ backgroundImage: `url(${profileBg})`, backgroundSize: 'cover' }}
    >
      <div
        className="bg-white bg-opacity-40 backdrop-blur-lg p-6 rounded-xl shadow-lg"
        style={{
          width: '80%',
          maxWidth: '500px',
        }}
      >
        {/* User profile info */}
        <h2 className="text-xl md:text-3xl font-bold text-yellow-800 text-center">Welcome, {user.displayName || "User"}!</h2>
        <div className="profile-info mt-6 text-white">
          <div className='text-center text-black text-xl mb-1'>Name: {user.displayName || "N/A"}</div>
          <div className='text-center text-black text-xl mb-1'>Email: {user.email}</div>
          <div className='flex flex-col items-center text-center text-black text-xl'>
            Profile Picture:
            {user.photoURL ? (
              <img src={user.photoURL} alt="Profile" className="w-24 h-24 rounded-full mt-2" />
            ) : (
              <p>No profile picture</p>
            )}
          </div>
        </div>
        <div className='text-center mt-3'>
        <button
          onClick={handleUpdateClick}
          className="btn bg-yellow-800 text-white hover:bg-yellow-600 text-center"
        >
          Home Page
        </button>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
