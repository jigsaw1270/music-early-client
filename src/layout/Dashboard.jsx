import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

const Dashboard = () => {

    const isAdmin = true ;
    const isInstructor = false;
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
                    isInstructor ? <>    <li><NavLink to="/dashboard/home"> Selected classes</NavLink></li>
                        <li><NavLink to="/dashboard/reservations">Enrolled classes</NavLink></li> 
                        </> :
                    
                    
                    
                    <>
                        <li><NavLink to="/dashboard/home"> Selected classes</NavLink></li>
                        <li><NavLink to="/dashboard/reservations">Enrolled classes</NavLink></li>
                     

                     
                    </>
                }




                <div className="divider"></div>
                <li><NavLink to="/"> Home</NavLink> </li>
                <li><NavLink to="/menu"> Our Menu</NavLink></li>
                <li><NavLink to="/order/salad">Order Food</NavLink></li>
            </ul>

        </div>
    </div>
);
};
export default Dashboard;