import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import useAdmin from '../hooks/useAdmin';
import useInstructor from '../hooks/useInstructor';
import { FaBookOpen, FaBookmark, FaHome, FaMoneyCheckAlt, FaTimesCircle, FaUserClock, FaUserGraduate } from 'react-icons/fa';

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
                        <li><NavLink to="/dashboard/home"> Admin Home</NavLink></li>
                        <li><NavLink to="/dashboard/alluser">All users</NavLink></li>
                        <li><NavLink to="/dashboard/history"> Manage classes</NavLink></li>
           
                        
                    </> : 
                    isInstructor ? <>    <li><NavLink to="/dashboard/home">My classes</NavLink></li>
                        <li><NavLink to="/dashboard/reservations">Add a Class</NavLink></li> 
                        </> :
                    
                    
                    
                    <>
                        <li><NavLink to="/dashboard/home"><FaBookmark></FaBookmark> Selected classes</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaUserGraduate></FaUserGraduate> Enrolled classes</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaMoneyCheckAlt></FaMoneyCheckAlt>Make Payment</NavLink></li>
                        <li><NavLink to="/dashboard/reservations"><FaUserClock></FaUserClock>Payment History</NavLink></li>
                     

                     
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