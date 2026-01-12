import React, { createContext, useState } from 'react'

import WhatsApp4 from "../assets/WhatsApp4.jpeg"
import WhatsApp5 from "../assets/WhatsApp5.jpeg"
import WhatsApp6 from "../assets/WhatsApp6.jpeg"
import WhatsApp7 from "../assets/WhatsApp7.jpeg"
import WhatsApp8 from "../assets/WhatsApp8.jpeg"
import WhatsApp9 from "../assets/WhatsApp9.jpeg"
import WhatsApp10 from "../assets/WhatsApp10.jpeg"
import WhatsApp11 from "../assets/WhatsApp11.jpeg"
import imageProxy8 from "../assets/imageProxy8.jpg"
import imageProxy2 from "../assets/imageProxy2.jpg"
import imageProxy7 from "../assets/imageProxy7.jpg"

export const osrData=createContext()
const ContexApi = (props) => {

const [first, setFirst] = useState([
  {
  image:imageProxy8,
  title:'Flight Bookings',
  desc:'Book domestic and international flights with ease. OSR Trips offers competitive fares, multiple airline options, and support for changes or cancellations, ensuring smooth air travel.',
  go:'Book Now',
  title2:"Flight ticket Bookings",
  go2:"Book Your Journey",
 },
 {
  image:imageProxy2,
  title:'Holiday Packages',
  desc:'Tailor-made tours for families, couples, and groups. OSR Trips plans every detail so your trips are memorable, seamless, and stress-free',
  go:'See Packages & Offers',
  title2:"Customized Holiday Packages",
  go2:"Discover Your Next Destination",
 },
 {
  image:imageProxy7,
  title:'Visa Assistance',
  desc:'Get expert guidance for tourist, business, and visit visas. We help with documentation, applications, and appointments for a hassle-free process.',
  go:'Reach Out Today',
  title2:"Tourist Visa Assistance",
  go2:"Contact Our Travel Experts",
 }

])

const [second, setSecond] = useState([
  {img:WhatsApp4},
  {img:WhatsApp5},
  {img:WhatsApp6},
  {img:WhatsApp7},
  {img:WhatsApp8},
  {img:WhatsApp9},
  {img:WhatsApp10},
  {img:WhatsApp11},
])

  return (
    <div>
        <osrData.Provider value={{first , second}}>
          {props.children}
         </osrData.Provider>
      
    </div>
  )
}

export default ContexApi