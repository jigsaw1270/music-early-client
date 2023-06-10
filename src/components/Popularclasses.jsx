import React from 'react';
import useClasses from '../hooks/useClasses';

const Popularclasses = () => {
    const [classes] = useClasses();


    const sortedclasses = classes.sort(
        (a, b) => b.total_students - a.total_students
      );

      const  firstsixClass = sortedclasses.slice(0,6);

      console.log(firstsixClass);
    return (
        <div className='grid grid-cols-3 gap-4 py-6'>
            {
                firstsixClass.map(item => <div key={item._id}><div className="shadow-xl card w-96 bg-base-100 image-full hover:scale-110">
  <figure><img src={item.image} alt="Shoes" /></figure>
  <div className="text-center align-middle card-body">
    <h2 className='mt-12 font-mono text-4xl font-extrabold'>{item.classname}</h2>
    <p>{item.total_students} students enrolled</p>
   
  </div>
</div></div>)
            }
        </div>
    );
};

export default Popularclasses;