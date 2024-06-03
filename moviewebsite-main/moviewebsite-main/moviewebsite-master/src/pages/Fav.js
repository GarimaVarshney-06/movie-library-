import React from "react";
import { Link, Navigate } from "react-router-dom";

const FavoritesPage = () => {
  // Retrieve the favorite movies array from local storage
  const favoriteMoviesString = localStorage.getItem("favoriteMovies");

  // Parse the array from a string into a JavaScript object
  const favoriteMovies = favoriteMoviesString ? JSON.parse(favoriteMoviesString) : [];

  return (
    <section className="movie-section">
      {favoriteMovies.map((movieString, index) => {
        const movie = JSON.parse(movieString);
        return (
          <div key={index} className="movie-card">
            <figure>
              <img src={movie.Poster} alt="" />
            </figure>
            <div className="card-content">
              <p className="title">{movie.Title}</p>
              <p className="card-text">{movie.Released}</p>
              <p className="card-text">{movie.Genre}</p>
              <p className="card-text">{movie.imdbRating} / 10</p>
              <p className="card-text">{movie.Country}</p>
              <Link to="/" className="back-btn">
                Go Back
              </Link>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default FavoritesPage;
