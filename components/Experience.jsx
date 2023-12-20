import React from 'react'
import {motion} from 'framer-motion';

const Experience = () => {
  return (
    <section className='section '>
      <motion.div>
        <p className={styles.sectionSubText}>What I have done so far</p>
        <h2 className={styles.sectionHeadText}>Life Journey</h2>
      </motion.div>
    </section>
  )
}

export default Experience