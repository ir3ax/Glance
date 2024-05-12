'use client'
import Image from 'next/image'
import React from 'react'
import { FaPlus } from 'react-icons/fa6'
import { GoPeople } from "react-icons/go";
import { FaCalendarAlt } from "react-icons/fa";
import { FaRecordVinyl } from "react-icons/fa";
import HomeCard from '../homecard/homecard'

const MeetingTypeList = () => {
  return (
    <section className='grid gap-5 grid-cols-1 md:grid-cols-2 xl:grid-cols-4'>
      <HomeCard img={<FaPlus className='w-6 h-6 text-white' />} bgColor='bg-[#E06729]' subject='New Meeting' description='Start an Instant Meeting' />
      <HomeCard img={<GoPeople className='w-6 h-6 text-white' />} bgColor='bg-[#0E79F8]' subject='Join Meeting' description='via invitation link'/>
      <HomeCard img={<FaCalendarAlt className='w-6 h-6 text-white' />} bgColor='bg-[#620ABB]' subject='Schedule Meeting' description='Plan your meeting'/>
      <HomeCard img={<FaRecordVinyl className='w-6 h-6 text-white' />} bgColor='bg-[#BE820A]' subject='View Recordings' description='Meeting Recordings'/>
    </section>
  )
}

export default MeetingTypeList