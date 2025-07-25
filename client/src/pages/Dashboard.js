import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="p-8 max-w-3xl mx-auto">
      <h1 className="text-2xl font-bold mb-6">Welcome to Your Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/profile" className="bg-blue-100 p-4 rounded shadow hover:bg-blue-200 text-center">Edit Profile</Link>
        <Link to="/recommendation" className="bg-green-100 p-4 rounded shadow hover:bg-green-200 text-center">View Recommendations</Link>
        <Link to="/chatbot" className="bg-yellow-100 p-4 rounded shadow hover:bg-yellow-200 text-center">Ask Chatbot</Link>
      </div>
    </div>
  );
};

export default Dashboard;
