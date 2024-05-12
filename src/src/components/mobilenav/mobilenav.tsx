'use client'
import React from 'react'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { GiHamburgerMenu } from "react-icons/gi";
import Link from 'next/link';
import Image from 'next/image'
import { sideBarLinks } from '@/constants'
import { cn } from '@/lib/utils';
import { usePathname } from 'next/navigation'


const MobileNav = () => {

  const pathName = usePathname();

  return (
    <section className='w-full max-w-[264px]'>
      <Sheet>
        <SheetTrigger asChild>
          <GiHamburgerMenu className='w-8 h-8 text-white cursor-pointer hidden max-sm:block' />
        </SheetTrigger>
        <SheetContent side='left' className='border-none bg-[#1B1E2D]'>
          <Link href='/' className='flex items-center gap-1'> 
            <Image src='' width={32} height={32} alt='Glance Logo' className='max-sm:size-10' />
            <p className='text-[26px] font-extrabold text-white'>Glance</p>
          </Link>
          <div className='flex h-[calc(100vh-72px)] flex-col justify-between overflow-y-auto'>
            <SheetClose asChild>
                <section className='flex h-full flex-col gap-6 pt-16 text-white'>
                  {sideBarLinks.map((links) => {
                    // const isActive = pathName === links.route || pathName.startsWith(links.route);
                    const isActive = pathName === links.route;

                    return (
                      <SheetClose asChild key={links.route}>
                        <Link 
                        href={links.route}
                        key={links.label}
                        className={cn('flex gap-4 item-center p-4 rounded-lg w-full max-w-60', {'bg-blue-500': isActive, 'bg-[#1B1E2D]': !isActive} )}
                        >
                          {links.imgUrl}
                          <p className='font-semibold'>
                            {links.label}
                          </p>
                        </Link>
                      </SheetClose>
                    )
                  })}
                </section>
            </SheetClose>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  )
}

export default MobileNav