import React from 'react';
import { AiOutlineMail } from "react-icons/ai";
import { MdOutlinePhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import SingleInfo from './SingleInfo';

const ContactInfo = () => {
  return (
    <div className='flex flex-col gap-4'>
        <SingleInfo text="rajawatrishabhsingh18@gmail.com"  Image={AiOutlineMail}/>
        <SingleInfo text="+91 7054072371"  Image={MdOutlinePhone}/>
        <SingleInfo text="Jalaun, UP, India"  Image={CiLocationOn}/>
    </div>
  )
}

export default ContactInfo;