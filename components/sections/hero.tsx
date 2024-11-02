import React from 'react'
import { LinkedInLogoIcon } from '@radix-ui/react-icons'

import Link from 'next/link'
import { Button } from '../ui/button'
import ShimmerButton from '../ui/shimmer-button'

export default function Hero() {
  return (
    <section className='px-4 md:px-8 py-10 md:py-14 lg:py-24'>
      <div className="max-w-screen-xl mx-auto text-center">
        <div className='flex items-center justify-center gap-x-2 md:gap-x-4'>
          <img className='w-10 h-10 md:w-14 md:h-14 rounded-full' src="https://ik.imagekit.io/utnmvphg1/Developer%20Portfolio/tr:w-56/0.jpg?updatedAt=1730464423895" width="56px" height="56px" alt="Me" />
          <div className="h-10 md:h-14 px-4 md:px-6 border border-neutral-700 flex items-center rounded-full md:text-lg">
            Hi, I'm Lindrit
          </div>
        </div>
        <h1 className='text-center mt-4 md:mt-6 lg:mt-8'>
          <div className='flex items-center justify-center gap-x-2 md:gap-x-4'>
            <span className='h1 inline-block text-primary'>Full Stack</span>
            <span className='inline-block text-sm sm:text-base md:text-lg text-text/80'>// Based in <br /> Kosovo</span>
          </div>
          <div className='flex items-center justify-center'>
            <span className='h1 inline-block text-secondary'>Developer</span>
          </div>
          <div className="flex items-center justify-center gap-x-2 md:gap-x-4">
            <Button variant="outline" className='border-neutral-700 text-sm md:text-base h-10 md:h-12 md:px-4 lg:h-14 lg:text-lg lg:px-6'>
              <span className="w-2 h-2 relative flex">
                <span className='w-2 h-2 rounded-full bg-primary'></span>
                <span className='w-2 h-2 rounded-full bg-primary animate-ping absolute'></span>
              </span>
              Connect on
              <LinkedInLogoIcon />
            </Button>
            <span className='h1 inline-block'>& SEO</span>

          </div>
          <div className="flex items-center justify-center">
            <span className='h1 inline-block text-accent'>Specialist</span>
          </div>
        </h1>
        <p className='md:text-lg lg:text-[22px] text-center max-w-lg mx-auto mt-2 md:mt-4 lg:mt-6'>I develop modern websites that excell on aesthetic, functionality and performance.</p>
        <Link href="/" className='inline-block mt-2 md:mt-4 lg:mt-6'>
          <Button size="lg">Let's chat <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="!size-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 0 1-.923 1.785A5.969 5.969 0 0 0 6 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337Z" />
          </svg>
          </Button>
        </Link>
      </div>
    </section>
  )
}
