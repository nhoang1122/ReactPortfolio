import React from 'react'
import CV from '../../Assets/JohnNhatHoang-PortfolioResume.pdf'
import {FaRegEnvelope} from 'react-icons/fa'
import {FiDownload} from 'react-icons/fi'

const CallToAction = () => {
  return (
    <div className='cta'>
        <a href={CV} className='btn'>Resume <FiDownload/></a>
        <a href="#contact" className='btn btn-primary'>Contact <FaRegEnvelope/></a>
    </div>
  )
}

export default CallToAction