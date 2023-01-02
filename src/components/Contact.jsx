import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
        <form action="https://getform.io/f/f00086aa-91ae-4863-a12c-a1c0a04d5ec6" method='post' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8 '>
                <p className='text-4xl font-bold inline border-b-4 border-cyan-600 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4  '>\\ Submit the form below or shoot me an email - Baoleeegato@gmail.com</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 bg-[#ccd6f6]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ccd6f6] p-2' name="messenge" placeholder='Messenge'  rows="10"></textarea>
            <button className='text-white border-2 hover:bg-cyan-600 hover:boder-cyan-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact