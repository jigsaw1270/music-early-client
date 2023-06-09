import React from 'react';
import useInstructors from '../hooks/useInstructors';
import InstraItem from '../components/InstraItem';

const Instructors = () => {
    const [instructors] = useInstructors();
    return (
        <div className='grid grid-cols-3 gap-3 py-5'>
          {
            instructors.map(item => <InstraItem key={item._id} item={item}></InstraItem>)
          }
        </div>
    );
};

export default Instructors;