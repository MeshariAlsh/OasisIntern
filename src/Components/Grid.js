import React from 'react'

export default function Grid () {
  return (
    <div>
       

            <div className=" mb-8 mt-11 ml-10 mr-10 grid lg:grid-cols-3 gap-10"> 

            {/* Grid item */}

              <a href="https://apply.workable.com/salla/j/4066711BF0/" className=" bg-white rounded overflow-hidden shadow-md relative  transition duration-300 hover:scale-105 cursor-pointer">
                <img src="/images/salla.jpeg" alt="Salla Internship" className="w-full h-32 sm:h-48 object-cover"></img>
                <div className='m-4'>
                    <span className='font-bold'> Salla </span>
                    <span className='block'> Internship </span>
                </div>
                <div className="bg-lime-500 text-secondary-200 text-xs uppercase font-bold rounded p-2 absolute top-0 ml-2 mt-2">
                    <span>Open</span>
                </div>
              </a>

            {/* Grid item*/}

              <a href="https://career.jahez.net" className=" bg-white rounded overflow-hidden shadow-md relative  transition duration-300 hover:scale-105 cursor-pointer">
                <img src="/images/Jahez.png" alt="Salla Internship" className="w-full h-32 sm:h-48 object-cover"></img>
                <div className='m-4'>
                    <span className='font-bold'> Jahez </span>
                    <span className='block'> Internship </span>
                </div>
                <div className="bg-red-600 text-secondary-200 text-xs uppercase font-bold rounded p-2 absolute top-0 ml-2 mt-2">
                    <span>Closed</span>
                </div>
              </a>

            {/* Grid item  */}

              <a href="https://tamara.co/jobs" className=" bg-white rounded overflow-hidden shadow-md relative  transition duration-300 hover:scale-105 cursor-pointer">
                <img src="/images/tamara.png" alt="Salla Internship" className="w-full h-32 sm:h-48 object-cover"></img>
                <div className='m-4'>
                    <span className='font-bold'> Tamara </span>
                    <span className='block'> Internship </span>
                </div>
                <div className="bg-red-600 text-secondary-200 text-xs uppercase font-bold rounded p-2 absolute top-0 ml-2 mt-2">
                    <span>Closed</span>
                </div>
              </a>

              {/* Grid item  */}

              <a href="https://apply.workable.com/hungerstation/j/72A4F52BD6/" className=" bg-white rounded overflow-hidden shadow-md relative  transition duration-300 hover:scale-105 cursor-pointer">
                <img src="/images/HungerStation.png" alt="Salla Internship" className="w-full h-32 sm:h-48 object-cover"></img>
                <div className='m-4'>
                    <span className='font-bold'> HungerStation </span>
                    <span className='block'> COOP </span>
                </div>
                <div className="bg-lime-500 text-secondary-200 text-xs uppercase font-bold rounded p-2 absolute top-0 ml-2 mt-2">
                    <span>Open</span>
                </div>
              </a>

              {/* Grid item  */}

              <a href="https://jobs.workable.com/view/p2hS7tq68SnwnZZZjsqZ5U/internship-software-development-in-riyadh-at-arabic-computer-systems" className=" bg-white rounded overflow-hidden shadow-md relative  transition duration-300 hover:scale-105 cursor-pointer">
                <img src="/images/ACS.jpeg" alt="Salla Internship" className="w-full h-32 sm:h-48 object-cover"></img>
                <div className='m-4'>
                    <span className='font-bold'> Arabic Computer Systems </span>
                    <span className='block'> Internship </span>
                </div>
                <div className="bg-lime-500 text-secondary-200 text-xs uppercase font-bold rounded p-2 absolute top-0 ml-2 mt-2">
                    <span>Open</span>
                </div>
              </a>

            </div>
       
             
        
    
        
    </div>
  )
}
