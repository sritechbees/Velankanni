  import Swipper from '@/component/home/layout/common/swiper'
  import App_layout from '@/component/home/layout/layout/App-layout'
  import React from 'react'

function Home() {
  return (

<App_layout>
  
<Swipper/>
<div>
      <div
      data-aos="fade-right"
      data-aos-offset="100"
      data-aos-delay="50"
      data-aos-duration="1000"
      data-aos-mirror="true" className=" space-y-6 mb-20">
        
      <h1 
          data-aos-delay="100" className="text-3xl font-bold" data-aos="fade-up">
        Velankanni Packers and Movers
      </h1>
      <p className="text-lg" data-aos="fade-right"> 
        We provide reliable moving services tailored to your needs.
      </p>
      <button
        className="px-4 py-2 bg-blue-600 text-white rounded"
        data-aos="zoom-in"
      >
        Get a Quote
      </button>
    </div>
    </div>
</App_layout>
  )
}

export default Home