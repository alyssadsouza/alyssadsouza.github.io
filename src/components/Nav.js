import React from "react";

const Nav = (props) => {
  const { menuItem, setMenuItem, items, classes, buttonClasses } = props;
  return (
    <nav
      className={`flex flex-row justify-center py-1 px-0 rounded-full h-fit bg-secondary-light ${classes}`}
    >
      {items.map((item) => (
        <button
          onClick={() => setMenuItem(item)}
          key={item}
          className={`
                ${
                  menuItem === item
                    ? "bg-secondary-dark text-light-text cursor-auto"
                    : `hover:bg-secondary ${buttonClasses}`
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
