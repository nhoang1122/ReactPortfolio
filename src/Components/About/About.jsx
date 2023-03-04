import React from 'react'
import './about.css'
import CV from '../../Assets/JohnNhatHoang-PortfolioResume.pdf'
import ME from '../../Assets/PhotoPic.jpg'
import {FiDownload} from 'react-icons/fi'


const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know Me</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>
        <div className="about__content">
          <p>
            Howdy! I am a Full-Stack Developer from Houston, TX. I have hands-on experience coding websites and applications efficiently using modern HTML, CSS, JavaScript, React, NodeJS, and SQL.
            {<br></br>}
            {<br></br>}
            Building state-of-the-art, easy to use, responsive, user-friendly websites and applications is truly a passion of mine. In addition to my knowledge base, I actively seek out new technologies and stay up-to-date on industry trends and advancements. This has allowed me to stay ahead of the curve and deliver exceptional projects and applications.
            {<br></br>}
            {<br></br>}
            Whenever I am not coding, you'll find me whipping up a new recipe, playing Valorant, hanging out with my dogs Liam and Lucy, or binge watching an Anime.
            {<br></br>}
          </p>
          <p></p>
          <a href={CV} className='btn btn-primary'>Download Resume <FiDownload/></a>
        </div>
      </div>
    </section>
  )
}

export default About