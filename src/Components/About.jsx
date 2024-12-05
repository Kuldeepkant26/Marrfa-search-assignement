import React from 'react'

function About() {
    return (
        <div className='w-full flex items-center flex-col gap-4'>
            <a className='text-blue-500 m-auto border-blue-500 border-[1px] p-2 rounded-md' href="https://main--ephemeral-cannoli-a899f8.netlify.app/" target='_blank'><i className="ri-user-fill"></i>Portfolio</a>
          
            <a className='text-blue-500 m-auto border-blue-500 border-[1px] p-2 rounded-md' href="https://github.com/Kuldeepkant26/Marrfa-search-assignement" target='_blank'><i className="ri-github-fill text-2xl"></i>Code</a>
        </div>
    )
}

export default About
