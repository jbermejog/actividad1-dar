import React from 'react';

const Overlay = () => {
  const handleClose = () => {
    const sidebar = document.getElementById('mySidebar');
    const overlay = document.getElementById('myOverlay');
    sidebar.style.display = 'none';
    overlay.style.display = 'none';
  };

  return (
    <div
      className="w3-overlay w3-hide-large"
      onClick={handleClose}
      style={{ cursor: 'pointer' }}
      title="close side menu"
      id="myOverlay"
    ></div>
  );
};

export default Overlay;
