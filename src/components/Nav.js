import React from "react";

const Nav = (props) => {
  const { menuItem, setMenuItem, items, style } = props;
  return (
    <nav
      className="flex flex-row mx-[10%] my-[5%] py-1 px-0 rounded-full h-fit bg-neutral-100"
      style={style}
    >
      {items.map((item) => (
        <button
          onClick={() => setMenuItem(item)}
          key={item}
          className={`
                ${
                  menuItem === item
                    ? "bg-primary text-white"
                    : "hover:bg-neutral-250"
                }
                mx-2 rounded-full px-2 transition-all
              `}
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Nav;
