import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const MovieDetailsPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        fetch(`http://localhost:5000/movies/${id}`)
            .then(response => response.json())
            .then(data => setMovie(data));
    }, [id]);

    if (!movie) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <h2>{movie.title}</h2>
            <img src={movie.poster} alt={movie.title} />
            <p>{movie.synopsis}</p>
            <p>Rent: ${movie.rentPrice}</p>
            <p>Buy: ${movie.buyPrice}</p>
        </div>
    );
};

export default MovieDetailsPage;
