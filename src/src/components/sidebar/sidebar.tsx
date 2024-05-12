'use client'
import { sideBarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation'
import React from 'react'

const Sidebar = () => {

  const pathName = usePathname();

  return (
    <section className='sticky left-0 top-0 flex h-screen w-fit flex-col justify-between p-6 pt-28 text-white max-sm:hidden lg:w-[264px] bg-[#1B1E2D]'>
      <div className='flex flex-1 flex-col gap-6'> 
        {sideBarLinks.map((links) => {
          const isActive = pathName === links.route || pathName.startsWith(`${links.route}/`);

          return (
            <Link 
            href={links.route}
            key={links.label}
            className={cn('flex gap-4 item-center p-4 rounded-lg justify-start', {'bg-blue-500': isActive, 'bg-[#1B1E2D]': !isActive} )}
            >
              {links.imgUrl}
              <p className='text-lg font-semibold max-lg:hidden'>
                {links.label}
              </p>
            </Link>
          )
        })}
      </div>
    </section>
  )
}

export default Sidebar