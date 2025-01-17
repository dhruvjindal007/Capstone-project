import React from 'react';
function Footer() {
    return (
      <footer className="footer" style={footerStyle}>
        <hr style={dividerStyle} />
        <div style={columnsContainerStyle}>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Doormat Information</h4>
            <p>About Us</p>
            <p>Privacy Policy</p>
            <p>Terms of Service</p>
          </div>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Contacts</h4>
            <p>Email: example@example.com</p>
            <p>Phone: +123 456 7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </div>
          <div style={columnStyle}>
            <h4 style={headingStyle}>Social Media Links</h4>
            <ul style={listStyle}>
              <li><a href="https://facebook.com" style={linkStyle}>Facebook</a></li>
              <li><a href="https://twitter.com" style={linkStyle}>Twitter</a></li>
              <li><a href="https://instagram.com" style={linkStyle}>Instagram</a></li>
            </ul>
          </div>
        </div>
      </footer>
    );
  }
  
  // Inline styles for demonstration purposes
  const footerStyle = {
    backgroundColor: '#f8f9fa',
    padding: '20px',
    marginTop: '30px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  };
  
  const dividerStyle = {
    margin: '10px auto',
    width: '80%',
    borderColor: '#ccc',
  };
  
  const columnsContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    maxWidth: '1000px',
    margin: '0 auto',
    textAlign: 'left',
  };
  
  const columnStyle = {
    flex: '1',
    padding: '10px',
  };
  
  const headingStyle = {
    fontSize: '18px',
    fontWeight: 'bold',
    marginBottom: '10px',
  };
  
  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    margin: 0,
  };
  
  const linkStyle = {
    textDecoration: 'none',
    color: '#007bff',
  };
  
  export default Footer;
  