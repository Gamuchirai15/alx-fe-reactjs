import { Link } from 'react-router-dom';

function Navbar() {
  const navStyle = {
    backgroundColor: '#333',
    color: 'white',
    padding: '10px 20px',
    textAlign: 'center',
    display: 'justifyContent',
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={{ color: 'white', margin: '0 15px' }}>
        Home
      </Link>
      <Link to="/about" style={{ color: 'white', margin: '0 15px' }}>
        About
      </Link>
      <Link to="/services" style={{ color: 'white', margin: '0 15px' }}>
        Services
      </Link>
      <Link to="/contact" style={{ color: 'white', margin: '0 15px' }}>
        Contact
      </Link>
    </nav>
  );
}

export default Navbar;