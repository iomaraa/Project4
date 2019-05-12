import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div className="navbar">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item active">
            <a className="nav-link" href="home">Home</a>
          </li>
        </ul>
      </div>
      
      <div className="body3">
        <div className="tasks">
          Daily tasks
        </div>
        <div className="lead">
          Leader board
        </div>
        <div className="challenges">
          Active challenges
        </div>
      </div>
      
    </div>
  );
}

export default App;



