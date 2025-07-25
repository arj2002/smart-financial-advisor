import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

 const fetchRecommendation = async () => {
  setLoading(true);
  setError(null);

  try {
    const token = localStorage.getItem('token');
    const res = await axios.get(
      `${import.meta.env.VITE_BACKEND_URL}/api/agent/recommendation`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    setRecommendation(res.data);
  } catch (err) {
    setError('❌ Failed to fetch recommendation. Please try again.');
    console.error('👉 Error fetching recommendation:', err.response?.data || err.message);
  } finally {
    setLoading(false);
  }
};


  useEffect(() => {
    fetchRecommendation();
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4 text-center text-indigo-700">AI Investment Recommendation</h2>

      {loading ? (
        <p className="text-gray-600 text-center">Loading recommendations...</p>
      ) : error ? (
        <div className="text-center text-red-500">
          <p>{error}</p>
          <button
            onClick={fetchRecommendation}
            className="mt-4 text-sm text-blue-600 underline hover:text-blue-800"
          >
            Retry
          </button>
        </div>
      ) : (
        <pre className="text-gray-800 bg-gray-100 p-4 rounded overflow-x-auto">
          {JSON.stringify(recommendation, null, 2)}
        </pre>
      )}
    </div>
  );
};

export default Recommendation;
