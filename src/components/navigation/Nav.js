import React from "react";

const Nav = (props) => {
  const { menuItem, setMenuItem, items, classes } = props;
  return (
    <nav
      className={`flex flex-row justify-center py-1 px-0 font-display md:text-black text-white ${classes}`}
    >
      {items.map((item) => (
        <button
          onClick={() => setMenuItem(item)}
          key={item}
          className={`
                ${
                  menuItem === item
                    ? "text-secondary font-bold"
                    : "hover:text-secondary"
                }
                mx-2 transition-all
              `}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
