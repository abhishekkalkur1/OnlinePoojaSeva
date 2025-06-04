import React from 'react';
import navagraha from '../videos/navagraha.mp4';
import chandi from '../videos/chandi.mp4';

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[5%] md:mb-[35%] px-4 grid lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold text-amber-500'>Video Galary</h3>
        <p className='pt-4'>
          See Our Poojas in Action - Navagraha Homa performed for a family . 
          
          And Chandi homa performed for a family in New Jersey
        </p>
      </div>

<div className='grid grid-cols-2 col-span-2 gap-2 mb-6'>
        {/* Video 1 */}
        <div className='relative'>
          <video 
            controls
            className='w-full h-full object-cover rounded-lg shadow-md'
          >
            <source src={navagraha} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm'>
            Navagraha Homa
          </div>
        </div>

        {/* Video 2 */}
        <div className='relative'>
          <video 
            controls
            className='w-full h-full object-cover rounded-lg shadow-md'
          >
            <source src={chandi} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className='absolute bottom-2 left-2 bg-black/50 text-white px-2 py-1 rounded text-sm'>
            Chandi Homa
          </div>
          </div>
    </div>
          </div>
    
  );
};

export default Rooms;
