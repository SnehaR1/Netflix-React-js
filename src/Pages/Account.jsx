import React from 'react'
import { UserAuth } from '../Context/AuthContext'
import FavShows from '../Components/FavShows';

function Manage() {
    const user = UserAuth();
    return (
        <div className='w-full text-white'>
            <img className='sm:block absolute w-full h-[400px] object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/d3c4e455-f0bf-4003-b7cd-511dda6da82a/IN-en-20240108-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="/" />
            <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'></div>
            <div className='absolute  top-[20%] p-4 md:p-8'>
                <h1 className='text-3xl md:text-5xl font-bold'>My Favourites</h1>
            </div>

            <div className="relative top-[400px] p-4 md:p-8">

                <FavShows />
            </div>


        </div>


    )
}

export default
    Manage 