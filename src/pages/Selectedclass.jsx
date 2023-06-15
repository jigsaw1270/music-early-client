import React, { useState } from 'react';
import useCart from '../hooks/useCart';
import Swal from 'sweetalert2';
import { FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Selectedclass = () => {
    const [cart, refetch] = useCart();
    console.log(cart._id);
    // how does reduce work!!!
    const total = cart.reduce((sum, item) => item.price + sum, 0);


   

    const handleDelete = item => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://final-assignment-server-bay.vercel.app/carts/${item._id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            refetch();
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }
  

    return (
        <div className="w-full">
            
            <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
                <h3 className="text-3xl">Total Classes selected: {cart.length}</h3>
                <h3 className="text-3xl">Total Price: ${total}</h3>
              
            </div>
            <div className="w-full overflow-x-auto font-mono">
                <table className="table w-full ">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Class</th>
                            <th>Class name</th>
                            <th>Instructor</th>
                            <th>Price</th>
                            <th>Action</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            cart.map((item, index) => <tr
                                key={item._id}
                            >
                                <td>
                                    {index + 1}
                                </td>
                                <td>
                                    <div className="avatar">
                                        <div className="w-12 h-12 mask mask-squircle">
                                            <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    {item.classname}
                                </td>
                              
                                <td>{item.instructor}</td>
                                <td className="font-bold">${item.price}</td>
                                <td>
                                    <button onClick={() => handleDelete(item)} className="text-white bg-red-600 btn btn-ghost"><FaTrashAlt></FaTrashAlt></button>
                                </td>
                                <td>  <Link to="payment"><button  className="btn btn-warning btn-sm">PAY</button></Link></td>
                            </tr>)
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Selectedclass;