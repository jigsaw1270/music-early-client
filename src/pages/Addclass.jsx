import React, { useState } from 'react';
import useAuth from '../hooks/useAuth';
import Swal from 'sweetalert2';

const Addclass = () => {
    const {user} = useAuth();
    console.log(user);
//     const [className, setClassName] = useState('');
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [available_seats, setAvailableSeats] = useState(0);
//   const [price, setPrice] = useState(0);


//   setName(user.displayName);
//   setEmail(user.email)

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = e.target;
    const image = user.photoURL;
    const name = user.displayName;
    const email = user.email;
    const className = form.classname.value;
    const available_seats = form.available_seats.value;
    const price = form.price.value;

    // Prepare the data to be sent to the server
    const classData = {
      className,
      image,
      name,
      email,
      available_seats,
      price,
      status: 'pending',
      total_students: 0 ,
    };

    try {
      // Send a POST request to the server to save the class data
      const response = await fetch('https://final-assignment-server-bay.vercel.app/newins', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(classData),
      });

      if (response.ok) {
        // Class created successfully
         
Swal.fire({
  position: 'top-end',
  icon: 'success',
  title: 'class added for approval',
  showConfirmButton: false,
  timer: 1500
})
        // You can perform additional actions here, such as redirecting to another page
      } else {
        // Error occurred while creating the class
        console.log('Error creating class:', response.status);
      }
    } catch (error) {
      console.log('Error creating class:', error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
     <div className="w-auto bg-transperant">
  <div className="flex-col hero-content lg:flex-row-reverse">
   
    <div className="flex-shrink-0 w-full max-w-sm shadow-2xl card bg-base-100">
      <div className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="text" readOnly value={user.email} name='email' placeholder="email" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">name</span>
          </label>
          <input type="text" name='name' readOnly value={user.displayName} placeholder="name" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Class name</span>
          </label>
          <input type="text" name='classname' placeholder="classname" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Price</span>
          </label>
          <input type="text" name='price' placeholder="price" className="input input-bordered" />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Available seat</span>
          </label>
          <input type="text" name='available_seats' placeholder="available seat" className="input input-bordered" />
        </div>
        
        <div className="mt-6 form-control">
          <button className="btn btn-primary">Add class</button>
        </div>
      </div>
    </div>
  </div>
</div>
    </form>
  );
}

export default Addclass;