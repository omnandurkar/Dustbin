import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Dustbins from '../../components/HoComps/Dubstbins/Dustbins'
import BannerSection from '../../components/HoComps/Banner/Banner'
import Features from '../../components/HoComps/Features/Features'
import FAQs from '../../components/HoComps/FAQs/FAQs'
import Stats from '../../components/HoComps/Stats/Stats'
import Newsletter from '../../components/HoComps/Newsletter'
import Footer from '../../components/Footer/Footer'
import CTA from '../../components/CTA'
import Team from '../../components/Team'
import HoReviews from '../../components/HoReviews'
import Steps from '../../components/HoComps/Steps';

import Aos from 'aos';
import 'aos/dist/aos.css'
import { useEffect } from 'react';

export default function Home() {

  useEffect(()=>{
    Aos.init({duration : 1000, delay : 300});
})
  return (
    <>
    <Navbar/>

    <BannerSection/>

    {/* <Dustbins/> */}

    <Features/>

    <CTA/>

    <Steps/>

    <Stats/>

    <HoReviews/>

    <Team/>

    <FAQs/>

    <Newsletter/>

<hr className='my-4'/>

    <Footer/>
    
    
    </>
  )
}
