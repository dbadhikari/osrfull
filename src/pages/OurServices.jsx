import React, { useContext } from 'react';
import { osrData } from '../contex/ContexApi';

const OurServices = () => {
  const { first } = useContext(osrData);

  return (
    <div className='w-full'>

      {/* Services Section */}
      <section id="section1" className='bg-[#e8eae3] w-full py-2 pt-30 px-4 sm:px-8 md:px-16'>
        <div className='max-w-7xl mx-auto flex flex-col gap-8'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extralight mb-2 text-center md:text-left'>Our Services</h1>
          <h3 className='text-lg sm:text-xl md:text-2xl font-light mb-2 text-center md:text-left'>Expertly Managed Services to Make Your Trip Effortless</h3>
          <p className='text-sm sm:text-base md:text-lg mb-10 text-center md:text-left'>
            OSR Trips provides end-to-end travel solutions including flights, hotels, holiday packages, visa support, and transfers, ensuring every journey is seamless and stress-free.
          </p>

          {first.map((elem, idx) => (
            <div key={idx} className='flex flex-col lg:flex-row gap-6 mb-10 items-center'>
              
              {/* Image */}
              <div className='w-full lg:w-1/3 h-64 sm:h-72 md:h-80 lg:h-72 flex-shrink-0'>
                <img className='w-full h-full object-cover rounded-xl' src={elem.image} alt={elem.title2} />
              </div>

              {/* Content */}
              <div className='w-full lg:w-2/3 flex flex-col justify-center gap-4 text-center lg:text-left'>
                <h1 className='text-2xl sm:text-3xl md:text-4xl font-extralight'>{elem.title2}</h1>
                <p className='text-sm sm:text-base md:text-lg'>{elem.desc}</p>
                <button className='self-center lg:self-start bg-[#eb7b07] text-white px-5 py-3 rounded-full text-sm sm:text-base md:text-base active:scale-95 transition-transform'>
                  <a href="https://wa.me/9779816940114" target="_blank">{elem.go2}</a>
                </button>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Question Section */}
      <section id='section2' className='w-full bg-[#e77109] text-white py-12 px-4 sm:px-8 md:px-16 flex flex-col md:flex-row justify-between gap-8'>
        <div className='flex-1 text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold pb-2'>Have A Question?</h1>
          <h2 className='text-sm sm:text-base md:text-xl'>Get Answers and Expert Guidance for Your Journey.</h2>
        </div>
        <div className='flex-1 flex flex-col justify-center items-center md:items-start gap-4 text-center md:text-left'>
          <p className='text-sm sm:text-base md:text-lg pb-4'>
            Reach out to OSR Trips for quick, reliable answers and expert travel guidance.
          </p>
          <div className='flex flex-col sm:flex-row gap-4'>
            <button className='px-5 py-3 bg-white text-black rounded-full active:scale-95 transition-transform'><a href="https://wa.me/9779816940114" target="_blank">Chat on WhatsApp</a></button>
            <button className='px-5 py-3 border border-white rounded-full active:scale-95 transition-transform'><a href="https://wa.me/9779816940114" target="_blank">Contact Us</a></button>
          </div>
        </div>
      </section>

    </div>
  );
};

export default OurServices;