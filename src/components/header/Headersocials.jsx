import React from 'react'
import {BsGithub} from 'react-icons/bs'

import {BsLinkedin} from 'react-icons/bs'

import {BsDribbble} from 'react-icons/bs'



const Headersocials = () => {
  return (
    <div className='header_socials'>
        <a href="https://github.com/topics/react" target='_blank'><BsGithub/></a>
         <a href="https://www.linkedin.com/learning/topics/react-js" target='_blank'><BsLinkedin /></a>
        <a href="https://dribbble.com/" target='_blank'><BsDribbble /></a>
       
      
    </div>
  )
}

export default Headersocials
