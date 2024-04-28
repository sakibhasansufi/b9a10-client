
import { Outlet } from 'react-router-dom';
import Navbar from '../../Pages/Navbar';
import Footer from '../../Pages/Footer';

const Root = () => {
    return (
        <section>
            <div className='md:max-w-6xl md:mx-auto '>
                <Navbar></Navbar>
                <Outlet></Outlet>
            </div>
                <Footer></Footer>
        </section>

    );
};

export default Root;