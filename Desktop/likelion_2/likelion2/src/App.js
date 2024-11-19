import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // BrowserRouter와 Routes, Route를 임포트
import Login from './Login/Login';
import Join from './Join/Join'; 
import Interest from './Interest/Interest'
import InterestDetail from './InterestDetail/InterestDetail';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route path="/Join" element={<Join />} />
          <Route path="/Interest" element={<Interest />} />
          <Route path='/InterestDetail/:id' element={<InterestDetail />} />

        </Routes>
      </div>
    </Router>
  );
}

export default App;
