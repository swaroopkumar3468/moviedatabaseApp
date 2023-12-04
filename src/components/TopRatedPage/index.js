// src/pages/TopRatedPage.js
import {useEffect, useState} from 'react'
import MovieGrid from '../MovieGrid'
import {fetchTopRatedMovies} from '../UtilsApi'

const TopRatedPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchTopRatedMovies()
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching top-rated movies:', error))
  }, [])

  return (
    <div>
      <h2>Top Rated Movies Page</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default TopRatedPage
