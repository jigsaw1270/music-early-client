
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


import banner1 from '../assets/images/banner/img1.jpg'
import banner2 from '../assets/images/banner/img2.png'
import banner3 from '../assets/images/banner/img3.jpg'
import banner4 from '../assets/images/banner/img4.jpg'
import banner5 from '../assets/images/banner/img5.jpg'



const Banner = () => {
    return (
        <Carousel>
        <div >
            <img  src={banner1} />
           <div className='absolute top-14 h-14 w-14 start-14'>
           <p className='text-6xl text-violet-400'>Learn your dream instrument</p>
           </div>
        </div>
        <div>
            <img  src={banner2} />
        </div>
        <div>
            <img src={banner3} />
        </div>
        <div>
            <img src={banner4} />
        </div>
   
        <div>
            <img src={banner5} />
        </div>
   
    </Carousel>
    );
};

export default Banner;