import React from 'react'
import { UserAuth } from '../Context/AuthContext'

function Manage() {
    const user = UserAuth();
    return (
        <div className='flex flex-col items-center justify-center min-h-screen'>
            <h1 className='text-white font-bold text-3xl mt-48'>Manage Profiles</h1>
            <div className='flex flex-row justify-center items-center flex-grow'>

                <div className='flex flex-col mr-10 items-center'>
                    <img className='w-40 ' src="https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-dyrp6bw6adbulg5b.jpg" alt="" />
                    <p className='text-white mt-10'>Adults</p>
                </div>

                <div className='flex flex-col ml-10 items-center'>
                    <img className=' w-40 ' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsNbe5Y67B76kAz5dOtKyTNLm-2y9DtJnEqVIwrfMQZ3tRz0Kg" alt="" />
                    <p className='text-white mt-10'>Children</p>
                </div>
            </div>
        </div>


    )
}

export default
    Manage 