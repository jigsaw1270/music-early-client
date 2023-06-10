import React from 'react';
import Banner from '../components/Banner';
import Cover from '../components/Cover';
import image1 from '../assets/images/cover/cover4.jpg'
import image2 from '../assets/images/cover/cover1.jpg';
import Popularclasses from '../components/Popularclasses';
import Popularinstructors from '../components/Popularinstructors';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Cover  img={image1} title={'Popular classes'} subtitle={'Discover a wide range of musical instruments to choose from, including the timeless piano, versatile guitar, elegant violin, energetic drums, soulful saxophone, enchanting flute, and many more. Our classes cater to all ages and skill levels, ensuring that everyone can find their perfect fit.'} ></Cover>
            <Popularclasses></Popularclasses>

            <Cover img={image2} title={'Popular instructors'} subtitle={'Each class is led by a passionate and experienced instructor who will share their expertise and knowledge. They will not only teach you the technical aspects of playing an instrument but also help you develop your own unique style and musical expression.'}></Cover>
<Popularinstructors></Popularinstructors>
        </div>
    );
};

export default Home;