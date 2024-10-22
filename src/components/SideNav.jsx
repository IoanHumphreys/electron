import React from 'react'
import { NavLink } from 'react-router-dom'

import { FaHouseChimney, FaUser, FaArrowUpFromBracket, FaGear } from "react-icons/fa6";

const SideNav = () => {
  return (
    <nav className='flex flex-col justify-between items-center w-56 h-screen-neg-title px-4 py-6 border-r-2 border-border-grey bg-bg-nav fixed left-0'>
      <li className='flex flex-col gap-2 w-full text-sm text-text-grey'>
        <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaHouseChimney />Dashboard
        </NavLink>
        <NavLink to='/upload' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaArrowUpFromBracket />Validate
        </NavLink>
        <NavLink to='/upload' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaArrowUpFromBracket />Splines
        </NavLink>
        <NavLink to='/upload' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaArrowUpFromBracket />Post Processing
        </NavLink>
      </li>
      <li className='flex flex-col gap-2 w-full text-sm text-text-grey'>
        <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaUser />Profiles
        </NavLink>
        <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-grey-200'>
          <FaGear />Settings
        </NavLink>
      </li>
    </nav>
  );
}

export default SideNav;