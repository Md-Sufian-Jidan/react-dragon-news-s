import moment from 'moment';
import logo from '../../assets/logo.png'
const Header = () => {
    return (
        <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
            <p className='my-3'>Journalism Without Fear or Favour</p>
            <p className='my-3'>{moment().format("dddd, MMMM D, YYYY")}</p>
        </div>
    );
};

export default Header;