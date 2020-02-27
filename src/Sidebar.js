import React from 'react';
import './App.css';

function Sidebar() {

    const menuOne = () => {
        alert("Menu one");
    }

  return (
    <div className="Sidebar">
      <ul>
          <h3 className="section" onClick={menuOne}>Menu 1</h3>
      </ul>
    </div>
  );
}

export default Sidebar;
