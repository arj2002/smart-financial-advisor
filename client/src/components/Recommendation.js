import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState(null);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recommendation`)
      .then((res) => setRecommendation(res.data))
      .catch(() => alert('Failed to fetch recommendation'));
  }, []);

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <h2 className="text-lg font-semibold mb-4">AI Investment Recommendation</h2>
      {recommendation ? (
        <pre className="text-gray-700">{JSON.stringify(recommendation, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Recommendation;
