import {useEffect, useState} from 'react'

import './index.css'

import MovieGrid from '../MovieGrid'

import {fetchPopularMovies} from '../UtilsApi'

const PopularPage = () => {
  const [movies, setMovies] = useState([])
  useEffect(() => {
    fetchPopularMovies()
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching popular movies:', error))
  }, [])

  return (
    <div>
      <h2>Popular</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default PopularPage
