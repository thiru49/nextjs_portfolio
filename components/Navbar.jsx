'use client';

import React, { useState } from 'react';
import { styles } from './styles';
import Link from 'next/link';
import Image from 'next/image';
import { close, logo, menu } from '@/assets';
import { navLinks } from '@/constants';


const Navbar = () => {
  const [active, setActive] = useState('');
  const [toggle, setToggle] = useState(false);

  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl'>
        <Link href='/' passHref>
          <div className='flex items-center gap-2'>
            <Image src={logo} className='w-9 h-9 object-contain' priority/>
            <p className='text-white flex gap-1 text-[18px] font-bold cursor-pointer'>
              <span>R</span>
              <span className='sm:block hidden'>Thiruppathi</span>
            </p>
          </div>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
          {navLinks.map((link) => (
            <li key={link.title} className={`${active === link.title ? 'text-white' : 'text-secondary'} hover:text-white text-[18px] font-medium cursor-pointer`}>
              <Link href={link.href} passHref>
                <span onClick={() => setActive(link.title)}>{link.title}</span>
              </Link>
            </li>
          ))}
        </ul>
        <div className='sm:hidden flex flex-1 justify-end items-center'>
          <Image src={toggle ? close : menu} alt={`${toggle ? 'close' : 'menu'}`} className='w-[28px] h-[28px] object-contain cursor-pointer' onClick={() => setToggle(!toggle)} />
          <div className={`${!toggle?'hidden':'flex'}
        p-6 black-gradient absolute top-20
        right-0 mx-4 my-2 min-w-[140px] 
        z-10 rounded-xl`}>
           <ul className='list-none flex justify-end items-start flex-col gap-4'>
          {navLinks.map((link) => (
            <li
              key={link.href}
              className={`${
                active === link.title ? 'text-white' : 'text-secondary'
              } font-poppins font-medium text-[16px] cursor-pointer`}
              onClick={()=>{
                setToggle(!toggle)
                setActive(link.title)
              }}
            >
              <Link href={link.href}>{link.title}</Link>
            </li>
          ))}
        </ul>
        </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

