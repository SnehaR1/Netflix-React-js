import React, { useState, useEffect } from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import { UserAuth } from '../Context/AuthContext';
import { db } from '../firebase';
import { updateDoc, doc, onSnapshot } from 'firebase/firestore';
import { AiOutlineClose } from 'react-icons/ai';
function FavShows() {
    const { user } = UserAuth()
    const [movies, setMovies] = useState([])
    const slideLeft = () => {
        console.log('Slide Left clicked');
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        console.log('Slide Right clicked');
        var slider = document.getElementById('slider');
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    useEffect(() => {
        onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
            setMovies(doc.data()?.favShows);
        })

    }, [user?.email])
    const movieRef = doc(db, 'users', `${user?.email}`)
    const deleteShow = async (passedID) => {
        try {
            const result = movies.filter((item) => item.id !== passedID)
            await updateDoc(movieRef, {
                favShows: result
            })
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <> <h2 className=' text-white font-bold md:text-xl p-4'>My Favourites</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft onClick={slideLeft} size={40} className='bg-white rounded-full left-0 absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block' />
                <div id={'slider'} className='w-full  h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative'>
                    {movies && movies.length > 0 ? (
                        movies.map((item, id) => (
                            <div key={id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item?.title} />
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                    <p className='white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>{item?.title}</p>
                                    <p onClick={() => deleteShow(item.id)} className='absolute text-gray-300 top-4 right-4'><AiOutlineClose /></p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className='flex justify-center items-center mt-5'>
                            <h2 className='text-white font-bold text-3xl md:text-5xl'>No Favourites</h2>
                        </div>
                    )}

                </div>
                <MdChevronRight onClick={slideRight} size={40} className='bg-white rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 hidden group-hover:block right-0' />
            </div></>
    )
}

export default FavShows