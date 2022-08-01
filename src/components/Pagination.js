import React from "react";

const Pagination = (props) => {
  const { index, setIndex, total, classes } = props;
  return (
    <nav
      className={`flex flex-row justify-center py-1 px-0 rounded-full h-fit ${classes}`}
    >
      {[...Array(total).keys()].map(i => (
        <button
          className={`
          ${i === index ? 'bg-neutral-300 cursor-auto' 
          : 'cursor-pointer bg-neutral-200 hover:bg-neutral-300 transition-all'}
          rounded-full w-2 h-2 mx-1
          `}
          onClick={() => setIndex(i)}
        ></button>
      ))}
    </nav>
  );
};

export default Pagination;
