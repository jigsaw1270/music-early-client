import React from 'react';
import rafa from '../assets/images/banner/rafa.jpg'

const Extraa = () => {
    return (
        <div>
            <div className="min-h-screen hero mb-7 rounded-2xl">
  <div className="flex-col hero-content lg:flex-row-reverse">
    <img src={rafa} className="max-w-sm rounded-lg shadow-2xl" />
    <div>
      <h1 className="font-mono text-5xl font-bold">"I think music in itself is healing. <br /> It's an explosive expression of humanity. It's something we are all touched by. <br /> No matter what culture we're from, everyone loves music."</h1>
     
    </div>
  </div>
</div>
        </div>
    );
};

export default Extraa;