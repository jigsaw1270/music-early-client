import React from 'react';

const Classitems = ({item}) => {
    const {classname, image , instructor,available_seat, price , popularity , total_students } = item;
    return (
        <div className="font-mono card w-96 glass">
  <figure><img src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{classname}</h2>
    <p>Instructor : {instructor}</p>
    <p>Price :$ {price}</p>
    <p>Popularity :{popularity}</p>
    <p>Available Seat :  {available_seat}</p>
    <p>Students enrolled:  {total_students}</p>
    <div className="justify-end card-actions">
      <button className="text-white btn bg-fuchsia-700">Add course</button>
    </div>
  </div>
</div>
    );
};

export default Classitems;