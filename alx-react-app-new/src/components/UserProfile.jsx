import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);
  
  return (
    <div style={{ border: '1px solid gray', padding: '20px', margin: '10px', borderRadius: '8px' }}>
      <h2 style={{ color: 'blue', fontSize: '24px' }}>{props.name}</h2>
      <p style={{ fontSize: '18px' }}>Age: <span style={{ fontWeight: 'bold', color: 'darkgreen' }}>{props.age}</span></p>
      <p style={{ fontSize: '16px' }}>Bio: {props.bio}</p>
    </div>
  );
};

  export default UserProfile;