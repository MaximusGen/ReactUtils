
import {motion} from 'framer-motion'

const Movies = ({movie}) => {
    return (
        <motion.div 
        layout
        initial={{opacity:0, scale:0}}
        animate={{opacity: 1, scale:1}}
        exit={{opacity:0, scale:0}}
        >
            <h2>{movie.title}</h2>
            <img src={'https://image.tmdb.org/t/p/w500' + movie.backdrop_path} alt={movie.title} />
        </motion.div>
    )
}

export default Movies