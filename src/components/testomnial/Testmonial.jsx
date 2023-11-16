import React from 'react'
import './Testmonial.css'
import AVTR1 from '../../assets/avatar1.jpg'

import AVTR2 from '../../assets/avatar2.jpg'

import AVTR3 from '../../assets/avatar3.jpg'

import AVTR4 from '../../assets/avatar4.jpg'


// import Swiper core and required modules
import {Pagination} from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';






const data = [

{
avatar: AVTR1,
name: 'Tina Snow',
review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cupiditate voluptatibus ab, accusantium quibusdam id animi?',
},

{
avatar: AVTR2,
name: 'Shatta Wale',
review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cupiditate voluptatibus ab, accusantium quibusdam id animi?',},

{
avatar: AVTR3,
name: 'Kwame Despit',
review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cupiditate voluptatibus ab, accusantium quibusdam id animi?',},
{
avatar: AVTR4,
name: 'Gien Chander',
review: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio cupiditate voluptatibus ab, accusantium quibusdam id animi?',},
]


const Testmonial = () => {
  return (
    <section id='testmonial'>
     <h5>Review from clients</h5> 
    <h2>Testmonials</h2>


<Swiper className="container testmonials_container">


    <Swiper
      // install Swiper modules
      modules={[Pagination]}
      spaceBetween={40}
      slidesPerView={1}
      
      pagination={{ clickable: true }}

    />


{
  data.map(({avatar, name, review,}, index) => {

return (
  <SwiperSlide 
  key={index}
  className="testmonial">
<div className="client_avatar">

<img src={avatar} />
</div>
<h5 className='client_name'>{name}</h5>
<small className='client_review'>
{review}
</small>


  


</SwiperSlide>
)


  })
}










</Swiper>
    </section>
  )
}

export default Testmonial