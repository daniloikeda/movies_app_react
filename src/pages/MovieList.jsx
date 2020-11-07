import React from 'react';
import PropTypes from 'prop-types';
import Like from '../components/Like';

function MovieList(props) {
    return(
        <table className="table">
            <thead className="thead-dark">
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Genre</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Rate</th>
                    <th></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
               {props.movies.map((movie) => (
                   <tr key={movie._id}>                       
                        <th>{movie.title}</th>
                        <th>{movie.genre.name}</th>
                        <th>{movie.numberInStock}</th>
                        <th>{movie.dailyRentalRate}</th>
                        <th><Like liked={movie.liked} handleLikeMovie={() => props.handleLikeMovie(movie)} /></th>
                        <th><button className="btn btn-danger" onClick={() => props.handleDeleteMovie(movie._id)}>Delete</button></th>
                   </tr>
                ))} 
            </tbody>
        </table>            
    );
}

MovieList.propTypes = {
    movies: PropTypes.array
}

export default MovieList;