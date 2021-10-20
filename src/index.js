import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import normalizedMovies from './normalized-movies';
import App from './App';

ReactDOM.render(
<div>
<h1 className="text-center mt-2">Movies list</h1>,
  <ul className="search-results row list-unstyled">
    {
      normalizedMovies.slice(0, 30).map(movie => <App key={movie.imdbId} title={movie.title} year={movie.year} imdbRating={movie.imdbRating} smallPoster={movie.smallPoster}></App>)
    }
  </ul>
</div>,
  document.getElementById('root')
);
