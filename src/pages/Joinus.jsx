import React from 'react';

function JoinUs() {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100 dark:bg-gray-900">
      <h2 className="text-3xl font-semibold text-yellow-500 mb-6">Join Us</h2>
      <form className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md w-96">
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white">Name</label>
          <input type="text" className="w-full px-4 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md text-yellow-500 outline-none focus:border-yellow-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white">Email</label>
          <input type="email" className="w-full px-4 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md text-yellow-500 outline-none focus:border-yellow-500" />
        </div>
        <div className="mb-4">
          <label className="block text-gray-800 dark:text-white">GitHub</label>
          <input type="url" className="w-full px-4 py-2 border dark:bg-gray-700 border-gray-300 dark:border-gray-600 rounded-md text-yellow-500 outline-none focus:border-yellow-500" />
        </div>
        <button className="w-full bg-yellow-500 text-white py-2 rounded-md">
          Submit
        </button>
      </form>
    </div>
  );
}

export default JoinUs;
