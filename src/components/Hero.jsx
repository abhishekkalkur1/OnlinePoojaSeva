import React from 'react';
import homepageImage from '../images/homepage.jpg';

const Hero = () => {
  return (
    <div className='w-full h-screen'>
      <img
        className='top-0 left-0 w-full h-screen object-cover'
       src={homepageImage}
        alt='/'
      />
      <div className='bg-black/30 absolute top-0 left-0 w-full h-screen' />
      <div className='absolute top-0 w-full h-full flex flex-col justify-center text-white'>
        <div className='md:left-[10%] max-w-[1100px] m-auto absolute p-4'>
         
<h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl text-amber-500'>
  🕉️ Experience Authentic Vedic Poojas from India 
</h1>
          <br></br>
          <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Performed by well knowledged Pandits in India | Live Video | Personalized Sankalp | Courier Prasad | Starting at just $121
          </p>
               <p className='max-w-[600px] drop-shadow-2xl py-2 text-xl'>
            Specially for NRI & Hinduism deep believers abroad 
          </p>
<button 
  className="border-4 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-white font-semibold py-2.5 px-6 rounded-lg transition-colors duration-300"
  onClick={() => window.open("https://forms.gle/BnreXbJHP2C4bE2W9", "_blank")}
>
  Book a Free Consultation
</button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
