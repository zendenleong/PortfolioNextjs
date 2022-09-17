import React from 'react';
import Image from "next/image";
import Link from 'next/link';

export const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'> 
        <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
            <div className='col-span-2'>
                <p className='uppercase text-xl tracking-widest text-[#348dec]'>About</p>
                <h2 className='py-4'>Who I Am</h2>
                <p className='py-2 text-gray-600'>
                I am a highly motivated individual who always seeks the best performance in his tasks. 
                I am also one who puts in his best efforts to learn more about his passions and strives to meet his desired goals. 
                I have a deep passion in both the tech and finance industry and the field of my study is a beautiful integration of both worlds. 
                During my free time, I like to upskill myself by learning new tech stacks or build my own projects.
                My recent project was a mobile application that allows NUS students to plan activities spontaneously on campus and expand their social circle.
                I have built it with my partner, Han Yang, during our Y1 summer NUS Orbital module (CP2106). 
                
                </p>
                <p className='py-2 text-gray-600'>
                    I am always keen for case competitions and internships that can help me to grow! Topics that intrigued me are: 
                    Artificial Intelligence & Machine Learning,
                    Financial Technology (Blockchain),
                    Capital Market Trading and Investment,
                    Software Engineering
                </p>
                <Link href="/#projects">
                    <p className='py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects!</p>
                </Link>
            </div>
            <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
                <Image className='rounded-xl'
                    src="/../public/assets/personal/personalphoto.png"
                    alt="/"
                    width="275"
                    height="460"
                />
            </div>
        </div>
    </div>
  )
}

export default About