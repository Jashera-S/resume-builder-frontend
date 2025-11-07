import React from 'react'

const Title = ({ title, description }) => {
  return (
    <div className='text-center mt-4 sm:mt-6 px-4 text-slate-700'>
        <h2 className='text-2xl sm:text-3xl md:text-4xl font-medium'>{title}</h2>
        <p className='mx-auto max-w-2xl mt-3 sm:mt-4 text-sm sm:text-base text-slate-500 px-4'>{description}</p>
    </div>
  )
}

export default Title
