"use client"
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
import { useEffect } from 'react';
import { About, Footer, Header, Hero, Popular, Subscribe, Trending } from '@/public/components'
export default function Home() {
  
  useEffect(() => {
    AOS.init({
      duration: 1000,
      offset: 100,
    });
    
  }, [])
  
  return (
    <>

    <Header/>
    <Hero/>
    <About/>
    <Popular/>
    <Trending/>
    <Subscribe/>
    <Footer/>

    </>
  )
}
