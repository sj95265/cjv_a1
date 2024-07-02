import React, { useEffect, useState } from 'react';

const FeaturedTVShows = () => {
    const [tvShows, setTvShows] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/tvShows')
            .then(response => response.json())
            .then(data => setTvShows(data.slice(0, 6)));
    }, []);

    return (
        <section>
            <h2>Featured TV Shows</h2>
            <div className="tvshows-grid">
                {tvShows.map(show => (
                    <div key={show.id} className="tvshow-card">
                        <img src={show.poster} alt={show.title} />
                        <h3>{show.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default FeaturedTVShows;
