import React from "react";

const NavToggle = (props) => {
  const { menuItem, setMenuItem, items, classes, buttonClasses, activeClasses = "" } = props;
  return (
    <nav
      className={`flex flex-row justify-center py-1 px-0 rounded-full h-fit bg-neutral-200 bg-opacity-30 text-sm ${classes}`}
    >
      {items.map((item) => (
        <button
          onClick={() => setMenuItem(item)}
          key={item}
          className={`
                ${
                  menuItem === item
                    ? `${activeClasses} bg-secondary-dark text-light-text cursor-auto`
                    : `hover:bg-[#30417B] text-white ${buttonClasses}`
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

export default NavToggle;
