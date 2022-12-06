import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://github.com/" target="blank"><FaGithub/></a>
        <a href="https://tr.linkedin.com/"><BsLinkedin/></a>
    </div>

  )
}

export default HeaderSocials