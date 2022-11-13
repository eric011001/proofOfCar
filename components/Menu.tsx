import React, { Component } from 'react';
import Link from 'next/link';

const Menu = () => {
    return(
        <div className="bg-sky-500 w-full p-5">
        <div className='md:flex justify-between items-center'>
          <div className='flex items-center'>
            <img src="./logo.png" className='w-10' alt="" />
            <h3 className="text-lg text-white font-extrabold ml-2">Proof Of Car</h3>
          </div>
          <div className='mr-5 flex'>
            <Link href={'/'}>
              <div className='px-5 py-2 bg-white ml-2 rounded-full text-black hover:scale-110 ease-in duration-200'>Home</div>
            </Link>
            <Link href={'/about'}>
              <div className='px-5 py-2 bg-white ml-2 rounded-full text-black hover:scale-110 ease-in duration-200'>About</div>
            </Link>
            <Link href={'/team'}>
              <div className='px-5 py-2 bg-white ml-2 rounded-full text-black hover:scale-110 ease-in duration-200'>Team</div>
            </Link>
            <Link href={'/project'}>
              <div className='px-5 py-2 bg-white ml-2 rounded-full text-black hover:scale-110 ease-in duration-200'>Project</div>
            </Link>
          </div>
        </div>
      </div>
    )
}

export default Menu;