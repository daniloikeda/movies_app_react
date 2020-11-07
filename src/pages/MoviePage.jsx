import React, { useState } from 'react';
import "./MoviePage.css"
import { getGenres } from '../services/fakeGenreService';
import { getMovies } from '../services/fakeMovieService';
import Pagination from '../components/Pagination';
import { Paginate } from "../utils/paginate";
import GenreList from './GenreList';
import MovieList from './MovieList';
import isEmpty from '../utils/common';
import ListGroup from '../components/ListGroup';

function MoviePage(props) {
    const [genres] = useState(getGenres());
    const [movies, setMovies] = useState(getMovies());
    const [currentPage, setCurrentPage] = useState(1);
    const [pageSize] = useState(5);

    // const movies = Paginate(allMovies, currentPage, pageSize)
    var paginatedMovies = Paginate(movies, currentPage, pageSize);

    // function getMovieByGenre(idGenre = null){
    //     var movies;
    //     if (idGenre == null) {
    //         movies = getMovies();
    //     } else {
    //         movies = getMoviesByGenre(idGenre);
    //     }

    //     setMovies({movies});
    // }

    const onGenreChange = (genre) => {
        if (isEmpty(genre)) {

        } else {

        }
    }

    const onMovieDelete = (idMovie) => {
        setMovies(movies.filter(movie => movie._id !== idMovie));
    }

    const onMovieLiked = (movie) => {
        const newMovies = movies.map((mov) => {
            if (mov._id === movie._id) mov.liked = !mov.liked;
            return mov;
        })
        setMovies(newMovies);
    };

    const onPageChange = (page) => {
        setCurrentPage(page);
    };
    
    return(
        <div className="container">
            <div className="m-5">
                <ListGroup items={genres} keyProperty="_id" valueProperty="name" showAll="true" handleGenreChange={onGenreChange}></ListGroup>
            </div>
            <div className="m-5">
                <div>
                    <label>Showing {movies.length} movies in the database</label>
                </div>
                <div>
                    <MovieList movies={paginatedMovies} handleDeleteMovie={onMovieDelete} handleLikeMovie={onMovieLiked}></MovieList>
                </div>
                <div>
                    <Pagination currentPage={currentPage} pageSize={pageSize} totalItems={movies.length} handlePageChange={onPageChange}></Pagination>
                </div>
            </div>
        </div>
    );
}

export default MoviePage;