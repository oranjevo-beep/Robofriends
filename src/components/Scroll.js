import React from 'react';
const Scroll = (props) => {
  return (
    <div className="overflow-y-scroll h-96 md:overflow-auto md:h-auto mt-4 shadow-inner">
      {props.children}
    </div>
  );
};
export default Scroll;
