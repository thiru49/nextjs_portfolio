import About from '@/components/About'
import Experience from '@/components/Experience'
import Hero from '@/components/Hero'
import Image from 'next/image'

export default function Home() {
  return (
    <>
    <div className='bg-hero-pattern bg-cover bg-no-repeat bg-center'>
       <Hero/>
    </div>
    </>
  )
}
