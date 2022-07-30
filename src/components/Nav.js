import React from "react";

const Nav = (props) => {
  const { menuItem, setMenuItem, items, classes } = props;
  return (
    <nav
      className={`flex flex-row justify-center py-1 px-0 rounded-full h-fit bg-neutral-100 ${classes}`}
    >
      {items.map((item) => (
        <button
          onClick={() => setMenuItem(item)}
          key={item}
          className={`
                ${
                  menuItem === item
                    ? "bg-gradient-to-r from-primary via-primary-light to-secondary text-white"
                    : "hover:bg-neutral-250"
                }
                mx-2 rounded-full px-3 py-1 transition-all text-sm
              `}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
