import React from 'react';
import './movies.css'; // Assuming you have your CSS styles here

// Import your GIFs
import GIF1 from '../../assets/beautyandbeast.gif';
import GIF2 from '../../assets/mamma.gif';
import GIF3 from '../../assets/godfather.gif';

const Movies = () => {
  const movies = [
    {
      name: 'Beauty and the Beast',
      gif: GIF1,
    },
    {
      name: 'Mamma Mia!',
      gif: GIF2,
    },
    {
      name: 'The Godfather',
      gif: GIF3,
    },
  ];

  return (
    <section id='movies'>
      <div className="movies__title">
        <h5>My Top Three Favorite Movies</h5>
      </div>
      <div className="movies__container">
        {movies.map((movie, index) => (
          <div className="movie" key={index}>
            <div className="movie__head">
              <h3>{movie.name}</h3>
            </div>
            <div className="movie__gif">
              <img src={movie.gif} alt={movie.name} />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Movies;
