import React from 'react';
import { Field, Form, Formik } from 'formik';

const GetInTouch = () => {
  return (
    <div>

      {/* Hero Section */}
      <section id="section1" className='w-full bg-black text-white flex flex-col justify-center items-center py-16 px-4 text-center sm:py-20'>
        <h1 className='text-3xl pt-20 sm:text-4xl md:text-5xl font-light text-[#e77109] mb-4'>Get Your Personalized Travel Quote</h1>
        <h2 className='text-lg sm:text-xl md:text-2xl font-light mb-2'>Share your travel plans, and we’ll provide a personalized quote tailored just for you.</h2>
        <h3 className='text-sm sm:text-base md:text-lg font-light max-w-3xl'>Your comfort and convenience are our priority—let us know how we can help</h3>
      </section>

      {/* Contact Form Section */}
      <section id="section2" className='w-full bg-white py-12 px-4 sm:px-8 md:px-16'>
        <div className='max-w-4xl mx-auto flex flex-col gap-6'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-light pb-2'>Contact Form</h1>
          <p className='text-sm sm:text-base md:text-lg font-extralight'>
            Complete the form below with your travel details, and our experts at OSR Trips will craft a customized travel plan and quote that fits your needs.
          </p>

          <Formik
            initialValues={{ name: '', phone: "", email: '', message: '' }}
            onSubmit={(value, { resetForm }) => {
              fetch("https://formsubmit.co/ajax/osrtrips@gmail.com", {
                method: "POST",
                headers: { "Content-Type": "application/json", Accept: "application/json" },
                body: JSON.stringify(value),
              })
                .then((res) => res.json())
                .then((data) => {
                  alert("Message sent!");
                  resetForm();
                })
                .catch((err) => console.log(err));
            }}
          >
            <Form className='flex flex-col gap-4'>

              {/* Name & Phone */}
              <div className='flex flex-col md:flex-row gap-4 md:gap-6'>
                <div className='flex flex-col w-full'>
                  <label htmlFor='name' className='text-sm sm:text-base'>Name</label>
                  <Field id="name" name="name" type="text" required className="border w-full h-10 px-2 rounded-md" />
                </div>
                <div className='flex flex-col w-full'>
                  <label htmlFor='phone' className='text-sm sm:text-base'>Phone No</label>
                  <Field id='phone' name='phone' type='number' required className="border w-full h-10 px-2 rounded-md" />
                </div>
              </div>

              {/* Email */}
              <div className='flex flex-col w-full'>
                <label htmlFor='email' className='text-sm sm:text-base'>Email</label>
                <Field id="email" name="email" type="email" required className="border w-full h-10 px-2 rounded-md" />
              </div>

              {/* Message */}
              <div className='flex flex-col w-full'>
                <label htmlFor='message' className='text-sm sm:text-base'>Message</label>
                <Field as="textarea" id="message" name="message" className="border w-full h-40 px-2 rounded-md" />
              </div>

              {/* Submit Button */}
              <div className='flex justify-center md:justify-end'>
                <button type='submit' className='px-6 py-3 bg-[#eb7b07] rounded-full text-white text-sm sm:text-base active:scale-95 transition-transform mt-2'>
                  Submit
                </button>
              </div>

            </Form>
          </Formik>
        </div>
      </section>

      {/* Find Us Section */}
      <section id="section3" className='w-full bg-[#e77109] text-white py-12 px-4 sm:px-8 md:px-16 flex flex-col lg:flex-row gap-8'>
        <div className='flex-1 flex flex-col gap-4 text-center lg:text-left'>
          <h1 className='text-2xl sm:text-3xl md:text-4xl'>Find Us</h1>
          <h2 className='text-lg sm:text-xl md:text-2xl'>Location</h2>
          <p>Bishalnagar-5, Kathmandu, Nepal</p>
          <h2 className='text-lg sm:text-xl md:text-2xl mt-4'>Contact</h2>
          <p>Tel: +977-9816940114</p>
          <p>Email: osrtrips@gmail.com</p>
          <h2 className='text-lg sm:text-xl md:text-2xl mt-4'>Hours</h2>
          <p>Sunday-Friday: 9:00 AM - 6:00 PM</p>
          <p>Saturday: 10:30 AM - 4:00 PM</p>
        </div>

        <div className='flex-1 h-64 sm:h-80 md:h-96 w-full rounded-lg overflow-hidden shadow-lg'>
<iframe
  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3775.7721996577025!2d85.33594587212711!3d27.721433413020165!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb196c4906da23%3A0xd802818622745323!2sP8CQ%2BG53%2C%20Pipal%20Bot%20Marg%2C%20Kathmandu%2C%20Bagmati%20Province%2044616!5e0!3m2!1sen!2snp!4v1790331695312!5m2!1sen!2snp"
  className="w-full h-full"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="strict-origin-when-cross-origin"
/>

        </div>
      </section>

    </div>
  )
}

export default GetInTouch;
