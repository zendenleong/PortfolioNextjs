import React from 'react';
import NUSinteract from '../public/assets/projects/NUSinteract.png'
import ProjectItem from './ProjectItem';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
        <div className='max-w-[1240px] mx-auto px-2 py-16'>
            <p className='uppercase text-xl tracking-widest text-[#348dec]'>Projects</p>
            <h2 className='py-4'>What I've Built / Participated in</h2>
            <div className='grid md:grid-cols-2 gap-8'>

                <ProjectItem 
                    title="NUSinteract"
                    title2="(Mobile Application)" 
                    techstack="ReactNative Supabase JS"
                    backgroundImg={NUSinteract} 
                    projectURL='/NUSinteract' 
                />

            </div>
        </div>
    </div>
  );
};

export default Projects;