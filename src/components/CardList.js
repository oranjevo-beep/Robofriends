import React from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <div className="grid md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 p-4 px-16 sm:px-4  md:my-2 ">
      {robots.map(({ id, name, username, email }) => {
        return <Card key={id} name={name} username={username} email={email} />;
      })}
    </div>
  );
};
export default CardList;
