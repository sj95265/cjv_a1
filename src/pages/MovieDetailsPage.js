import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/movies/${id}`);
        const data = await response.json();
        setMovie(data);
      } catch (error) {
        console.error('Error fetching movie:', error);
      }
    };

    fetchMovie();
  }, [id]);

  if (!movie) {
    return <h1>No Data!</h1>;
  }

  return (
    <Details item={movie} />
  );
};

export default MovieDetailsPage;
