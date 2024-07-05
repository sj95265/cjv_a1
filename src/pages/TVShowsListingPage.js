import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';

const TVShowsListingPage = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3001/tvShows')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => setTVShows(data))
      .catch(error => console.error('Error fetching TV shows:', error));
  }, []);

  return (
    <Listing items={tvShows} type={'tvShows'} />
  );
};

export default TVShowsListingPage;
