import React from 'react';

export default function ReviewCard({_id, name, message, userPhoto, loadReview}) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h1 className="text-lg font-semibold mb-2">{name}</h1>
      <div className="flex items-center mb-2">
        <img src={userPhoto} alt="user" className="w-10 h-10 rounded-full mr-2" />
        <p className="text-gray-600">{message}</p>
      </div>
      {/* <button
        onClick={() => loadReview()}
        className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-400"
      >
        Reload Reviews
      </button> */}
    </div>
  );
}
