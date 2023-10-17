import React from 'react'
import './about.css'
import { FaAward } from 'react-icons/fa'
import { RiUser3Line } from 'react-icons/ri'
import { TiFolder } from "react-icons/ti"
import ME from '../../assets/avatar2.png'

const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="about-me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FaAward className='about__icon' />
              <h5>Education</h5>
              <small>Vellore Institute of Technology, Vellore</small>
              <small>Information Technology </small>
            </article>

            <article className='about__card'>
              <TiFolder className='about__icon' />
              <h5>Projects</h5>
              <small>3+ Completed</small>
            </article>
          </div>

          <p>"Hello everyone, I'm Dhruv Jain, a pre-final year student at VIT Vellore,pursuing BTech in Information Technology. I have a passion for learning new technologies, currently delving into Web Development and Machine Learning. I'm dedicated to continuous self-improvement, and in my free time, I enjoy diving into the world of finance. Explore my journey through technology on this site"
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About