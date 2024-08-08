import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  
  useEffect(() => {
    const fetchShow = async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/tvshows/${id}`);
        const data = await response.json();
        setTVShow(data);
      } catch (error) {
        console.error('Error fetching TVShows:', error);
      }
    };

    fetchShow();
  }, [id]);

  if (!tvShow) {
    return <h1>No Data!</h1>;
  }

  return (
    <Details item={tvShow} />
  );
};

export default TVShowDetailsPage;
