import React from 'react';

const Card = ({ name, description, category, price, image }) => {
  return (
    <div className="max-w-xs rounded overflow-hidden shadow-lg p-2">
      <img className="w-full" src={image} alt={name} />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{name}</div>
        <p className="text-gray-700 text-base">Category: {category}</p>
        <p className="text-gray-700 text-base">Price: {price}</p>
      </div>
    </div>
  );
};

export default Card;
