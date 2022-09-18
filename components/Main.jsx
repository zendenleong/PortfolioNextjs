import React from 'react'
import { AiOutlineMail } from 'react-icons/ai';
//import { BsFillPersonLinesFill } from 'react-icons/bs';
import {FaTelegram, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import Link from 'next/link';

export const Main = () => {
  return (
    <div id="home" className='w-full h-screen text-center'>
        <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
            <div>
                
                <h1 className='py-4 text-gray-700'>Hi! I'm <span className='text-[#348dec]'>Zenden</span> </h1>
                <p className='py-4 uppercase text-sm tracking-widest text-gray-600'>Welcome to my portfolio site!</p>
                <p className='text-sm tracking-widest text-gray-600'>
                    I am a Y2 Business Analytics Student from NUS School of Computing.  
                </p>
                <p className='text-sm tracking-widest text-gray-600'>
                      My areas of passion include Software Engineering, Machine Learning, Data & Financial Analytics
                </p>
                <p className='text-sm tracking-widest text-gray-600'>
                      Currently, I am focused on building responsive front-end web applications while integrating it with back-end technologies.
                </p>
                <p className='py-2 text-sm tracking-widest text-gray-600'>
                      Contact me through these platforms:
                </p>

                <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
                    <Link href='https://www.linkedin.com/in/zenden-leong-4b4712229/'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaLinkedinIn />
                        </div>
                    </Link>
                    <Link href='https://github.com/zendenleong'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaGithub />
                        </div>
                    </Link>
                    <Link href='mailto:zendenleong@gmail.com'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <AiOutlineMail />
                        </div>
                    </Link>
                    <Link href='https://t.me/zenphyr'>
                        <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                            <FaTelegram />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Main;
