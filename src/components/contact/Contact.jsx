import React from 'react'
import './Contact.css'
import {HiOutlineMail} from 'react-icons/hi'

import { RiMessengerLine } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa";


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
    <h2>Contact Me</h2>

    <div className="container contact_container"
    >
      <div className="contact_options">

    <article className="contact_option">
      <HiOutlineMail className='contact_option-icon'/>
    <h4>Email</h4>
    <h5> amalnosier20@gmail</h5>
    <a href="mailto:amalnosier20@gmail.com">Send A Message</a>

    </article>





  <article className="contact_option">
<RiMessengerLine />
    <h4>Messanger</h4>
    <h5>React Projects</h5>
    <a href="mailto:amalnosier20@gmail.com">Send A Message</a>

    </article>
  <article className="contact_option">
<FaWhatsapp />
    <h4>Whatsapp</h4>
    <h5>01017925072</h5>
    <a href="https://api.whatsapp.com/send?phone01017925072">Send A Message</a>

    </article>    


      </div>
    <form action="">

    <input type="text" name='name' placeholder='Your Full Name' required />
    <input type="email" name='email' placeholder='Your Email' required  />
    <textarea name="message" rows="7" placeholder='Your Message'></textarea>
    <button type='submit' className='btn btn-primary'>Send Message</button>
    </form>
    </div>



    </section>
  )
}

export default Contact
