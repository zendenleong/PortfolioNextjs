import Image from 'next/image';
import React from 'react';
import NUSinteractpng from '../public/assets/projects/NUSinteract.png'
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const NUSinteract = () => {
    return (
        <div className='w-full'>
          <div className='w-screen h-[50vh] relative'>
            <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
            <Image
              className='absolute z-1'
              layout='fill'
              objectFit='cover'
              src={NUSinteractpng}
              alt='/'
            />
            <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
              <h2 className='py-2'>NUSinteract</h2>
              <h3>ReactNative JS / Supabase</h3>
            </div>
          </div>
    
          <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
            <div className='col-span-4'>
              <p>Project</p>
              <h2>Overview</h2>
              <p>
                This app was built using ReactNative JS and is hosted on Supabase. 
                NUSinteract aims to open up more opportunities for interaction among NUS students on campus, so that NUS students can experience a vibrant university life. 
                NUS students are able to host different activities through our app and find peers to join their activity in real time. 
                This will essentially reduce the time needed to plan simple activities such as basketball, mahjong, study sessions etc. 
                NUSinteract can even allow users to join activities spontaneously on campus.

              </p>
              <p className='py-4'>

                NUSinteract app is done under NUS module CP2106 ( ORBITAL Programme ).
                Orbital is an independent software development project for teams of 2 to work on their own desired project during Year 1 Summer.
                Orbital provides a platform for students to gain hands-on industrial experience for computing technologies related to students’ own interests. 
                Done in pairs of two, Orbital students propose, design, execute, implement and market their project to peers and faculty. 
                Peer assessment and critique of others’ projects are key components of the modules’ deliverables.

              </p>
              <a
                href='https://drive.google.com/file/d/1BzgZbb4QtKvY5bii6QGoTvNrXI-n5C8x/view'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 mr-8'>Project Intro</button>
              </a>
              <a
                href='https://drive.google.com/file/d/1LhTtlmORXkzpOfC9lyp2jbXZiFfIExne/view'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4'>App Demo</button>
              </a>
              <a
                href='https://docs.google.com/document/d/1w7cN5nmkWl8dQa7U-o77xgniQRnnCLp_K4xQDMMeY8s/edit?usp=sharing'
                target='_blank'
                rel='noreferrer'
              >
                <button className='px-8 py-2 mt-4 ml-8'>App README</button>
              </a>

            </div>
            <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
              <div className='p-2'>
                <p className='text-center font-bold pb-2'>Tech Stack</p>
                <div className='grid grid-cols-3 md:grid-cols-1'>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> React
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> ReactNative
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Javascript
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Supabase
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Google API
                  </p>
                  <p className='text-gray-600 py-2 flex items-center'>
                    <RiRadioButtonFill className='pr-1' /> Expo
                  </p>
                </div>
              </div>
            </div>
            <Link href='/#projects'>
              <p className='underline cursor-pointer'>Back</p>
            </Link>
          </div>
        </div>
    );
};
export default NUSinteract