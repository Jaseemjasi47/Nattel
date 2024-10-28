import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Loader from './Components/Loader/Loader';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay (you would replace this with your actual data loading process)
    const delay = setTimeout(() => {
      setLoading(false); // Set loading state to false after the simulated delay
    }, 3000); // Simulated delay of 2 seconds

    // Cleanup function to clear timeout if component unmounts before the delay completes
    return () => clearTimeout(delay);
  }, []);
  return (
    <Router>
      {
      loading ? (
          // Render loading indicator while loading is true
          <Loader />
        ) : (
      <>
        <Navbar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </>
        )}
    </Router>
  );
}

export default App;
