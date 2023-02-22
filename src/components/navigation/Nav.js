import React from "react";

const Nav = (props) => {
  const { menuItem, setMenuItem, items, classes } = props;
  return (
    <nav
      className={`flex flex-row justify-center py-1 px-0 font-display text-white ${classes}`}
    >
      {items.map((item) => (
        <button
          onClick={() => setMenuItem(item)}
          key={item}
          className={`
                ${
                  menuItem === item
                    ? "text-secondary-dark"
                    : "hover:text-secondary-dark"
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
