import React from 'react';


const InstraItem = ({item}) => {

    const { name, email , image, total_students, number_of_classes} = item ;
    
    return (
        <div>
            <div className="bg-transparent shadow-xl card lg:card-side">
  <figure><img className='h-screen' src={image} alt="Album"/></figure>
  <div className="card-body">
    <h2 className="card-title"><div tabIndex={0} className="collapse bg-fuchsia-700 text-primary-content focus:bg-fuchsia-400 focus:text-secondary-content">
  <div className="collapse-title">
   Name
  </div>
  <div className="collapse-content"> 
    <p>{name}</p>
  </div>
</div></h2>
    <p><div tabIndex={0} className="collapse bg-fuchsia-700 text-primary-content focus:bg-fuchsia-400 focus:text-secondary-content">
  <div className="collapse-title">
   Mail
  </div>
  <div className="collapse-content"> 
    <p>{email}</p>
  </div>
</div></p>
    <p><div tabIndex={0} className="collapse bg-fuchsia-700 text-primary-content focus:bg-fuchsia-400 focus:text-secondary-content">
  <div className="collapse-title">
  Total students
  </div>
  <div className="collapse-content"> 
    <p>{total_students}</p>
  </div>
</div></p>
    <p><div tabIndex={0} className="collapse bg-fuchsia-700 text-primary-content focus:bg-fuchsia-400 focus:text-secondary-content">
  <div className="collapse-title">
   Assigned classes
  </div>
  <div className="collapse-content"> 
    <p>{number_of_classes}</p>
  </div>
</div></p>
    <div className="justify-end card-actions">
      <button className="text-white btn bg-fuchsia-700">See classes</button>
    </div>
  </div>
</div>
        </div>
    );
};

export default InstraItem;