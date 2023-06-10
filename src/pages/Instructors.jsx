import React from 'react';

import InstraItem from '../components/InstraItem';

import image1 from '../assets/images/cover/cover3.jpg'
import Cover from '../components/Cover';
import useInstra from '../hooks/useInstra';


const Instructors = () => {
    const [instructors] = useInstra();
    return (
        <div>
        <Cover img={image1} title={'Our Instructors'} subtitle={'Each class is led by a passionate and experienced instructor who will share their expertise and knowledge. They will not only teach you the technical aspects of playing an instrument but also help you develop your own unique style and musical expression.'}></Cover>
            <div className='grid grid-cols-2 gap-3 py-5'>
          {
           instructors.map(item => <InstraItem key={item._id} item={item}></InstraItem>)
          }
        </div>
        </div>
    );
};

export default Instructors;