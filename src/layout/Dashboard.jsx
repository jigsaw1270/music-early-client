import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { FaBookDead, FaBookOpen, FaBookmark, FaHome, FaMoneyCheckAlt,  FaPlusCircle,  FaUserAltSlash,  FaUserClock, FaUserGraduate } from 'react-icons/fa';

const Dashboard = () => {

    const [isAdmin] = useAdmin();
    const [isInstructor] = useInstructor();
    return (
        <div className="drawer lg:drawer-open ">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="flex flex-col items-center justify-center drawer-content">
            <Outlet></Outlet> 
            <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

        </div>
        <div className="drawer-side bg-[#961b8b] text-white">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="p-4 menu w-80">

                {
                    isAdmin ? <>
                        <li><NavLink to="/dashboard"><FaHome></FaHome> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/alluser"><FaUserAltSlash></FaUserAltSlash>All users</NavLink></li>
                        <li><NavLink to="/dashboard/manageclasses"><FaBookDead></FaBookDead> Manage classes</NavLink></li>
           
                        
                    </> : 
                    isInstructor ? <>    <li><NavLink to="/dashboard/instaclasses"><FaBookOpen></FaBookOpen> My classes</NavLink></li>
                        <li><NavLink to="/dashboard/addclass"><FaPlusCircle></FaPlusCircle> Add a Class</NavLink></li> 
                        </> :
                    
                    
                    
                    <>
                        <li><NavLink to="/dashboard"><FaHome></FaHome>Home</NavLink></li>
                        <li><NavLink to="/dashboard/selectedclasses"><FaBookmark></FaBookmark> Selected classes</NavLink></li>
                        <li><NavLink to="/dashboard/enrolled"><FaUserGraduate></FaUserGraduate> Enrolled classes</NavLink></li>
                        <li><NavLink to="/dashboard/payment"><FaMoneyCheckAlt></FaMoneyCheckAlt>Make Payment</NavLink></li>
                        <li><NavLink to="/dashboard/paymenthistory"><FaUserClock></FaUserClock>Payment History</NavLink></li>
                     

                     
                    </>
                }




                <div className="divider"></div>
                <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                <li><NavLink to="/classes"> <FaBookOpen></FaBookOpen> Classes</NavLink></li>
                <li><NavLink to="/instructors"><FaUserGraduate></FaUserGraduate>Instructors</NavLink></li>
            </ul>

        </div>
    </div>
);
};
export default Dashboard;