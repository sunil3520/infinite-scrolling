import React from 'react';

const Cart = ({ title, body, thumbnail }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 m-4 w-full max-w-md">
      {/* thumbnail Section */}
      {thumbnail && (
        <img
          src={thumbnail}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-lg font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{body}</p>
    </div>
  );
};

export default Cart;
