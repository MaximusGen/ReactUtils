import {motion , AnimatePresence} from 'framer-motion'
import './filter.css'
import {useEffect, useState} from 'react'
import Movies from './Movies';
import Filtre from './Filtre';


const Filter = () => {

const [popular, setPopular] = useState([])
const [filtered, setFiltered] = useState([])
const [activeGenre, setActiveGenre] = useState(0)

    const fetchPopular = async () => {
        const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=d5c35e51c81488b19da7c1f572507a3d&language=en-US&page=1`);
        const movies = await data.json();
        setPopular(movies.results)
        setFiltered(movies.results)
    }

    useEffect(() => {
        fetchPopular();
    }, [])


    return (
        <div className="container-filter">
            <Filtre popular={popular} setFiltered={setFiltered} activeGenre={activeGenre} setActiveGenre={setActiveGenre} />
            <motion.div 
            className="popular-movies">
                <AnimatePresence >
                {filtered.map((movie => {
                   return <Movies movie={movie} key={movie.id} />
                }))}
                </AnimatePresence>
            </motion.div>
        </div>

    )
}

export default Filter