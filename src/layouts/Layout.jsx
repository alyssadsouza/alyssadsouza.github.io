import { Outlet } from 'react-router';
import '../App.css';
import NavHeader from '../components/Layout/NavHeader';

function Layout() {

  return (
    <div className="selection:bg-primary-300 selection:text-light-text text-base h-screen w-screen flex flex-col md:justify-between md:flex-row md:bg-opacity-0 md:bg-neutral-50 bg-primary scrollbar-hide">

        <div className='my-[5%] z-10 md:my-0 md:absolute md:top-5 md:right-5 inline-flex justify-center'>
            <NavHeader/>
        </div>

		<Outlet />
    
    </div>
  );
}

export default Layout;
