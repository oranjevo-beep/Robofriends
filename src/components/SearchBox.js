import React from 'react';

const SearchBox = ({ searchChange }) => {
  return (
    <div className="text-center ">
      <input
        className="bg-blue-200 focus:shadow-md focus:shadow-green-500 placeholder-slate-500 tracking-wide  px-8 py-2 rounded-md outline-green-500"
        type="search"
        placeholder="Search"
        onChange={searchChange}
      />
    </div>
  );
};

export default SearchBox;
