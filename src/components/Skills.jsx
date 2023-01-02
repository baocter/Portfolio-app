import React from 'react'
import Css from '../assets/css.png'
import Github from '../assets/GitHub.png'
import html from '../assets/html5.png'
import JavaScript from '../assets/JavaScript.png'
import Reactjs from '../assets/Reactjs.png'
import Tailwind from '../assets/Tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/*container  */}
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-600 '>Experience</p>
                <p className='py-4'>\\ These are the technologies I've worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={Css} alt="Css icon" />
                    <p className='my-4 '>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JavaScript icon" />
                    <p className='my-4 '>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={Reactjs} alt="Reactjs icon" />
                    <p className='my-4 '>Reactjs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p className='my-4 '>Github</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4 '>Tailwindcss</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration 500'>
                    <img className='w-20 mx-auto' src={html} alt="html icon" />
                    <p className='my-4 '>HTML</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills