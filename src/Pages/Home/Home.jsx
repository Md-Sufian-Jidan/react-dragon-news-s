import Header from '../../Shared/Header/Header'
import LeftSideNavbar from '../../Shared/LeftSideNavbar/LeftSideNavbar';
import Navbar from '../../Shared/Navbar/Navbar'
import RightSideNavbar from '../../Shared/RightSideNavbar/RightSideNavbar';
import BreakingNews from './BreakingNews';
const Home = () => {
    return (
        <div>
            <Header />
            <BreakingNews />
            <Navbar />
            <div className='grid md:grid-cols-4 gap-6'>
                <div className='border'><LeftSideNavbar /></div>
                <div className='border md:col-span-2'>news coming soon...</div>
                <div className='border'><RightSideNavbar /></div>
            </div>
        </div>
    );
};

export default Home;