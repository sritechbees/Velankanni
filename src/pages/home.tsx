
import App_layout from '@/component/home/layout/layout/App-layout'
import HeroSection from '@/component/home/layout/layout/HeroSection'
import Packers from '@/component/home/layout/layout/packers'
import ServiceAreas from '@/component/home/layout/layout/ServiceAreas'
import ServicesSwiper from '@/component/home/layout/layout/ServicesSwiper'
import WhyChooseUs from '@/component/home/layout/layout/WhyChooseUs'
  import React from 'react'

function Home() {
  return (

<App_layout>
  

<div>
  <HeroSection/>  
  <ServicesSwiper/>
  <WhyChooseUs/>
  <Packers/>
  <ServiceAreas/>

</div>
</App_layout>


  )
}

export default Home