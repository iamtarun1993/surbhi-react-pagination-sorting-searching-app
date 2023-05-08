import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Grid from './Components/Grid/grid';
import Table from './Components/Table/table';
import './App.css';

const App = () => {
  const [screenSize, setScreenSize] = useState(null);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setScreenSize('desktop');
      } else if (window.innerWidth >= 768) {
        setScreenSize('tablet');
      } else {
        setScreenSize('mobile');
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <React.Fragment>
      <Router>
        <div>
          <nav className="navbar">
            <ul>
              <li>
                <Link to="/">Grid View</Link>
              </li>
              <li>
                <Link to="/table">Table View</Link>
              </li>
            </ul>
          </nav>

          <br /><br />

          <Routes>
            <Route exact path="/" element={<Grid screenSize={screenSize} />} />
            <Route exact path="/table" element={<Table screenSize={screenSize} />} />
          </Routes>
        </div>
      </Router>
    </React.Fragment>
  );
};

export default App;
