import React from 'react'
import './footer.css'

import {AiOutlineLinkedin} from 'react-icons/ai'
import {AiOutlineGithub} from 'react-icons/ai'

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>JohnHoang</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/nhathoangdev/" target="_blank" rel='noreferrer'><AiOutlineLinkedin className="footer__socials-icon"/></a>
        <a href="https://github.com/nhoang1122" target="_blank" rel='noreferrer' className="footer__socials-icon"><AiOutlineGithub /></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; John Nhat Hoang. All rights reserved.</small>
      </div>

    </footer>
  )
}

export default Footer