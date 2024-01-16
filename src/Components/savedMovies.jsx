import { useState, useEffect } from 'react';
import axios from 'axios';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

function SavedMovies({ fetchURL }) {
    const [movies, setMovies] = useState([]);
    const [like, setLike] = useState(false); // Example: You need to handle the like state
    useEffect(() => {
        axios.get(fetchURL).then((response) => {
            setMovies(response.data.results)
        })
    }, ([fetchURL]))

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

    return (
        <div>
            {movies.map((movie) => (
                <div key={movie.id} className='w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2'>
                    <img
                        className='w-full h-auto block'
                        src={`https://image.tmdb.org/t/p/w500/${movie?.backdrop_path}`}
                        alt={movie?.title}
                    />
                    <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                        <p className='white-space-normal text-xs ,d:text-sm font-bold flex justify-center items-center h-full text-center'>
                            {movie?.title}
                        </p>
                        <p>
                            {like ? (
                                <FaHeart className='absolute top-4 left-4 text-grat-300' />
                            ) : (
                                <FaRegHeart className='absolute top-4 left-4 text-grat-300' />
                            )}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default SavedMovies;
