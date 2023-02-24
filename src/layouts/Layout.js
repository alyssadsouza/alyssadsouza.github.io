import { Outlet } from 'react-router';
import '../App.css';
import Footer from '../components/Layout/Footer';
import NavHeader from '../components/Layout/NavHeader';

function Layout() {

  return (
    <div className="selection:bg-primary-300 selection:text-light-text h-screen w-screen flex flex-col justify-between md:flex-row md:bg-opacity-0 md:bg-neutral-50 bg-primary">

        <div className='my-[5%] z-10 md:my-0 md:absolute md:top-5 md:right-5 inline-flex justify-center'>
            <NavHeader/>
        </div>

		<Outlet />

        {/* <div className={`hidden w-full transition-all duration-[1s] md:block md:bottom-0 md:h-[10vh] md:fixed`}>
          <Footer />
        </div> */}
    
    </div>
  );
}

export default Layout;
