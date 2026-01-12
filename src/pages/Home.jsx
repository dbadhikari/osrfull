import React, { useContext } from 'react';
import imageProxy0 from "../assets/whatsapp1.jpeg";
import imageProxy1 from "../assets/imageProxy1.jpg";
import { osrData } from '../contex/ContexApi';

const Home = () => {
  const goDown = () => {
    document.getElementById("section2").scrollIntoView({ behavior: "smooth" });
  };

  const { first } = useContext(osrData);

  return (
    <div className='relative'>

      {/* Hero Section */}
      <section id="section1" className='h-screen w-full relative'>
        <img className='h-screen w-full object-cover' src={imageProxy0} alt="img" />
        <div className='absolute inset-0 bg-white/50 flex justify-center items-center'></div>
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-5 px-4 text-center md:text-center">
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Welcome to OSR Trips</h1>
          <h3 className='text-lg sm:text-xl md:text-2xl'>Professional travel solutions for flights, hotels, holidays, and visa assistance</h3>
          <p className='max-w-3xl sm:max-w-4xl md:max-w-5xl text-center text-sm sm:text-base md:text-lg'>
            OSR Trips redefines travel through careful planning and dependable service. From seamless bookings to personalized travel solutions, we focus on creating journeys that are simple, comfortable, and truly memorable.
          </p>
          <div className='flex flex-col sm:flex-row gap-3 sm:gap-5 mt-3'>
            <button
              onClick={goDown}
              className='bg-[#ef920d] text-white p-3 sm:p-4 rounded-full text-sm sm:text-base cursor-pointer active:scale-95 transition-transform'
            >
              Get Started
            </button>
            <button className='border border-[#e77109] text-black p-3 sm:p-4 rounded-full text-sm sm:text-base cursor-pointer active:scale-95 transition-transform'>
              <a href="https://wa.me/9779816940114" target="_blank">Contact Us</a>
            </button>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="section2" className='min-h-screen w-full flex justify-center items-center px-4'>
        <div className='flex flex-col lg:flex-row items-center lg:items-stretch gap-8 lg:gap-0 w-full max-w-6xl'>
          <div className='lg:w-3/5 flex flex-col justify-center items-center lg:items-start gap-6 text-center lg:text-left'>
            <h1 className='text-3xl sm:text-4xl md:text-5xl font-bold'>Experience the World with OSR Trips</h1>
            <h3 className='text-lg sm:text-xl md:text-2xl font-medium'>Your Reliable Travel Partner for Journeys Worldwide</h3>
            <p className='text-sm sm:text-base md:text-lg'>
              OSR Trips is a Nepal-based travel agency delivering thoughtfully planned and reliable travel solutions. We provide comprehensive services including flight bookings, hotel reservations, customized holiday packages, and visa assistance. With a strong commitment to transparency, precision, and personalized service, we ensure every journey is seamless, efficient, and stress-free.
            </p>
            <button className='bg-[#ef920d] text-white px-6 py-3 rounded-3xl text-sm sm:text-base active:scale-95 transition-transform'>
              <a href="https://wa.me/9779816940114" target="_blank">Plan Your Trip</a>
            </button>
          </div>
          <div className='lg:w-2/5 w-full flex justify-center lg:justify-end'>
            <img className='h-64 sm:h-80 md:h-96 w-full object-cover rounded-xl' src={imageProxy1} alt="Experience" />
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="section3" className='py-16 w-full bg-[#e8eae3] flex flex-col items-center justify-center gap-8 px-4'>
        <h1 className='text-2xl sm:text-3xl md:text-3xl font-light text-center'>Our Services</h1>
        <h3 className='text-lg sm:text-xl md:text-xl font-light text-center'>Your One-Stop Solution for Stress-Free Travel</h3>
        <p className='font-light max-w-4xl sm:max-w-5xl md:max-w-6xl text-center text-sm sm:text-base md:text-lg'>
          OSR Trips offers end-to-end travel solutions, including flights, hotels, holiday packages, visa support, and transfers, ensuring every trip is seamless, stress-free, and memorable.
        </p>
        <div className='flex flex-wrap justify-center gap-6 mt-8'>
          {first.map((elem, idx) => (
            <div key={idx} className='flex flex-col items-center justify-between w-72 sm:w-80 md:w-96 bg-white rounded-xl shadow-lg p-4 gap-4'>
              <img className='h-40 w-full object-cover rounded-lg' src={elem.image} alt={elem.title} />
              <h1 className='text-xl sm:text-2xl md:text-3xl font-medium'>{elem.title}</h1>
              <p className='text-center text-sm sm:text-base'>{elem.desc}</p>
              <button className='bg-[#eb7b07] text-white px-4 py-2 rounded-full text-sm sm:text-base active:scale-95 transition-transform'><a href="https://wa.me/9779816940114" target="_blank">{elem.go}</a></button>
            </div>
          ))}
        </div>
      </section>

      {/* Quote Section */}
      <section id='section4' className='h-[40vh] w-full bg-[#e77109] flex flex-col justify-center items-center text-white px-4 text-center'>
        <h1 className='text-4xl sm:text-5xl md:text-6xl font-bold'>“</h1>
        <h3 className='text-sm sm:text-base md:text-lg max-w-3xl'>
          Every journey has a story. Share your experiences with OSR Trips and let the world know how we made your travel seamless, memorable, and stress-free.
        </h3>
      </section>

    </div>
  );
};

export default Home;