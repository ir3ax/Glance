import { IoHomeSharp } from "react-icons/io5";
import { FaCalendarPlus, FaCalendarMinus } from "react-icons/fa6";
import { BiSolidVideoRecording } from "react-icons/bi";
import { FaPlus } from "react-icons/fa";

export const sideBarLinks = [
    {
        imgUrl: <IoHomeSharp className='w-6 h-6 text-white' />,
        route: '/',
        label: 'Home'
    },
    {
        imgUrl: <FaCalendarPlus className='w-6 h-6 text-white' />,
        route: '/upcoming',
        label: 'Upcoming'
    },
    {
        imgUrl: <FaCalendarMinus className='w-6 h-6 text-white' />,
        route: '/previous',
        label: 'Previous'
    },
    {
        imgUrl: <BiSolidVideoRecording className='w-6 h-6 text-white' />,
        route: '/recordings',
        label: 'Recordings'
    },
    {
        imgUrl: <FaPlus className='w-6 h-6 text-white' />,
        route: '/personal-room',
        label: 'Personal Room'
    }
]
