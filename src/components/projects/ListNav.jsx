import { NavLink } from 'react-router-dom';
import { ReactComponent as DocumentIcon } from '../../assets/icons/document.svg';
import useProject from '../../hooks/useProject';

const ListNav = ({items}) => {

  const project = useProject();

    return (
      <div className="py-1 w-full rounded-xl flex flex-col">
        <nav
          className="flex flex-col mt-1 rounded-xl h-fit w-full text-neutral-100"
        >
          {items?.map(item => (
            <NavLink to={`/projects/${item.project}`} key={item.title} onClick={() => {}} className={`cursor-pointer rounded-lg p-1 my-1 inline-flex gap-2 hover:bg-secondary hover:bg-opacity-50 transition-all ${item.project === project?.project ? "bg-secondary bg-opacity-50" : ""}`}>
              <DocumentIcon className='w-5 text-white' />
            <p 
              key={item.project}
              className="text-left truncate w-[90%]"
            >
              {item.title}
            </p>
            </NavLink>
          ))}
        </nav>
      </div>
    );
  };
  
  export default ListNav;
  