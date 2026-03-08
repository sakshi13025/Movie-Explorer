import React from 'react'
import { getPopularMovies } from '../services/apiService'

function Movies() {

  getPopularMovies()
  return (
    <div>
      <h1>Movies</h1>
    </div>
  )
}

export default Movies;
