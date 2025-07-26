import React from 'react';
import { FaLinkedinIn } from "react-icons/fa";
import { SiGithub } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";
import SingleContactSocial from './SingleContactSocial';

const ContactSocial = () => {
  return (
    <div className='flex gap-4'>
        <SingleContactSocial link="https://www.linkedin.com/in/rishabh-singh18/" Icon={FaLinkedinIn}/>
        <SingleContactSocial link="https://github.com/risrajawat" Icon={SiGithub}/>
        <SingleContactSocial link="https://t.me/codinglearner1" Icon={PiTelegramLogo}/>
    </div>
  )
}

export default ContactSocial;