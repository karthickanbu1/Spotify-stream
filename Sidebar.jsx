import React from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Sidebar = () => {
  const nav = useNavigate();

  return (
    <div className='w-[25%] h-full p-2 flex-col gap-2 text-white hidden lg:flex'>
      
      {/* Top Navigation Section */}
      <div className='bg-[#7f1d1d] h-[15%] rounded flex flex-col justify-around'>
        <div onClick={() => nav('/')} className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="Home" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="Search" />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      {/* Library Section */}
      <div className='bg-[#991b1b] h-[85%] rounded'>
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="Library" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className='w-5' src={assets.arrow_icon} alt="Arrow" />
            <img className='w-5' src={assets.plus_icon} alt="Add" />
          </div>
        </div>

        {/* Playlist Prompt */}
        <div className='p-4 bg-[#b91c1c] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4'>
          <h1>Create your first Playlist</h1>
          <p className='font-light'>It's easy, we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Create playlist
          </button>
        </div>

        {/* Podcast Prompt */}
        <div className='p-4 bg-[#b91c1c] m-2 rounded font-semibold flex flex-col items-start justify-start gap-1 pl-4 mt-4'>
          <h1>Find some Podcasts to Follow</h1>
          <p className='font-light'>We'll keep you updated on new episodes</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
