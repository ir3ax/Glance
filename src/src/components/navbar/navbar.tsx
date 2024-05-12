import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import MobileNav from '../mobilenav/mobilenav'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

const Navbar = () => {
  return (
    <nav className='flex justify-between items-center fixed z-50 w-full bg-[#1B1E2D] px-6 py-4 lg:px-10'>
      <Link href='/' className='flex items-center gap-2'> 
        <Image src='/glance.png' width={36} height={36} alt='Glance Logo' className='max-sm:size-10' />
        <p className='text-[26px] font-extrabold text-white max-sm:hidden mb-1'>Glance</p>
      </Link>
      <div className='flex justify-between items-center gap-5'>
        <SignedIn>
          <UserButton />
        </SignedIn>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <MobileNav />
      </div>
    </nav>
  )
}

export default Navbar