import React from 'react';
import { useNavigate } from 'react-router-dom';

function LogoutPopUp() {
  const navigate = useNavigate();

  const divStyle = {
    height: 'auto',
    width: '300px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
    backgroundColor: '#f5f5f5',
    border: '1px solid #ccc',
    borderRadius: '5px',
    width : '300px',
    height: '300px',
    overlay : 'auto'
  };

  const buttonContainer = {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
    marginTop: '20px',
  };

  const logoutButton = {
    backgroundColor: '#3498db',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const cancelButton = {
    backgroundColor: 'white',
    color: 'black',
    padding: '10px 20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const handleNavigate = () => {
    navigate('/');
  };

  return (
    <div style={divStyle}>
      <h1>Are you sure you want to logout?</h1>
      <div style={buttonContainer}>
        <button style={logoutButton} onClick={handleNavigate}>
          Logout
        </button>
        <button style={cancelButton}>Cancel</button>
      </div>
    </div>
  );
}

export default LogoutPopUp;
