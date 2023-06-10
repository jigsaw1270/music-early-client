import React from 'react';
import useInstra from '../hooks/useInstra';



const Popularinstructors = () => {
    const [instructor] = useInstra();


    const sortedclasses = instructor.sort(
        (a, b) => b.total_students - a.total_students
      );

      const  firstsixClass = sortedclasses.slice(0,6);

      console.log(firstsixClass);
    return (
        <div className='grid grid-cols-3 gap-4 py-6'>
            {
                firstsixClass.map(item => <div key={item._id}><div className="h-screen shadow-xl card w-96 bg-base-100 image-full hover:scale-110">
  <figure><img  src={item.image} alt="Shoes" /></figure>
  <div className="mt-12 text-center align-middle card-body">
    <h2 className='font-mono text-4xl font-extrabold '>{item.name}</h2>
    <p>{item.total_students} students enrolled</p>
    <p>{item.number_of_classes} classes taking currently</p>
   
  </div>
</div></div>)
            }
        </div>
    );
};

export default Popularinstructors;