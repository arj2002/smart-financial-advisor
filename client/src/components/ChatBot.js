import React, { useState } from 'react';
import axios from 'axios';

const ChatBot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQuery = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/chat`, { message: query });
      setResponse(res.data.reply);
    } catch {
      setResponse('Something went wrong.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white shadow rounded">
      <form onSubmit={handleQuery}>
        <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Ask me anything..." className="w-full mb-3 p-2 border rounded" />
        <button type="submit" className="w-full bg-purple-600 text-white py-2 rounded">Ask</button>
      </form>
      {response && (
        <div className="mt-4 p-3 bg-gray-100 rounded shadow-sm">{response}</div>
      )}
    </div>
  );
};

export default ChatBot;
