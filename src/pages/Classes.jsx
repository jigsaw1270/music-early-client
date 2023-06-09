import React from 'react';
import Classitems from '../components/Classitems';
import useClasses from '../hooks/useClasses';
import Cover from '../components/Cover';
import image1 from '../assets/images/cover/cover2.jpg'

const Classes = () => {
    const [classes] = useClasses();
    return (
       <div>
       <Cover img={image1} title={'ALL OFFERED CLASSES'} subtitle={'Unlock your musical potential and embark on a journey of rhythm, melody, and harmony with our exceptional music classes. Whether youre a complete beginner or an experienced musician, our talented instructors are here to guide and inspire you.'}  ></Cover>
         <div className='grid grid-cols-3 gap-4 py-4'>
            {
                classes.map(item =><Classitems key={item._id} item={item}></Classitems>)
            }
        </div>
       </div>
    );
};

export default Classes;