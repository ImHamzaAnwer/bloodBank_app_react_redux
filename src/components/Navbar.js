import React from 'react';

const Navbar = () => {
  const { containerStyle } = styles
  return (
    <div style={containerStyle}>
      <h2>KHOON KA PYASA</h2>
    </div>
  );
}

const styles = {
  containerStyle: {
    padding: 6,
    background: "#333",
    color: "#fff",
    textAlign: "center"
  }
}

export default Navbar;