import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
      <h1 className="text-4xl font-bold mb-4">Smart Financial Advisor</h1>
      <p className="mb-6 text-center max-w-md">Get AI-powered investment recommendations tailored to your financial goals.</p>
      <div className="space-x-4">
        <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded">Sign Up</Link>
        <Link to="/login" className="bg-gray-600 text-white px-4 py-2 rounded">Login</Link>
      </div>
    </div>
  );
};

export default Home;
