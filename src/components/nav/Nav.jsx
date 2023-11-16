import React from 'react'
import './Nav.css'
import {AiFillHome} from 'react-icons/ai'

import {AiOutlineUser} from 'react-icons/ai'

import {BiSolidBookBookmark} from 'react-icons/bi'


import {RiServiceFill} from 'react-icons/ri'

import {AiFillMessage} from 'react-icons/ai'

import { useState } from 'react'


const Nav = () => {

const [activeNav, setActiveNav] = useState('#')



  return (
<nav>

    <a href="#" onClick={
      () => setActiveNav('#')
    } className={activeNav === '#' ? 'active' : ''}>
      < AiFillHome/>
    </a>
    <a href="#about" onClick={
      () => setActiveNav('#about')
    } className={activeNav === '#about' ? 'active' : ''}>
      <AiOutlineUser />
    </a>
    <a href="#experiance" onClick={
      () => setActiveNav('#experiance')
    } className={activeNav === '#experiance' ? 'active' : ''}>
      <BiSolidBookBookmark />
    </a>

    <a href="#service" onClick={
      () => setActiveNav('#service')
    } className={activeNav === '#service' ? 'active' : ''}>
      <RiServiceFill />
    </a>
    <a href="#contact" onClick={
      () => setActiveNav('#contact')
    } className={activeNav === '#contact' ? 'active' : ''}>
      <AiFillMessage />
    </a>    
</nav>
  )
}

export default Nav
