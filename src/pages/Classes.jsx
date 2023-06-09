import React from 'react';
import Classitems from '../components/Classitems';
import useClasses from '../hooks/useClasses';

const Classes = () => {
    const [classes] = useClasses();
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                classes.map(item =><Classitems key={item._id} item={item}></Classitems>)
            }
        </div>
    );
};

export default Classes;