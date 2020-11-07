import React from 'react';

export default function GenreList (props) {
    return (
        <div className="list-group">
            <a href="/#" className="list-group-item list-group-item-action" onClick={() => props.handleGenreChange(undefined)}>
                All genres
            </a>
            
            {props.genres.map((genre) => (
                <a href="/#" key={genre._id} onClick={() => props.handleGenreChange(genre)} className="list-group-item list-group-item-action">{genre.name}</a>
            ))}
        </div>
    )
}