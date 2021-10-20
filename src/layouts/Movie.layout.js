import React , {useContext,useEffect} from "react";
import axios from 'axios';
import {useParams} from 'react-router-dom';
// components
import MovieNavbar from "../Components/Navbar/MovieNavbar.Component";

//context
import {MovieContext} from '../Context/Movie.context';

const MovieLayout =(props) => {
    const {id} = useParams();
    const {movie ,setMovie} = useContext(MovieContext);

    useEffect(() => {
        const reuquestMovie = async () =>{
            const getMovieData = await axios.get('/movie/${id}');
            setMovie(getMovieData.data);
            
        }
         reuquestMovie();
     }, []);

    return(
        <div>
            <MovieNavbar/>
            
            {props.children}
            <div>Footer</div>

        </div>
    );
};

export default MovieLayout ;