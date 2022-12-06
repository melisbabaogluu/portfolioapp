import React from 'react'
import './about.css'
import ME from '../../Assets/me.png'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5> Get To Know</h5>
      <h2>About Me</h2>

      <div className=" container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>
                Experience
              </h5>
              <small>
                3+ years working
              </small>
            </article>

            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>
                Client
              </h5>
              <small>
                200+ Worldwide
              </small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>
                Projects
              </h5>
              <small>
                80+ completed
              </small>
            </article>
          </div>

          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

      </div>

    </section>
  )
}

export default About