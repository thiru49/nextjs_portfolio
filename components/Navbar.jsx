import React from 'react'
import { styles } from './styles'
import Link from 'next/link'
import Image from 'next/image'
import { logo } from '@/assets'
import { navLinks } from '@/constants'

const Navbar = () => {
  return (
    <nav className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}>
      <div className='w-full flex justify-between items-center max-w-7xl'>
        <Link href='/' className='flex items-center gap-2'>
          <Image src={logo} className='w-9 h-9 object-contain'/>
          <p className='text-white flex gap-1 text-[18px] font-bold cursor-pointer'>
             <span>R</span>
             <span className='sm:block hidden'>Thiruppathi</span>
          </p>
        </Link>
        <ul className='list-none hidden sm:flex flex-row gap-10'>
           {navLinks.map(link =>(
            <li key={link.title}>
              <Link href={link.href}>{link.title}</Link>
            </li>
           ))}
        </ul>
      </div>
        
    </nav>
  )
}

export default Navbar