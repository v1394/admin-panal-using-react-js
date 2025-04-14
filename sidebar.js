// import React from 'react';
// import { Redirect } from 'react-router-dom';

// function Profile(authorized) {
//     if(!authorized){
//         return <Redirect to="/login" />;
//     }

//     return <div>If you are here... welcome</div>;
// }

// export default  Profile;


// src/components/Sidebar.js

import React from 'react';
import { Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // If you're using React Router
import { FaHome, FaUser, FaSignInAlt, FaUserPlus, FaProjectDiagram } from 'react-icons/fa'; 

const Sidebar = () => {
  return (
    <div
      style={{
        width: '180px',
        height: '100vh',
        backgroundColor: '#343a40',
        position: 'fixed',
        top: 0,
        left: 0,
        paddingTop: '20px',
        color: 'white',
      }}
    >
      <Nav className="flex-column" style={{ marginTop: '20px' }}>

        <Nav.Item>
          <Link to="/home" className="nav-link text-white fs-4">
          <FaUser /> Profile
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/home" className="nav-link text-white fs-4">
          <FaHome /> Home
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/register" className="nav-link text-white fs-4">
          <FaSignInAlt /> Register
          </Link>
        </Nav.Item>

        <Nav.Item>
          <Link to="/ProjectInfo" className="nav-link text-white fs-4">
            <FaProjectDiagram /> Add Project info
          </Link>
        </Nav.Item>
        <Nav.Item>
          <Link to="/register" className="nav-link text-white fs-4">
          <FaUserPlus /> Add Members
          </Link>
        </Nav.Item>
        {/* Add more links as necessary */}
      </Nav>
    </div>
  );
};

export default Sidebar;
