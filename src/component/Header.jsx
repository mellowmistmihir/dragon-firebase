import React from 'react';
import logo from "../assets/logo.png"
import { format } from 'date-fns';
const Header = () => {
    return (
        <div className='flex justify-center items-center flex-col gap-3 my-8'>
            <img src={logo} alt="" />
            <p className='text-lg text-accent'>Journalism Without Fear or Favour</p>
            
            <p className='font-semibold text-accent'>{format(new Date(),"EEEE , MMMM d , yyyy" )}</p>
        </div>
    );
};

export default Header;