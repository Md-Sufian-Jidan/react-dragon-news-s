import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../assets/qZone1.png'
import qZone2 from '../../assets/qZone2.png'
import qZone3 from '../../assets/qZone3.png'
const RightSideNavbar = () => {
    return (
        <div>
            {/* Login section */}
            <div className="p-4 space-y-3">
                <h2 className="text-3xl">Login with</h2>
                <button className="btn btn-outline w-full"><FaGoogle size={18} /> Google</button>
                <button className="btn btn-outline w-full"><FaGithub size={18} /> GitHub</button>
            </div>
            {/* find us on section */}
            <div className="p-4 mb-3">
                <h2 className="text-3xl my-2">Find Us On</h2>
                <a className="flex p-4 items-center gap-2 text-lg border rounded-t-lg" href=""><FaFacebook size={18} /><span>Facebook</span></a>
                <a className="flex p-4 items-center gap-2 text-lg border-x" href=""><FaTwitter size={18} /><span>Twitter</span></a>
                <a className="flex p-4 items-center gap-2 text-lg border rounded-b-lg" href=""><FaInstagram size={18} /><span>Instagram</span></a>
            </div>
            {/* Q-Zone section */}
            <div>
                <h2 className="text-2xl font-bold">Q-Zone</h2>
                <img src={qZone1} alt="" />
                <img src={qZone2} alt="" />
                <img src={qZone3} alt="" />
            </div>
        </div>
    );
};

export default RightSideNavbar;