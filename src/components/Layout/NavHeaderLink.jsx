import { NavLink } from 'react-router-dom';

export default function NavHeaderLink({path, name}) {
	return (
		<NavLink
        to={path}
        className={({ isActive }) =>
          isActive
            ? "text-secondary-dark mx-2"
            : "hover:text-secondary-dark mx-2 transition-all"
        }
      >
        {name}
      </NavLink>
	);
}