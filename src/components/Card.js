import React from 'react';

const Card = ({ id, name, username, email }) => {
  return (
    <div
      key={id}
      className="flex flex-col items-center justify-center text-center bg-green-200 px-4 py-6  m-3 rounded-lg shadow-lg hover:scale-105 hover:shadow-xl duration-300 gap-4"
    >
      <img
        className="h-32 w-32"
        alt="robots"
        src={`https://robohash.org/${username}?200x200`}
      />
      <div>
        <h2 className="text-2xl tracking-tight text-orange-500">{name}</h2>
        <p className="text-slate-700">{email}</p>
      </div>
    </div>
  );
};
export default Card;
