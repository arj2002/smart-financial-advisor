import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

const handleSignup = async (e) => {
  e.preventDefault();

  try {
    console.log('Submitting signup with:', formData); // Debug

    // Step 1: Sign up
    await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/signup`, formData);

    // Step 2: Login
    const loginRes = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
      email: formData.email,
      password: formData.password,
    });

    // Step 3: Save token and redirect
    localStorage.setItem('token', loginRes.data.token);
    navigate('/dashboard');

  } catch (err) {
    console.error('Signup or login failed:', err.response?.data || err.message);
    alert('Signup or login failed. Please check your credentials or try again.');
  }
};

  return (
    <form onSubmit={handleSignup} className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-xl font-bold mb-4 text-center text-indigo-700">Sign Up</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Name"
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
        placeholder="Password"
        className="w-full mb-4 p-2 border rounded"
        required
      />

      <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
        Sign Up
      </button>
    </form>
  );
};

export default Signup;
