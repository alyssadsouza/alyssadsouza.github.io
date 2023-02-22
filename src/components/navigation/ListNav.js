import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';
const ListNav = (props) => {
    const { menuItem, setMenuItem, items, style } = props;
    return (
      <div className="py-1 w-full rounded-xl flex flex-col">
        <nav
          className="flex flex-col mt-1 rounded-xl h-fit w-full text-neutral-100"
          style={style}
        >
          {items?.map(item => (
            <div onClick={() => setMenuItem(item)} className={`cursor-pointer rounded-lg p-1 my-1 inline-flex gap-2 hover:bg-secondary hover:bg-opacity-50 transition-all ${item.project === menuItem.project ? "bg-secondary bg-opacity-50" : ""}`}>
              <DocumentIcon className='w-5 text-white' />
            <button 
              key={item.project}
              className={`text-left`}
            >
              {item?.title}
            </button>
            </div>
          ))}
        </nav>
      </div>
    );
  };
  
  export default ListNav;
  