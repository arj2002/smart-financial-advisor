import React, { useState } from 'react';
import axios from 'axios';

const ProfileForm = () => {
  const [formData, setFormData] = useState({
    age: '',
    income: '',
    riskTolerance: '',
  });

  const [loading, setLoading] = useState(false);   // ✅ Loading state
  const [error, setError] = useState(null);        // ✅ Error state

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/profile`, formData);
      alert('Profile submitted!');
    } catch (err) {
      console.error('Submission failed:', err);
      console.log('Submitting profile:', formData);

      setError('Error saving profile. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md mx-auto mt-8 p-6 bg-white shadow rounded"
    >
      <h2 className="text-lg font-semibold mb-4">Your Profile</h2>

      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
        placeholder="Age"
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <input
        name="income"
        type="number"
        value={formData.income}
        onChange={handleChange}
        placeholder="Income"
        className="w-full mb-3 p-2 border rounded"
        required
      />

      <select
        name="riskTolerance"
        value={formData.riskTolerance}
        onChange={handleChange}
        className="w-full mb-3 p-2 border rounded"
        required
      >
        <option value="">Risk Tolerance</option>
        <option value="low">Low</option>
        <option value="moderate">Moderate</option>
        <option value="high">High</option>
      </select>

      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded"
        disabled={loading}
      >
        {loading ? 'Submitting...' : 'Save'}
      </button>

      {error && (
        <p className="text-red-500 text-sm mt-2">{error}</p>
      )}
    </form>
  );
};

export default ProfileForm;
