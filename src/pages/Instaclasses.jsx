import React, { useEffect, useState } from 'react';
import useAxiosSecure from '../hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const Instaclasses = () => {
    const [classes, setClasses] = useState([]);

    useEffect(() => {
      // Fetch the classes from the server
      fetch('https://final-assignment-server-bay.vercel.app/newins')
        .then((response) => response.json())
        .then((data) => setClasses(data))
        .catch((error) => console.log('Error fetching classes:', error));
    }, []);
    return (
        <div>
        <h3 className="my-4 text-3xl font-semibold">Total Users: {classes.length}</h3>
        <div className="overflow-x-auto">
            <table className="table w-full table-zebra">
                {/* head */}
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Classname</th>
                        <th>Email</th>
                        <th>Status</th>
                        
                        <th>Total Students</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        classes.map((user, index) => <tr key={user._id}>
                            <th>{index + 1}</th>
                            <td>{user.className}</td>
                            <td>{user.email}</td>
                            <td>{user.status}</td>
                            <td className='text-center'>{user.total_students}</td>
                            <td><button className='btn btn-ghost'>Update</button></td>
                            <td><button className='btn btn-ghost'>Feedback</button></td>
                        </tr>)
                    }
                    
                    
                </tbody>
            </table>
        </div>
    </div>
    );
};

export default Instaclasses;