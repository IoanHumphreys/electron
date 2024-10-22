import React from 'react';
import { NavLink } from 'react-router-dom';
import { CheckCheck, Settings, LayoutGrid, User } from 'lucide-react';

const SideNav = () => {
  return (
    <nav className='flex flex-col justify-between items-center w-56 h-screen-neg-title px-4 py-6 border-r-2 border-border-subtle bg-primary-dark fixed left-0'>
      <div className='w-full'>
        <li className='flex flex-col gap-2 w-full text-sm text-text-secondary'>
          <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-hover-highlight'>
            <LayoutGrid size={17} />Dashboard
          </NavLink>
          <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-hover-highlight'>
          <CheckCheck size={17} />Validate Assets
          </NavLink>
          
        </li>
      </div>
      <li className='flex flex-col gap-2 w-full text-sm text-text-secondary'>
        <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-hover-highlight'>
          <User size={17} />Profiles
        </NavLink>
        <NavLink to='/' className='flex items-center px-4 py-2 gap-4 content-center rounded-md hover:bg-hover-highlight'>
          <Settings size={17} />Settings
        </NavLink>
      </li>
    </nav>
  );
}

export default SideNav;