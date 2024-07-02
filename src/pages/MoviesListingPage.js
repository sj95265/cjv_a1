import React, { useEffect, useState } from 'react';

const MoviesListingPage = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(response => response.json())
            .then(data => setMovies(data));
    }, []);

    return (
        <div>
            <h2>Movies & TV Shows</h2>
            <div className="listing-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="listing-card">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default MoviesListingPage;
