import React from 'react'
import './About.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa6'
import {FiUsers} from 'react-icons/fi'

import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (


    <section id='about'>
<br/>
<br/>
<br/>
<br/>

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

    <div className="container about_container">

    <div className="about_me">
    <div className="about_me-image">
    <img src={ME} alt="About Image" />
    </div>
    </div>


    <div className="about_content">
    <div className="about_cards">


    <article className='about_card'>
    <FaAward className='about_icon' />
    <h5>Experiance</h5>
    <small>+1 Year working</small>
    </article>

    <article className='about_card'>
    <FiUsers className='about_icon' />
    <h5>Clients</h5>
    <small>100+ WorldWide</small>
    </article>


    <article className='about_card'>
    <VscFolderLibrary className='about_icon' />
    <h5>Projects</h5>
    <small>80+ complete project</small>
    </article>
    </div>


    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa recusandae animi ullam aut reprehenderit a vitae.</p>

    <a href="#contact" className='btn btn-primary'>Let's Talk</a>
    </div>

    </div>


    </section>
    

  )
}

export default About
