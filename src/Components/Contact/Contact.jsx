import React from 'react'
import './contact.css'

import {MdOutlineEmail} from 'react-icons/md'
import {AiOutlineLinkedin} from 'react-icons/ai'
import {CgFileDocument} from 'react-icons/cg'
import {FiMessageCircle} from 'react-icons/fi'

import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_b3tzwj3', 'template_doe61lr', form.current, 'uB0qhN5nYfzTipHHM')
    e.target.reset()
     
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className='contact__option-icon'/>
            <h4>E-Mail</h4>
            <h5>johnhoang.dev@gmail.com</h5>
            <a href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Code%20And%20Connect" target="_blank" rel='noreferrer'>Send E-Mail</a>
          </article>
          <article className="contact__option">
            <AiOutlineLinkedin className='contact__option-icon'/>
            <h4>LinkedIn</h4>
            <h5>nhathoangdev</h5>
            <a href="https://www.linkedin.com/in/nhathoangdev/" target="_blank" rel='noreferrer'>LinkedIn Profile</a>
          </article>
          <article className="contact__option">
            <CgFileDocument className='contact__option-icon'/>
            <h4>Resume</h4>
            <h5>John Nhat Hoang</h5>
            <a href="https://docs.google.com/document/d/1m7EytLBp8kYSFhJ9dCrG9OqjnlO-OVzzKAxn5qNqlzw/edit" target="_blank" rel='noreferrer'>Download Resume</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your E-Mail' required />
          <textarea name="message" placeholder='Your Message' rows="7" required></textarea>
          <button type='submit' className='btn btn-primary '>Send Message <FiMessageCircle /></button>
        </form>
      </div>
    </section>
  )
}

export default Contact