import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

const handleLogin = async (e) => {
  e.preventDefault();
  try {
    const response = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/auth/login`, {
      email,
      password,
    });

    if (response.status === 200) {
  console.log('Login response:', response.data); // 👈 Log the full response
  localStorage.setItem('token', response.data.token);
  console.log('Saved token:', response.data.token); // 👈 Confirm what’s saved
  navigate('/dashboard');
}


  return (
    <form
      onSubmit={handleLogin}
      className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded"
    >
      <h2 className="text-xl font-bold mb-4">Log In</h2>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="w-full mb-3 p-2 border rounded"
        required
      />
      <button
        type="submit"
        className="w-full bg-green-600 text-white py-2 rounded"
      >
        Log In
      </button>
    </form>
  );
};

export default Login;
