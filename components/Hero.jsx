'use client'
import {motion} from 'framer-motion'
import React from 'react';
import { styles } from './styles';
import { ComputersCanvas } from './canvas';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div className={`${styles.paddingX} absolute inset-0 top-[100px] max-w-7xl mx-auto flex flex-row items-start gap-5`}>
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915eff]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white `}>Hi, I'm
            <span className='text-[#915eff]'>Thiruppathi</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            I develop user interfaces <br className='sm:block hidden' />and web applications
          </p>
        </div>
      </div>
      <ComputersCanvas/>
      <div className='absolute bottom-10  w-full flex justify-center items-center '>
        <Link href='/about'>
          <div className='sm:w-[35px] sm:h-[64px] w-[20px] h-8 rounded-3xl sm:border-4 border-2 flex justify-center items-center'>
             <motion.div animate={{
              y:[0,24,0]
             }} transition={{ duration:1.5,repeat:Infinity,repeatType:'loop'}} className='w-1.5 h-1.5 sm:w-3 sm:h-3 rounded-full bg-secondary mb-1'/>
          </div>
        </Link>
      </div>
    </section>
  );
};

export default Hero;
