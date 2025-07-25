import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import ProfileForm from './components/ProfileForm';
import Recommendation from './components/Recommendation';
import ChatBot from './components/ChatBot';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<ProfileForm />} />
        <Route path="/recommendation" element={<Recommendation />} />
        <Route path="/chatbot" element={<ChatBot />} />
      </Routes>
    </Router>
  );
};

export default App;
