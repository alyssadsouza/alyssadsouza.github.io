const ListNav = (props) => {
    const { menuItem, setMenuItem, items, style } = props;
    return (
      <div className="py-1 w-full rounded-xl flex flex-col">
        <nav
          className="flex flex-col mt-1 rounded-xl h-fit w-full text-neutral-100"
          style={style}
        >
          {items?.map(item => (
            <button 
              key={item.project}
              onClick={() => setMenuItem(item)}
              className={`text-left my-1 p-1 hover:bg-secondary-dark hover:bg-opacity-30 transition-all rounded ${item.project === menuItem.project ? "bg-secondary-dark bg-opacity-30" : ""}`}
            >
              {item?.title}
            </button>
          ))}
        </nav>
      </div>
    );
  };
  
  export default ListNav;
  