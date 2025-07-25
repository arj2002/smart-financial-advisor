import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaSpinner, FaRedo, FaCopy } from 'react-icons/fa';

const Recommendation = () => {
  const [recommendation, setRecommendation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [copied, setCopied] = useState(false);

  const fetchRecommendation = async () => {
    setLoading(true);
    setError(null);
    setCopied(false);

    try {
      const res = await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/recommendation`);
      setRecommendation(res.data);
    } catch (err) {
      setError('❌ Failed to fetch recommendation. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(JSON.stringify(recommendation, null, 2));
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  useEffect(() => {
    fetchRecommendation();
  }, []);

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-md border border-gray-200">
      <h2 className="text-2xl font-semibold text-center text-indigo-700 mb-6">
        💡 AI Investment Recommendation
      </h2>

      {loading ? (
        <div className="animate-pulse space-y-4">
          <div className="h-4 bg-gray-300 rounded w-3/4 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-1/2 mx-auto"></div>
          <div className="h-4 bg-gray-300 rounded w-full mx-auto"></div>
        </div>
      ) : error ? (
        <div className="text-center text-red-600">
          <p>{error}</p>
          <button
            onClick={fetchRecommendation}
            className="mt-4 inline-flex items-center gap-2 px-4 py-1.5 bg-blue-600 text-white text-sm rounded hover:bg-blue-700"
          >
            <FaRedo /> Retry
          </button>
        </div>
      ) : (
        <div>
          <div className="bg-gray-100 p-4 rounded-lg overflow-x-auto relative">
            <pre className="text-sm text-gray-800">
              {JSON.stringify(recommendation, null, 2)}
            </pre>
            <button
              onClick={handleCopy}
              className="absolute top-2 right-2 text-xs text-blue-600 hover:underline"
            >
              <FaCopy className="inline mr-1" />
              {copied ? 'Copied!' : 'Copy'}
            </button>
          </div>
        </div>
      )}

      {loading && (
        <div className="mt-4 text-center text-gray-600">
          <FaSpinner className="animate-spin inline mr-2" />
          Fetching your personalized recommendation...
        </div>
      )}
    </div>
  );
};

export default Recommendation;