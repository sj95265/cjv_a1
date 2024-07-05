import React, { useState, useEffect } from 'react';
import Listing from '../components/Listing';

const TVShowsListingPage = () => {
  const [tvShows, setTVShows] = useState([]);

  useEffect(() => {
    fetch('https://json-server-vercel-6dx0dcw1z-leos-projects-d449feca.vercel.app/tvShows')
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
