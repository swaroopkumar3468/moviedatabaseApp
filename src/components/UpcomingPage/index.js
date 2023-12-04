// src/pages/UpcomingPage.js
import {useEffect, useState} from 'react'
import MovieGrid from '../MovieGrid'
import {fetchUpcomingMovies} from '../UtilsApi'

const UpcomingPage = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    fetchUpcomingMovies()
      .then(response => response.json())
      .then(data => setMovies(data.results))
      .catch(error => console.error('Error fetching upcoming movies:', error))
  }, [])

  return (
    <div>
      <h2>Upcoming Movies Page</h2>
      <MovieGrid movies={movies} />
    </div>
  )
}

export default UpcomingPage
