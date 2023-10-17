import React from 'react'
import { BsLinkedin } from "react-icons/bs";
import { IoLogoGithub } from "react-icons/io";
import { AiFillYoutube } from "react-icons/ai";
import { BsInstagram } from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
      <a href="https://www.instagram.com/dhruv_jain19/" target="_blank" rel="noreferrer"><BsInstagram /></a>
      <a href="https://www.linkedin.com/in/dhruvjain19/" target="_blank" rel="noreferrer"><BsLinkedin /></a>
      <a href="https://github.com/DhruvJain019" target="_blank" rel="noreferrer"><IoLogoGithub /></a>
    </div>
  )
}

export default HeaderSocials