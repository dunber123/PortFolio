import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaDiscord} from 'react-icons/fa'
import {FaSteamSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank"><FaDiscord/></a>
        <a href="https://dribbble.com" target="_blank"><FaSteamSquare/></a>
    </div>
  )
}

export default HeaderSocials