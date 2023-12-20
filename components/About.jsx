'use client'

import { Tilt } from 'react-tilt';
import { motion } from 'framer-motion';
import { styles } from './styles';
import { fadeIn, textVariant } from '@/utils/motion';
import { services } from '@/constants';
import Image from 'next/image';


const ServiceCard = ({index, title, icon})=>{
    return(
      <Tilt className="sm:w-[250px] w-[80%]">
      <motion.div
        variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          options={{
            max: 5,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex justify-evenly items-center flex-col"
        >
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
        </div>
      </motion.div>
    </Tilt>
    )
}



const About = () => {
  return (
   <section className='section'>
      <motion.div variants={textVariant} >
        <p className={`${styles.sectionSubText} xl:text-[30px]`}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview</h2>
      </motion.div>
      <motion.p variants={fadeIn('','',0.1,1)}
      className='mt-4 text-secondary sm:text-[20px] xl:text-[30px] max-w-3xl sm:leading-[30px]xl:leading-[40px] indent-16'>
         I'm a skilled in Javascript and Knowledge in frameworks like React, next.js, node.js, TailwindCss. I'm a quick learner and collaborate closely with clients or Team to create efficient, scalable, and user-friendly solutions that solve real-world problems. Let's work together to bring your idea to life!
      </motion.p>
      <div className='mt-10 flex flex-wrap gap-10'>
         {services.map((service,index)=>(
          <ServiceCard key={service.title} index={index} {...service}/>
         ))}
      </div>
   </section>
   
  
  )
}

export default About