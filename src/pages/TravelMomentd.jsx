import React, { useContext } from 'react';
import { osrData } from '../contex/ContexApi';

const TravelMomentd = () => {
  const { second } = useContext(osrData);

  return (
    <div>
      <section id='section1' className='w-full bg-[#e8eae3]'>
        <div className='px-4 sm:px-8 md:px-16 pt-30 py-12'>
          {/* Heading */}
          <h1 className='text-2xl sm:text-3xl md:text-4xl font-light pb-2'>Explore the gallery of memorable trips and experiences with OSR Trips</h1>
          <h3 className='text-sm sm:text-base md:text-lg font-light pb-6'>
            Take a visual journey with OSR Trips. Browse photos from our tours, trips, and happy travelers to see how we make every journey memorable. Discover destinations, experiences, and moments captured on our curated trips.
          </h3>

          {/* Gallery Grid */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
            {second.map((elem, idx) => (
              <div key={idx} className='relative w-full h-64 sm:h-72 md:h-80 lg:h-64 group rounded-lg overflow-hidden shadow-lg'>
                <img className='w-full h-full object-cover' src={elem.img} alt='img' />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TravelMomentd;