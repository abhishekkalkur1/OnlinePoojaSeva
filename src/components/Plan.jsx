import React from 'react';
import durga1 from '../images/durga1.jpg';
import durga2 from '../images/durga2.jpg';
import durga3 from '../images/durga3.jpg';
import durga4 from '../images/durga4.png';
import durga5 from '../images/durga5.jpg';

const Plan = () => {
  return (
    <div className='max-w-[1400px] m-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
      {/* Left Side */}
      <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={durga1}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={durga3}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={durga4}
          alt='/'
        />
        <img
          className='row-span-3 object-cover w-full h-full p-2'
          src={durga2}
          alt='/'
        />
        <img
          className='row-span-2 object-cover w-full h-full p-2'
          src={durga5}
          alt='/'
        />
      </div>
      {/* Right Side */}
      <div className='flex flex-col h-full justify-center'>
        <h3 className='text-5xl md:text-6xl font-bold text-amber-500'>What We Offer</h3><br/>
        <p className='text-2xl py-6'>
       We perform traditional Vedic poojas, homas, and yagyas in India — on your behalf — no matter where you live.
Our experienced Pandits conduct each ritual with full devotion and adherence to scriptures.
You’ll receive:
        </p>
<p className='pb-6'>
  ✅ Personalized pooja with your Name & Gotra <br /><br/>
  📹 Live video stream or recording <br /><br/>
  🪔 All rituals performed in sacred Indian temples or homes <br /><br/>
  📦 Optional Prasadam delivery (available in select countries)
</p>
        <div>
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

export default Plan;
