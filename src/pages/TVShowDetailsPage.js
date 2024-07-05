import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Details from '../components/Details';

const TVShowDetailsPage = () => {
  const { id } = useParams();
  const [tvShow, setTVShow] = useState(null);

  useEffect(() => {
    fetch(`https://json-server-vercel-mu-sable.vercel.app/tvShows/?id=${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (Array.isArray(data) && data.length > 0) {
          setTVShow(data[0]);
        } else {
          throw new Error('TVShow not found');
        }
      })
      .catch(error => console.error('Error fetching TV show:', error));
  }, [id]);

  if (!tvShow) {
    return <h1>No Data!</h1>;
  }

  return (
    <Details item={tvShow} />
  );
};

export default TVShowDetailsPage;
