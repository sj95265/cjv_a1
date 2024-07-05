import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const MovieDetailsPage = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://json-server-vercel-mu-sable.vercel.app/movies/?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setMovie(data[0]);
        } else {
          throw new Error('Movie not found');
        }
      })
      .catch(error => console.error('Error fetching movie:', error));
  }, [id]);

  if (!movie) {
    return <h1>No Data!</h1>;
  }

  return (
    <Details item={movie} />
  );
};

export default MovieDetailsPage;
