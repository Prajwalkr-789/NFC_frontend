import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import CreateUser from './components/CreateUser';
import WriteCard from './components/WriteCard'
import Navbar from './components/Navbar'
import NFCReader from './components/NFCReader'
import Home from './components/Home';
import './App.css';

function App() {
  return (
    <Router>
      <div>

        <Navbar/>
        <NFCReader/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createuser" element={<CreateUser />} />
          <Route path="/admin/write-tag" element={<WriteCard />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
