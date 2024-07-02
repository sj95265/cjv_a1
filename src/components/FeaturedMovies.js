import React, { useEffect, useState } from 'react';

const FeaturedMovies = () => {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/movies')
            .then(response => response.json())
            .then(data => setMovies(data.slice(0, 6)));
    }, []);

    return (
        <section>
            <h2>Featured Movies</h2>
            <div className="movies-grid">
                {movies.map(movie => (
                    <div key={movie.id} className="movie-card">
                        <img src={movie.poster} alt={movie.title} />
                        <h3>{movie.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedMovies;
