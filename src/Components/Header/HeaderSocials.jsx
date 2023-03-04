import React from 'react'
import {FaLinkedinIn} from 'react-icons/fa'
import {FaGithub} from 'react-icons/fa'
import {FaRegEnvelope} from 'react-icons/fa'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/nhathoangdev/" target="_blank"><FaLinkedinIn/></a>
        <a href="https://github.com/nhoang1122" target="_blank"><FaGithub/></a>
        <a href="mailto:johnhoang.dev@gmail.com?subject=Let's%20Code%20And%20Connect" target="_blank"><FaRegEnvelope/></a>
    </div>
  )
}

export default HeaderSocials