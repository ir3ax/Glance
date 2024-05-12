import React, { ReactNode } from 'react'

interface HomeCardProps {
    img: ReactNode,
    bgColor: string;
    subject: string;
    description: string
}

const HomeCard = (props: HomeCardProps) => {
  return (
    <div className={`${props.bgColor} px-4 py-6 flex flex-col justify-between w-full xl:max-w-[270px] min-h-[260px] rounded-[14px] cursor-pointer`}
      onClick={() => {}}
      >
        <div className='flex justify-center items-center glassmorphism size-12 rounded-[10px]'>
          {props.img}
        </div>
        <div className='flex flex-col gap-2'>
          <h1 className='text-xl font-bold'>
            {props.subject}
          </h1>
          <p className='text-lg font-normal'>{props.description}</p>
        </div>
      </div>
  )
}

export default HomeCard